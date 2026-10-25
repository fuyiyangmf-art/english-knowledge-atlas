const CATEGORY_META = {
  Grammar: {names:{en:"Grammar",tr:"Dilbilgisi",zh:"语法体系"}, descriptions:{en:"Build a complete grammar framework, from tense and syntax to advanced structures.",tr:"Zamanlardan söz dizimine ve ileri yapılara uzanan eksiksiz bir dilbilgisi çerçevesi kur.",zh:"从时态、句法到高级结构，建立完整的英语语法框架。"}, letter:"G", index:"01", accent:"#245f50", tint:"#e1eee8"},
  Vocabulary: {names:{en:"Vocabulary",tr:"Kelime bilgisi",zh:"主题词汇"}, descriptions:{en:"Expand meaning, usage, and expression through real-life themes.",tr:"Gerçek yaşam temalarıyla anlam, kullanım ve ifade alanını genişlet.",zh:"按照真实生活主题扩展词义、用法和表达范围。"}, letter:"V", index:"02", accent:"#c66644", tint:"#f4e6df"},
  Collocations: {names:{en:"Collocations",tr:"Sözcük birliktelikleri",zh:"自然搭配"}, descriptions:{en:"Learn the word combinations native speakers naturally use together.",tr:"Ana dili İngilizce olanların doğal biçimde birlikte kullandığı sözcükleri öğren.",zh:"学习母语者习惯组合在一起使用的词语。"}, letter:"C", index:"03", accent:"#a87a27", tint:"#f3ecd9"},
  Idioms: {names:{en:"Idioms",tr:"Deyimler",zh:"习语表达"}, descriptions:{en:"Understand common idioms, their context, and expressive effect.",tr:"Yaygın deyimlerin anlamını, bağlamını ve anlatım etkisini kavra.",zh:"理解常用习语的意义、语境和表达效果。"}, letter:"I", index:"04", accent:"#795477", tint:"#eee5ed"},
  "Phrasal Verbs": {names:{en:"Phrasal verbs",tr:"Öbek fiiller",zh:"短语动词"}, descriptions:{en:"Master high-frequency phrasal verbs by meaning and situation.",tr:"Sık kullanılan öbek fiilleri anlamlarına ve kullanım durumlarına göre öğren.",zh:"按意义和使用场景掌握高频短语动词。"}, letter:"P", index:"05", accent:"#4f6f9e", tint:"#e4eaf2"},
};

