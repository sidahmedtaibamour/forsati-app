(() => {
"use strict";

/* ---------- translations ---------- */
const T = {
  ar: {
    brand: "فرصتي", tabAll: "الفرص", tabSaved: "المحفوظات", tabAccount: "حسابي",
    settings: "الإعدادات", settingsLead: "اجعل فرصتي كما تحب.", language: "اللغة", appearance: "المظهر", themeSystem: "تلقائي", themeLight: "فاتح", themeDark: "داكن (ليلي)",
    textSize: "حجم الخط", sizeS: "صغير", sizeM: "عادي", sizeL: "كبير", interests: "ماذا تريد أن ترى؟", interestsHint: "اختر الأنواع التي تهمك فقط، أو اتركها على كل الفرص.", interestsAll: "كل الفرص",
    defaultCountry: "الدولة الافتراضية", syncAccount: "إعداداتك محفوظة في حسابك وتتبعك على كل أجهزتك.", syncDevice: "إعداداتك محفوظة على هذا الجهاز. سجّل الدخول لتتبعك على كل أجهزتك.", done: "تم",
    forYou: "مخصّص لك", showAll: "عرض كل الفرص", showMine: "عرض ما يهمني",
    dashTitle: "لوحة التحكم", hello: (n) => `أهلًا ${n}`, statSaved: "المحفوظات", statNew: "جديد لك (3 أيام)", statSoon: "تنتهي خلال أسبوع", soonTitle: "محفوظات تنتهي قريبًا", noSoon: "لا شيء من محفوظاتك ينتهي قريبًا.",
    goSaved: "محفوظاتي", goSettings: "الإعدادات",
    tabAbout: "عن فرصتي", netOff: "أنت غير متصل بالإنترنت", netOn: "أنت متصل بالإنترنت", translate: "ترجمة", trNote: (l) => `ترجمة آلية إلى ${l}`, trOriginal: "عرض الأصل", trGoogle: "Google Translate", trFail: "تعذّرت الترجمة الآن. جرّب Google Translate.", trSame: "النص بهذه اللغة أصلًا.", trWait: "جارٍ الترجمة…", tabNews: "الأخبار", news: "أخبار", contact: "للتواصل:", killTitle: "التطبيق متوقف مؤقتًا", killText: "نعمل على أمر ما. عد بعد قليل.", privacy: "سياسة الخصوصية", builtBy: "تطبيق مصمم ومطور من", installTitle: "ثبّت التطبيق على هاتفك", installText: "على iPhone: افتح الموقع في Safari ثم زر المشاركة ثم «إضافة إلى الشاشة الرئيسية». على أندرويد: قائمة المتصفح (⋮) ثم «تثبيت التطبيق».",
    consent: "بالمتابعة فأنت توافق على", suggest: ["أساتذة", "إداري", "الجيش", "الدرك", "الشرطة", "تكوين مهني", "منحة", "عن بعد"],
    about: {
      title: "عن فرصتي",
      intro: "فرصتي (FORSATI) منصة تجمع الفرص المهمة في مكان واحد، لتسهّل على المستخدمين في الجزائر أولًا، ثم في الدول العربية، الوصول إلى الفرص التي تساعدهم على تطوير مستقبلهم الدراسي والمهني.",
      intro2: "تجمع المنصة الفرص من مصادر معلنة وتصنّفها وتحدّثها تلقائيًا قدر الإمكان، حتى تجد ما يناسبك دون البحث في عشرات المواقع والصفحات.",
      featuresTitle: "أهم مميزات المنصة",
      features: [["فرص العمل", "إعلانات التوظيف والمسابقات المهنية."], ["المنح الدراسية", "المنح الجامعية وفرص الدراسة داخل الوطن وخارجه."], ["التعليم", "فرص الدراسة والتسجيل والتكوين."], ["المسابقات", "المسابقات العلمية والثقافية والتقنية وغيرها."], ["التدريب", "فرص التدريب والتربص واكتساب الخبرة."], ["الأدوات الرقمية", "أدوات وخدمات مفيدة للدراسة والعمل والإنتاجية."]],
      uxTitle: "تجربة استخدام سهلة",
      ux: ["واجهة منظمة وسهلة الاستخدام.", "دعم العربية والفرنسية والإنجليزية.", "البحث عن الفرص وتصنيفها حسب نوعها.", "تقليل الفرص المكررة وإخفاء المنتهية وفق قواعد التحديث.", "رابط المصدر الأصلي مع كل فرصة، لتتأكد منه قبل التقديم.", "تحديث دوري للبيانات عبر نظام آلي."],
      visionTitle: "رؤيتنا",
      vision: "نسعى إلى جعل فرصتي وجهة موثوقة للباحثين عن الفرص، ومصدرًا يساعد الشباب والطلاب والباحثين عن العمل على اكتشاف إمكانيات جديدة وبناء مستقبل أفضل.",
      tagline: "فرصتك تبدأ من هنا.",
    },

    title: "اكتشف فرصتك القادمة",
    lead: "وظائف ومسابقات ومنح وتكوين من مصادرها الأصلية، في مكان واحد. تُحدَّث تلقائيًا وتختفي الفرصة عند انتهائها.",
    search: "ابحث في العناوين والتفاصيل", countryAll: "كل الدول", DZ: "الجزائر", INT: "دولي",
    sortNew: "الأحدث أولًا", sortDeadline: "الأقرب موعدًا", costAll: "كل الأسعار", free: "مجاني", paid: "مدفوع",
    all: "الكل", jobs: "وظائف", education: "تعليم", scholarships: "منح", competitions: "مسابقات", training: "تدريب", tools: "أدوات",
    count: (n) => (n === 1 ? "فرصة واحدة" : `${n} فرصة`), updated: (x) => `آخر تحديث ${x}`, noUpdate: "الجلب التلقائي لم يبدأ بعد",
    justNow: "الآن", hrs: (n) => (n === 1 ? "قبل ساعة" : n === 2 ? "قبل ساعتين" : n <= 10 ? `قبل ${n} ساعات` : `قبل ${n} ساعة`),
    open: "فتح المصدر", save: "حفظ", unsave: "إزالة من المحفوظات", share: "مشاركة", copied: "تم نسخ الرابط",
    saveHint: "حُفظت على هذا الجهاز. سجّل الدخول حتى لا تضيع محفوظاتك.",
    today: "ينتهي اليوم", tomorrow: "ينتهي غدًا",
    left: (n) => (n === 2 ? "باقي يومان" : n <= 10 ? `باقي ${n} أيام` : `باقي ${n} يومًا`),
    expired: "انتهت", gone: "لم تعد متاحة", noDeadline: "لا موعد معلن",
    agoToday: "نُشرت اليوم", agoYesterday: "نُشرت أمس", ago: (n) => (n === 2 ? "نُشرت قبل يومين" : n <= 10 ? `نُشرت قبل ${n} أيام` : `نُشرت قبل ${n} يومًا`),
    emptyTitle: "لا نتائج مطابقة", emptyText: "غيّر الكلمة أو التصنيف أو الدولة.",
    emptyAllTitle: "لا توجد فرص بعد", emptyAllText: "يبدأ الجلب التلقائي قريبًا. ستظهر الفرص هنا بمجرد جمعها.",
    emptySavedTitle: "لا شيء محفوظ بعد", emptySavedText: "اضغط على أيقونة الحفظ في أي فرصة لتجدها هنا.",
    loadErr: "تعذر تحميل الفرص", retry: "إعادة المحاولة",
    footer: "تُجمع الفرص من مصادرها الأصلية، وتأكد دائمًا من التفاصيل في المصدر قبل التقديم. لا تدفع رسومًا مقابل وظيفة أو جائزة.",
    login: "دخول", account: "حسابي",
    loginTitle: "تسجيل الدخول", loginLead: "حساب واحد لكل أجهزتك. محفوظاتك تبقى معك ولا تضيع.",
    signupTitle: "إنشاء حساب", signupLead: "أنشئ حسابًا لتحتفظ بمحفوظاتك على كل أجهزتك.",
    resetTitle: "استعادة كلمة المرور", resetLead: "سنرسل إلى بريدك رابطًا لتعيين كلمة مرور جديدة.",
    recoveryTitle: "كلمة مرور جديدة", recoveryLead: "اختر كلمة مرور جديدة لحسابك.",
    accountTitle: "حسابي", accountLead: "حسابك يحفظ المحفوظات ويزامنها بين أجهزتك.",
    google: "المتابعة بحساب Google", or: "أو", email: "البريد الإلكتروني", password: "كلمة المرور (8 أحرف على الأقل)",
    newPassword: "كلمة المرور الجديدة", savePassword: "حفظ كلمة المرور",
    submitLogin: "تسجيل الدخول", submitSignup: "إنشاء الحساب", submitReset: "أرسل رابط الاستعادة",
    forgot: "نسيت كلمة المرور؟", toSignup: "إنشاء حساب جديد", toLogin: "لدي حساب",
    linkGoogle: "ربط حساب Google", logout: "تسجيل الخروج", linked: "مرتبط", pwd: "كلمة مرور",
    errEmail: "اكتب بريدًا إلكترونيًا صحيحًا.", errPw: "كلمة المرور يجب ألا تقل عن 8 أحرف.",
    errBad: "البريد أو كلمة المرور غير صحيحة.", errExists: "هذا البريد مسجَّل بالفعل. سجّل الدخول.",
    errConfirm: "أكّد بريدك أولًا من الرسالة التي وصلتك.", errRate: "محاولات كثيرة. انتظر قليلًا ثم أعد المحاولة.",
    errGeneric: "حدث خطأ", errSync: "تعذرت المزامنة مع حسابك. حاول لاحقًا.",
    errOff: "خدمة الحسابات غير مفعّلة بعد في هذا الموقع.",
    okConfirm: "أرسلنا رابط التأكيد إلى بريدك. افتحه ثم عد لتسجيل الدخول.", okReset: "إن كان البريد مسجَّلًا فقد أرسلنا إليه الرابط.",
    okPassword: "تم تغيير كلمة المرور.", okLogged: "تم تسجيل الدخول", okOut: "تم تسجيل الخروج",
  },
  fr: {
    brand: "Forsati", tabAll: "Offres", tabSaved: "Enregistrées", tabAccount: "Compte",
    settings: "Réglages", settingsLead: "Personnalisez Forsati.", language: "Langue", appearance: "Apparence", themeSystem: "Auto", themeLight: "Clair", themeDark: "Sombre (nuit)",
    textSize: "Taille du texte", sizeS: "Petit", sizeM: "Normal", sizeL: "Grand", interests: "Que voulez-vous voir ?", interestsHint: "Choisissez seulement les types qui vous intéressent, ou laissez tout.", interestsAll: "Toutes les offres",
    defaultCountry: "Pays par défaut", syncAccount: "Vos réglages sont enregistrés dans votre compte et vous suivent sur tous vos appareils.", syncDevice: "Vos réglages sont enregistrés sur cet appareil. Connectez-vous pour les retrouver partout.", done: "OK",
    forYou: "Pour vous", showAll: "Tout afficher", showMine: "Mes centres d'intérêt",
    dashTitle: "Tableau de bord", hello: (n) => `Bonjour ${n}`, statSaved: "Enregistrées", statNew: "Nouveautés (3 jours)", statSoon: "Expirent sous 7 jours", soonTitle: "Enregistrées qui expirent bientôt", noSoon: "Rien d'enregistré n'expire bientôt.",
    goSaved: "Mes enregistrées", goSettings: "Réglages",
    tabAbout: "À propos", netOff: "Vous êtes hors ligne", netOn: "Vous êtes de nouveau en ligne", translate: "Traduire", trNote: (l) => `Traduction automatique en ${l}`, trOriginal: "Voir l'original", trGoogle: "Google Traduction", trFail: "Traduction indisponible. Essayez Google Traduction.", trSame: "Le texte est déjà dans cette langue.", trWait: "Traduction…", tabNews: "Actualités", news: "Actualités", contact: "Contact :", killTitle: "Application temporairement suspendue", killText: "Nous travaillons dessus. Revenez bientôt.", privacy: "Politique de confidentialité", builtBy: "Application conçue et développée par", installTitle: "Installez l'application", installText: "Sur iPhone : ouvrez le site dans Safari, touchez Partager puis « Sur l'écran d'accueil ». Sur Android : menu du navigateur (⋮) puis « Installer l'application ».",
    consent: "En continuant, vous acceptez la", suggest: ["enseignants", "administratif", "armée", "gendarmerie", "police", "formation professionnelle", "bourse", "télétravail"],
    about: {
      title: "À propos de Forsati",
      intro: "FORSATI (فرصتي) réunit les opportunités importantes au même endroit pour aider les utilisateurs en Algérie d'abord, puis dans les pays arabes, à trouver ce qui fait avancer leur avenir d'études et de carrière.",
      intro2: "La plateforme collecte les opportunités depuis des sources publiques, les classe et les met à jour automatiquement autant que possible, pour vous éviter de fouiller des dizaines de sites et de pages.",
      featuresTitle: "Principales fonctionnalités",
      features: [["Emplois", "Annonces de recrutement et concours professionnels."], ["Bourses", "Bourses universitaires et études au pays comme à l'étranger."], ["Éducation", "Études, inscriptions et formations."], ["Concours", "Concours scientifiques, culturels, techniques et autres."], ["Stages", "Stages et formations pour acquérir de l'expérience."], ["Outils numériques", "Outils et services utiles pour les études, le travail et la productivité."]],
      uxTitle: "Une expérience simple",
      ux: ["Interface claire et facile à utiliser.", "Arabe, français et anglais.", "Recherche et classement par type d'opportunité.", "Moins de doublons ; les offres expirées disparaissent selon des règles de mise à jour.", "Lien vers la source d'origine pour chaque offre, à vérifier avant de postuler.", "Mise à jour régulière par un système automatique."],
      visionTitle: "Notre vision",
      vision: "Faire de FORSATI une destination de confiance pour ceux qui cherchent des opportunités, et aider les jeunes, les étudiants et les chercheurs d'emploi à découvrir de nouvelles possibilités et à construire un meilleur avenir.",
      tagline: "FORSATI – votre opportunité commence ici.",
    },

    title: "Découvrez votre prochaine opportunité",
    lead: "Emplois, concours, bourses et formations depuis leurs sources d'origine, au même endroit. Mise à jour automatique : une offre disparaît quand elle expire.",
    search: "Rechercher dans les titres et détails", countryAll: "Tous les pays", DZ: "Algérie", INT: "International",
    sortNew: "Plus récentes", sortDeadline: "Date limite proche", costAll: "Tous prix", free: "Gratuit", paid: "Payant",
    all: "Tout", jobs: "Emplois", education: "Éducation", scholarships: "Bourses", competitions: "Concours", training: "Formation", tools: "Outils",
    count: (n) => `${n} offre${n > 1 ? "s" : ""}`, updated: (x) => `Mis à jour ${x}`, noUpdate: "La collecte automatique n'a pas encore démarré",
    justNow: "à l'instant", hrs: (n) => `il y a ${n} h`,
    open: "Ouvrir la source", save: "Enregistrer", unsave: "Retirer des enregistrées", share: "Partager", copied: "Lien copié",
    saveHint: "Enregistrée sur cet appareil. Connectez-vous pour ne pas la perdre.",
    today: "Se termine aujourd'hui", tomorrow: "Se termine demain", left: (n) => `Plus que ${n} jours`,
    expired: "Expirée", gone: "Plus disponible", noDeadline: "Pas de date limite",
    agoToday: "Publiée aujourd'hui", agoYesterday: "Publiée hier", ago: (n) => `Publiée il y a ${n} jours`,
    emptyTitle: "Aucun résultat", emptyText: "Modifiez le mot, la catégorie ou le pays.",
    emptyAllTitle: "Aucune offre pour l'instant", emptyAllText: "La collecte automatique démarre bientôt.",
    emptySavedTitle: "Rien d'enregistré", emptySavedText: "Touchez l'icône d'enregistrement d'une offre pour la retrouver ici.",
    loadErr: "Impossible de charger les offres", retry: "Réessayer",
    footer: "Les offres viennent de leurs sources d'origine : vérifiez toujours les détails avant de postuler. Ne payez jamais de frais pour un emploi ou un prix.",
    login: "Connexion", account: "Compte",
    loginTitle: "Connexion", loginLead: "Un compte pour tous vos appareils. Vos offres enregistrées vous suivent.",
    signupTitle: "Créer un compte", signupLead: "Créez un compte pour garder vos offres sur tous vos appareils.",
    resetTitle: "Mot de passe oublié", resetLead: "Nous enverrons un lien pour choisir un nouveau mot de passe.",
    recoveryTitle: "Nouveau mot de passe", recoveryLead: "Choisissez un nouveau mot de passe.",
    accountTitle: "Mon compte", accountLead: "Votre compte synchronise vos offres enregistrées entre vos appareils.",
    google: "Continuer avec Google", or: "ou", email: "E-mail", password: "Mot de passe (8 caractères min.)",
    newPassword: "Nouveau mot de passe", savePassword: "Enregistrer",
    submitLogin: "Se connecter", submitSignup: "Créer le compte", submitReset: "Envoyer le lien",
    forgot: "Mot de passe oublié ?", toSignup: "Créer un compte", toLogin: "J'ai un compte",
    linkGoogle: "Lier un compte Google", logout: "Se déconnecter", linked: "lié", pwd: "Mot de passe",
    errEmail: "Saisissez un e-mail valide.", errPw: "Le mot de passe doit faire au moins 8 caractères.",
    errBad: "E-mail ou mot de passe incorrect.", errExists: "Cet e-mail est déjà inscrit. Connectez-vous.",
    errConfirm: "Confirmez d'abord votre e-mail via le message reçu.", errRate: "Trop de tentatives. Patientez un peu.",
    errGeneric: "Une erreur est survenue", errSync: "Synchronisation impossible. Réessayez plus tard.",
    errOff: "Les comptes ne sont pas encore activés sur ce site.",
    okConfirm: "Lien de confirmation envoyé. Ouvrez-le puis reconnectez-vous.", okReset: "Si cet e-mail existe, le lien a été envoyé.",
    okPassword: "Mot de passe modifié.", okLogged: "Connecté", okOut: "Déconnecté",
  },
  en: {
    brand: "Forsati", tabAll: "Listings", tabSaved: "Saved", tabAccount: "Account",
    settings: "Settings", settingsLead: "Make Forsati yours.", language: "Language", appearance: "Appearance", themeSystem: "Auto", themeLight: "Light", themeDark: "Dark (night)",
    textSize: "Text size", sizeS: "Small", sizeM: "Normal", sizeL: "Large", interests: "What do you want to see?", interestsHint: "Pick only the types you care about, or leave it on everything.", interestsAll: "All listings",
    defaultCountry: "Default country", syncAccount: "Your settings are saved to your account and follow you across devices.", syncDevice: "Your settings are saved on this device. Sign in to keep them everywhere.", done: "Done",
    forYou: "For you", showAll: "Show everything", showMine: "Show my interests",
    dashTitle: "Dashboard", hello: (n) => `Hello ${n}`, statSaved: "Saved", statNew: "New for you (3 days)", statSoon: "Ending within a week", soonTitle: "Saved listings ending soon", noSoon: "Nothing you saved ends soon.",
    goSaved: "My saved", goSettings: "Settings",
    tabAbout: "About", netOff: "You are offline", netOn: "You are back online", translate: "Translate", trNote: (l) => `Machine translation into ${l}`, trOriginal: "Show original", trGoogle: "Google Translate", trFail: "Translation unavailable. Try Google Translate.", trSame: "The text is already in that language.", trWait: "Translating…", tabNews: "News", news: "News", contact: "Contact:", killTitle: "App temporarily paused", killText: "We are working on it. Please come back soon.", privacy: "Privacy policy", builtBy: "App designed and developed by", installTitle: "Install the app", installText: "On iPhone: open the site in Safari, tap Share, then “Add to Home Screen”. On Android: browser menu (⋮), then “Install app”.",
    consent: "By continuing you agree to the", suggest: ["teachers", "admin", "army", "gendarmerie", "police", "vocational", "scholarship", "remote"],
    about: {
      title: "About Forsati",
      intro: "FORSATI (فرصتي) gathers important opportunities in one place, helping users in Algeria first, then across the Arab world, find what moves their studies and careers forward.",
      intro2: "The platform collects opportunities from public sources, sorts them and updates them automatically as far as possible, so you don't have to search dozens of sites and pages.",
      featuresTitle: "Key features",
      features: [["Jobs", "Hiring announcements and professional competitions."], ["Scholarships", "University scholarships and study opportunities at home and abroad."], ["Education", "Study, enrollment and training opportunities."], ["Competitions", "Scientific, cultural, technical and other competitions."], ["Training", "Training and internship opportunities to gain experience."], ["Digital tools", "Useful tools and services for study, work and productivity."]],
      uxTitle: "Easy to use",
      ux: ["A clean, organized interface.", "Arabic, French and English.", "Search and sort opportunities by type.", "Fewer duplicates, and expired listings are hidden by update rules.", "A link to the original source on every listing, to check before applying.", "Regular updates through an automated system."],
      visionTitle: "Our vision",
      vision: "To make FORSATI a trusted destination for people looking for opportunities, helping young people, students and job seekers discover new possibilities and build a better future.",
      tagline: "FORSATI – your opportunity starts here.",
    },

    title: "Discover your next opportunity",
    lead: "Jobs, competitions, scholarships and training from their original sources, in one place. Updated automatically; listings disappear when they expire.",
    search: "Search titles and details", countryAll: "All countries", DZ: "Algeria", INT: "International",
    sortNew: "Newest first", sortDeadline: "Closest deadline", costAll: "Any price", free: "Free", paid: "Paid",
    all: "All", jobs: "Jobs", education: "Education", scholarships: "Scholarships", competitions: "Competitions", training: "Training", tools: "Tools",
    count: (n) => `${n} listing${n === 1 ? "" : "s"}`, updated: (x) => `Updated ${x}`, noUpdate: "Automatic collection hasn't started yet",
    justNow: "just now", hrs: (n) => `${n}h ago`,
    open: "Open source", save: "Save", unsave: "Remove from saved", share: "Share", copied: "Link copied",
    saveHint: "Saved on this device. Sign in so you don't lose it.",
    today: "Ends today", tomorrow: "Ends tomorrow", left: (n) => `${n} days left`,
    expired: "Expired", gone: "No longer available", noDeadline: "No deadline listed",
    agoToday: "Posted today", agoYesterday: "Posted yesterday", ago: (n) => `Posted ${n} days ago`,
    emptyTitle: "No matches", emptyText: "Change the keyword, category or country.",
    emptyAllTitle: "No listings yet", emptyAllText: "Automatic collection starts soon.",
    emptySavedTitle: "Nothing saved yet", emptySavedText: "Tap the save icon on any listing to keep it here.",
    loadErr: "Couldn't load listings", retry: "Try again",
    footer: "Listings come from their original sources. Always check the details there before applying. Never pay a fee for a job or a prize.",
    login: "Sign in", account: "Account",
    loginTitle: "Sign in", loginLead: "One account for all your devices. Your saved listings stay with you.",
    signupTitle: "Create account", signupLead: "Create an account to keep your saved listings on every device.",
    resetTitle: "Reset password", resetLead: "We'll email you a link to choose a new password.",
    recoveryTitle: "New password", recoveryLead: "Choose a new password for your account.",
    accountTitle: "My account", accountLead: "Your account saves your listings and syncs them across devices.",
    google: "Continue with Google", or: "or", email: "Email", password: "Password (min. 8 characters)",
    newPassword: "New password", savePassword: "Save password",
    submitLogin: "Sign in", submitSignup: "Create account", submitReset: "Send reset link",
    forgot: "Forgot password?", toSignup: "Create a new account", toLogin: "I have an account",
    linkGoogle: "Link a Google account", logout: "Sign out", linked: "linked", pwd: "Password",
    errEmail: "Enter a valid email.", errPw: "Password must be at least 8 characters.",
    errBad: "Wrong email or password.", errExists: "This email is already registered. Sign in.",
    errConfirm: "Confirm your email first using the message we sent.", errRate: "Too many attempts. Wait a moment.",
    errGeneric: "Something went wrong", errSync: "Couldn't sync with your account. Try again later.",
    errOff: "Accounts aren't enabled on this site yet.",
    okConfirm: "Confirmation link sent. Open it, then sign in.", okReset: "If that email exists, the link has been sent.",
    okPassword: "Password changed.", okLogged: "Signed in", okOut: "Signed out",
  },
};
const CATS = ["jobs", "education", "scholarships", "competitions", "training", "tools"];
const S = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const CAT_ICON = {
  jobs: S('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>'),
  education: S('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M6.5 17A2.5 2.5 0 0 0 4 19.5V21h16"/>'),
  scholarships: S('<path d="M22 9 12 4 2 9l10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6"/>'),
  competitions: S('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>'),
  training: S('<path d="M9 4h6v3H9z"/><path d="M7 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1"/><path d="m9 14 2 2 4-4"/>'),
  tools: S('<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>'),
  news: S('<path d="M4 5h13v14H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v8a2 2 0 0 1-2 2M7 9h7M7 13h7M7 16h4"/>'),
};
const LANG_NAME = { ar: "العربية", en: "English", fr: "Français" };
const ICON = {
  tr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h8M8 3v2M5 5c1 4 4 7 7 8M11 5c-1 4-4 7-8 9"/><path d="m13 21 4-9 4 9M14.5 18h5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-9-9.2C1.8 7.6 3.7 4.5 7 4.5c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.3 0 5.2 3.1 4 6.3-2 4.8-9 9.2-9 9.2z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
};

/* ---------- state & helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};
const state = {
  lang: T[store.get("forsati-lang")] ? store.get("forsati-lang") : "ar",
  cat: "all", country: "all", cost: "all", sort: "new", q: "", tab: "all",
  items: [], base: [], manual: [], hidden: new Set(), updatedAt: null, loaded: false, failed: false, favs: new Map(),
  showAll: false, tr: {}, trOpen: null, trBusy: false,
  prefs: { theme: "system", fs: "m", cats: null, country: "all" },
};
const PREF_DEF = { theme: "system", fs: "m", cats: null, country: "all" };
function sanitizePrefs(p = {}) {
  const o = { ...PREF_DEF, ...p };
  if (!["system", "light", "dark"].includes(o.theme)) o.theme = "system";
  if (!["s", "m", "l"].includes(o.fs)) o.fs = "m";
  o.cats = Array.isArray(o.cats) ? o.cats.filter((c) => CATS.includes(c)) : null;
  if (o.cats && (!o.cats.length || o.cats.length === CATS.length)) o.cats = null;
  if (typeof o.country !== "string") o.country = "all";
  return { theme: o.theme, fs: o.fs, cats: o.cats, country: o.country };
}
try { state.prefs = sanitizePrefs(JSON.parse(store.get("forsati-prefs") || "{}")); } catch { state.prefs = { ...PREF_DEF }; }
state.country = state.prefs.country;
function applyPrefs() {
  const r = document.documentElement;
  if (state.prefs.theme === "system") r.removeAttribute("data-theme"); else r.dataset.theme = state.prefs.theme;
  r.dataset.fs = state.prefs.fs;
}
applyPrefs();
const t = (k, ...a) => { const v = T[state.lang][k] ?? T.ar[k] ?? k; return typeof v === "function" ? v(...a) : v; };
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const safeUrl = (u) => (/^https:\/\//i.test(u) ? u : "#");
const fold = (s = "") => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\u064B-\u065F]/g, "").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي");
const todayUTC = () => { const n = new Date(); return Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()); };
const daysTo = (iso) => { const [y, m, d] = iso.slice(0, 10).split("-").map(Number); return Math.round((Date.UTC(y, m - 1, d) - todayUTC()) / 864e5); };
const pubTime = (it) => Date.parse(it.published_at || it.first_seen || it.saved_at || 0) || 0;
const isExpired = (it) => Boolean(it.deadline) && daysTo(it.deadline) < 0;
let toastTimer;
function toast(msg) {
  const el = $("#toast"); el.textContent = msg; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 3200);
}
function countryLabel(c) {
  if (T[state.lang][c]) return t(c);
  try { return new Intl.DisplayNames([state.lang], { type: "region" }).of(c) || c; } catch { return c; }
}
function agoLabel(it) {
  const ms = Date.parse(it.published_at || it.first_seen || "");
  if (!ms) return "";
  const d = Math.floor((todayUTC() - Date.UTC(new Date(ms).getFullYear(), new Date(ms).getMonth(), new Date(ms).getDate())) / 864e5);
  return d <= 0 ? t("agoToday") : d === 1 ? t("agoYesterday") : t("ago", d);
}
function updatedLabel() {
  if (!state.updatedAt) return t("noUpdate");
  const h = Math.floor((Date.now() - Date.parse(state.updatedAt)) / 36e5);
  if (h < 1) return t("updated", t("justNow"));
  if (h < 24) return t("updated", t("hrs", h));
  return t("updated", new Date(state.updatedAt).toLocaleDateString(state.lang, { day: "numeric", month: "long" }));
}

/* ---------- favorites (guest: this device; signed in: account) ---------- */
const loadLocal = () => {
  try { return new Map(JSON.parse(store.get("forsati-fav") || "[]").map((s) => [s.id, s])); } catch { return new Map(); }
};
const saveLocal = (m) => store.set("forsati-fav", JSON.stringify([...m.values()]));
const snap = (it) => ({ id: it.id, title: it.title, category: it.category, country: it.country, source: it.source, url: it.url, deadline: it.deadline || null, cost: it.cost || null, published_at: it.published_at || null, saved_at: new Date().toISOString() });
const lookup = (id) => state.items.find((x) => x.id === id) || state.favs.get(id);
let hintShown = false, lastUid = null;

async function toggleFav(id) {
  const it = lookup(id); if (!it) return;
  const had = state.favs.has(id);
  if (had) state.favs.delete(id); else state.favs.set(id, snap(it));
  render();
  const u = Auth.user;
  if (!u) {
    saveLocal(state.favs);
    if (!had && Auth.configured && !hintShown) { hintShown = true; toast(t("saveHint")); }
    return;
  }
  try {
    const q = Auth.client.from("user_favorites");
    const { error } = had
      ? await q.delete().eq("user_id", u.id).eq("opportunity_id", id)
      : await q.upsert({ user_id: u.id, opportunity_id: id, data: state.favs.get(id) }, { onConflict: "user_id,opportunity_id" });
    if (error) throw error;
  } catch (e) {
    console.error(e);
    if (had) state.favs.set(id, snap(it)); else state.favs.delete(id);
    render(); toast(t("errSync"));
  }
}
async function syncFavs(user) {
  if (!user) { lastUid = null; state.favs = loadLocal(); return; }
  if (lastUid === user.id) return;
  lastUid = user.id;
  try {
    const { data, error } = await Auth.client.from("user_favorites").select("opportunity_id,data,created_at");
    if (error) throw error;
    const m = new Map(data.map((r) => [r.opportunity_id, { ...r.data, id: r.opportunity_id, saved_at: r.data?.saved_at || r.created_at }]));
    const push = [];
    for (const [id, s] of loadLocal()) if (!m.has(id)) { m.set(id, s); push.push({ user_id: user.id, opportunity_id: id, data: s }); }
    if (push.length) {
      const { error: e2 } = await Auth.client.from("user_favorites").upsert(push, { onConflict: "user_id,opportunity_id" });
      if (e2) throw e2;
    }
    saveLocal(new Map());
    state.favs = m;
  } catch (e) { console.error(e); toast(t("errSync")); state.favs = loadLocal(); }
}

/* ---------- data ---------- */
async function load() {
  state.failed = false;
  try {
    const r = await fetch("opportunities.json", { cache: "no-cache" });
    if (!r.ok) throw new Error(r.status);
    const j = await r.json();
    state.base = Array.isArray(j.items) ? j.items : [];
    state.updatedAt = j.updated_at || null;
  } catch (e) { console.error(e); state.failed = true; }
  state.loaded = true;
  rebuildItems(); buildSelects(); render();
}
function rebuildItems() { state.items = [...state.manual, ...state.base].filter((it) => !state.hidden.has(it.id)); }
// Curated additions and removals published from the management side (read-only here).
async function loadRemote() {
  if (!Auth.client) return;
  try {
    const [m, h] = await Promise.all([
      Auth.client.from("manual_items").select("*").order("created_at", { ascending: false }).limit(200),
      Auth.client.from("hidden_items").select("id"),
    ]);
    if (!m.error && m.data) state.manual = m.data.map((r) => ({ id: "m:" + r.id, title: r.title, summary: r.summary || "", category: r.category, country: r.country || "DZ", source: r.source || "", url: r.url, deadline: r.deadline || null, cost: r.cost || null, published_at: r.created_at, manual: true }));
    if (!h.error && h.data) state.hidden = new Set(h.data.map((r) => r.id));
    rebuildItems(); buildSelects(); render();
    const k = await Auth.client.from("app_settings").select("value").eq("key", "kill").maybeSingle();
    if (!k.error && k.data && k.data.value && k.data.value.on === true) showKill(k.data.value.message);
  } catch (e) { console.error(e); }
}
function showKill(message) {
  if ($("#kill")) return;
  const d = document.createElement("div"); d.id = "kill"; d.setAttribute("role", "alert");
  d.innerHTML = `<div><img src="icon-192.png" alt="" width="84" height="84"><h1>${esc(t("killTitle"))}</h1><p>${esc(message || t("killText"))}</p></div>`;
  document.body.appendChild(d);
}

/* ---------- translation (free MyMemory API; Google Translate link as fallback) ---------- */
function isArabicText(it) {
  const s = String(it.title || "");
  const ar = (s.match(/[\u0600-\u06FF]/g) || []).length, letters = (s.match(/[A-Za-z\u00C0-\u017F\u0600-\u06FF]/g) || []).length;
  return letters > 0 && ar / letters >= 0.4;
}
function srcLang(it) {
  if (it.lang === "fr" || it.lang === "en") return it.lang;
  const s = ` ${it.title} ${it.summary || ""} `.toLowerCase();
  return /[àâçéèêëîïôûùüÿœ]| (le|la|les|des|pour|et|du|un|une) /.test(s) ? "fr" : "en";
}
function chunks(text, max = 450) {
  const out = []; let rest = text.trim();
  while (rest.length > max) {
    let i = Math.max(rest.lastIndexOf(". ", max), rest.lastIndexOf(" ", max));
    if (i < 100) i = max;
    out.push(rest.slice(0, i + 1).trim()); rest = rest.slice(i + 1).trim();
  }
  if (rest) out.push(rest);
  return out;
}
async function machineTranslate(text, from, to) {
  if (!text) return "";
  const parts = [];
  for (const c of chunks(text)) {
    const r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(c)}&langpair=${from}|${to}`);
    const j = await r.json();
    const out = j && j.responseData && j.responseData.translatedText;
    if (!r.ok || !out || /MYMEMORY WARNING|INVALID/i.test(out) || String(j.responseStatus) !== "200") throw new Error("mt");
    parts.push(out);
  }
  return parts.join(" ");
}
async function translateItem(id, to) {
  const it = lookup(id); if (!it || state.trBusy) return;
  const from = srcLang(it);
  if (from === to) { toast(t("trSame")); return; }
  state.trBusy = true; toast(t("trWait"));
  try {
    const [title, summary] = [await machineTranslate(it.title, from, to), await machineTranslate(it.summary || "", from, to)];
    state.tr[id] = { lang: to, title, summary };
    state.trOpen = null;
    $("#toast").hidden = true;
  } catch (e) { console.error(e); toast(t("trFail")); }
  state.trBusy = false; render();
}
function trMenu(it) {
  const from = srcLang(it);
  const gl = (to) => `https://translate.google.com/?sl=auto&tl=${to}&text=${encodeURIComponent(`${it.title}\n\n${it.summary || ""}`.slice(0, 1500))}&op=translate`;
  return `<div class="tr-menu">${["ar", "en", "fr"].filter((l) => l !== from).map((l) => `<button type="button" data-trl="${l}" data-id="${esc(it.id)}">${LANG_NAME[l]}</button>`).join("")}
    <a href="${esc(gl(from === "ar" ? "en" : "ar"))}" target="_blank" rel="noopener noreferrer">${esc(t("trGoogle"))}</a></div>`;
}

/* ---------- countries: names, search aliases, continents ---------- */
const CONT = {
  europe: { names: ["europe", "أوروبا", "اوروبا"], codes: "FR DE IT ES PT NL BE CH SE NO DK FI IE AT PL HU CZ GR RO GB UA RU TR" },
  asia: { names: ["asia", "asie", "آسيا", "اسيا"], codes: "CN JP KR IN PK MY SG ID TH VN TW TR SA AE QA KW BH OM JO LB" },
  africa: { names: ["africa", "afrique", "أفريقيا", "افريقيا"], codes: "EG TN MA LY SD ZA NG KE GH ET SN" },
  namerica: { names: ["north america", "amerique du nord", "أمريكا الشمالية", "امريكا الشمالية"], codes: "US CA MX" },
  samerica: { names: ["south america", "amerique du sud", "أمريكا الجنوبية", "امريكا الجنوبية"], codes: "BR AR CL CO" },
  oceania: { names: ["oceania", "oceanie", "أوقيانوسيا", "اوقيانوسيا"], codes: "AU NZ" },
  arab: { names: ["arab countries", "pays arabes", "الدول العربية", "العالم العربي"], codes: "SA AE QA KW BH OM JO LB EG TN MA LY SD" },
};
const CALIAS = { US: ["usa", "america", "امريكا", "أمريكا", "united states"], GB: ["uk", "britain", "england", "بريطانيا", "انجلترا"], AE: ["uae", "الامارات", "دبي"], SA: ["saudi", "السعودية"], KR: ["korea", "كوريا"] };
const cnames = {};
function regionName(code, lang = state.lang) {
  try { return new Intl.DisplayNames([lang], { type: "region" }).of(code) || code; } catch { return code; }
}
function countryKey(code) {
  if (!cnames[code]) cnames[code] = fold(["ar", "fr", "en"].map((l) => regionName(code, l)).concat(CALIAS[code] || []).join(" | "));
  return cnames[code];
}
function matchCountry(it, fq) {
  const cs = it.countries || [];
  if (fq.length < 3 || !cs.length) return false;
  return cs.some((c) => countryKey(c).includes(fq) || Object.values(CONT).some((k) => k.codes.split(" ").includes(c) && k.names.some((n) => fold(n).includes(fq) || fq === fold(n))));
}

/* ---------- rendering ---------- */
function filtered(base) {
  const q = fold(state.q.trim());
  return base.filter((it) => {
    if ((state.tab === "all" || state.tab === "news") && isExpired(it)) return false;
    if (state.tab === "all" && !state.showAll && state.prefs.cats && !state.prefs.cats.includes(it.category)) return false;
    if (state.country !== "all" && it.country !== state.country) return false;
    if (state.cost !== "all" && it.cost !== state.cost) return false;
    if (q && !fold(`${it.title} ${it.summary || ""} ${it.source || ""}`).includes(q) && !matchCountry(it, q)) return false;
    return true;
  });
}
function card(it, savedView) {
  const c = `var(--cat-${CATS.includes(it.category) || it.category === "news" ? it.category : "tools"})`;
  const fav = state.favs.has(it.id);
  const tr = state.tr[it.id];
  const canTr = it.category !== undefined && !isArabicText(it);
  let pill;
  if (it.category === "news") pill = "";
  else if (it.deadline) {
    const d = daysTo(it.deadline);
    if (d < 0) pill = `<span class="pill gone">${t("expired")}</span>`;
    else pill = `<span class="pill ${d <= 3 ? "urgent" : d <= 14 ? "soon" : "ok"}">${d === 0 ? t("today") : d === 1 ? t("tomorrow") : t("left", d)}</span>`;
  } else if (savedView && !state.items.some((x) => x.id === it.id)) pill = `<span class="pill gone">${t("gone")}</span>`;
  else pill = `<span class="pill none">${t("noDeadline")}</span>`;
  const ago = agoLabel(it);
  return `<article class="card" style="--c:${c}">
    <div class="meta"><span class="cat">${CAT_ICON[it.category] || ""}${esc(t(it.category) || "")}</span><span>${esc(countryLabel(it.country || "DZ"))}${it.countries && it.countries.length ? " · " + esc(it.countries.map((c) => regionName(c)).join("، ")) : ""}</span>${it.cost ? `<span class="cost ${it.cost}">${esc(t(it.cost))}</span>` : ""}</div>
    <h3${tr && tr.lang === "ar" ? ' lang="ar"' : ""}>${esc(tr ? tr.title : it.title)}</h3>
    ${(tr ? tr.summary : it.summary) ? `<p class="sum">${esc(tr ? tr.summary : it.summary)}</p>` : ""}
    <div class="when">${pill}<span>${esc([ago, it.source].filter(Boolean).join(" · "))}</span></div>
    <div class="actions">
      <a class="btn primary" href="${esc(safeUrl(it.url))}" target="_blank" rel="noopener noreferrer">${ICON.ext}<span>${t("open")}</span></a>
      <button type="button" class="icon-btn" data-fav="${esc(it.id)}" aria-pressed="${fav}" aria-label="${esc(fav ? t("unsave") : t("save"))}">${ICON.heart}</button>
      <button type="button" class="icon-btn" data-share="${esc(it.id)}" aria-label="${esc(t("share"))}">${ICON.share}</button>
      ${canTr ? `<button type="button" class="icon-btn" data-tr="${esc(it.id)}" aria-expanded="${state.trOpen === it.id}" aria-label="${esc(t("translate"))}">${ICON.tr}</button>` : ""}
    </div>${state.trOpen === it.id ? trMenu(it) : ""}${tr ? `<p class="tr-note">${esc(t("trNote", LANG_NAME[tr.lang]))} · <button type="button" class="link" data-tro="${esc(it.id)}">${esc(t("trOriginal"))}</button></p>` : ""}</article>`;
}
function render() {
  const list = $("#list");
  $("#foot").textContent = t("footer");
  if (state.tab === "about" || state.tab === "dash") return;
  if (!state.loaded) { list.innerHTML = '<div class="skeleton"></div>'.repeat(4); $("#count").textContent = ""; return; }
  if (state.failed) {
    list.innerHTML = `<div class="empty"><strong>${t("loadErr")}</strong><button type="button" class="btn" id="retry">${t("retry")}</button></div>`;
    $("#count").textContent = ""; return;
  }
  const saved = state.tab === "saved", news = state.tab === "news";
  const base = saved ? [...state.favs.values()].sort((a, b) => Date.parse(b.saved_at || 0) - Date.parse(a.saved_at || 0))
    : news ? state.items.filter((x) => x.category === "news") : state.items.filter((x) => x.category !== "news");
  const pool = filtered(base);
  const mine = !saved && !news && !state.showAll && state.prefs.cats;
  const cats = mine ? CATS.filter((c) => state.prefs.cats.includes(c)) : CATS;
  if (state.cat !== "all" && !cats.includes(state.cat)) state.cat = "all";
  // chips with counts (ignoring the category filter itself)
  $("#chips").innerHTML = [["all", pool.length], ...cats.map((c) => [c, pool.filter((x) => x.category === c).length])]
    .map(([c, n]) => `<button type="button" class="chip" data-cat="${c}" aria-pressed="${state.cat === c}"${c === "all" ? "" : ` style="--c:var(--cat-${c})"`}>${c === "all" ? "" : CAT_ICON[c]}${t(c)} <small>${n}</small></button>`).join("");
  if (news) $("#chips").innerHTML = "";
  let rows = news || state.cat === "all" ? pool : pool.filter((x) => x.category === state.cat);
  if (!saved && !news) {
    rows = [...rows].sort(state.sort === "deadline"
      ? (a, b) => (a.deadline ? Date.parse(a.deadline) : 9e15) - (b.deadline ? Date.parse(b.deadline) : 9e15) || pubTime(b) - pubTime(a)
      : (a, b) => pubTime(b) - pubTime(a));
  }
  const hasPrefs = !saved && !news && state.prefs.cats;
  if (news) rows = [...rows].sort((a, b) => pubTime(b) - pubTime(a));
  $("#count").innerHTML = `${esc(t("count", rows.length))} · ${esc(updatedLabel())}${hasPrefs ? ` · ${esc(state.showAll ? "" : t("forYou"))} <button type="button" class="link" id="togglePrefs">${esc(state.showAll ? t("showMine") : t("showAll"))}</button>` : ""}`;
  if (!rows.length) {
    const none = !state.items.length && !saved;
    const [h, p] = saved && !state.favs.size ? ["emptySavedTitle", "emptySavedText"] : none ? ["emptyAllTitle", "emptyAllText"] : ["emptyTitle", "emptyText"];
    list.innerHTML = `<div class="empty"><strong>${t(h)}</strong>${t(p)}</div>`;
    return;
  }
  list.innerHTML = rows.map((it) => card(it, saved)).join("");
}
function buildSelects() {
  const cs = new Set(["DZ", "INT", ...state.items.map((x) => x.country).filter(Boolean)]);
  $("#country").innerHTML = `<option value="all">${esc(t("countryAll"))}</option>` + [...cs].map((c) => `<option value="${esc(c)}">${esc(countryLabel(c))}</option>`).join("");
  $("#country").value = cs.has(state.country) ? state.country : "all";
  $("#sort").innerHTML = `<option value="new">${esc(t("sortNew"))}</option><option value="deadline">${esc(t("sortDeadline"))}</option>`;
  $("#sort").value = state.sort;
  $("#cost").innerHTML = `<option value="all">${esc(t("costAll"))}</option><option value="free">${esc(t("free"))}</option><option value="paid">${esc(t("paid"))}</option>`;
  $("#cost").value = state.cost;
}
function applyI18n() {
  const L = state.lang;
  document.documentElement.lang = L; document.documentElement.dir = L === "ar" ? "rtl" : "ltr";
  document.title = L === "ar" ? "فرصتي | FORSATI – اكتشف فرصتك القادمة" : "FORSATI – " + t("title");
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $("#lang").value = L;
  updateAcctBtn(); buildSelects(); renderSuggest(); renderAbout(); renderDash(); render();
  if ($("#authDialog").open) renderAuth();
}
function setTab(tab) {
  if (tab === "dash" && !Auth.user) tab = "all";
  state.tab = tab;
  $$("[data-tab]").forEach((b) => (b.dataset.tab === tab ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current")));
  [$("#navAcct"), $("#acctBtn")].forEach((b) => (tab === "dash" ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current")));
  const other = tab === "about" || tab === "dash";
  [$(".intro"), $(".tools"), $("#count"), $("#list")].forEach((el) => { el.hidden = other; });
  $("#about").hidden = tab !== "about"; $("#dash").hidden = tab !== "dash";
  if (tab === "dash") renderDash();
  render(); scrollTo({ top: 0 });
}
const FEAT_CATS = ["jobs", "scholarships", "education", "competitions", "training", "tools"];
function renderAbout() {
  const A = T[state.lang].about;
  $("#about").innerHTML = `<h2>${esc(A.title)}</h2><p>${esc(A.intro)}</p><p>${esc(A.intro2)}</p>
    <h3>${esc(A.featuresTitle)}</h3>
    <div class="feats">${A.features.map(([n, d], i) => `<button type="button" class="feat" data-go="${FEAT_CATS[i]}" style="--c:var(--cat-${FEAT_CATS[i]})"><b>${esc(n)}</b><span>${esc(d)}</span></button>`).join("")}</div>
    <h3>${esc(A.uxTitle)}</h3>
    <ul class="checks">${A.ux.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    <div class="vision"><h3>${esc(A.visionTitle)}</h3><p>${esc(A.vision)}</p></div>
    <div class="vision"><h3>${esc(t("installTitle"))}</h3><p>${esc(t("installText"))}</p></div>
    <p class="tagline">${esc(A.tagline)}</p>
    <p class="dev">${esc(t("builtBy"))} <strong>Sid Ahmed Taieb Amour</strong></p>
    <p class="dev">${esc(t("contact"))} <a href="mailto:sidahmedtaibamour@gmail.com" dir="ltr">sidahmedtaibamour@gmail.com</a></p>`;
}
function renderSuggest() {
  $("#suggest").innerHTML = T[state.lang].suggest.map((w) => `<button type="button" data-q="${esc(w)}">${esc(w)}</button>`).join("");
}

/* ---------- preferences / settings ---------- */
let pushTimer;
function savePrefsLocal() { store.set("forsati-prefs", JSON.stringify(state.prefs)); }
async function pushPrefs() {
  const u = Auth.user; if (!u || !Auth.client) return;
  try {
    const { error } = await Auth.client.from("user_settings").upsert({ user_id: u.id, data: { ...state.prefs, lang: state.lang }, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
    if (error) throw error;
  } catch (e) { console.error(e); }
}
function setPref(patch) {
  state.prefs = sanitizePrefs({ ...state.prefs, ...patch });
  savePrefsLocal(); applyPrefs();
  if ("country" in patch) state.country = state.prefs.country;
  clearTimeout(pushTimer); pushTimer = setTimeout(pushPrefs, 600);
  buildSelects(); renderSettings(); render();
  if (state.tab === "dash") renderDash();
}
let lastSetUid = null;
async function syncSettings(user) {
  if (!user) { lastSetUid = null; return false; }
  if (lastSetUid === user.id) return false;
  lastSetUid = user.id;
  let langChanged = false;
  try {
    const { data, error } = await Auth.client.from("user_settings").select("data").eq("user_id", user.id).maybeSingle();
    if (error) throw error;
    if (data && data.data) {
      state.prefs = sanitizePrefs({ ...state.prefs, ...data.data }); savePrefsLocal(); applyPrefs(); state.country = state.prefs.country;
      if (T[data.data.lang] && data.data.lang !== state.lang) { state.lang = data.data.lang; store.set("forsati-lang", state.lang); langChanged = true; }
    } else await pushPrefs();
  } catch (e) { console.error(e); }
  return langChanged;
}
const setDlg = $("#setDialog");
function renderSettings() {
  const press = (sel, v) => $$(sel + " button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.v === v)));
  press("#segLang", state.lang); press("#segTheme", state.prefs.theme); press("#segSize", state.prefs.fs);
  $("#pickCats").innerHTML = `<button type="button" data-c="all" aria-pressed="${!state.prefs.cats}">${esc(t("interestsAll"))}</button>` +
    CATS.map((c) => `<button type="button" data-c="${c}" style="--c:var(--cat-${c})" aria-pressed="${Boolean(state.prefs.cats && state.prefs.cats.includes(c))}"><i></i>${esc(t(c))}</button>`).join("");
  const cs = new Set(["DZ", "INT", ...state.items.map((x) => x.country).filter(Boolean)]);
  $("#setCountry").innerHTML = `<option value="all">${esc(t("countryAll"))}</option>` + [...cs].map((c) => `<option value="${esc(c)}">${esc(countryLabel(c))}</option>`).join("");
  $("#setCountry").value = state.prefs.country;
  $("#setSync").textContent = Auth.user ? t("syncAccount") : t("syncDevice");
}
$("#gearBtn").addEventListener("click", () => { renderSettings(); setDlg.showModal(); });
$("#setClose").addEventListener("click", () => setDlg.close());
$("#setDone").addEventListener("click", () => setDlg.close());
setDlg.addEventListener("click", (e) => { if (e.target === setDlg) setDlg.close(); });
$("#segLang").addEventListener("click", (e) => {
  const b = e.target.closest("[data-v]"); if (!b) return;
  state.lang = b.dataset.v; store.set("forsati-lang", state.lang); applyI18n(); renderSettings();
  clearTimeout(pushTimer); pushTimer = setTimeout(pushPrefs, 600);
});
$("#segTheme").addEventListener("click", (e) => { const b = e.target.closest("[data-v]"); if (b) setPref({ theme: b.dataset.v }); });
$("#segSize").addEventListener("click", (e) => { const b = e.target.closest("[data-v]"); if (b) setPref({ fs: b.dataset.v }); });
$("#setCountry").addEventListener("change", (e) => setPref({ country: e.target.value }));
$("#pickCats").addEventListener("click", (e) => {
  const b = e.target.closest("[data-c]"); if (!b) return;
  const c = b.dataset.c; let cats = state.prefs.cats ? [...state.prefs.cats] : null;
  if (c === "all") cats = null;
  else if (!cats) cats = [c];
  else cats = cats.includes(c) ? cats.filter((x) => x !== c) : [...cats, c];
  state.showAll = false; setPref({ cats });
});
$("#count").addEventListener("click", (e) => { if (e.target.closest("#togglePrefs")) { state.showAll = !state.showAll; render(); } });

/* ---------- dashboard (signed-in users) ---------- */
function renderDash() {
  const u = Auth.user, box = $("#dash");
  if (!u) { box.innerHTML = ""; return; }
  const name = (u.email || "").split("@")[0] || "";
  const saved = [...state.favs.values()];
  const soon = saved.filter((s) => s.deadline && daysTo(s.deadline) >= 0 && daysTo(s.deadline) <= 7).sort((a, b) => daysTo(a.deadline) - daysTo(b.deadline));
  const mineCats = state.prefs.cats;
  const fresh = state.items.filter((it) => !isExpired(it) && (!mineCats || mineCats.includes(it.category)) && (state.prefs.country === "all" || it.country === state.prefs.country) && Date.now() - pubTime(it) < 3 * 864e5).length;
  const linked = (u.identities || []).some((i) => i.provider === "google");
  box.innerHTML = `<div class="dhead"><div class="avatar">${esc((name[0] || "?").toUpperCase())}</div>
      <div><h2>${esc(t("hello", name))}</h2><p dir="ltr">${esc(u.email || "")}</p></div></div>
    <div class="stats"><div class="stat"><b>${saved.length}</b><span>${esc(t("statSaved"))}</span></div>
      <div class="stat"><b>${fresh}</b><span>${esc(t("statNew"))}</span></div>
      <div class="stat"><b>${soon.length}</b><span>${esc(t("statSoon"))}</span></div></div>
    <h3>${esc(t("soonTitle"))}</h3>
    ${soon.length ? `<div class="mini">${soon.slice(0, 4).map((s) => { const d = daysTo(s.deadline); return `<a href="${esc(safeUrl(s.url))}" target="_blank" rel="noopener noreferrer"><span>${esc(s.title)}</span><span class="pill ${d <= 3 ? "urgent" : "soon"}">${d === 0 ? esc(t("today")) : d === 1 ? esc(t("tomorrow")) : esc(t("left", d))}</span></a>`; }).join("")}</div>` : `<p class="none">${esc(t("noSoon"))}</p>`}
    <div class="stack">
      <button type="button" class="btn" data-act="settings">${esc(t("goSettings"))}</button>
      <button type="button" class="btn" data-act="saved">${esc(t("goSaved"))}</button>
      ${linked ? "" : `<button type="button" class="btn" data-act="google">${esc(t("linkGoogle"))}</button>`}
      <button type="button" class="btn" data-act="logout">${esc(t("logout"))}</button>
    </div>`;
}
$("#dash").addEventListener("click", async (e) => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const act = b.dataset.act;
  if (act === "settings") { renderSettings(); setDlg.showModal(); }
  else if (act === "saved") setTab("saved");
  else if (act === "google") { try { await Auth.linkGoogle(); } catch (err) { toast(mapErr(err)); } }
  else if (act === "logout") { try { await Auth.signOut(); toast(t("okOut")); } catch (err) { toast(mapErr(err)); } }
});

/* ---------- account dialog ---------- */
const dlg = $("#authDialog");
let mode = "login", busy = false;
function updateAcctBtn() {
  const b = $("#acctBtn"), u = window.Auth && Auth.user;
  b.className = "acct" + (u ? " in" : "");
  b.innerHTML = `${ICON.user}<span>${esc(u ? t("account") : t("login"))}</span>`;
}
function setMsg(text = "", kind = "") { const m = $("#authMsg"); m.textContent = text; m.className = "msg " + kind; }
function setBusy(v) { busy = v; $$("#authDialog button, #authDialog input").forEach((e) => { if (e.id !== "authClose") e.disabled = v; }); }
function renderAuth() {
  const u = Auth.user;
  if (mode !== "recovery" && u) mode = "account";
  if (mode === "account" && !u) mode = "login";
  const guest = $("#guestView"), acc = $("#accountView"), rec = $("#recoveryView");
  guest.hidden = !(["login", "signup", "reset"].includes(mode)) || !Auth.configured;
  acc.hidden = mode !== "account"; rec.hidden = mode !== "recovery";
  $("#authTitle").textContent = t(mode + "Title");
  $("#authLead").textContent = Auth.configured ? t(mode + "Lead") : t("errOff");
  const reset = mode === "reset", signup = mode === "signup";
  $("#googleBtn").hidden = reset; $("#orRow").hidden = reset; $("#pwRow").hidden = reset;
  $("#forgotBtn").hidden = mode !== "login";
  $("#authPassword").autocomplete = signup ? "new-password" : "current-password";
  $("#authSubmit").textContent = t(reset ? "submitReset" : signup ? "submitSignup" : "submitLogin");
  $("#forgotBtn").textContent = t("forgot");
  $("#switchBtn").textContent = mode === "login" ? t("toSignup") : t("toLogin");
  if (mode === "account" && u) {
    $("#accEmail").textContent = u.email || "";
    const provs = [...new Set((u.identities || []).map((i) => i.provider))];
    $("#accIds").innerHTML = provs.map((p) => `<li>${p === "google" ? "Google" : esc(t("pwd"))} · ${esc(t("linked"))}</li>`).join("");
    $("#linkGoogle").hidden = provs.includes("google");
  }
}
function openAuth(m) {
  mode = m || "login"; setMsg(); renderAuth();
  if (!dlg.open) dlg.showModal();
}
function mapErr(err) {
  const m = String(err?.message || "").toLowerCase();
  if (m.includes("not-configured")) return t("errOff");
  if (m.includes("invalid login")) return t("errBad");
  if (m.includes("already") && m.includes("regist")) return t("errExists");
  if (m.includes("not confirmed")) return t("errConfirm");
  if (m.includes("rate limit") || m.includes("too many")) return t("errRate");
  if (m.includes("password")) return t("errPw");
  return `${t("errGeneric")}: ${err?.message || ""}`;
}
async function guarded(fn) {
  if (busy) return;
  setBusy(true); setMsg();
  try { await fn(); } catch (e) { console.error(e); setMsg(mapErr(e), "err"); } finally { setBusy(false); }
}

/* ---------- events ---------- */
$("#list").addEventListener("click", (e) => {
  const fav = e.target.closest("[data-fav]"), sh = e.target.closest("[data-share]");
  const tb = e.target.closest("[data-tr]"), tl = e.target.closest("[data-trl]"), to = e.target.closest("[data-tro]");
  if (tb) { state.trOpen = state.trOpen === tb.dataset.tr ? null : tb.dataset.tr; render(); }
  else if (tl) translateItem(tl.dataset.id, tl.dataset.trl);
  else if (to) { delete state.tr[to.dataset.tro]; render(); }
  else if (fav) toggleFav(fav.dataset.fav);
  else if (sh) {
    const it = lookup(sh.dataset.share); if (!it) return;
    (async () => {
      try {
        if (navigator.share) await navigator.share({ title: it.title, text: it.title, url: it.url });
        else { await navigator.clipboard.writeText(`${it.title}\n${it.url}`); toast(t("copied")); }
      } catch (err) { if (err && err.name !== "AbortError") toast(t("errGeneric")); }
    })();
  } else if (e.target.closest("#retry")) { state.loaded = false; render(); load(); }
});
$("#chips").addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (b) { state.cat = b.dataset.cat; render(); } });
$("#q").addEventListener("input", (e) => { state.q = e.target.value; render(); });
$("#q").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); e.target.blur(); } });
$("#q").addEventListener("search", (e) => { if (e.target.value) e.target.blur(); });
$("#country").addEventListener("change", (e) => { state.country = e.target.value; render(); });
$("#sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
$("#suggest").addEventListener("click", (e) => {
  const b = e.target.closest("[data-q]"); if (!b) return;
  state.q = state.q === b.dataset.q ? "" : b.dataset.q; $("#q").value = state.q; render();
});
$("#about").addEventListener("click", (e) => {
  const b = e.target.closest("[data-go]"); if (!b) return;
  state.cat = b.dataset.go; setTab("all");
});
$("#cost").addEventListener("change", (e) => { state.cost = e.target.value; render(); });
$("#lang").addEventListener("change", (e) => { state.lang = e.target.value; store.set("forsati-lang", state.lang); applyI18n(); });
$$("[data-tab]").forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)));
const acctClick = () => (Auth.user ? setTab("dash") : openAuth("login"));
$("#acctBtn").addEventListener("click", acctClick);
$("#navAcct").addEventListener("click", acctClick);
$("#authClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
$("#switchBtn").addEventListener("click", () => openAuth(mode === "login" ? "signup" : "login"));
$("#forgotBtn").addEventListener("click", () => openAuth("reset"));
$("#googleBtn").addEventListener("click", () => guarded(() => Auth.google()));
$("#linkGoogle").addEventListener("click", () => guarded(() => Auth.linkGoogle()));
$("#logoutBtn").addEventListener("click", () => guarded(async () => { await Auth.signOut(); dlg.close(); toast(t("okOut")); }));
$("#authForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("#authEmail").value.trim(), pw = $("#authPassword").value;
  if (!/^\S+@\S+\.\S+$/.test(email)) return setMsg(t("errEmail"), "err");
  if (mode !== "reset" && pw.length < 8) return setMsg(t("errPw"), "err");
  guarded(async () => {
    if (mode === "login") { await Auth.signIn(email, pw); dlg.close(); toast(t("okLogged")); }
    else if (mode === "signup") {
      const r = await Auth.signUp(email, pw);
      if (r.needsConfirm) setMsg(t("okConfirm"), "good"); else { dlg.close(); toast(t("okLogged")); }
    } else { await Auth.reset(email); setMsg(t("okReset"), "good"); }
  });
});
$("#recoveryView").addEventListener("submit", (e) => {
  e.preventDefault();
  const pw = $("#newPassword").value;
  if (pw.length < 8) return setMsg(t("errPw"), "err");
  guarded(async () => { await Auth.setPassword(pw); mode = "account"; renderAuth(); setMsg(t("okPassword"), "good"); });
});
Auth.onChange(async (user, event) => {
  const [, langChanged] = await Promise.all([syncFavs(user), syncSettings(user)]).then((r) => [r[0], r[1]]);
  if (!user && state.tab === "dash") setTab("all");
  if (langChanged) applyI18n();
  updateAcctBtn(); buildSelects(); render(); if (state.tab === "dash") renderDash();
  if (event === "PASSWORD_RECOVERY") openAuth("recovery");
  else if (dlg.open) renderAuth();
});

/* ---------- online / offline banner ---------- */
let netTimer;
const WIFI = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01"/>';
function netBanner(online) {
  const b = $("#net"); clearTimeout(netTimer);
  b.className = online ? "on" : "off";
  b.innerHTML = `${WIFI}${online ? "" : '<path d="M3 3l18 18"/>'}</svg><span>${esc(t(online ? "netOn" : "netOff"))}</span>`;
  b.hidden = false;
  if (online) netTimer = setTimeout(() => { b.hidden = true; }, 3000);
}
window.addEventListener("offline", () => netBanner(false));
window.addEventListener("online", () => netBanner(true));

/* ---------- start ---------- */
const splashStart = performance.now();
function hideSplash() {
  const sp = $("#splash"); if (!sp) return;
  const wait = Math.max(0, 1200 - (performance.now() - splashStart));
  setTimeout(() => { sp.classList.add("out"); setTimeout(() => sp.remove(), 450); }, wait);
}
if (!navigator.onLine) netBanner(false);
state.favs = loadLocal();
applyI18n();
setTab("all");
load().finally(hideSplash);
setTimeout(hideSplash, 6000);
Auth.init().then(loadRemote).catch((e) => console.error(e));
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
})();
