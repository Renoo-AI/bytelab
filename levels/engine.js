/* Bytelab Engine v2 — TryHackMe Style */
(function() {
    const ASSETS = {
        logo:'assets/logo.png', byteHello:'assets/byte-hello.png', byteDetective:'assets/byte-detective.png',
        bytePc:'assets/byte-pc.png', byteHappy:'assets/byte-happy.png', byteHang:'assets/byte-hang.png',
        byteRich:'assets/byte-rich.png', byteHacker:'assets/byte-hacker.png', byteNinja:'assets/byte-ninja.png',
        byteBook:'assets/byte-book.png', byteLightning:'assets/byte-lightning.png'
    };

    const ICONS = {
        check:'<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
        send:'<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
        shield:'<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        bolt:'<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        xmark:'<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        crown:'<span class="premium-badge"><svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> PREMIUM</span>'
    };

    const ROOM_DATA = {
        en: {
            w0l1:{title:"Hidden View",desc:"The National Bank dashboard shows masked account balances. But the real balance is hidden in plain sight — somewhere in the DOM.",objective:"Inspect the page and find the element with display:none. Change it to display:block to reveal the hidden balance."},
            w0l2:{title:"Price Mod",desc:"A premium upgrade costs $999. But what if the price is just text that can be changed before the confirmation reads it?",objective:"Modify the price display in DevTools before clicking Upgrade Now. Pay what you want!"},
            w0l3:{title:"Lock Bypass",desc:"The Transfer Funds button has TWO layers of protection. A disabled attribute AND a CSS class blocking clicks.",objective:"Remove the disabled attribute AND the locked class from the Transfer Funds button to unlock it."},
            w0l4:{title:"Role Escalate",desc:"The dashboard thinks you're a guest. But your role is just a data attribute that can be rewritten.",objective:"Change data-role from 'guest' to 'admin' on the app-shell element to unlock admin controls."},
            w1l1:{title:"Homograph Domain Spoof",desc:"PayBal's transfer system trusts client-side recipient validation. Unicode lookalike characters can bypass domain checks.",objective:"Change the recipient input from 'paypal.com' to 'paybaI.com' (capital I) to spoof the domain."},
            w1l2:{title:"Micro-Fractional Rounding",desc:"The currency converter accepts any amount. But tiny fractions below 0.00001 cause rounding errors that accumulate.",objective:"Enter an amount smaller than 0.00001 in the converter to trigger a rounding exploit."},
            w1l3:{title:"Webhook Signature Bypass",desc:"Stripe webhooks verify signatures client-side. The X-Bypass-Signature header can skip verification entirely.",objective:"Add X-Bypass-Signature: true to the HTTP request headers to skip signature validation."},
            w1l4:{title:"Integer Underflow",desc:"The debt panel accepts negative amounts. But go below -2147483648 and the signed integer wraps around to positive.",objective:"Enter an amount less than or equal to -2147483649 to trigger an integer underflow."},
            w1l5:{title:"Escrow Time Manipulation",desc:"Escrow funds are locked until a future date. But the client sends their own timestamp which can be faked.",objective:"Set X-Client-Time to a date after the escrow release date to bypass the time lock."},
            w2l1:{title:"Cookie Tier Escalation",desc:"Netflox limits streams based on the tier cookie. Free users can't access premium content.",objective:"Change the tier cookie from 'free' to 'premium' to upgrade your streaming access."},
            w2l2:{title:"Overlay DOM Deletion",desc:"A premium subscription overlay blocks the video player. But it's just a DOM element that can be deleted.",objective:"Delete the subscription-overlay div from the DOM to access the premium stream."},
            w2l3:{title:"SSO Redirect Hijack",desc:"Google SSO redirects to a hardcoded URL. Change the data-redirect attribute to hijack the login flow.",objective:"Modify the data-redirect attribute on the Google SSO button to point to evil.com."},
            w2l4:{title:"Global Timer Abuse",desc:"The trial timer counts down from 10 seconds. But it's stored in a global JavaScript variable.",objective:"Set window.trialSecondsRemaining to 999999 in the console to extend your trial forever."},
            w2l5:{title:"Prototype Pollution",desc:"Authorization checks reference Object.prototype.isAuthorized. Pollute the prototype to gain access.",objective:"Set Object.prototype.isAuthorized = true in the console to bypass all authorization."},
            w3l1:{title:"Negative Quantity Bypass",desc:"CloudStore validates quantities client-side. But negative values can flip the total price.",objective:"Set the quantity to a negative number to receive money on your purchase."},
            w3l2:{title:"Custom Shipping Injection",desc:"Shipping options are predefined. But the dropdown can be modified to inject a zero-cost option.",objective:"Add an option with value '0' to the shipping select element and select it for free shipping."},
            w3l3:{title:"Hidden Tax Override",desc:"Sales tax is stored in a hidden input. Modify its value to zero out the tax.",objective:"Change the hidden tax-rate input value from 0.15 to 0 to eliminate sales tax."},
            w3l4:{title:"Readonly Coupon Bypass",desc:"The coupon field is readonly with value 'NONE'. Remove readonly and enter a coupon code.",objective:"Remove the readonly attribute from the coupon input and enter 'FREE100' for 100% off."},
            w3l5:{title:"DOM Parameter Injection",desc:"The checkout form parses all inputs automatically. Inject a hidden discount field to reduce the price.",objective:"Add a hidden input with id='discount_value' and value='500' to the checkout form."},
            w4l1:{title:"SSO User ID Spoof",desc:"WorkspaceX identifies users via a cookie. Change the user_id to impersonate an admin.",objective:"Change the user_id cookie to '1' to impersonate the root administrator."},
            w4l2:{title:"IP Proxy Override",desc:"The gateway IP is stored in a global variable. Change it to 127.0.0.1 to bypass network restrictions.",objective:"Set window.gatewayIp to '127.0.0.1' to trick the system into thinking you're local."},
            w4l3:{title:"Endpoint Path Tampering",desc:"The Save Config button posts to a public endpoint. But the route is stored in a data attribute.",objective:"Change data-endpoint on the submit button from '/v1/public/save' to '/v1/admin/shutdown'."},
            w4l4:{title:"Host Header Spoofing",desc:"Origin validation checks window.originHeader. Set it to the internal domain to bypass CORS.",objective:"Set window.originHeader to 'workspacex.com' to pass the origin whitelist check."},
            w4l5:{title:"LocalStorage Auth Bypass",desc:"SSO status is stored in localStorage. Changing it to 'authorized' skips the login flow.",objective:"Set localStorage auth_status to 'authorized' to bypass SSO authentication."},
            w5l1:{title:"Reverse Date Chronology",desc:"AirBook validates bookings by comparing dates client-side. Reverse the dates to get a negative duration.",objective:"Set check-out date before check-in date to create a negative stay duration."},
            w5l2:{title:"NaN Weight Injection",desc:"Luggage weight is validated as a number. But NaN bypasses max weight checks.",objective:"Type 'NaN' into the luggage weight field to bypass the maximum weight limit."},
            w5l3:{title:"Seat Tier Desync",desc:"Premium seats are disabled for economy users. Remove disabled and change data-tier to book premium.",objective:"Remove the disabled attribute from seat 1A and change data-tier to 'economy' to book it."},
            w5l4:{title:"Open Redirect",desc:"The logo link redirects to the homepage. Change its href to point to an external malicious site.",objective:"Change the logo link href from '/' to 'http://evil.com' to create an open redirect."},
            w5l5:{title:"Config Variable Override",desc:"Flight verification is controlled by a global config. Flip the bypass flag to skip all checks.",objective:"Set window.flightConfig.bypass_verification to true to skip security verification."},
            w6l1:{title:"Telemetry Data Spoof",desc:"SpaceY's satellite telemetry can be edited client-side. Fake the altitude readings.",objective:"Type 'altitude:9999' in the telemetry input to spoof the satellite altitude."},
            w6l2:{title:"Launch Code Bypass",desc:"Satellite deployment requires an authorization code. The code is stored in a JS variable.",objective:"Set window.spaceConfig.auth_code to 'LAUNCH-ALLOWED' to authorize the deployment."},
            w6l3:{title:"Fuel Capacity Overflow",desc:"Fuel budgets use 32-bit integers. Overflow the limit to get unlimited fuel.",objective:"Set window.spaceConfig.fuel_capacity to a value greater than 1000000 to overflow the budget."},
            w6l4:{title:"Satellite Command Hijack",desc:"Satellite commands are validated client-side. Inject an OVERRIDE command to take control.",objective:"Type 'OVERRIDE' in the telemetry input to hijack satellite command authority."},
            w6l5:{title:"Mission Role Escalation",desc:"Mission control roles are stored in a data attribute. Escalate from operator to commander.",objective:"Add data-role='commander' to the deploy button to escalate your mission privileges."},
            w7l1:{title:"Fare Manipulation",desc:"Uper ride fares are calculated client-side. Setting a negative fare means you get paid.",objective:"Change the fare amount to a negative value to earn money on your ride."},
            w7l2:{title:"Driver Account Takeover",desc:"Driver sessions use cookies. Change the driver_id cookie to steal a different driver's account.",objective:"Set the driver_id cookie to 'DRV-001' to take over the first driver's account."},
            w7l3:{title:"GPS Location Spoof",desc:"Pickup coordinates come from the client. Spoof them to 0,0 to send the driver to Null Island.",objective:"Add ?pickup=0,0 to the URL to spoof your GPS pickup location."},
            w7l4:{title:"Rating System Exploit",desc:"Driver ratings accept values above 5.0. Inflate a rating to manipulate the system.",objective:"Set the driver rating to a value greater than 5.0 to exploit the rating system."},
            w7l5:{title:"Payment Gateway Bypass",desc:"Payment confirmation is stored in localStorage. Set it to 'bypass' to ride for free.",objective:"Set localStorage uper_payment to 'bypass' to skip payment processing."}
        },
        ar: {
            w0l1:{title:"عرض مخفي",desc:"لوحة تحكم البنك تخفي الأرصدة الحقيقية. لكن الرصيد الحقيقي موجود في DOM.",objective:"ابحث عن العنصر المخفي بـ display:none وغيّره إلى display:block لكشف الرصيد."},
            w0l2:{title:"تعديل السعر",desc:"الترقية المميزة تكلف $999. لكن السعر مجرد نص يمكن تغييره.",objective:"عدّل السعر في DevTools قبل النقر على ترقية الآن. ادفع ما تريد!"},
            w0l3:{title:"فتح القفل",desc:"زر تحويل الأموال محمي بطبقتين: الخاصية disabled وكود CSS.",objective:"احذف الخاصية disabled والكود locked من زر تحويل الأموال."},
            w0l4:{title:"تصعيد الصلاحية",desc:"لوحة التحكم تظن أنك ضيف. لكن صلاحيتك هي مجرد خاصية data-role.",objective:"غيّر data-role من guest إلى admin في عنصر app-shell."},
            w1l1:{title:"انتحال النطاق",desc:"نظام تحويل باي بال يتحقق من المستلم من جهة العميل. يمكن خداعه بأحرف متشابهة.",objective:"غيّر حقل المستلم من paypal.com إلى paybaI.com لخداع النظام."},
            w1l2:{title:"تقريب كسري",desc:"محول العملات يقبل أي مبلغ. الكسور الصغيرة جداً تسبب أخطاء تقريب.",objective:"أدخل مبلغاً أقل من 0.00001 لتفعيل ثغرة التقريب."},
            w1l3:{title:"تجاوز توقيع Webhook",desc:"Webhooks تتحقق من التوقيع من جهة العميل. يمكن تخطيها بإضافة header.",objective:"أضف X-Bypass-Signature: true إلى Header الطلب لتجاوز التحقق."},
            w1l4:{title:"طفح الأعداد الصحيحة",desc:"لوحة الديون تقبل أرقاماً سالبة. أقل من -2147483648 يلتف الرقم إلى موجب.",objective:"أدخل رقماً أقل من -2147483649 لتفعيل طفح العدد الصحيح."},
            w1l5:{title:"التلاعب بالوقت",desc:"الأموال المجمدة مقفولة حتى تاريخ محدد. يمكن تزوير الطابع الزمني.",objective:"غيّر X-Client-Time إلى تاريخ بعد فك التجميد لتجاوز القفل."},
            w2l1:{title:"تصعيد صلاحية الكوكيز",desc:"Netflox يحدد جودة البث بناءً على الكوكيز. غيّرها للحصول على بريميوم.",objective:"غيّر tier cookie من free إلى premium لترقية صلاحية البث."},
            w2l2:{title:"حذف طبقة الاشتراك",desc:"طبقة الاشتراك تمنع تشغيل الفيديو. لكنها مجرد عنصر DOM يمكن حذفه.",objective:"احذف عنصر subscription-overlay من DOM لتشغيل البث المميز."},
            w2l3:{title:"اختطاف redirect",desc:"تسجيل الدخول بـ Google يعيد التوجيه إلى URL محدد. غيّره لاختطاف الدخول.",objective:"غيّر data-redirect في زر Google SSO إلى evil.com."},
            w2l4:{title:"التلاعب بالمؤقت",desc:"المؤقت التجريبي يعد من 10 ثوانٍ. لكنه مخزن في متغير عام.",objective:"غيّر window.trialSecondsRemaining إلى 999999 لتمديد التجربة."},
            w2l5:{title:"تلويث النموذج الأولي",desc:"التحقق من الصلاحية يستخدم Object.prototype.isAuthorized. لوّثه لتجاوز التحقق.",objective:"غيّر Object.prototype.isAuthorized إلى true في الكونسول."},
            w3l1:{title:"الكمية السالبة",desc:"CloudStore يتحقق من الكميات من جهة العميل. القيم السالبة تقلب السعر.",objective:"أدخل كمية سالبة للحصول على المال بدلاً من الدفع."},
            w3l2:{title:"حقن خيار شحن مخصص",desc:"خيارات الشحن محددة مسبقاً. يمكن إضافة خيار مجاني.",objective:"أضف option بقيمة '0' إلى قائمة الشحن واختره."},
            w3l3:{title:"تجاوز الضريبة المخفية",desc:"الضريبة مخزنة في حقل مخفي. غيّر قيمتها إلى صفر.",objective:"غيّر قيمة hidden input tax-rate من 0.15 إلى 0."},
            w3l4:{title:"تجاوز حقل readonly",desc:"حقل الكوبون readonly بقيمة NONE. احذف readonly وأدخل كوبون.",objective:"احذف readonly من حقل الكوبون وأدخل 'FREE100'."},
            w3l5:{title:"حقن باراميتر DOM",desc:"نموذج الدفع يقرأ كل الحقول تلقائياً. أضف حقل خصم مخفي.",objective:"أضف hidden input بـ id='discount_value' وقيمة '500'."},
            w4l1:{title:"انتحال معرف المستخدم",desc:"WorkspaceX يتعرف على المستخدمين عبر cookie. غيّره لانتحال حساب أدمن.",objective:"غيّر user_id cookie إلى '1' لانتحال صلاحية المشرف."},
            w4l2:{title:"تجاوز الـ IP",desc:"IP البوابة مخزن في متغير عام. غيّره إلى 127.0.0.1.",objective:"غيّر window.gatewayIp إلى '127.0.0.1' لتجاوز قيود الشبكة."},
            w4l3:{title:"تعديل مسار API",desc:"زر حفظ الإعدادات يرسل إلى مسار عام. المسار مخزن في data attribute.",objective:"غيّر data-endpoint إلى '/v1/admin/shutdown'."},
            w4l4:{title:"انتحال المصدر",desc:"التحقق من المصدر يستخدم window.originHeader. غيّره للمصدر الداخلي.",objective:"غيّر window.originHeader إلى 'workspacex.com'."},
            w4l5:{title:"تجاوز المصادقة",desc:"حالة SSO مخزنة في localStorage. غيّرها لتجاوز تسجيل الدخول.",objective:"غيّر localStorage auth_status إلى 'authorized'."},
            w5l1:{title:"عكس التواريخ",desc:"AirBook يتحقق من تواريخ الحجز من جهة العميل. اعكسها للحصول على مدة سالبة.",objective:"اجعل تاريخ المغادرة قبل تاريخ الوصول للحصول على مدة سلبية."},
            w5l2:{title:"حقن NaN",desc:"وزن الأمتعة يتحقق منه كرقم. NaN يتجاوز فحص الوزن الأقصى.",objective:"أدخل 'NaN' في حقل الوزن لتجاوز الحد الأقصى."},
            w5l3:{title:"تجاوز درجة المقعد",desc:"المقاعد المميزة معطلة للمستخدمين العاديين. احذف disabled وغيّر data-tier.",objective:"احذف disabled من المقعد 1A وغيّر data-tier إلى 'economy'."},
            w5l4:{title:"إعادة توجيه مفتوحة",desc:"رابط الشعار يعيد التوجيه للصفحة الرئيسية. غيّر href لموقع خارجي.",objective:"غيّر href رابط الشعار إلى 'http://evil.com'."},
            w5l5:{title:"تجاوز الإعدادات",desc:"التحقق من الحجز يتحكم به config عام. غيّره لتجاوز الفحص.",objective:"غيّر window.flightConfig.bypass_verification إلى true."},
            w6l1:{title:"تزوير بيانات القياس",desc:"قياسات الأقمار الصناعية قابلة للتعديل من جهة العميل. زوّر قراءة الارتفاع.",objective:"أدخل 'altitude:9999' في حقل القياسات لتزوير الارتفاع."},
            w6l2:{title:"تجاوز رمز الإطلاق",desc:"إطلاق القمر الصناعي يتطلب رمز تفويض. الرمز مخزن في متغير.",objective:"غيّر window.spaceConfig.auth_code إلى 'LAUNCH-ALLOWED'."},
            w6l3:{title:"طفح ميزانية الوقود",desc:"ميزانية الوقود تستخدم أعداداً صحيحة 32-bit. تجاوز الحد للحصول على وقود غير محدود.",objective:"غيّر window.spaceConfig.fuel_capacity إلى أكثر من 1000000."},
            w6l4:{title:"اختطاف أمر القمر",desc:"أوامر القمر الصناعي تُتحقق من جهة العميل. حقن أمر OVERRIDE.",objective:"أدخل 'OVERRIDE' في حقل القياسات للاستيلاء على القمر."},
            w6l5:{title:"تصعيد صلاحية المهمة",desc:"صلاحيات غرفة التحكم مخزنة في data attribute. صعّد من مشغل إلى قائد.",objective:"أضف data-role='commander' لزر الإطلاق."},
            w7l1:{title:"التلاعب بالأجرة",desc:"أجرة الرحلة تحسب من جهة العميل. أجرة سالبة تعني أنك تربح.",objective:"غيّر قيمة الأجرة إلى رقم سالب لتربح من الرحلة."},
            w7l2:{title:"الاستيلاء على حساب السائق",desc:"جلسات السائق تستخدم cookies. غيّر driver_id لسرقة حساب سائق آخر.",objective:"غيّر driver_id cookie إلى 'DRV-001'."},
            w7l3:{title:"تزوير الموقع",desc:"إحداثيات موقعك تأتي من جهة العميل. زوّرها إلى 0,0.",objective:"أضف ?pickup=0,0 إلى الرابط لتزوير موقعك."},
            w7l4:{title:"استغلال نظام التقييم",desc:"تقييمات السائقين تقبل أرقاماً أعلى من 5.0. ضخّم التقييم.",objective:"غيّر تقييم السائق إلى أكثر من 5.0."},
            w7l5:{title:"تجاوز بوابة الدفع",desc:"تأكيد الدفع مخزن في localStorage. غيّره لتتخطى الدفع.",objective:"غيّر localStorage uper_payment إلى 'bypass'."}
        }
    };

    function getRoomData() {
        const db = ROOM_DATA[state.lang] || ROOM_DATA.en;
        const key = 'w'+state.world+'l'+state.level;
        return db[key] || { title:"ByteLab Challenge", desc:"Inspect the target and find the vulnerability.", objective:"Exploit the client-side control to capture the flag." };
    }

    let state = { world:1, level:1, mode:'attack', lang:'en', hasWon:false, observer:null, watchInterval:null };

    const AudioEngine = {
        ctx:null, init(){if(!this.ctx)this.ctx=new(window.AudioContext||window.webkitAudioContext)()},
        playPop(){this.init();const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sine';o.frequency.setValueAtTime(400,this.ctx.currentTime);o.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.12);g.gain.setValueAtTime(.08,this.ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12);o.connect(g);g.connect(this.ctx.destination);o.start();o.stop(this.ctx.currentTime+.12)},
        playChime(){this.init();[523.25,659.25,783.99,1046.5].forEach((f,i)=>{const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sine';o.frequency.setValueAtTime(f,this.ctx.currentTime+i*.1);g.gain.setValueAtTime(.12,this.ctx.currentTime+i*.1);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+i*.1+.4);o.connect(g);g.connect(this.ctx.destination);o.start(this.ctx.currentTime+i*.1);o.stop(this.ctx.currentTime+i*.1+.4)})},
        playError(){this.init();const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sawtooth';o.frequency.setValueAtTime(110,this.ctx.currentTime);o.frequency.linearRampToValueAtTime(70,this.ctx.currentTime+.35);g.gain.setValueAtTime(.14,this.ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35);o.connect(g);g.connect(this.ctx.destination);o.start();o.stop(this.ctx.currentTime+.35)}
    };

    window.initLevel = function({world,level}) {
        state.world=world; state.level=level;
        const p=new URLSearchParams(window.location.search);
        state.mode=p.get('mode')||'attack'; state.lang=p.get('lang')||'en';
        document.documentElement.dir=state.lang==='ar'?'rtl':'ltr';
        buildStructure(); renderLearnTab(); initMascot(); setupAudioTriggers();
    };

    function buildStructure() {
        document.body.innerHTML = `
<div id="transition-screen" style="position:fixed;inset:0;background:var(--primary);z-index:999;opacity:1;pointer-events:none;transition:opacity .5s"></div>
<header id="header-nav">
    <div style="display:flex;align-items:center;gap:10px">
        <img src="${ASSETS.logo}" style="width:26px;height:26px;object-fit:contain">
        <span style="font-weight:800;font-size:1.1rem">ByteLab</span>
    </div>
    <div style="display:flex;align-items:center;gap:12px">
        <div class="progress-rail"><div id="progress-bar" class="progress-fill"></div></div>
        <span id="progress-label" style="font-size:.7rem;font-weight:800;color:var(--secondary)">0%</span>
        <button onclick="quitToPortal()" style="background:none;border:none;font-weight:700;font-size:.8rem;color:var(--secondary);cursor:pointer;display:flex;align-items:center;gap:4px">${ICONS.xmark} Quit</button>
    </div>
</header>
<div id="story-overlay" style="position:fixed;inset:0;background:white;z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto">
    <div id="room-brief" style="max-width:520px;width:100%"></div>
</div>
<main id="game-stage" style="display:none;grid-template-columns:1.1fr .9fr;flex:1;overflow:hidden">
    <div class="stage-panel left" id="left-play-panel"></div>
    <div class="stage-panel right" style="flex-direction:column">
        <div style="flex:1;display:flex;flex-direction:column" id="right-control-panel"></div>
        <div class="console-panel" id="terminal-logs"><div class="log-row info">&gt; Terminal online.</div></div>
    </div>
</main>
<div class="mascot-rig" id="mascot-hud">
    <div class="mascot-bubble" id="mascot-bubble-text">Hey there! Let's hack.</div>
    <img id="mascot-avatar" class="mascot-image" src="${ASSETS.byteHello}">
</div>
<div id="feedback-drawer" style="display:none"></div>`;
        setTimeout(()=>{const t=document.getElementById('transition-screen');if(t)t.style.opacity='0'},300);
    }

    window.quitToPortal=function(){window.location.href='../../game.html'};

    function speak(text,duration=5000){
        const b=document.getElementById('mascot-bubble-text');
        if(!b)return; b.innerText=text; b.classList.add('open');
        clearTimeout(window.speakTimer);
        if(duration>0)window.speakTimer=setTimeout(()=>b.classList.remove('open'),duration);
    }

    function initMascot(){
        const img=document.getElementById('mascot-avatar');
        if(img)img.onclick=()=>{AudioEngine.playPop();speak("Use DevTools (F12) to inspect the left panel and find the vulnerability!")};
    }

    function setupAudioTriggers(){document.body.addEventListener('click',()=>AudioEngine.init(),{once:true})}

    function renderLearnTab(){
        const data=getRoomData();
        const w=document.getElementById('room-brief');
        w.innerHTML=`
<div style="display:flex;flex-direction:column;gap:20px;animation:slideFadeIn .4s forwards">
    <div style="display:flex;align-items:center;gap:16px">
        <img src="${ASSETS.byteDetective}" style="width:64px;height:64px;object-fit:contain;border-radius:50%;box-shadow:0 4px 20px rgba(69,70,215,0.12)">
        <div>
            <span style="font-size:.7rem;font-weight:800;color:var(--primary);text-transform:uppercase;letter-spacing:.1em">ROOM W${state.world}L${state.level}</span>
            <h1 style="font-family:var(--font-display);font-size:1.6rem;font-weight:800;margin-top:2px">${data.title}</h1>
        </div>
    </div>
    <div style="background:var(--bg);border-radius:20px;padding:20px;border:1px solid var(--border)">
        <p style="color:var(--text);font-size:.9rem;line-height:1.6">${data.desc}</p>
    </div>
    <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:20px;padding:18px;display:flex;gap:12px">
        <span style="width:28px;height:28px;background:var(--primary);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0;margin-top:1px">!</span>
        <div>
            <span style="font-weight:800;font-size:.85rem;color:var(--primary)">Objective</span>
            <p style="font-size:.85rem;color:#4338ca;margin-top:4px;line-height:1.5">${data.objective}</p>
        </div>
    </div>
    <button onclick="startPlayMode()" style="background:var(--primary);color:white;border:none;padding:16px;border-radius:16px;font-weight:800;font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 4px 16px rgba(69,70,215,0.25)">${ICONS.bolt} DEPLOY ATTACK</button>
</div>`;
    }

    window.startPlayMode=function(){
        state.step='play';
        document.getElementById('story-overlay').style.display='none';
        document.getElementById('game-stage').style.display='grid';
        const pb=document.getElementById('progress-bar'); if(pb)pb.style.width='50%';
        const pl=document.getElementById('progress-label'); if(pl)pl.innerText='50%';
        const av=document.getElementById('mascot-avatar'); if(av)av.src=ASSETS.byteBook;
        speak("Let's hack! Inspect the target and modify client-side controls.");
        renderPlayPhase();
    };

    function renderPlayPhase(){renderLeftCard();renderRightControls()}

    // Rest of the functions remain the same as before — the full engine
    // This is a placeholder. The actual game logic for each world/level
    // would be loaded from challenges.js or inline

    console.log('Engine loaded for W'+state.world+'L'+state.level);
})();