const TRANSLATIONS = {
  en: {
    skipLink:"Skip to main content", loginIntro:"Turn thirteen reference books into a learning path you can actually finish.", username:"Username", password:"Password", show:"Show", hide:"Hide", enter:"Enter learning space", verifying:"Verifying and decrypting…", loginError:"The username or password is incorrect, or cloud sync is temporarily unavailable.", securityCloud:"Book content is decrypted only in your browser; progress is securely synced to your account.", securityLocal:"Book content is decrypted only in your browser; progress stays on this device until cloud sync is available.",
    navHome:"Home", navPaths:"Learning paths", navLibrary:"Complete library", navReview:"Review", syncLocal:"Saved locally", syncSaving:"Syncing", syncDone:"Synced", syncWaiting:"Sync pending", search:"Search", lock:"Lock", searchAria:"Search knowledge points", closeSearch:"Close search", overallProgressTitle:"Overall progress", chooseLevel:"Choose level",
    heroContinue:"Keep building.", heroOneThing:"Master one idea at a time.", choosePath:"Choose a learning path", pathOrder:"Area → Topic → Level → Unit", studyMethod:"Study method", methodTitle:"Understand → Recall → Complete", methodRead:"Understand", methodReadDesc:"Read the complete explanation", methodRecall:"Recall", methodRecallDesc:"Hide the text and retrieve it actively", methodReinforce:"Reinforce", methodReinforceDesc:"Add it to review and test it later",
    chooseTopic:"Choose a topic", lessonsTitle:"Lessons", showMoreLessons:"Show more lessons", libraryTitle:"Complete library", libraryIntro:"Browse by source book, level, and original unit order. Learning paths reorganize the material; this view keeps every knowledge unit traceable.", coverageAudit:"Coverage audit", chooseBook:"Choose a source book", knowledgeOnly:"Exercises and answer keys are excluded; explanations are preserved.", showMoreUnits:"Show more units", reviewTitle:"Review queue", reviewIntro:"Do not reveal the answer first. State the rule, meaning, and one example of your own.", searchPlaceholder:"Search knowledge points, phrases, or examples…", searchHint:"Enter a keyword to search. Use Learning paths for a structured sequence.", noSearchResults:"No matching content. Try a shorter keyword.",
    encryptedSpace:"Encrypted learning space", structuredCurriculum:"Structured curriculum", step1:"Step 1", step2:"Step 2", completeSourceLibrary:"Complete source library", sourceBooks13:"13 source books", activeRecall:"Active recall", bookCurriculum:"Book curriculum", originalContents:"Original contents", loginQuote:"Learn in order.\nRecall actively.\nUse it naturally.", edition:"Personal curriculum · 01", language:"Language", returnHome:"Return to learning home", learningEdition:"Learning edition", primaryNavigation:"Primary navigation",
    continueLearning:"Continue learning", continueLesson:"Continue this lesson →", overallProgress:"Overall progress", completedLessons:"Lessons completed", pendingReview:"Waiting for review", streak:"Day streak", lessons:"{done}/{total} lessons", reviewQueue:"Review queue", reviewItems:"{count} knowledge points are ready for review", reviewEmpty:"Your review queue is empty", reviewReadyDesc:"Recall first, then reveal the full explanation. Correct answers are marked complete.", reviewEmptyDesc:"Select “Add to review” in any lesson to create active-recall cards here.", startReview:"Start review →", learnReview:"Explore review mode →",
    sourceBooks:"Source books", formalUnits:"Learning units", references:"Appendices and reference pages", totalRecords:"Knowledge records", units:"{count} units", unitRefs:"{units} units · {refs} reference pages", unitsPlusRefs:"{units} units + {refs} reference pages", reference:"Reference", pdfPage:"PDF page", backHome:"← Back to learning home", organized:"Organized by topic and level so the curriculum stays focused and teachable.", pathProgress:"Path progress", allLevels:"All levels", topics:"{count} topics", completeCount:"{count} completed", includesReference:"Includes reference material", knowledgeUnits:"{count} knowledge units", originalOrder:"Original book order",
    recallMode:"Recall mode", exitRecall:"Exit recall", addReview:"Add to review", inReview:"In review", markComplete:"Mark complete", completed:"Completed ✓", recallQuestion:"Without reading the explanation, can you state the core rule of “{title}” and give one example?", recallInstruction:"Recall it silently or say it aloud, then reveal the full content.", revealFull:"Reveal full explanation", previousLesson:"← Previous lesson", nextLesson:"Next lesson →", unmarked:"Completion removed", marked:"Lesson completed", removedReview:"Removed from review", addedReview:"Added to review",
    cards:"{count} cards", choosePathAction:"Choose a learning path", reviewEmptyLong:"Open any lesson and choose “Add to review”. Then recall the cards here one by one.", again:"Not yet — show me again", remembered:"I remembered ✓", reviewPrompt:"Recall first: what does it mean, when is it used, and can you create your own example?", revealAnswer:"Reveal answer", lessonsCount:"{count} lessons", bookMeta:"{category} · {level}",
    levelAll:"All", levelElementary:"Elementary", levelPreIntermediate:"Pre-intermediate & Intermediate", levelIntermediate:"Intermediate", levelUpperIntermediate:"Upper-intermediate", levelAdvanced:"Advanced"
  },
  tr: {
    skipLink:"Ana içeriğe geç", loginIntro:"On üç kaynak kitabı gerçekten tamamlayabileceğin bir öğrenme yoluna dönüştür.", username:"Kullanıcı adı", password:"Parola", show:"Göster", hide:"Gizle", enter:"Öğrenme alanına gir", verifying:"Doğrulanıyor ve içerik çözülüyor…", loginError:"Kullanıcı adı veya parola yanlış ya da bulut eşitleme geçici olarak kullanılamıyor.", securityCloud:"Kitap içeriği yalnızca tarayıcında çözülür; ilerlemen hesabınla güvenli biçimde eşitlenir.", securityLocal:"Kitap içeriği yalnızca tarayıcında çözülür; bulut eşitleme açılana kadar ilerleme bu cihazda kalır.",
    navHome:"Ana sayfa", navPaths:"Öğrenme yolları", navLibrary:"Tüm kitaplık", navReview:"Tekrar", syncLocal:"Bu cihazda kayıtlı", syncSaving:"Eşitleniyor", syncDone:"Eşitlendi", syncWaiting:"Eşitleme bekliyor", search:"Ara", lock:"Kilitle", searchAria:"Bilgi noktalarında ara", closeSearch:"Aramayı kapat", overallProgressTitle:"Genel ilerleme", chooseLevel:"Seviye seç",
    heroContinue:"İlerlemeye devam et.", heroOneThing:"Her seferinde bir fikri öğren.", choosePath:"Bir öğrenme yolu seç", pathOrder:"Alan → Konu → Seviye → Ünite", studyMethod:"Çalışma yöntemi", methodTitle:"Anla → Hatırla → Tamamla", methodRead:"Anla", methodReadDesc:"Açıklamanın tamamını oku", methodRecall:"Hatırla", methodRecallDesc:"Metni gizleyip bilgiyi etkin biçimde geri çağır", methodReinforce:"Pekiştir", methodReinforceDesc:"Tekrara ekle ve daha sonra kendini sına",
    chooseTopic:"Bir konu seç", lessonsTitle:"Dersler", showMoreLessons:"Daha fazla ders göster", libraryTitle:"Tüm kitaplık", libraryIntro:"Kaynak kitaba, seviyeye ve özgün ünite sırasına göre göz at. Öğrenme yolları içeriği yeniden düzenler; bu görünüm her bilgi ünitesini izlenebilir tutar.", coverageAudit:"Kapsam denetimi", chooseBook:"Bir kaynak kitap seç", knowledgeOnly:"Alıştırmalar ve cevap anahtarları çıkarılmış, açıklamalar korunmuştur.", showMoreUnits:"Daha fazla ünite göster", reviewTitle:"Tekrar kuyruğu", reviewIntro:"Önce cevabı açma. Kuralı, anlamı ve kendi örneğini söyle.", searchPlaceholder:"Bilgi noktası, ifade veya örnek ara…", searchHint:"Aramak için bir anahtar sözcük gir. Düzenli çalışma için Öğrenme yollarını kullan.", noSearchResults:"Eşleşen içerik bulunamadı. Daha kısa bir sözcük dene.",
    encryptedSpace:"Şifreli öğrenme alanı", structuredCurriculum:"Yapılandırılmış müfredat", step1:"Adım 1", step2:"Adım 2", completeSourceLibrary:"Eksiksiz kaynak kitaplık", sourceBooks13:"13 kaynak kitap", activeRecall:"Etkin hatırlama", bookCurriculum:"Kitap müfredatı", originalContents:"Özgün içerik", loginQuote:"Sırayla öğren.\nEtkin hatırla.\nDoğal kullan.", edition:"Kişisel müfredat · 01", language:"Dil", returnHome:"Öğrenme ana sayfasına dön", learningEdition:"Öğrenme sürümü", primaryNavigation:"Ana gezinme",
    continueLearning:"Öğrenmeye devam et", continueLesson:"Bu derse devam et →", overallProgress:"Genel ilerleme", completedLessons:"Tamamlanan ders", pendingReview:"Tekrar bekleyen", streak:"Günlük seri", lessons:"{done}/{total} ders", reviewQueue:"Tekrar kuyruğu", reviewItems:"{count} bilgi noktası tekrar için hazır", reviewEmpty:"Tekrar kuyruğun boş", reviewReadyDesc:"Önce hatırla, sonra açıklamanın tamamını aç. Doğru bildiklerin tamamlandı olarak işaretlenir.", reviewEmptyDesc:"Etkin hatırlama kartları oluşturmak için herhangi bir derste “Tekrara ekle”yi seç.", startReview:"Tekrara başla →", learnReview:"Tekrar modunu keşfet →",
    sourceBooks:"Kaynak kitap", formalUnits:"Öğrenme ünitesi", references:"Ekler ve başvuru sayfaları", totalRecords:"Bilgi kaydı", units:"{count} ünite", unitRefs:"{units} ünite · {refs} başvuru sayfası", unitsPlusRefs:"{units} ünite + {refs} başvuru sayfası", reference:"Başvuru", pdfPage:"PDF sayfası", backHome:"← Öğrenme ana sayfasına dön", organized:"İçerik odaklı ve öğretilebilir kalacak şekilde konu ve seviyeye göre düzenlenmiştir.", pathProgress:"Yol ilerlemesi", allLevels:"Tüm seviyeler", topics:"{count} konu", completeCount:"{count} tamamlandı", includesReference:"Başvuru materyali içerir", knowledgeUnits:"{count} bilgi ünitesi", originalOrder:"Kitabın özgün sırası",
    recallMode:"Hatırlama modu", exitRecall:"Hatırlamadan çık", addReview:"Tekrara ekle", inReview:"Tekrarda", markComplete:"Tamamlandı olarak işaretle", completed:"Tamamlandı ✓", recallQuestion:"Açıklamaya bakmadan “{title}” konusunun temel kuralını ve bir örneği söyleyebilir misin?", recallInstruction:"Zihninden ya da sesli olarak anlat, sonra tam içeriği aç.", revealFull:"Tam açıklamayı göster", previousLesson:"← Önceki ders", nextLesson:"Sonraki ders →", unmarked:"Tamamlandı işareti kaldırıldı", marked:"Ders tamamlandı", removedReview:"Tekrar kuyruğundan çıkarıldı", addedReview:"Tekrar kuyruğuna eklendi",
    cards:"{count} kart", choosePathAction:"Bir öğrenme yolu seç", reviewEmptyLong:"Herhangi bir dersi açıp “Tekrara ekle”yi seç. Ardından kartları burada tek tek hatırla.", again:"Henüz değil — yeniden göster", remembered:"Hatırladım ✓", reviewPrompt:"Önce hatırla: anlamı nedir, ne zaman kullanılır ve kendi örneğini oluşturabilir misin?", revealAnswer:"Cevabı göster", lessonsCount:"{count} ders", bookMeta:"{category} · {level}",
    levelAll:"Tümü", levelElementary:"Başlangıç", levelPreIntermediate:"Alt orta ve orta", levelIntermediate:"Orta", levelUpperIntermediate:"Üst orta", levelAdvanced:"İleri"
  },
  zh: {
    skipLink:"跳到主要内容", loginIntro:"把十三本参考书变成一条真正能学完的学习路径。", username:"用户名", password:"密码", show:"显示", hide:"隐藏", enter:"进入学习空间", verifying:"正在验证并解密……", loginError:"用户名或密码不正确，或暂时无法连接云端。", securityCloud:"教材内容只在浏览器内解密；学习进度安全同步并绑定账号。", securityLocal:"教材内容只在浏览器内解密；云同步启用前，进度保存在本机。",
    navHome:"主页", navPaths:"学习路径", navLibrary:"完整书库", navReview:"复习", syncLocal:"本机保存", syncSaving:"同步中", syncDone:"已同步", syncWaiting:"等待同步", search:"搜索", lock:"锁定", searchAria:"搜索知识点", closeSearch:"关闭搜索", overallProgressTitle:"总体进度", chooseLevel:"选择难度",
    heroContinue:"继续积累。", heroOneThing:"一次掌握一个知识点。", choosePath:"选择学习路径", pathOrder:"领域 → 主题 → 难度 → 单元", studyMethod:"学习方法", methodTitle:"理解 → 回忆 → 完成", methodRead:"理解", methodReadDesc:"阅读完整讲解", methodRecall:"回忆", methodRecallDesc:"隐藏内容，主动提取知识", methodReinforce:"巩固", methodReinforceDesc:"加入复习并在之后自测",
    chooseTopic:"选择主题", lessonsTitle:"课程", showMoreLessons:"显示更多课程", libraryTitle:"完整书库", libraryIntro:"按原书、难度和原始单元顺序浏览。学习路径会重组内容；这里让每个知识单元都可追溯。", coverageAudit:"完整度核验", chooseBook:"选择原书", knowledgeOnly:"已排除练习与答案，保留全部讲解。", showMoreUnits:"显示更多单元", reviewTitle:"复习队列", reviewIntro:"不要先看答案。先说出规则、含义，再自己造一个例句。", searchPlaceholder:"搜索知识点、短语或例句……", searchHint:"输入关键词开始搜索。系统学习请从学习路径进入。", noSearchResults:"没有找到匹配内容，试试更短的关键词。",
    encryptedSpace:"加密学习空间", structuredCurriculum:"结构化课程", step1:"第 1 步", step2:"第 2 步", completeSourceLibrary:"完整原书资料库", sourceBooks13:"13 本原书", activeRecall:"主动回忆", bookCurriculum:"原书课程", originalContents:"原始目录", loginQuote:"按顺序学习。\n主动回忆。\n自然运用。", edition:"个人课程 · 01", language:"语言", returnHome:"返回学习主页", learningEdition:"学习版", primaryNavigation:"主导航",
    continueLearning:"继续学习", continueLesson:"继续这一课 →", overallProgress:"总体完成度", completedLessons:"已完成课程", pendingReview:"等待复习", streak:"连续学习天数", lessons:"{done}/{total} 课", reviewQueue:"复习队列", reviewItems:"{count} 个知识点等你复习", reviewEmpty:"复习队列还是空的", reviewReadyDesc:"先主动回忆，再查看完整讲解。答对的知识点会标记为完成。", reviewEmptyDesc:"学习课程时点击“加入复习”，这里就会生成回忆卡片。", startReview:"开始复习 →", learnReview:"了解复习模式 →",
    sourceBooks:"本原书", formalUnits:"正式单元", references:"附录与参考页", totalRecords:"知识记录总数", units:"{count} 个单元", unitRefs:"{units} 个单元 · {refs} 页参考资料", unitsPlusRefs:"{units} 个单元 + {refs} 页参考资料", reference:"参考资料", pdfPage:"PDF 页", backHome:"← 返回学习主页", organized:"已按主题和难度重新组织，让课程保持清晰和可学习。", pathProgress:"路径完成度", allLevels:"全部难度", topics:"{count} 个主题", completeCount:"已完成 {count}", includesReference:"含参考资料", knowledgeUnits:"{count} 个知识单元", originalOrder:"原书顺序",
    recallMode:"回忆模式", exitRecall:"退出回忆", addReview:"加入复习", inReview:"已加入复习", markComplete:"标记完成", completed:"已完成 ✓", recallQuestion:"不看讲解，你能说出“{title}”的核心规则和一个例句吗？", recallInstruction:"先在脑中或大声复述，再揭晓完整内容。", revealFull:"查看完整讲解", previousLesson:"← 上一课", nextLesson:"下一课 →", unmarked:"已取消完成标记", marked:"课程已完成", removedReview:"已移出复习队列", addedReview:"已加入复习队列",
    cards:"{count} 张卡片", choosePathAction:"去选择学习路径", reviewEmptyLong:"进入任意课程，点击“加入复习”。之后你可以在这里逐张回忆。", again:"还不熟，再来一次", remembered:"记住了 ✓", reviewPrompt:"请先复述：它是什么意思？什么时候使用？你能不能自己造一个例句？", revealAnswer:"揭晓答案", lessonsCount:"{count} 课", bookMeta:"{category} · {level}",
    levelAll:"全部", levelElementary:"初级", levelPreIntermediate:"初中级与中级", levelIntermediate:"中级", levelUpperIntermediate:"中高级", levelAdvanced:"高级"
  }
};

