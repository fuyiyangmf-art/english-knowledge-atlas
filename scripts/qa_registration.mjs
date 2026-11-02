#!/usr/bin/env node

import {createDecipheriv, randomBytes} from "node:crypto";
import {readFile} from "node:fs/promises";
import {gunzipSync} from "node:zlib";

const configSource = await readFile(new URL("../public/cloud-config.js", import.meta.url), "utf8");
const apiKey = configSource.match(/apiKey:\s*["']([^"']+)["']/)?.[1];
const projectId = configSource.match(/projectId:\s*["']([^"']+)["']/)?.[1];
if (!apiKey || !projectId) throw new Error("Firebase web configuration is incomplete");

const request = async (url, options = {}) => {
  const response = await fetch(url, options);
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(body?.error?.message || `HTTP_${response.status}`);
    error.status = response.status;
    throw error;
  }
  return body;
};

const authUrl = endpoint => `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${encodeURIComponent(apiKey)}`;
const docUrl = path => `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents/${path}`;
const email = `registration-qa-${Date.now()}-${randomBytes(6).toString("hex")}@example.invalid`;
const password = `${randomBytes(18).toString("base64url")}aA7`;
const now = new Date().toISOString();
let token = "";
let uid = "";
let result = null;
let temporaryAccountDeleted = false;

try {
  const auth = await request(authUrl("signUp"), {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password, returnSecureToken: true}),
  });
  token = auth.idToken;
  uid = auth.localId;
  const headers = {Authorization: `Bearer ${token}`, "Content-Type": "application/json"};
  const profileFields = {
    displayName: {stringValue: "Registration QA"},
    email: {stringValue: email},
    role: {stringValue: "learner"},
    plan: {stringValue: "free"},
    status: {stringValue: "active"},
    createdAt: {timestampValue: now},
    updatedAt: {timestampValue: now},
  };
  await request(docUrl(`users/${uid}/profile/state`), {
    method: "PATCH",
    headers,
    body: JSON.stringify({fields: profileFields}),
  });

  let planEscalationBlocked = false;
  try {
    await request(docUrl(`users/${uid}/profile/state`), {
      method: "PATCH",
      headers,
      body: JSON.stringify({fields: {...profileFields, plan: {stringValue: "premium"}}}),
    });
  } catch (error) {
    planEscalationBlocked = error.status === 403;
  }
  if (!planEscalationBlocked) throw new Error("Learner plan escalation was not blocked");

  const content = await request(docUrl("config/content"), {headers});
  const encodedKey = content?.fields?.key?.stringValue;
  const key = Buffer.from(String(encodedKey || ""), "base64");
  if (key.length !== 32) throw new Error("Content key is unavailable or invalid");

  const progress = {completed: [], review: [], bookmarks: ["qa-bookmark"], language: "en"};
  await request(docUrl(`users/${uid}/progress/state`), {
    method: "PATCH",
    headers,
    body: JSON.stringify({fields: {
      schema: {integerValue: "2"},
      updatedAt: {timestampValue: new Date().toISOString()},
      data: {stringValue: JSON.stringify(progress)},
    }}),
  });
  const savedProgress = await request(docUrl(`users/${uid}/progress/state`), {headers});
  const roundTrip = JSON.parse(savedProgress?.fields?.data?.stringValue || "{}");
  if (roundTrip.bookmarks?.[0] !== "qa-bookmark") throw new Error("Progress round-trip failed");

  const bundleConfig = JSON.parse(await readFile(new URL("../public/data/auth.json", import.meta.url), "utf8"));
  const encrypted = await readFile(new URL(`../public/data/${bundleConfig.file}`, import.meta.url));
  const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(bundleConfig.iv, "base64"));
  decipher.setAAD(Buffer.from(bundleConfig.aad, "utf8"));
  decipher.setAuthTag(encrypted.subarray(-16));
  const compressed = Buffer.concat([decipher.update(encrypted.subarray(0, -16)), decipher.final()]);
  const dataset = JSON.parse(gunzipSync(compressed).toString("utf8"));
  if (!Array.isArray(dataset.records) || !dataset.records.length) throw new Error("Encrypted curriculum did not decrypt");

  result = {
    uid,
    registration: true,
    profile: true,
    planEscalationBlocked,
    contentAccess: true,
    progressRoundTrip: true,
    decryptedRecords: dataset.records.length,
  };
} finally {
  if (token && uid) {
    await fetch(docUrl(`users/${uid}/progress/state`), {method: "DELETE", headers: {Authorization: `Bearer ${token}`}}).catch(() => {});
    const deleteResponse = await fetch(authUrl("delete"), {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({idToken: token}),
    }).catch(() => null);
    temporaryAccountDeleted = Boolean(deleteResponse?.ok);
  }
}

if (result) console.log(JSON.stringify({...result, temporaryAccountDeleted}));
