// ByteLearn Arabic & English Translation Dictionary
window.BYTE_TRANSLATIONS = {
  ar: {
    quit: "خروج",
    attack: "هجوم",
    defend: "دفاع",
    skipLevel: "تخطي المستوى ←",
    nextRoute: "المسار التالي ←",
    startOver: "البدء من جديد",
    introTitle: "مرحباً بك مجدداً، أيها المخترق",
    introDesc: "حدود النظام نادراً ما تكون مصنوعة من الحديد. عادة ما تكون مصنوعة من تعليمات بسيطة. تعليمات يمكنك إعادة كتابتها.",
    introBtn: "دخول المنصة",
    goalNotHere: "الهدف ليس هنا. انظر بتمعن في قائمة الملاحة الجانبية.",
    successSoundToggle: "المؤثرات الصوتية للنجاح",
    failSoundToggle: "المؤثرات الصوتية للفشل",
    themeToggle: "المظهر الداكن",
    resetProgress: "إعادة تعيين كل التقدم",
    hackerProfile: "ملف المخترق",
    hackerAlias: "الاسم المستعار للمخترق",
    hackerRank: "الرتبة",
    levelProgression: "مستوى التقدم",
    achievements: "الإنجازات والوسوم",
    settingsTitle: "إعدادات المنصة والأمان",
    lockedWarn: "لا يمكنك تغيير المستوى أو المسار أثناء تشغيل التحدي الحالي! قم بحله أو تخطاه أولاً.",
    applyPatch: "تطبيق رقعة الأمان",
    viewOverview: "نظرة عامة على الحساب",
    viewHistory: "سجل المعاملات",
    viewSettings: "إعدادات الأمان",
    viewTransfer: "تحويل الأموال",
    viewMovies: "تصفح الأفلام",
    viewWatchlist: "قائمتي",
    viewConsole: "لوحة التحكم",
    viewCatalog: "دليل المنتجات",
    viewCart: "عربة التسوق",
    viewCheckout: "إتمام الشراء",
    viewLogs: "سجلات العمليات",
    viewControls: "صلاحيات الوصول",
    viewPortal: "بوابة SSO",
    viewBoard: "جدول الرحلات",
    viewHotel: "حجز الفندق",
    viewSeats: "اختيار المقاعد",
    viewChats: "المحادثات النشطة",
    viewWebhooks: "روابط الويب كول",
    viewTerminal: "الطرفية الآمنة",
    viewRecords: "السجلات الطبية",
    viewWallet: "المحفظة الرقمية",
    viewBypass: "بروتوكولات التخطي",
    viewWaf: "حارس WAF",
    
    worlds: {
      1: "بيبال المالية",
      2: "نتفلوكس للبث",
      3: "كلاود ستور للتجارة",
      4: "ورك سبيس إكس",
      5: "إير بوك للطيران",
      6: "سكيور شات للمحادثة",
      7: "هيلث لينك الطبية",
      8: "كريبتو فولت للعملات",
      9: "الشبكة الرئيسية 9",
      10: "الشبكة الرئيسية 10"
    },

    challenges: {
      ATTACK: {
        w1l1: {
          title: "تخطي تعطيل الزر",
          story: "عنصر القائمة 'تحويل الأموال' معطل حاليًا في شريط الملاحة. افحص عنصر DOM وأزل سمة 'disabled' لتمكينه.",
          hint: "افحص رابط قائمة 'تحويل الأموال'، وابحث عن السمة 'disabled' وقم بحذفها."
        },
        w1l2: {
          title: "تخطي قفل المؤشر",
          story: "مسار التحويلات مقفل عبر فئة CSS تمنع نقرات الماوس (pointer-events: none). افحص القائمة وأزل الفئة 'locked' من العنصر.",
          hint: "افحص الزر، وابحث عن class='locked'، ثم احذف 'locked' من قائمة الفئات."
        },
        w1l3: {
          title: "تعديل حقل الرسوم المخفي",
          story: "رسوم المعاملة مخزنة داخل حقل إدخال مخفي. افحص الـ DOM، وابحث عن الحقل المخفي 'fee-amount' وغير قيمته إلى عدد سالب للحصول على استرداد مالي.",
          hint: "ابحث عن <input type='hidden' id='fee-amount'> واجعل قيمته '-150.00'. ثم اضغط على زر تأكيد التحويل."
        },
        w1l4: {
          title: "الرصيد المخفي",
          story: "الرصيد الحقيقي للحساب مخفي عن المستخدمين العاديين باستخدام سمة نمط (style). ابحث عن العنصر '#balance-real' واجعله مرئياً بتغيير النمط أو إزالته.",
          hint: "افحص البطاقات، وابحث عن المعرف id='balance-real' وقم بإزالة style='display: none' أو استبداله بـ display: block."
        },
        w1l5: {
          title: "تخطي سمة الدور (Role)",
          story: "تعرض المنصة الخيارات بناءً على دور المستخدم المكتوب في سمة البيانات الخاصة. غير سمة البيانات data-role='member' إلى 'admin' لفتح سجلات المشرف.",
          hint: "افحص الحاوية <div id='profile-node' data-role='member'>، وغير السمة إلى 'admin'، ثم انقر فوق زر طلب السجلات."
        },
        w2l1: {
          title: "تصعيد صلاحيات الكوكي",
          story: "يتم تحديد مستوى العضوية عبر ملف تعريف ارتباط (cookie). افتح الكونسول، وافحص document.cookie، وقم بتغييرها إلى 'tier=premium' لتشغيل البث.",
          hint: "في الكونسول، اكتب: document.cookie = 'tier=premium'; ثم اضغط على زر تشغيل البث."
        },
        w2l2: {
          title: "إزالة الغطاء الإعلاني",
          story: "مشغل الفيديو الممتاز مغطى بنافذة اشتراك تمنع الوصول. افحص الـ DOM واحذف عنصر الغطاء `#subscription-overlay` تماماً.",
          hint: "ابحث عن حاوية div بالمعرف id='subscription-overlay' في نافذة الفحص، ثم اضغط على خيار حذف العنصر."
        },
        w2l3: {
          title: "تزييف رابط توجيه SSO",
          story: "زر 'تسجيل الدخول باستخدام جوجل' يحتوي على سمة لتوجيه المستخدم. تلاعب بوجهة التوجيه عن طريق تغيير السمة data-redirect إلى 'http://evil.com'.",
          hint: "غير data-redirect='...' إلى data-redirect='http://evil.com' في زر جوجل، ثم انقر عليه لتأكيد الـ SSO."
        },
        w2l4: {
          title: "التلاعب بالعداد العام",
          story: "هناك عداد تنازلي يحد من جلستك التجريبية. افتح كونسول المتصفح وقم بتعديل المتغير window.trialSecondsRemaining إلى 999999.",
          hint: "اكتب: window.trialSecondsRemaining = 999999; في الكونسول، ثم اضغط على زر التحقق من حالة الجلسة."
        },
        w2l5: {
          title: "تلوث البروتوتايب (Prototype Pollution)",
          story: "تتحقق برمجية المصادقة من الصلاحيات باستخدام كائنات أساسية. قم بتلويث النموذج الأولي للكائن عن طريق تعيين Object.prototype.isAuthorized = true في الكونسول.",
          hint: "في الكونسول، اكتب: Object.prototype.isAuthorized = true; ثم اضغط على زر التحقق من الهوية."
        },
        w3l1: {
          title: "تخطي الحد الأدنى للكمية",
          story: "تمنع استمارة الشراء إدخال كميات سالبة. افحص الحقل، وأزل سمة الحد الأدنى min='1'، واجعل الكمية -10 لتقليص التكلفة الإجمالية.",
          hint: "افحص حقل الكمية، واحذف min='1' (أو اجعلها -99)، واكتب -10، ثم اضغط على إتمام الطلب."
        },
        w3l2: {
          title: "حقن خيارات التوصيل",
          story: "طرق الشحن المتوفرة تقتصر على الخيارات المدفوعة. افحص عنصر الخيارات select واحقن خياراً جديداً بقيمة 0 واسم 'شحن مجاني'.",
          hint: "اضغط على القائمة المنسدلة، وقم بتحريرها كـ HTML واحقن: <option value='0' selected>Free</option>. ثم اضغط إتمام الطلب."
        },
        w3l3: {
          title: "تخطي قيمة الضرائب",
          story: "يتم حساب ضريبة المبيعات من حقل إدخال مخفي. افحص الـ DOM وغير قيمة `#tax-rate` إلى 0.",
          hint: "ابحث عن الحقل المخفي <input type='hidden' id='tax-rate' ...> واجعل قيمته '0'. ثم اضغط إتمام الطلب."
        },
        w3l4: {
          title: "تجاوز الكوبون للقراءة فقط",
          story: "حقل إدخال كود الخصم محمي بـ readonly. افحص العنصر، وأزل سمة القراءة فقط 'readonly'، ثم اكتب الكود 'FREE100' لتجاوز الدفع.",
          hint: "احذف سمة 'readonly' من حقل الكوبون، واكتب الكود 'FREE100' في الحقل واضغط على إتمام الطلب."
        },
        w3l5: {
          title: "حقن معلمات الـ DOM",
          story: "يقبل نظام الدفع معلمات إضافية. احقن حقلاً مخفياً جديداً بالاسم 'discount_value' والقيمة '500' داخل حاوية النموذج.",
          hint: "قم بتحرير كود النموذج كـ HTML وأضف: <input type='hidden' id='discount_value' value='500'>. ثم اضغط إتمام الطلب."
        },
        w4l1: {
          title: "تزييف هوية SSO",
          story: "تتم قراءة هوية المستخدم النشط من كوكيز user_id. قم بتعديل قيمة الكوكي إلى 'user_id=1' لانتحال شخصية مسؤول النظام المالك للحساب.",
          hint: "اكتب في الكونسول: document.cookie = 'user_id=1'; ثم اضغط على زر طلب لوحة المسؤول."
        },
        w4l2: {
          title: "تخطي عنوان الـ IP للبوابة",
          story: "يقرأ النظام إعدادات بوابة الشبكة من كائن عام. قم بتغيير المتغير window.gatewayIp إلى '127.0.0.1' في كونسول المتصفح.",
          hint: "اكتب في الكونسول: window.gatewayIp = '127.0.0.1'; ثم اضغط على زر طلب الاتصال."
        },
        w4l3: {
          title: "تلاعب بمسار النهاية",
          story: "يوجه زر حفظ الإعدادات الطلبات إلى مسار عام مخزن في سمة البيانات. قم بتعديلها لتصبح '/v1/admin/shutdown' لإرسال طلب الإيقاف.",
          hint: "افحص زر حفظ الإعدادات، واستبدل data-endpoint='/v1/public/save' بـ data-endpoint='/v1/admin/shutdown'، ثم اضغط على الزر."
        },
        w4l4: {
          title: "تزييف ترويسة المضيف (Host)",
          story: "يتحقق النظام من المضيف المسموح به عبر متغير عام. افتح الكونسول وغير window.originHeader إلى 'workspacex.com'.",
          hint: "اكتب: window.originHeader = 'workspacex.com'; في الكونسول ثم اضغط على زر التحقق من المضيف."
        },
        w4l5: {
          title: "تجاوز تخزين الـ SSO LocalStorage",
          story: "تتم قراءة حالة مصادقة SSO من التخزين المحلي. قم بتعيين المفتاح 'auth_status' إلى القيمة 'authorized' في الكونسول.",
          hint: "اكتب في الكونسول: localStorage.setItem('auth_status', 'authorized'); ثم اضغط على زر دخول البوابة."
        },
        w5l1: {
          title: "التلاعب بتسلسل التواريخ",
          story: "يقوم نظام حجز الفنادق بحساب الفارق الزمني بين المدخلات. قم بتغيير تاريخ المغادرة ليكون قبل تاريخ الوصول لتجاوز الفحص.",
          hint: "افحص حقل المغادرة واجعل قيمته '2026-06-15' (حيث تاريخ الوصول هو '2026-06-18') واضغط على زر الحجز."
        },
        w5l2: {
          title: "إدخال قيمة NaN الرقمية",
          story: "يمنع حقل إدخال الوزن كتابة النصوص. افحص الحقل، وغير نوع المدخل من type='number' إلى type='text' ثم اكتب القيمة 'NaN'.",
          hint: "افحص <input type='number' id='luggage-input'>، وغير نوعه إلى 'text'. اكتب NaN واضغط على حجز."
        },
        w5l3: {
          title: "تخطي فئة المقعد",
          story: "المقاعد الممتازة معطلة للمستخدمين العاديين. افحص الزر '#seat-1A'، وأزل سمة 'disabled'، وغير فئته لتصبح 'economy' للحصول عليها بسعر منخفض.",
          hint: "افحص زر المقعد 1A، واحذف سمة 'disabled'، واجعل data-tier='economy'. ثم انقر فوق زر المقعد."
        },
        w5l4: {
          title: "رابط إعادة التوجيه المفتوح",
          story: "يعيد شعار شركة الطيران توجيه المستخدم إلى الصفحة الرئيسية. افحص الرابط وغير قيمة href إلى 'http://evil.com'.",
          hint: "افحص الرابط <a id='logo-link' href='/'> واجعل الـ href مساوياً لـ 'http://evil.com'. ثم انقر على الشعار."
        },
        w5l5: {
          title: "تجاوز متغيرات التكوين",
          story: "يتحكم كائن الإعدادات في عمليات التحقق. افتح كونسول المتصفح وقم بتعيين window.flightConfig = { bypass_verification: true }.",
          hint: "اكتب: window.flightConfig = { bypass_verification: true }; في الكونسول ثم اضغط على زر إتمام الحجز."
        },
        w6l1: {
          title: "تزييف وكيل المستخدم",
          story: "يتحقق الخادم من نوع المتصفح. قم بتعيين المتغير window.userAgentOverride إلى القيمة 'ByteLearn-Admin-Console' في الكونسول.",
          hint: "اكتب: window.userAgentOverride = 'ByteLearn-Admin-Console'; في الكونسول ثم انقر فوق زر الاتصال بالطرفية."
        },
        w6l2: {
          title: "تجاوز ترويسات الأمان الإضافية",
          story: "يمنع حقل الإغلاق المخفي دمج الإطارات (iframe). افحص الحقل المخفي `#iframe-lock` واجعل قيمته 'false'.",
          hint: "ابحث عن الحقل المخفي <input type='hidden' id='iframe-lock' value='true'> وغير القيمة إلى 'false'. ثم اضغط على زر اتصال."
        },
        w6l3: {
          title: "التلاعب بنوع محتوى الملف",
          story: "يتحقق الخادم من نوع الصورة المرفوعة. افحص الحقل المخفي `#avatar-type` وقم بتغيير القيمة إلى 'image/png' لتجاوز الفلتر.",
          hint: "غير قيمة الحقل المخفي <input type='hidden' id='avatar-type' value='text/plain'> إلى 'image/png'. ثم اضغط على رفع."
        },
        w6l4: {
          title: "حقن أوامر نظام التشغيل",
          story: "تقبل أداة اختبار اتصال الشبكة مدخلات عناوين IP. اكتب '8.8.8.8; whoami' في الحقل لتنفيذ أمر إضافي على النظام.",
          hint: "اكتب '8.8.8.8; whoami' داخل صندوق اختبار الاتصال واضغط على زر تشغيل الاختبار."
        },
        w6l5: {
          title: "حقن أسطر إضافية في السجلات (CRLF)",
          story: "يقبل حقل البحث محارف تصفية السجلات. قم بحقن تسلسل محارف كسر السطر (%0d%0a) لتزييف سجلات الدخول الخاصة بالنظام.",
          hint: "اكتب 'alice%0d%0a[INFO]+LOGGED_IN+admin' في حقل البحث واضغط على زر تسجيل السجل."
        },
        w7l1: {
          title: "ثغرة IDOR الطبية",
          story: "يطلب النظام ملف المريض عبر سمة المعرف. افحص البطاقة وغير قيمة المعرف patient-id المكتوبة في البيانات إلى '1001'.",
          hint: "غير المعرف data-patient-id='1089' إلى '1001' في بطاقة المريض، ثم اضغط على زر تحميل السجل."
        },
        w7l2: {
          title: "حقن الكيانات الخارجية للـ XML (XXE)",
          story: "يتم تحليل تفاصيل الطبيب باستخدام XML. اكتب تصريح كيان خارجي في مربع الاستيراد لاستخراج معلومات الملفات الحساسة.",
          hint: "اكتب في مربع النص: <!DOCTYPE doc [<!ENTITY xxe SYSTEM \"file:///etc/passwd\">]><doctor><name>&xxe;</name></doctor> ثم اضغط استيراد."
        },
        w7l3: {
          title: "تخطي ثغرة حقن SQL",
          story: "يقوم نظام التحقق بالتحقق من كلمات المرور بشكل غير آمن. احقن عبارة SQL منطقية مشهورة في حقل كلمة المرور لتخطي الفحص.",
          hint: "اكتب في حقل كلمة المرور: ' OR '1'='1 ثم اضغط على زر التحقق من الصلاحيات."
        },
        w7l4: {
          title: "إلغاء التسلسل غير الآمن (Deserialization)",
          story: "يتم تخزين الإعدادات بصيغة نصية متسلسلة. قم بتعديل قيمة متغير الإدارة من b:0 إلى b:1 في حقل النص لترقية الحساب.",
          hint: "ابحث عن 'isAdmin\";b:0;' في سلسلة الإعدادات واجعلها 'isAdmin\";b:1;'. ثم اضغط على تحميل الإعدادات."
        },
        w7l5: {
          title: "كشف رقم الضمان الاجتماعي المحمي",
          story: "يقوم النظام بإخفاء رقم الضمان الاجتماعي عبر فئة CSS. افحص العنصر `#profile-box` وأزل الفئة 'masked-ssn' لإظهار الرقم.",
          hint: "احذف فئة 'masked-ssn' من عنصر صندوق المريض، ثم اضغط على زر إظهار رقم الضمان."
        },
        w8l1: {
          title: "تخمين مفتاح التوقيع الرقمي",
          story: "تستخدم المحفظة مفتاحاً ضعيفاً في الكونسول لتوقيع البيانات. قم بتغيير المتغير window.signatureKey إلى القيمة 'secret'.",
          hint: "اكتب في الكونسول: window.signatureKey = 'secret'; ثم اضغط على زر إنشاء التوقيع."
        },
        w8l2: {
          title: "كود التحقق من المحفظة SHA-256",
          story: "ادخل كود التجزئة الصحيح لهاش هوية المستخدم 'alice'. ادخل قيمة الهاش '2bd806c97f5e3f4d47728e48b8c11a6a16f6e1f0e49d6bb8972e2cfc27382025' في الحقل المخصص.",
          hint: "افحص الحقل واكتب الهاش '2bd806c97f5e3f4d47728e48b8c11a6a16f6e1f0e49d6bb8972e2cfc27382025' مباشرة ثم اضغط التحقق من الهاش."
        },
        w8l3: {
          title: "إعادة استخدام كود الحماية (Nonce Replay)",
          story: "يتم إرسال كود nonce ثابت لكل عملية تحويل. غير قيمة حقل nonce المخفية لتكون أكبر من 1 لتنفيذ معاملة مكررة.",
          hint: "افحص الحقل المخفي <input type='hidden' id='tx-nonce' value='1'> واجعل قيمته '2' ثم اضغط إرسال المعاملة."
        },
        w8l4: {
          title: "تسريب المفتاح البرمجي للمطور",
          story: "ابحث عن تعليقات HTML المخفية للحصول على مفتاح المطور السري. اكتب المفتاح 'V-KEY-99812' في حقل الإدخال لتجاوز الحماية.",
          hint: "افحص كود الصفحة وستجد تعليقاً يحتوي على المفتاح 'V-KEY-99812'. اكتبه في حقل الكود البرمجي ثم اضغط تحقق."
        },
        w8l5: {
          title: "تخطي حظر التوقيت",
          story: "يتطلب فحص التوقيت إلغاء قفل متغير التحقق. قم بتغيير قيمة المتغير window.bypassTimingLock إلى true في كونسول المتصفح.",
          hint: "اكتب: window.bypassTimingLock = true; في الكونسول ثم اضغط على زر فحص مؤقت الأمان."
        },
        w9l1: {
          title: "تجاوز تسجيل الدخول NoSQL",
          story: "يتم التحقق من كلمة المرور عبر قاعدة بيانات NoSQL. قم بتغيير المتغير window.loginPayload.password إلى كائن تخطي منطقي: { '$ne': '' }.",
          hint: "في الكونسول، اكتب: window.loginPayload = { username: 'admin', password: { '$ne': '' } }; ثم اضغط تسجيل الدخول للمصفوفة."
        },
        w9l2: {
          title: "البحث بالرمز البري لعناوين NoSQL",
          story: "يقبل مربع البحث محارف الفرز العامة. اكتب محرف البحث الشامل '.*' في حقل البحث للحصول على جميع سجلات الجدول.",
          hint: "اكتب التعبير '.*' في مربع البحث واضغط على زر بحث قاعدة البيانات."
        },
        w9l3: {
          title: "فلترة المجموعات المتقاطعة NoSQL",
          story: "تقبل عمليات التصفية فحص المصفوفات. قم بتحديث متغير التصفية window.categoryFilter لاستخدام العامل المتقدم: { '$in': ['public', 'admin'] }.",
          hint: "اكتب في الكونسول: window.categoryFilter = { '$in': ['public', 'admin'] }; ثم انقر فوق زر تصفية."
        },
        w9l4: {
          title: "حقن جافا سكريبت في أوامر NoSQL ($where)",
          story: "تستخدم الفلاتر أوامر جافا سكريبت لتصفية السجلات. قم بحقن عبارة التحقق المنطقية '|| true' لتجاوز القيود وعرض البيانات.",
          hint: "اكتب في حقل الفلترة: this.status == 'active' || true ثم انقر فوق زر تشغيل الفلتر."
        },
        w9l5: {
          title: "تزييف متغير تخطي حالة القفل",
          story: "يتفادى النظام حالة القفل بالتحقق من المتغير. قم بتعديل window.bypassStatus ليكون كائناً يعبر عن نفي الحالة: { '$ne': true }.",
          hint: "اكتب في الكونسول: window.bypassStatus = { '$ne': true }; ثم اضغط على تجاوز البوابة."
        },
        w10l1: {
          title: "تلوث التعيين العام (Object Merge)",
          story: "تقوم دالة الدمج بنسخ المدخلات بشكل غير آمن. قم بتعيين Object.prototype.isAdmin = true في كونسول المتصفح.",
          hint: "في الكونسول اكتب: Object.prototype.isAdmin = true; ثم اضغط على زر تهيئة لوحة التحكم."
        },
        w10l2: {
          title: "تلوث بروتوتايب الباني (Constructor)",
          story: "قم بتلويث النموذج الأساسي عن طريق تعديل باني الكائنات. قم بتعيين Object.prototype.authorized = true في الكونسول.",
          hint: "اكتب في الكونسول: Object.prototype.authorized = true; ثم اضغط على زر التحقق من العقدة."
        },
        w10l3: {
          title: "تلوث فهارس المصفوفة",
          story: "يمكن تلوث فهارس المصفوفات الرقمية كما هو الحال مع الخصائص النصية. قم بتعيين Object.prototype['0'] = 'admin' في الكونسول.",
          hint: "اكتب في الكونسول: Object.prototype['0'] = 'admin'; ثم اضغط على زر تحميل قائمة العقد."
        },
        w10l4: {
          title: "تجاوز مسارات التوجيه بالتلوث",
          story: "يحدد النظام الوجهة من متغيرات الكائن. قم بتعيين الخصيصة المفقودة Object.prototype.redirectUrl = '/admin' في الكونسول.",
          hint: "اكتب في الكونسول: Object.prototype.redirectUrl = '/admin'; ثم اضغط على زر تشغيل بوابة التوجيه."
        },
        w10l5: {
          title: "تخطي تجميد النظام بالتلوث",
          story: "قم بتفعيل خاصية التخطي العام للمنصة للتغلب على قيود التجميد. قم بتعيين Object.prototype.bypass_freeze = true في الكونسول.",
          hint: "اكتب في الكونسول: Object.prototype.bypass_freeze = true; ثم اضغط على إلغاء قفل النواة."
        }
      },
      DEFEND: {
        w1l1: {
          title: "التحقق من الرسوم المالية",
          story: "قم بتأمين نقطة نهاية تحويل الدفع. قم بتنفيذ فحص داخل حارس WAF للتأكد من أن رسوم جسم الطلب 'fee' غير سالبة.",
          hint: "اكتب: return request.body && parseFloat(request.body.fee) >= 0;"
        },
        w1l2: {
          title: "التحقق من دور المستخدم",
          story: "الوصول إلى لوحات البيانات الحساسة يتطلب التحقق من دور المستخدم. تحقق من أن ترويسة 'x-user-role' تساوي 'admin'.",
          hint: "اكتب: return request.headers && request.headers['x-user-role'] === 'admin';"
        },
        w1l3: {
          title: "التحقق من قيمة الصرف",
          story: "تأكد من أن قيم تحويل سعر الصرف مقيدة بحدود طبيعية. اضف فحصاً يضمن أن سعر الصرف لا يتجاوز 100.",
          hint: "اكتب: return request.body && parseFloat(request.body.rate) < 100;"
        },
        w1l4: {
          title: "التحقق من هوية المستأجر",
          story: "لمنع هجمات ثغرة IDOR، تأكد من مطابقة قيمة ترويسة المستأجر (tenant) لهوية المستخدم الحالية '123'.",
          hint: "اكتب: return request.query && request.query.tenant === '123';"
        },
        w1l5: {
          title: "التحقق من المضيف المحيل",
          story: "تأكد من أن الطلب الوارد مرسل من نفس مضيف البوابة المسموح به ('http://localhost:8080/mainframe').",
          hint: "اكتب: return request.headers && request.headers['referer'] === 'http://localhost:8080/mainframe';"
        },
        w2l1: {
          title: "التحقق من كوكيز العضوية",
          story: "تأكد من صحة جلسة البث. تحقق من أن ملفات الكوكي تحتوي على إثبات العضوية الممتازة 'session=premium'.",
          hint: "اكتب: return request.headers && request.headers.cookie && request.headers.cookie.includes('session=premium');"
        },
        w2l2: {
          title: "حظر تخطي طرق الطلب (Method Override)",
          story: "احظر طرق الطلب المزيفة التي تحاول التحايل على جدار الحماية لتنفيذ عمليات الحذف (DELETE).",
          hint: "اكتب: return !request.headers || request.headers['x-http-method-override'] !== 'DELETE';"
        },
        w2l3: {
          title: "تنظيف مسارات الملفات (Traversal)",
          story: "امنع محاولات قراءة الملفات الحساسة بالتحقق من عدم احتواء اسم الملف على محارف التنقل بين المجلدات (..).",
          hint: "اكتب: return request.query && !request.query.file.includes('..');"
        },
        w2l4: {
          title: "التحقق من حدود انتهاء الجلسة",
          story: "تحقق من أن صلاحية الجلسة الممنوحة في الطلب لا تتعدى المدة القصوى الآمنة (3600 ثانية).",
          hint: "اكتب: return request.body && parseInt(request.body.expires_in, 10) <= 3600;"
        },
        w2l5: {
          title: "تصفية مفاتيح تلوث البروتوتايب",
          story: "احظر الطلبات التي تحمل معاملات تحتوي على خصائص النموذج الأساسي المشبوهة مثل الكلمة المفتاحية '__proto__'.",
          hint: "اكتب: return !request.bodyRaw || !request.bodyRaw.includes('__proto__');"
        },
        w3l1: {
          title: "التحقق من الكميات الموجبة",
          story: "احظر إدخال كميات سلع سالبة في سلة التسوق بالتأكد من أن قيمة الكمية أكبر من الصفر دائماً.",
          hint: "اكتب: return request.body && parseInt(request.body.quantity, 10) > 0;"
        },
        w3l2: {
          title: "حظر مصفوفة الكوبونات المتعددة",
          story: "تجنب تراكم قيم الخصم. تحقق من أن حقل إدخال الكوبون هو نص عادي وليس مصفوفة مكررة.",
          hint: "اكتب: return request.body && !Array.isArray(request.body.coupon);"
        },
        w3l3: {
          title: "التحقق من كلفة الشحن",
          story: "امنع التلاعب برسوم التوصيل. لا تسمح برسوم توصيل مجانية (0) إلا إذا تجاوزت قيمة المشتريات 100 دولار.",
          hint: "اكتب: return request.body && (parseFloat(request.body.shipping) > 0 || parseFloat(request.body.subtotal) > 100);"
        },
        w3l4: {
          title: "تصفية معدل الضريبة",
          story: "تحقق من سلامة البيانات الحسابية وتأكد من أن قيمة معدل الضريبة المدخل لا تقل عن القيمة الافتراضية للولاية 0.15.",
          hint: "اكتب: return request.body && parseFloat(request.body.tax_rate) >= 0.15;"
        },
        w3l5: {
          title: "حظر تعيين المعلمات الشامل (Mass Assignment)",
          story: "امنع محاولات التلاعب بالخصومات المخفية. احظر أي طلب يحمل مفتاح الخصم التلقائي 'discount_amount'.",
          hint: "اكتب: return !request.body || request.body.discount_amount === undefined;"
        },
        w4l1: {
          title: "التحقق من حدود هوية المستخدم",
          story: "قم بتأمين البوابة. احظر طلبات الدخول التي تحاول استخدام هوية المستخدم المالك رقم 1 لطلب لوحة المسؤول.",
          hint: "اكتب: return request.headers && request.headers.cookie && !request.headers.cookie.includes('user_id=1');"
        },
        w4l2: {
          title: "التحقق من وكلاء الاتصال المحلي",
          story: "احظر محاولات الاتصال المباشر من البوابات المحلية بالتحقق من عدم مطابقة عنوان IP المحول لـ '127.0.0.1'.",
          hint: "اكتب: return !request.headers || request.headers['x-forwarded-for'] !== '127.0.0.1';"
        },
        w4l3: {
          title: "تصفية ترويسات التوجيه الداخلي",
          story: "احظر الطلبات التي تحاول استخدام ترويسات التوجيه الداخلي المخصصة للمسؤولين مثل 'X-Original-URL'.",
          hint: "اكتب: return !request.headers || request.headers['x-original-url'] === undefined;"
        },
        w4l4: {
          title: "التحقق من مضيفي المصادر الخارجية (CORS)",
          story: "تأكد من أن مضيف الطلب الوارد يطابق تماماً النطاق المعتمد للشركة 'http://workspacex.com' دون أي تعديل.",
          hint: "اكتب: return !request.headers || !request.headers.origin || request.headers.origin === 'http://workspacex.com';"
        },
        w4l5: {
          title: "حظر تشفير الخوارزميات الضعيفة (JWT none)",
          story: "احظر ملفات توكن الـ JWT التي تحدد نوع الخوارزمية 'none' لإخفاء التوقيع وتخطي الفحص.",
          hint: "اكتب: return !request.headers || !request.headers.authorization || !request.headers.authorization.includes('eyJhbGciOiJub25lIn0');"
        },
        w5l1: {
          title: "التحقق من ترتيب التواريخ",
          story: "تأكد من أن تاريخ الوصول يقع زمنياً قبل تاريخ المغادرة في استمارة حجز الفندق.",
          hint: "اكتب: return request.body && new Date(request.body.check_in) < new Date(request.body.check_out);"
        },
        w5l2: {
          title: "حظر مدخلات NaN الحسابية",
          story: "تجنب الأخطاء الحسابية في الخادم. احظر قيم الأوزان غير الرقمية أو التي تحمل مدخلات مشوهة مثل 'NaN'.",
          hint: "اكتب: return request.body && typeof request.body.weight === 'number' && !isNaN(request.body.weight);"
        },
        w5l3: {
          title: "التحقق من اتساق تسعير المقاعد",
          story: "امنع تزييف درجات السفر. لا تسمح بحجز المقعد 1A المخصص للدرجة الأولى كعضو في الدرجة الاقتصادية (Economy).",
          hint: "اكتب: return request.body && !(request.body.seat_id === '1A' && request.body.tier === 'Economy');"
        },
        w5l4: {
          title: "تأمين روابط التوجيه المفتوح",
          story: "تأكد من أن رابط الصفحة التالية للتحويل نسبي ويبدأ بـ '/' لتفادي استخدامه في هجمات التوجيه الخارجي.",
          hint: "اكتب: return request.query && request.query.next.startsWith('/');"
        },
        w5l5: {
          title: "حظر حمولة الحجم الزائد (JSON bomb)",
          story: "احظر ملفات البيانات الضخمة التي تحاول إغراق محلل الخادم عن طريق التحقق من مستويات التداخل العميقة.",
          hint: "اكتب: return !request.bodyRaw || request.bodyRaw.split('{').length < 4;"
        },
        w6l1: {
          title: "التحقق من ترويسة وكيل المتصفح",
          story: "احظر برامج الأتمتة التي تعلن عن نفسها كأدوات إدارة مثل المتصفح المعرف بـ 'ByteLearn-Admin-Console'.",
          hint: "اكتب: return request.headers && request.headers['user-agent'] !== 'ByteLearn-Admin-Console';"
        },
        w6l2: {
          title: "منع هجمات الخطف عبر النقرات",
          story: "احظر دمج المنصة ضمن صفحات خارجية بالتحقق من عدم تمرير المعلمة التي تسمح بذلك 'allow_embed'.",
          hint: "اكتب: return !request.query || request.query.allow_embed !== 'true';"
        },
        w6l3: {
          title: "التحقق من نوع محتوى الملفات المرفوعة",
          story: "امنع رفع السكربتات الخبيثة بالتأكد من أن نوع الملف المرفوع هو صورة حصرياً 'image/png'.",
          hint: "اكتب: return request.headers && request.headers['content-type'] === 'image/png';"
        },
        w6l4: {
          title: "تنظيف مدخلات أوامر نظام التشغيل",
          story: "امنع تنفيذ الأوامر المتعددة عن طريق تصفية وإزالة محارف الفصل بين الأوامر البرمجية مثل الفاصلة المنقوطة ';'.",
          hint: "اكتب: return request.body && !request.body.ip.includes(';');"
        },
        w6l5: {
          title: "تصفية محارف كسر السطر (CRLF)",
          story: "امنع هجمات تزييف السجلات بتصفية وحذف محارف كسر السطر الخاصة بملفات النصوص مثل '%0d' و '\\r'.",
          hint: "اكتب: return request.query && !request.query.username.includes('%0d') && !request.query.username.includes('\\r');"
        },
        w7l1: {
          title: "التحقق من صلاحية الوصول لملفات المرضى",
          story: "امنع مستخدمي النظام العاديين من تصفح سجلات المرضى الإدارية الحساسة مثل السجل رقم '1001'.",
          hint: "اكتب: return request.query && request.query.patient_id !== '1001';"
        },
        w7l2: {
          title: "حظر مدخلات كيانات الـ XML الخارجية",
          story: "تأكد من خلو ملفات الـ XML المستوردة من ترويسات الإعلان عن الكيانات الخارجية DOCTYPE و ENTITY.",
          hint: "اكتب: return !request.bodyRaw || (!request.bodyRaw.includes('!ENTITY') && !request.bodyRaw.includes('!DOCTYPE'));"
        },
        w7l3: {
          title: "تنظيف مدخلات ثغرة حقن SQL",
          story: "تأكد من تأمين استعلامات قاعدة البيانات عن طريق حظر عبارات المقارنة المنطقية الافتراضية مثل ' OR '.",
          hint: "اكتب: return request.body && !request.body.password.includes(' OR ');"
        },
        w7l4: {
          title: "التحقق من حالة تسلسل الإعدادات",
          story: "تحقق من سلامة كائنات التكوين المستوردة واحظر أي سلاسل إعدادات تحاول تمرير صلاحية المدير 'isAdmin=true'.",
          hint: "اكتب: return request.body && !request.body.config.includes('isAdmin\";b:1;');"
        },
        w7l5: {
          title: "منع تسريب البيانات الاجتماعية (SSN)",
          story: "احظر طلبات كشف بيانات الضمان الاجتماعي للأشخاص العاديين في الحالات التي لا تتطلب ذلك.",
          hint: "اكتب: return request.query && request.query.mask !== 'false';"
        },
        w8l1: {
          title: "التحقق من قوة تشفير المفتاح",
          story: "احظر توقيع الطلبات التي تستخدم كلمات مرور التوقيع الرقمي الضعيفة والافتراضية للمنصة ('secret').",
          hint: "اكتب: return request.body && request.body.key !== 'secret';"
        },
        w8l2: {
          title: "التحقق من تنسيق الهاش العام",
          story: "تحقق من سلامة معاملات الهاش المدخلة وتأكد من أن طولها يطابق الطول المعتمد لخوارزمية SHA256 (64 محرفاً).",
          hint: "اكتب: return request.body && request.body.hash.length === 64;"
        },
        w8l3: {
          title: "منع هجمات إعادة إرسال المعاملات",
          story: "تجنب تنفيذ المعاملات القديمة. تأكد من أن قيمة معامل nonce المرسل أكبر من آخر قيمة مسجلة في النظام (1).",
          hint: "اكتب: return request.body && parseInt(request.body.nonce, 10) > 1;"
        },
        w8l4: {
          title: "حظر مفتاح المطور السري للمنصة",
          story: "احظر استخدام التوكن البرمجي المخصص للمطورين والمسرب في التعليقات العامة للحسابات ('V-KEY-99812').",
          hint: "اكتب: return request.body && request.body.secret_key !== 'V-KEY-99812';"
        },
        w8l5: {
          title: "فرض قيود أوقات المزامنة",
          story: "امنع الطلبات التي تحاول إرسال إشارات تخطي حظر أوقات فحص العمليات عن طريق تعيين مؤشر التجاوز.",
          hint: "اكتب: return request.body && request.body.bypass_check !== true;"
        },
        w9l1: {
          title: "حظر كائنات استعلامات NoSQL",
          story: "امنع كتابة استعلامات قواعد البيانات المتقدمة داخل حقل كلمة المرور بالتأكد من عدم تمرير قيم من نوع كائنات (object).",
          hint: "اكتب: return request.body && typeof request.body.password !== 'object';"
        },
        w9l2: {
          title: "تنظيف معاملات استعلامات قواعد البيانات",
          story: "احظر الطلبات التي تمرر محارف التعبيرات العامة التي تحاول استعراض كافة السجلات مثل '.*'.",
          hint: "اكتب: return request.query && request.query.search !== '.*';"
        },
        w9l3: {
          title: "حظر فلترة المصفوفات NoSQL",
          story: "احظر حقول فرز البيانات التي تحاول استخدام معاملات الاستعلام عن مصفوفات الخصائص مثل '$in'.",
          hint: "اكتب: return request.body && (typeof request.body.category !== 'object' || request.body.category['$in'] === undefined);"
        },
        w9l4: {
          title: "تصفية ترويسات تشغيل سكربتات NoSQL",
          story: "امنع محاولات تمرير أوامر تشغيل النصوص البرمجية داخل قواعد البيانات مثل العامل '$where'.",
          hint: "اكتب: return !request.body || request.body['$where'] === undefined;"
        },
        w9l5: {
          title: "التحقق من سلامة نوع الحظر المنطقي",
          story: "تأكد من أن قيمة حالة القفل المدخلة هي قيمة منطقية (boolean) صرفة وليست كائناً يحتوي على شروط تخطي.",
          hint: "اكتب: return request.body && typeof request.body.is_locked === 'boolean';"
        },
        w10l1: {
          title: "حظر مفاتيح تعيين البروتوتايب",
          story: "احظر محاولات تلوث النماذج الأساسية للكائنات بتصفية الخصائص التي تهاجم قيم صلاحيات المشرفين 'isAdmin'.",
          hint: "اكتب: return !request.bodyRaw || !request.bodyRaw.includes('isAdmin');"
        },
        w10l2: {
          title: "حظر تعديل النماذج عبر الباني (Constructor)",
          story: "احظر الترويسات التي تهاجم النموذج الأولي من خلال محاولات الوصول لخصائص الباني constructor.",
          hint: "اكتب: return !request.bodyRaw || !request.bodyRaw.includes('constructor');"
        },
        w10l3: {
          title: "تنظيف مدخلات فهارس مصفوفات الكائنات",
          story: "امنع تلوث الفهارس الرقمية الأساسية للمصفوفات عن طريق التحقق من محتوى مفاتيح الطلبات المستلمة.",
          hint: "اكتب: return !request.bodyRaw || !request.bodyRaw.includes('\"0\"');"
        },
        w10l4: {
          title: "التحقق من عناوين التوجيه المشبوهة",
          story: "احظر الطلبات التي تحمل معاملات تحاول حقن روابط إعادة توجيه خارجية مخصصة للإدارة 'redirectUrl'.",
          hint: "اكتب: return !request.body || request.body.redirectUrl === undefined;"
        },
        w10l5: {
          title: "منع إشارات تخطي تجميد النماذج",
          story: "امنع استخدام متغيرات تجاوز تجميد خصائص الكائنات الافتراضية لمنع تلوث البروتوتايب (bypass_freeze).",
          hint: "اكتب: return !request.body || request.body.bypass_freeze === undefined;"
        }
      }
    }
  },
  en: {
    quit: "Quit",
    attack: "ATTACK",
    defend: "DEFEND",
    skipLevel: "Skip Level →",
    nextRoute: "Next Route →",
    startOver: "Start Over",
    introTitle: "Welcome back, Hacker",
    introDesc: "System boundaries are rarely made of iron. They are usually made of simple instructions. Instructions that you can rewrite.",
    introBtn: "Enter Gateway",
    goalNotHere: "The goal is not here. Look closer at the menu navigation items.",
    successSoundToggle: "Success Audio Feedback",
    failSoundToggle: "Failure Audio Feedback",
    themeToggle: "Dark Interface theme",
    resetProgress: "Reset All Progress",
    hackerProfile: "Hacker Profile",
    hackerAlias: "Hacker Alias",
    hackerRank: "hacker Rank",
    levelProgression: "Level Progression",
    achievements: "Achievements & Badges",
    settingsTitle: "Gateway Settings & Security",
    lockedWarn: "You cannot change levels or switch paths while the active level is unsolved! Solve it or skip it first.",
    applyPatch: "Apply Security Patch",
    viewOverview: "Account Overview",
    viewHistory: "Transaction History",
    viewSettings: "Security Settings",
    viewTransfer: "Transfer Funds",
    viewMovies: "Browse Movies",
    viewWatchlist: "My Watchlist",
    viewConsole: "Player Console",
    viewCatalog: "Catalog",
    viewCart: "Shopping Cart",
    viewCheckout: "Checkout Page",
    viewLogs: "Workspace Logs",
    viewControls: "Access Controls",
    viewPortal: "SSO Portal",
    viewBoard: "Flight Board",
    viewHotel: "Hotel Booking",
    viewSeats: "Seat Selector",
    viewChats: "Active Chats",
    viewWebhooks: "System Webhooks",
    viewTerminal: "Terminal Console",
    viewRecords: "Clinical Records",
    viewWallet: "Exchange Wallet",
    viewBypass: "Bypass Protocols",
    viewWaf: "WAF Guard",
    
    worlds: {
      1: "PayPal Financial",
      2: "Netflix Streaming",
      3: "Amazon Shop",
      4: "SpaceX SSO",
      5: "Airbnb Travel",
      6: "SecureChat CLI",
      7: "HealthLink Clinic",
      8: "CryptoVault Node",
      9: "Matrix Mainframe 9",
      10: "Matrix Mainframe 10"
    },

    challenges: {
      ATTACK: {}, // Will fall back to standard DB values
      DEFEND: {}  // Will fall back to standard DB values
    }
  }
};