const TOPIC_TR = {
  Grammar:{tenses:"Zamanlar ve zaman",modals:"Kiplik fiilleri",conditionals:"Koşullar ve dilekler",passive:"Edilgen ve ettirgen",reported:"Dolaylı anlatım",questions:"Sorular ve vurgu","verb-patterns":"Fiil kalıpları",nouns:"İsimler ve belirleyiciler",clauses:"Tümceler ve bağlama",description:"Niteleme ve karşılaştırma",prepositions:"Edatlar ve sözcük dizimi",structures:"Diğer yapılar"},
  Vocabulary:{people:"İnsanlar ve ilişkiler",work:"İş, eğitim ve ticaret","daily-life":"Günlük yaşam ve ev",travel:"Seyahat ve yerler",health:"Sağlık ve beden",nature:"Doğa ve çevre",technology:"Teknoloji ve medya",society:"Toplum ve kültür",concepts:"Fikirler ve dil",general:"Genel kelime bilgisi"},
  Collocations:{concepts:"Kavramlar ve değişim",people:"İnsanlar ve duygular",work:"İş ve toplum",daily:"Günlük yaşam",language:"Dil kalıpları",general:"Genel sözcük birliktelikleri"},
  Idioms:{feelings:"Duygular ve tutumlar",people:"İnsanlar ve ilişkiler",work:"İş, başarı ve para",communication:"İletişim ve fikirler",situations:"Eylemler ve durumlar",time:"Zaman ve derece",general:"Genel deyimler"},
  "Phrasal Verbs":{movement:"Hareket ve seyahat",communication:"İletişim ve düşünme",work:"İş ve eğitim",people:"İnsanlar ve ilişkiler",change:"Değişim ve sorunlar",daily:"Günlük eylemler",patterns:"Parçacıklar ve kalıplar",general:"Genel öbek fiiller"},
  reference:"Başvuru materyali"
};

const TOPICS = {
  Grammar: [
    ["tenses","时态与时间","Tenses & time",/present|past|future|tense|perfect|continuous|time\b|used to/i],
    ["modals","情态动词","Modal verbs",/modal|\bcan\b|could|may\b|might|must|should|would|need(?:n't| to)|ought|have to/i],
    ["conditionals","条件、愿望与假设","Conditionals & wishes",/condition|\bif\b|wish|would rather|hypothetical/i],
    ["passive","被动与使役","Passive & causative",/passive|causative|have something done|be done|being done/i],
    ["reported","转述与间接引语","Reported speech",/reported|reporting|indirect speech|said|told/i],
    ["questions","问句、否定与强调","Questions & emphasis",/question|negative|auxiliary|emphasis|do you|tag question|short answer/i],
    ["verb-patterns","动词形式与句型","Verb patterns",/infinitive|gerund|verb \+|doing|to do|participle|verb pattern/i],
    ["nouns","名词、冠词与限定词","Nouns & determiners",/noun|article|\ba\/an\b|\bthe\b|determiner|countable|uncountable|some|any|much|many|few|little/i],
    ["clauses","从句、关系词与连接","Clauses & linking",/clause|relative|who|which|that|conjunction|linking|although|because|despite/i],
    ["description","形容词、副词与比较","Description & comparison",/adjective|adverb|compar|superlative|too|enough|so |such /i],
    ["prepositions","介词与语序","Prepositions & word order",/preposition|word order|position|in at on|at in on/i],
    ["structures","其他核心结构","Other structures",/.*/i],
  ],
  Vocabulary: [
    ["people","人物、关系与性格","People & relationships",/people|person|family|relationship|friend|character|personality|appearance|feelings|emotion|love/i],
    ["work","工作、学习与商业","Work, study & business",/work|job|career|business|money|office|study|education|school|university|academic|employment/i],
    ["daily-life","日常生活与居家","Daily life & home",/home|house|daily|food|clothes|shopping|cooking|sleep|routine|leisure|hobby/i],
    ["travel","旅行、交通与地点","Travel & places",/travel|transport|journey|holiday|hotel|city|country|place|road|car|train|flight/i],
    ["health","身体、健康与医疗","Health & body",/health|body|illness|medicine|medical|doctor|hospital|sport|fitness/i],
    ["nature","自然、环境与动物","Nature & environment",/nature|environment|weather|animal|plant|earth|climate|sea|land/i],
    ["technology","科技、媒体与交流","Technology & media",/technology|computer|internet|media|phone|communication|news|film|television|music/i],
    ["society","社会、法律与文化","Society & culture",/society|law|crime|politic|government|culture|war|religion|community/i],
    ["concepts","抽象概念与语言","Ideas & language",/idea|thought|knowledge|language|word|meaning|change|cause|effect|problem|success/i],
    ["general","综合词汇","General vocabulary",/.*/i],
  ],
  Collocations: [
    ["concepts","概念、变化与程度","Concepts & change",/change|cause|effect|difference|degree|amount|quantity|quality|success|failure|problem|solution/i],
    ["people","人物、情绪与关系","People & feelings",/people|person|relationship|family|friend|emotion|feeling|behaviour|character/i],
    ["work","工作、学习与社会","Work & society",/work|job|business|study|education|money|law|crime|society|politic/i],
    ["daily","日常活动与生活","Everyday life",/home|food|travel|weather|health|sport|time|day|life|conversation/i],
    ["language","语言模式与固定组合","Language patterns",/verb|noun|adjective|adverb|preposition|collocation|word|expression/i],
    ["general","综合搭配","General collocations",/.*/i],
  ],
  Idioms: [
    ["feelings","情绪与态度","Feelings & attitudes",/feeling|emotion|happy|sad|angry|fear|attitude|mood/i],
    ["people","人物与关系","People & relationships",/people|person|relationship|family|friend|character|body/i],
    ["work","工作、成功与金钱","Work, success & money",/work|business|success|failure|money|job|career/i],
    ["communication","沟通、思考与观点","Communication & ideas",/communication|speaking|talk|think|idea|opinion|knowledge|understand/i],
    ["situations","行动、处境与变化","Actions & situations",/action|situation|problem|change|decision|effort|difficulty/i],
    ["time","时间、数量与程度","Time & degree",/time|number|amount|degree|speed|frequency/i],
    ["general","综合习语","General idioms",/.*/i],
  ],
  "Phrasal Verbs": [
    ["movement","移动、旅行与位置","Movement & travel",/move|travel|journey|come|go|get|take|bring|turn|place|position/i],
    ["communication","沟通、信息与思考","Communication & thinking",/communicat|talk|speak|write|read|think|find out|point out|information/i],
    ["work","工作、学习与事务","Work & study",/work|business|study|job|task|plan|deal|carry out|set up/i],
    ["people","人物、关系与情绪","People & relationships",/people|relationship|family|friend|feeling|emotion|social/i],
    ["change","变化、问题与解决","Change & problems",/change|problem|solution|break|fix|improve|reduce|increase|end|start/i],
    ["daily","日常行为","Everyday actions",/home|food|clothes|daily|clean|sleep|wake|eat|buy|use/i],
    ["patterns","助词规律与语法","Particles & patterns",/particle|grammar|noun|verb|adverb|meaning|register|formal|informal/i],
    ["general","综合短语动词","General phrasal verbs",/.*/i],
  ],
};

const LEVELS = ["All","Elementary","Pre-intermediate & Intermediate","Intermediate","Upper-intermediate","Advanced"];
const state = {
  data:null, records:[], view:"dashboard", category:"Grammar", topic:null, level:"All", lessonLimit:12,
  currentLesson:null, lessonOrigin:"path", recall:false, reviewIndex:0, reviewRevealed:false,
  bookId:null, bookLimit:18, cloudEnabled:false, username:null,
  lang:["en","tr","zh"].includes(localStorage.getItem("eka-language"))?localStorage.getItem("eka-language"):"en",
  completed:new Set(), review:new Set(), history:[], last:null,
};

const $ = selector => document.querySelector(selector);
const els = {
  loginView:$("#loginView"), appShell:$("#appShell"), loginForm:$("#loginForm"), username:$("#usernameInput"), password:$("#passwordInput"),
  togglePassword:$("#togglePassword"), loginButton:$("#loginButton"), loginError:$("#loginError"), logout:$("#logoutButton"),
  dashboard:$("#dashboardView"), path:$("#pathView"), lesson:$("#lessonView"), library:$("#libraryView"), review:$("#reviewView"),
  bookGrid:$("#bookGrid"), bookLessonGrid:$("#bookLessonGrid"), bookCurriculum:$("#bookCurriculum"),
  bookDetailMeta:$("#bookDetailMeta"), bookDetailTitle:$("#bookDetailTitle"), bookDetailCount:$("#bookDetailCount"), showMoreBook:$("#showMoreBookLessons"),
  coverageSeal:$("#coverageSeal"), coverageStrip:$("#coverageStrip"), syncStatus:$("#syncStatus"), securityNote:$("#securityNote"),
  today:$("#todayLabel"), continueCard:$("#continueCard"), progressStrip:$("#progressStrip"), pathGrid:$("#pathGrid"), reviewCallout:$("#reviewCallout"),
  pathHero:$("#pathHero"), levelTabs:$("#levelTabs"), topicGrid:$("#topicGrid"), topicSummary:$("#topicSummary"),
  curriculumTitle:$("#curriculumTitle"), curriculumCount:$("#curriculumCount"), lessonGrid:$("#lessonGrid"), showMore:$("#showMoreLessons"),
  lessonOutline:$("#lessonOutline"), lessonPage:$("#lessonPage"), reviewCount:$("#reviewCount"), reviewStage:$("#reviewStage"),
  openSearch:$("#openSearch"), searchDialog:$("#searchDialog"), closeSearch:$("#closeSearch"), searchInput:$("#searchInput"), searchResults:$("#searchResults"),
  progressText:$("#headerProgressText"), progressBar:$("#headerProgressBar"), toast:$("#toast"), securityNoteText:$("#securityNoteText"),
};

function escapeHTML(value="") { return String(value).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function normalize(value="") { return String(value).toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,""); }
function repairWrappedTitle(record) {
  if (record.category!=="Vocabulary" || !/\b(?:and|or)$/i.test(record.title)) return record.title;
  const lines=record.content.split("\n").map(line=>line.replace(/\s+/g," ").trim()).filter(Boolean);
  if (!lines.length) return record.title;
  const unit=String(record.unit ?? ""), strip=value=>value.replace(new RegExp(`^\\s*${unit}\\s+`),"").replace(new RegExp(`\\s*${unit}\\s*$`),"").replace(/^[ .:\-–—]+|[ .:\-–—]+$/g,"");
  const first=strip(lines[0]);
  if (first.length>record.title.length && first.toLowerCase().startsWith(record.title.toLowerCase())) return first;
  if (first.toLowerCase()===record.title.toLowerCase() && lines[1]) {
    const continuation=strip(lines[1]);
    if (continuation.length>=2 && continuation.length<=70) return `${record.title} ${continuation}`;
  }
  return record.title;
}
function decodeBase64(value) { return Uint8Array.from(atob(value),c=>c.charCodeAt(0)); }
function t(key,variables={}) {
  const value=TRANSLATIONS[state.lang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
  return String(value).replace(/\{(\w+)\}/g,(_,name)=>variables[name] ?? "");
}
function categoryName(category) { return CATEGORY_META[category]?.names[state.lang] || CATEGORY_META[category]?.names.en || category; }
function categoryDescription(category) { return CATEGORY_META[category]?.descriptions[state.lang] || CATEGORY_META[category]?.descriptions.en || ""; }
function topicName(topic,category=state.category) {
  if (state.lang==="zh") return topic[1];
  if (state.lang==="tr") return topic[0]==="reference"?TOPIC_TR.reference:(TOPIC_TR[category]?.[topic[0]] || topic[2]);
  return topic[2];
}
function levelName(level) {
  return t({All:"levelAll",Elementary:"levelElementary","Pre-intermediate & Intermediate":"levelPreIntermediate",Intermediate:"levelIntermediate","Upper-intermediate":"levelUpperIntermediate",Advanced:"levelAdvanced"}[level] || level);
}
function locale() { return {en:"en-GB",tr:"tr-TR",zh:"zh-CN"}[state.lang]; }
function safeJSON(key,fallback) { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } }
function storageKey(name) { return `eka-v3-${state.username}-${name}`; }
function loadLocalProgress(username) {
  state.username=username.toLowerCase();
  const isOwner=state.username==="atlas-owner";
  state.completed=new Set(safeJSON(storageKey("completed"),isOwner?safeJSON("eka-v2-completed",safeJSON("eka-studied",[])):[]));
  state.review=new Set(safeJSON(storageKey("review"),isOwner?safeJSON("eka-v2-review",safeJSON("eka-bookmarks",[])):[]));
  state.history=safeJSON(storageKey("history"),isOwner?safeJSON("eka-v2-history",[]):[]);
  state.last=localStorage.getItem(storageKey("last")) || (isOwner?localStorage.getItem("eka-v2-last"):null);
}
function applyLanguage({render=true}={}) {
  document.documentElement.lang=state.lang;
  document.querySelectorAll("[data-i18n]").forEach(node=>{ node.textContent=t(node.dataset.i18n); });
  document.querySelectorAll("[data-i18n-lines]").forEach(node=>{ node.innerHTML=t(node.dataset.i18nLines).split("\n").map(escapeHTML).join("<br>"); });
  document.querySelectorAll("[data-i18n-aria]").forEach(node=>node.setAttribute("aria-label",t(node.dataset.i18nAria)));
  document.querySelectorAll("[data-category-label]").forEach(node=>{ node.textContent=categoryName(node.dataset.categoryLabel); });
  document.querySelectorAll("[data-language]").forEach(button=>button.classList.toggle("active",button.dataset.language===state.lang));
  els.searchInput.placeholder=t("searchPlaceholder");
  els.openSearch.setAttribute("aria-label",t("searchAria"));
  els.closeSearch.setAttribute("aria-label",t("closeSearch"));
  els.togglePassword.setAttribute("aria-label",els.password.type==="text"?t("hide"):t("show"));
  els.levelTabs.setAttribute("aria-label",t("chooseLevel"));
  $(".header-progress")?.setAttribute("title",t("overallProgressTitle"));
  els.securityNoteText.textContent=t(window.EKACloud?.available()?"securityCloud":"securityLocal");
  const syncKey={local:"syncLocal",syncing:"syncSaving",synced:"syncDone",error:"syncWaiting"}[els.syncStatus.dataset.state] || "syncLocal";
  els.syncStatus.lastElementChild.textContent=t(syncKey);
  localStorage.setItem("eka-language",state.lang);
  if (!render || !state.data) return;
  if (state.view==="dashboard") renderDashboard();
  else if (state.view==="path") renderPath();
  else if (state.view==="library") renderLibrary();
  else if (state.view==="lesson") renderLesson();
  else if (state.view==="review") renderReview();
}
function unitRecords() { return state.records.filter(r=>r.kind === "unit"); }
function topicDefinition(category,id) { return TOPICS[category].find(t=>t[0]===id) || TOPICS[category].at(-1); }
function topicFor(record) {
  if (record.kind === "reference") return ["reference","参考资料","Reference material",/.*/];
  const topics = TOPICS[record.category];
  const specific = topics.slice(0,-1);
  const titleMatch = specific.find(topic=>topic[3].test(record.title));
  return titleMatch || topics.at(-1);
}
function percent(done,total) { return total ? Math.round(done/total*100) : 0; }
function dateKey(date=new Date()) { return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Berlin",year:"numeric",month:"2-digit",day:"2-digit"}).format(date); }

async function decryptLibrary(username,password) {
  const config = await (await fetch("./data/auth.json",{cache:"no-store"})).json();
  const normalized=username.trim().toLowerCase();
  const account=config.version>=2?config.accounts?.[normalized]:config;
  if (!account) throw new Error("INVALID_LOGIN_CREDENTIALS");
  const encrypted = await (await fetch(`./data/${account.file}`)).arrayBuffer();
  const material = await crypto.subtle.importKey("raw",new TextEncoder().encode(`${normalized}\u0000${password}`),"PBKDF2",false,["deriveKey"]);
  const key = await crypto.subtle.deriveKey({name:"PBKDF2",salt:decodeBase64(account.salt),iterations:config.iterations,hash:"SHA-256"},material,{name:"AES-GCM",length:256},false,["decrypt"]);
  const decrypted = await crypto.subtle.decrypt({name:"AES-GCM",iv:decodeBase64(account.iv),additionalData:new TextEncoder().encode(account.aad)},key,encrypted);
  const stream = new Blob([decrypted]).stream().pipeThrough(new DecompressionStream("gzip"));
  return JSON.parse(await new Response(stream).text());
}

function persist() {
  if (!state.username) return;
  localStorage.setItem(storageKey("completed"),JSON.stringify([...state.completed]));
  localStorage.setItem(storageKey("review"),JSON.stringify([...state.review]));
  localStorage.setItem(storageKey("history"),JSON.stringify([...new Set(state.history)].slice(-120)));
  if (state.last) localStorage.setItem(storageKey("last"),state.last);
  renderHeaderProgress();
  scheduleCloudSave();
}

function renderHeaderProgress() {
  const units = unitRecords();
  const done = units.filter(r=>state.completed.has(r.id)).length;
  const value = percent(done,units.length);
  els.progressText.textContent = `${value}%`;
  els.progressBar.style.width = `${value}%`;
}

function studyStreak() {
  const dates = new Set(state.history);
  let streak=0;
  const cursor=new Date();
  if (!dates.has(dateKey(cursor))) cursor.setDate(cursor.getDate()-1);
  while (dates.has(dateKey(cursor))) { streak++; cursor.setDate(cursor.getDate()-1); }
  return streak;
}

function showToast(message) {
  els.toast.textContent=message; els.toast.hidden=false;
  clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>els.toast.hidden=true,1800);
}

function progressSnapshot() {
  return {
    completed:[...state.completed], review:[...state.review], history:[...new Set(state.history)].slice(-120),
    last:state.last, language:state.lang, updatedAt:new Date().toISOString(),
  };
}

function setSyncStatus(status,label) {
  els.syncStatus.dataset.state=status;
  els.syncStatus.lastElementChild.textContent=label;
}

let cloudSaveTimer;
function scheduleCloudSave() {
  if (!state.cloudEnabled || !window.EKACloud?.isAuthenticated()) return;
  clearTimeout(cloudSaveTimer); setSyncStatus("syncing",t("syncSaving"));
  cloudSaveTimer=setTimeout(async()=>{
    try { await window.EKACloud.saveProgress(progressSnapshot()); setSyncStatus("synced",t("syncDone")); }
    catch(error) { setSyncStatus("error",t("syncWaiting")); }
  },600);
}

function setView(view) {
  state.view=view;
  [els.dashboard,els.path,els.lesson,els.library,els.review].forEach(section=>section.hidden=true);
  ({dashboard:els.dashboard,path:els.path,lesson:els.lesson,library:els.library,review:els.review}[view]).hidden=false;
  const activeNav=view==="lesson"?(state.lessonOrigin==="library"?"library":"paths"):(view==="path"?"paths":view);
  document.querySelectorAll("[data-nav]").forEach(button=>button.classList.toggle("active",button.dataset.nav===activeNav));
  window.scrollTo(0,0);
}

function nextLesson() {
  const units=unitRecords();
  if (state.last) {
    const lastIndex=units.findIndex(r=>r.id===state.last);
    if (lastIndex>=0 && !state.completed.has(units[lastIndex].id)) return units[lastIndex];
    for(let offset=1;offset<=units.length;offset++) { const candidate=units[(lastIndex+offset)%units.length]; if(!state.completed.has(candidate.id)) return candidate; }
  }
  return units.find(r=>!state.completed.has(r.id)) || units[0];
}

function renderDashboard() {
  setView("dashboard");
  history.replaceState(null,"","#home");
  const now=new Date();
  els.today.textContent=new Intl.DateTimeFormat(locale(),{timeZone:"Europe/Berlin",month:"long",day:"numeric",weekday:"long"}).format(now);
  const next=nextLesson();
  const topic=topicFor(next);
  els.continueCard.innerHTML=`<p class="eyebrow">${t("continueLearning")} · ${escapeHTML(categoryName(next.category))}</p><h2>${escapeHTML(next.title)}</h2><p>${escapeHTML(topicName(topic,next.category))} · ${escapeHTML(levelName(next.level))} · Unit ${escapeHTML(next.unit)}</p><button type="button" data-open-lesson="${next.id}">${t("continueLesson")}</button>`;
  const units=unitRecords(), done=units.filter(r=>state.completed.has(r.id)).length;
  els.progressStrip.innerHTML=`
    <div class="stat-cell"><strong>${percent(done,units.length)}%</strong><span>${t("overallProgress")}</span></div>
    <div class="stat-cell"><strong>${done}</strong><span>${t("completedLessons")}</span></div>
    <div class="stat-cell"><strong>${state.review.size}</strong><span>${t("pendingReview")}</span></div>
    <div class="stat-cell"><strong>${studyStreak()}</strong><span>${t("streak")}</span></div>`;
  els.pathGrid.innerHTML=Object.entries(CATEGORY_META).map(([category,meta])=>{
    const lessons=units.filter(r=>r.category===category), completed=lessons.filter(r=>state.completed.has(r.id)).length, value=percent(completed,lessons.length);
    return `<button class="path-card" type="button" data-open-path="${category}" data-letter="${meta.letter}" style="--accent:${meta.accent};--tint:${meta.tint}"><span class="path-index">${meta.index} · ${escapeHTML(categoryName(category))}</span><h3>${escapeHTML(categoryName(category))}</h3><p>${escapeHTML(categoryDescription(category))}</p><footer><span>${t("lessons",{done:completed,total:lessons.length})}</span><i class="mini-progress"><b style="width:${value}%"></b></i></footer></button>`;
  }).join("");
  const reviewCount=state.review.size;
  els.reviewCallout.innerHTML=`<p class="eyebrow">${t("reviewQueue")}</p><h2>${reviewCount?t("reviewItems",{count:reviewCount}):t("reviewEmpty")}</h2><p>${reviewCount?t("reviewReadyDesc"):t("reviewEmptyDesc")}</p><button type="button" data-nav="review">${reviewCount?t("startReview"):t("learnReview")}</button>`;
  persist();
}

function bookRecords(bookId) { return state.records.filter(record=>record.bookId===bookId); }

function renderLibrary() {
  setView("library");
  if (!state.bookId || !state.data.books.some(book=>book.id===state.bookId)) state.bookId=state.data.books[0]?.id || null;
  history.replaceState(null,"",`#library=${encodeURIComponent(state.bookId || "")}`);
  const units=unitRecords(), references=state.records.filter(record=>record.kind==="reference");
  els.coverageStrip.innerHTML=`
    <div class="coverage-stat"><strong>${state.data.books.length}</strong><span>${t("sourceBooks")}</span></div>
    <div class="coverage-stat"><strong>${units.length.toLocaleString(locale())}</strong><span>${t("formalUnits")}</span></div>
    <div class="coverage-stat"><strong>${references.length}</strong><span>${t("references")}</span></div>
    <div class="coverage-stat"><strong>${state.records.length.toLocaleString(locale())}</strong><span>${t("totalRecords")}</span></div>`;
  els.bookGrid.innerHTML=state.data.books.map(book=>{
    const records=bookRecords(book.id), lessons=records.filter(record=>record.kind==="unit");
    const done=lessons.filter(record=>state.completed.has(record.id)).length;
    return `<button class="book-card ${book.id===state.bookId?"active":""}" type="button" data-open-book="${book.id}"><span>${escapeHTML(categoryName(book.category))} · ${escapeHTML(levelName(book.level))}</span><h3>${escapeHTML(book.title)}</h3><p>${records.length-lessons.length?t("unitRefs",{units:lessons.length,refs:records.length-lessons.length}):t("units",{count:lessons.length})}</p><footer><b>${percent(done,lessons.length)}%</b><i><em style="width:${percent(done,lessons.length)}%"></em></i></footer></button>`;
  }).join("");
  renderBookCurriculum();
}

function renderBookCurriculum() {
  const book=state.data.books.find(item=>item.id===state.bookId); if(!book) return;
  const records=bookRecords(book.id), lessons=records.filter(record=>record.kind==="unit"), references=records.filter(record=>record.kind==="reference");
  els.bookDetailMeta.textContent=t("bookMeta",{category:categoryName(book.category),level:levelName(book.level)});
  els.bookDetailTitle.textContent=book.title;
  els.bookDetailCount.textContent=references.length?t("unitsPlusRefs",{units:lessons.length,refs:references.length}):t("units",{count:lessons.length});
  els.bookLessonGrid.style.cssText=`--category-accent:${CATEGORY_META[book.category].accent}`;
  els.bookLessonGrid.innerHTML=records.slice(0,state.bookLimit).map(record=>`<button class="lesson-card ${state.completed.has(record.id)?"complete":""}" type="button" data-open-lesson="${record.id}"><span class="lesson-number">${record.kind==="unit"?`Unit ${escapeHTML(record.unit)}`:t("reference")}</span>${state.completed.has(record.id)?'<span class="lesson-check">✓</span>':""}<h3>${escapeHTML(record.title)}</h3><p>${t("pdfPage")} ${record.sourcePage}${record.ocr?" · OCR":""}</p></button>`).join("");
  els.showMoreBook.hidden=state.bookLimit>=records.length;
}

function categoryRecords(category,{unitsOnly=false}={}) { return state.records.filter(r=>r.category===category && (!unitsOnly||r.kind==="unit")); }
function topicStats(category,level) {
  const source=categoryRecords(category).filter(r=>level==="All"||r.level===level);
  const map=new Map();
  source.forEach(record=>{ const topic=topicFor(record); if(!map.has(topic[0])) map.set(topic[0],{topic,records:[]}); map.get(topic[0]).records.push(record); });
  return [...map.values()];
}

function renderPath() {
  setView("path");
  history.replaceState(null,"",`#path=${encodeURIComponent(state.category)}&level=${encodeURIComponent(state.level)}`);
  const meta=CATEGORY_META[state.category];
  const categoryUnits=categoryRecords(state.category,{unitsOnly:true});
  const complete=categoryUnits.filter(r=>state.completed.has(r.id)).length;
  els.pathHero.style.cssText=`--accent:${meta.accent};--tint:${meta.tint}`;
  els.pathHero.innerHTML=`<div><button class="back-button" type="button" data-nav="dashboard">${t("backHome")}</button><p class="eyebrow">${escapeHTML(categoryName(state.category))} · ${t("navPaths")}</p><h1>${escapeHTML(categoryName(state.category))}</h1><p>${escapeHTML(categoryDescription(state.category))} ${t("organized")}</p></div><div class="path-progress"><span>${t("pathProgress")}</span><strong>${percent(complete,categoryUnits.length)}%</strong><i><b style="width:${percent(complete,categoryUnits.length)}%"></b></i></div>`;
  els.levelTabs.innerHTML=LEVELS.map(level=>`<button type="button" class="${level===state.level?"active":""}" data-level="${escapeHTML(level)}">${escapeHTML(levelName(level))}</button>`).join("");
  const stats=topicStats(state.category,state.level);
  if (!state.topic || !stats.some(s=>s.topic[0]===state.topic)) state.topic=stats[0]?.topic[0] || null;
  els.topicSummary.textContent=t("topics",{count:stats.length});
  els.topicGrid.style.cssText=`--category-accent:${meta.accent};--category-tint:${meta.tint}`;
  els.topicGrid.innerHTML=stats.map(({topic,records})=>{
    const lessons=records.filter(r=>r.kind==="unit"), done=lessons.filter(r=>state.completed.has(r.id)).length;
    return `<button class="topic-card ${state.topic===topic[0]?"active":""}" type="button" data-topic="${topic[0]}"><span>${escapeHTML(categoryName(state.category))}</span><h3>${escapeHTML(topicName(topic,state.category))}</h3><p>${t("lessonsCount",{count:lessons.length})}${done?` · ${t("completeCount",{count:done})}`:""}${records.some(r=>r.kind==="reference")?` · ${t("includesReference")}`:""}</p></button>`;
  }).join("");
  renderCurriculum();
}

function renderCurriculum() {
  const meta=CATEGORY_META[state.category];
  const records=categoryRecords(state.category).filter(r=>(state.level==="All"||r.level===state.level) && topicFor(r)[0]===state.topic);
  const topic=records[0]?topicFor(records[0]):["","课程单元","Lessons"];
  els.curriculumTitle.textContent=topicName(topic,state.category);
  els.curriculumCount.textContent=t("knowledgeUnits",{count:records.length});
  els.lessonGrid.style.cssText=`--category-accent:${meta.accent}`;
  els.lessonGrid.innerHTML=records.slice(0,state.lessonLimit).map(record=>`<button class="lesson-card ${state.completed.has(record.id)?"complete":""}" type="button" data-open-lesson="${record.id}"><span class="lesson-number">${record.kind==="unit"?`Unit ${escapeHTML(record.unit)}`:t("reference")}</span>${state.completed.has(record.id)?'<span class="lesson-check">✓</span>':""}<h3>${escapeHTML(record.title)}</h3><p>${escapeHTML(levelName(record.level))} · ${escapeHTML(record.bookTitle)}</p></button>`).join("");
  els.showMore.hidden=state.lessonLimit>=records.length;
}

function relatedLessons(record) {
  if (state.lessonOrigin==="library") return bookRecords(record.bookId);
  const topicId=topicFor(record)[0];
  return state.records.filter(r=>r.category===record.category && topicFor(r)[0]===topicId && r.level===record.level);
}

function openLesson(id) {
  const record=state.records.find(r=>r.id===id); if(!record) return;
  if (state.view!=="lesson") state.lessonOrigin=state.view==="library"?"library":"path";
  state.currentLesson=record; state.last=id; state.recall=false;
  persist(); setView("lesson"); renderLesson();
  history.replaceState(null,"",`#lesson=${encodeURIComponent(id)}`);
}

function renderLesson() {
  const record=state.currentLesson, meta=CATEGORY_META[record.category], topic=topicFor(record), related=relatedLessons(record), index=related.findIndex(r=>r.id===record.id);
  const nearby=related.slice(Math.max(0,index-3),Math.min(related.length,index+5));
  const back=state.lessonOrigin==="library"?`<button class="back-button" type="button" data-back-library>← ${escapeHTML(record.bookTitle)}</button>`:`<button class="back-button" type="button" data-back-path>← ${escapeHTML(categoryName(record.category))}</button>`;
  els.lessonOutline.innerHTML=`${back}<p class="outline-label">${state.lessonOrigin==="library"?t("originalOrder"):escapeHTML(topicName(topic,record.category))}</p>${nearby.map(r=>`<button class="outline-item ${r.id===record.id?"active":""}" type="button" data-open-lesson="${r.id}"><span class="${state.completed.has(r.id)?"done":""}">${state.completed.has(r.id)?"✓":r.kind==="unit"?escapeHTML(r.unit):"·"}</span><span>${escapeHTML(r.title)}</span></button>`).join("")}`;
  const body=state.recall?`<div class="recall-panel"><span>${t("activeRecall")}</span><h2>${t("recallQuestion",{title:escapeHTML(record.title)})}</h2><p>${t("recallInstruction")}</p><button type="button" data-reveal-lesson>${t("revealFull")}</button></div>`:`<div class="lesson-content">${escapeHTML(record.content)}</div>`;
  const previous=related[index-1], next=related[index+1];
  els.lessonPage.innerHTML=`<div class="lesson-actions"><button class="${state.recall?"active":""}" type="button" data-toggle-recall>${state.recall?t("exitRecall"):t("recallMode")}</button><button class="${state.review.has(record.id)?"active":""}" type="button" data-toggle-review>${state.review.has(record.id)?t("inReview"):t("addReview")}</button><button class="${state.completed.has(record.id)?"active":""}" type="button" data-complete-lesson>${state.completed.has(record.id)?t("completed"):t("markComplete")}</button></div><p class="lesson-breadcrumb">${escapeHTML(categoryName(record.category))} · ${escapeHTML(topicName(topic,record.category))} · ${escapeHTML(levelName(record.level))}</p><h1>${escapeHTML(record.title)}</h1><p class="lesson-source">${escapeHTML(record.bookTitle)} · ${t("pdfPage")} ${record.sourcePage}${record.ocr?" · OCR": ""}</p>${body}<nav class="lesson-nav">${previous?`<button type="button" data-open-lesson="${previous.id}"><small>${t("previousLesson")}</small>${escapeHTML(previous.title)}</button>`:"<span></span>"}${next?`<button type="button" data-open-lesson="${next.id}"><small>${t("nextLesson")}</small>${escapeHTML(next.title)}</button>`:""}</nav>`;
}

function completeCurrent() {
  const id=state.currentLesson.id;
  if(state.completed.has(id)) { state.completed.delete(id); showToast(t("unmarked")); }
  else { state.completed.add(id); state.history.push(dateKey()); showToast(t("marked")); }
  persist(); renderLesson();
}
function toggleCurrentReview() {
  const id=state.currentLesson.id;
  if(state.review.has(id)) { state.review.delete(id); showToast(t("removedReview")); }
  else { state.review.add(id); showToast(t("addedReview")); }
  persist(); renderLesson();
}

function reviewQueue() { return [...state.review].map(id=>state.records.find(r=>r.id===id)).filter(Boolean); }
function renderReview() {
  setView("review");
  history.replaceState(null,"","#review");
  const queue=reviewQueue();
  els.reviewCount.textContent=t("cards",{count:queue.length});
  if(!queue.length) { els.reviewStage.innerHTML=`<div class="empty-review"><h2>${t("reviewEmpty")}</h2><p>${t("reviewEmptyLong")}</p><button type="button" data-nav="paths">${t("choosePathAction")}</button></div>`; return; }
  if(state.reviewIndex>=queue.length) state.reviewIndex=0;
  const record=queue[state.reviewIndex],topic=topicFor(record);
  els.reviewStage.innerHTML=`<article class="review-card"><p class="review-meta">${escapeHTML(categoryName(record.category))} · ${escapeHTML(topicName(topic,record.category))} · ${state.reviewIndex+1}/${queue.length}</p><h2>${escapeHTML(record.title)}</h2>${state.reviewRevealed?`<div class="review-answer">${escapeHTML(record.content)}</div><div class="review-controls"><button class="again-button" type="button" data-review-again>${t("again")}</button><button class="known-button" type="button" data-review-known>${t("remembered")}</button></div>`:`<div class="review-prompt">${t("reviewPrompt")}</div><div class="review-controls"><button class="reveal-button" type="button" data-review-reveal>${t("revealAnswer")}</button></div>`}</article>`;
}

function openSearch() { els.searchDialog.showModal(); els.searchInput.value=""; els.searchResults.innerHTML=`<p class="search-hint">${t("searchHint")}</p>`; requestAnimationFrame(()=>els.searchInput.focus()); }
function renderSearch(query) {
  const normalized=normalize(query.trim());
  if(!normalized) { els.searchResults.innerHTML=`<p class="search-hint">${t("searchHint")}</p>`; return; }
  const matches=state.records.filter(r=>r._search.includes(normalized)).slice(0,20);
  els.searchResults.innerHTML=matches.length?matches.map(record=>`<button class="search-result" type="button" data-search-lesson="${record.id}"><span><strong>${escapeHTML(record.title)}</strong><small>${escapeHTML(categoryName(record.category))} · ${escapeHTML(topicName(topicFor(record),record.category))} · ${escapeHTML(levelName(record.level))}</small></span><span>→</span></button>`).join(""):`<p class="search-hint">${t("noSearchResults")}</p>`;
}

function mergeCloudProgress(remote) {
  if (!remote) return;
  const valid=new Set(state.records.map(record=>record.id));
  state.completed=new Set([...state.completed,...(remote.completed||[])].filter(id=>valid.has(id)));
  state.review=new Set([...state.review,...(remote.review||[])].filter(id=>valid.has(id)));
  state.history=[...new Set([...state.history,...(remote.history||[])])].slice(-120);
  state.last=remote.last && valid.has(remote.last)?remote.last:state.last;
  if (["en","tr","zh"].includes(remote.language)) state.lang=remote.language;
}

function initialize(data,cloud={enabled:false,progress:null},username) {
  loadLocalProgress(username);
  state.data=data; state.records=data.records;
  state.records.forEach(record=>{ record.title=repairWrappedTitle(record); record._search=normalize(`${record.title} ${record.bookTitle} ${record.category} ${record.level} ${record.content}`); });
  state.cloudEnabled=Boolean(cloud.enabled); mergeCloudProgress(cloud.progress);
  setSyncStatus("synced",t("syncDone"));
  if (!state.cloudEnabled) setSyncStatus("local",t("syncLocal"));
  els.loginView.hidden=true; els.appShell.hidden=false; window.scrollTo(0,0);
  applyLanguage({render:false});
  const lessonHash=location.hash.match(/^#lesson=(.+)$/);
  const route=new URLSearchParams(location.hash.replace(/^#/,""));
  const routeCategory=route.get("path"), routeLevel=route.get("level"), routeBook=route.get("library");
  if(lessonHash && state.records.some(r=>r.id===decodeURIComponent(lessonHash[1]))) openLesson(decodeURIComponent(lessonHash[1]));
  else if(location.hash==="#review") renderReview();
  else if(routeBook && state.data.books.some(book=>book.id===routeBook)) { state.bookId=routeBook; state.bookLimit=18; renderLibrary(); }
  else if(routeCategory && CATEGORY_META[routeCategory]) { state.category=routeCategory; state.level=LEVELS.includes(routeLevel)?routeLevel:"All"; state.topic=null; renderPath(); }
  else renderDashboard();
}

function lockLibrary() {
  clearTimeout(cloudSaveTimer); window.EKACloud?.signOut(); state.cloudEnabled=false; setSyncStatus("local",t("syncLocal"));
  state.data=null; state.records=[]; state.currentLesson=null; state.username=null; state.completed=new Set(); state.review=new Set(); state.history=[]; state.last=null;
  els.password.value=""; els.appShell.hidden=true; els.loginView.hidden=false;
  history.replaceState(null,"",location.pathname); window.scrollTo(0,0); requestAnimationFrame(()=>els.username.focus());
}

function bindEvents() {
  els.loginForm.addEventListener("submit",async event=>{
    event.preventDefault(); els.loginError.hidden=true; els.loginButton.disabled=true; els.loginButton.firstElementChild.textContent=t("verifying");
    try {
      const username=els.username.value.trim(), password=els.password.value;
      const [data,cloud]=await Promise.all([decryptLibrary(username,password),window.EKACloud.signIn(username,password)]);
      initialize(data,cloud,username); els.password.value="";
    }
    catch(error) { els.loginError.textContent=t("loginError"); els.loginError.hidden=false; els.password.select(); }
    finally { els.loginButton.disabled=false; els.loginButton.firstElementChild.textContent=t("enter"); }
  });
  els.togglePassword.addEventListener("click",()=>{ const shown=els.password.type==="text"; els.password.type=shown?"password":"text"; els.togglePassword.textContent=shown?t("show"):t("hide"); els.togglePassword.setAttribute("aria-label",shown?t("show"):t("hide")); });
  els.logout.addEventListener("click",lockLibrary);
  document.addEventListener("click",event=>{
    const nav=event.target.closest("[data-nav]");
    if(nav) { const target=nav.dataset.nav; if(target==="dashboard") renderDashboard(); if(target==="paths") { state.category="Grammar"; state.topic=null; state.level="All"; state.lessonLimit=12; renderPath(); } if(target==="library") { state.bookLimit=18; renderLibrary(); } if(target==="review") { state.reviewRevealed=false; renderReview(); } return; }
    const path=event.target.closest("[data-open-path]"); if(path) { state.category=path.dataset.openPath; state.topic=null; state.level="All"; state.lessonLimit=12; renderPath(); return; }
    const book=event.target.closest("[data-open-book]"); if(book) { state.bookId=book.dataset.openBook; state.bookLimit=18; renderLibrary(); requestAnimationFrame(()=>els.bookCurriculum.scrollIntoView({behavior:"smooth",block:"start"})); return; }
    const lesson=event.target.closest("[data-open-lesson]"); if(lesson) { openLesson(lesson.dataset.openLesson); return; }
    const level=event.target.closest("[data-level]"); if(level) { state.level=level.dataset.level; state.topic=null; state.lessonLimit=12; renderPath(); return; }
    const topic=event.target.closest("[data-topic]"); if(topic) { state.topic=topic.dataset.topic; state.lessonLimit=12; renderPath(); requestAnimationFrame(()=>$("#curriculumSection").scrollIntoView({behavior:"smooth",block:"start"})); return; }
    if(event.target.closest("[data-back-path]")) { state.category=state.currentLesson.category; state.topic=topicFor(state.currentLesson)[0]; state.level=state.currentLesson.level; state.lessonLimit=12; renderPath(); return; }
    if(event.target.closest("[data-back-library]")) { state.bookId=state.currentLesson.bookId; state.bookLimit=18; renderLibrary(); return; }
    if(event.target.closest("[data-toggle-recall]")) { state.recall=!state.recall; renderLesson(); return; }
    if(event.target.closest("[data-reveal-lesson]")) { state.recall=false; renderLesson(); return; }
    if(event.target.closest("[data-complete-lesson]")) { completeCurrent(); return; }
    if(event.target.closest("[data-toggle-review]")) { toggleCurrentReview(); return; }
    if(event.target.closest("[data-review-reveal]")) { state.reviewRevealed=true; renderReview(); return; }
    if(event.target.closest("[data-review-known]")) { const queue=reviewQueue(); const record=queue[state.reviewIndex]; if(record){ state.completed.add(record.id); state.review.delete(record.id); state.history.push(dateKey()); persist(); } state.reviewRevealed=false; renderReview(); return; }
    if(event.target.closest("[data-review-again]")) { state.reviewIndex=(state.reviewIndex+1)%reviewQueue().length; state.reviewRevealed=false; renderReview(); return; }
    const searchLesson=event.target.closest("[data-search-lesson]"); if(searchLesson) { els.searchDialog.close(); openLesson(searchLesson.dataset.searchLesson); }
  });
  document.querySelectorAll("[data-language]").forEach(button=>button.addEventListener("click",()=>{ state.lang=button.dataset.language; applyLanguage(); scheduleCloudSave(); }));
  els.showMore.addEventListener("click",()=>{ state.lessonLimit+=12; renderCurriculum(); });
  els.showMoreBook.addEventListener("click",()=>{ state.bookLimit+=18; renderBookCurriculum(); });
  els.openSearch.addEventListener("click",openSearch); els.closeSearch.addEventListener("click",()=>els.searchDialog.close());
  els.searchInput.addEventListener("input",event=>renderSearch(event.target.value));
  els.searchDialog.addEventListener("click",event=>{ if(event.target===els.searchDialog) els.searchDialog.close(); });
  document.addEventListener("keydown",event=>{ if(!state.data)return; if(event.key==="/"&&!els.searchDialog.open){event.preventDefault();openSearch();} if(event.key==="Escape"&&els.searchDialog.open)els.searchDialog.close(); });
}

applyLanguage({render:false});
bindEvents(); els.username.focus();
