/* Bytelab Engine v2 — TryHackMe Style */
(function() {
    const ASSETS = {
        logo:'../../../assets/logo.png', byteHello:'../../../assets/byte-hello.png', byteDetective:'../../../assets/byte-detective.png',
        bytePc:'../../../assets/byte-pc.png', byteHappy:'../../../assets/byte-happy.png', byteHang:'../../../assets/byte-hang.png',
        byteRich:'../../../assets/byte-rich.png', byteHacker:'../../../assets/byte-hello.png', byteNinja:'../../../assets/byte-ninja.png',
        byteBook:'../../../assets/byte-book.png', byteLightning:'../../../assets/byte-lightning.png'
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
            w1l1:{title:"Homograph Domain Spoof",desc:"PayPal's transfer system trusts client-side recipient validation. Unicode lookalike characters can bypass domain checks.",objective:"Change the recipient input from 'paypal.com' to 'paybaI.com' (capital I) to spoof the domain."},
            w1l2:{title:"Micro-Fractional Rounding",desc:"The currency converter accepts any amount. But tiny fractions below 0.00001 cause rounding errors that accumulate.",objective:"Enter an amount smaller than 0.00001 in the converter to trigger a rounding exploit."},
            w1l3:{title:"Webhook Signature Bypass",desc:"Stripe webhooks verify signatures client-side. The X-Bypass-Signature header can skip verification entirely.",objective:"Add X-Bypass-Signature: true to the HTTP request headers to skip signature validation."},
            w1l4:{title:"Integer Underflow",desc:"The debt panel accepts negative amounts. But go below -2147483648 and the signed integer wraps around to positive.",objective:"Enter an amount less than or equal to -2147483649 to trigger an integer underflow."},
            w1l5:{title:"Escrow Time Manipulation",desc:"Escrow funds are locked until a future date. But the client sends their own timestamp which can be faked.",objective:"Set X-Client-Time to a date after the escrow release date to bypass the time lock."},
            w2l1:{title:"Cookie Tier Escalation",desc:"NNNetflix limits streams based on the tier cookie. Free users can't access premium content.",objective:"Change the tier cookie from 'free' to 'premium' to upgrade your streaming access."},
            w2l2:{title:"Overlay DOM Deletion",desc:"A premium subscription overlay blocks the video player. But it's just a DOM element that can be deleted.",objective:"Delete the subscription-overlay div from the DOM to access the premium stream."},
            w2l3:{title:"SSO Redirect Hijack",desc:"Google SSO redirects to a hardcoded URL. Change the data-redirect attribute to hijack the login flow.",objective:"Modify the data-redirect attribute on the Google SSO button to point to evil.com."},
            w2l4:{title:"Global Timer Abuse",desc:"The trial timer counts down from 10 seconds. But it's stored in a global JavaScript variable.",objective:"Set window.trialSecondsRemaining to 999999 in the console to extend your trial forever."},
            w2l5:{title:"Prototype Pollution",desc:"Authorization checks reference Object.prototype.isAuthorized. Pollute the prototype to gain access.",objective:"Set Object.prototype.isAuthorized = true in the console to bypass all authorization."},
            w3l1:{title:"Negative Quantity Bypass",desc:"Amazon validates quantities client-side. But negative values can flip the total price.",objective:"Set the quantity to a negative number to receive money on your purchase."},
            w3l2:{title:"Custom Shipping Injection",desc:"Shipping options are predefined. But the dropdown can be modified to inject a zero-cost option.",objective:"Add an option with value '0' to the shipping select element and select it for free shipping."},
            w3l3:{title:"Hidden Tax Override",desc:"Sales tax is stored in a hidden input. Modify its value to zero out the tax.",objective:"Change the hidden tax-rate input value from 0.15 to 0 to eliminate sales tax."},
            w3l4:{title:"Readonly Coupon Bypass",desc:"The coupon field is readonly with value 'NONE'. Remove readonly and enter a coupon code.",objective:"Remove the readonly attribute from the coupon input and enter 'FREE100' for 100% off."},
            w3l5:{title:"DOM Parameter Injection",desc:"The checkout form parses all inputs automatically. Inject a hidden discount field to reduce the price.",objective:"Add a hidden input with id='discount_value' and value='500' to the checkout form."},
            w4l1:{title:"SSO User ID Spoof",desc:"Slack identifies users via a cookie. Change the user_id to impersonate an admin.",objective:"Change the user_id cookie to '1' to impersonate the root administrator."},
            w4l2:{title:"IP Proxy Override",desc:"The gateway IP is stored in a global variable. Change it to 127.0.0.1 to bypass network restrictions.",objective:"Set window.gatewayIp to '127.0.0.1' to trick the system into thinking you're local."},
            w4l3:{title:"Endpoint Path Tampering",desc:"The Save Config button posts to a public endpoint. But the route is stored in a data attribute.",objective:"Change data-endpoint on the submit button from '/v1/public/save' to '/v1/admin/shutdown'."},
            w4l4:{title:"Host Header Spoofing",desc:"Origin validation checks window.originHeader. Set it to the internal domain to bypass CORS.",objective:"Set window.originHeader to 'Slack.com' to pass the origin whitelist check."},
            w4l5:{title:"LocalStorage Auth Bypass",desc:"SSO status is stored in localStorage. Changing it to 'authorized' skips the login flow.",objective:"Set localStorage auth_status to 'authorized' to bypass SSO authentication."},
            w5l1:{title:"Reverse Date Chronology",desc:"Airbnb validates bookings by comparing dates client-side. Reverse the dates to get a negative duration.",objective:"Set check-out date before check-in date to create a negative stay duration."},
            w5l2:{title:"NaN Weight Injection",desc:"Luggage weight is validated as a number. But NaN bypasses max weight checks.",objective:"Type 'NaN' into the luggage weight field to bypass the maximum weight limit."},
            w5l3:{title:"Seat Tier Desync",desc:"Premium seats are disabled for economy users. Remove disabled and change data-tier to book premium.",objective:"Remove the disabled attribute from seat 1A and change data-tier to 'economy' to book it."},
            w5l4:{title:"Open Redirect",desc:"The logo link redirects to the homepage. Change its href to point to an external malicious site.",objective:"Change the logo link href from '/' to 'http://evil.com' to create an open redirect."},
            w5l5:{title:"Config Variable Override",desc:"Flight verification is controlled by a global config. Flip the bypass flag to skip all checks.",objective:"Set window.flightConfig.bypass_verification to true to skip security verification."},
            w6l1:{title:"Telemetry Data Spoof",desc:"SpaceY's satellite telemetry can be edited client-side. Fake the altitude readings.",objective:"Type 'altitude:9999' in the telemetry input to spoof the satellite altitude."},
            w6l2:{title:"Launch Code Bypass",desc:"Satellite deployment requires an authorization code. The code is stored in a JS variable.",objective:"Set window.spaceConfig.auth_code to 'LAUNCH-ALLOWED' to authorize the deployment."},
            w6l3:{title:"Fuel Capacity Overflow",desc:"Fuel budgets use 32-bit integers. Overflow the limit to get unlimited fuel.",objective:"Set window.spaceConfig.fuel_capacity to a value greater than 1000000 to overflow the budget."},
            w6l4:{title:"Satellite Command Hijack",desc:"Satellite commands are validated client-side. Inject an OVERRIDE command to take control.",objective:"Type 'OVERRIDE' in the telemetry input to hijack satellite command authority."},
            w6l5:{title:"Mission Role Escalation",desc:"Mission control roles are stored in a data attribute. Escalate from operator to commander.",objective:"Add data-role='commander' to the deploy button to escalate your mission privileges."},
            w7l1:{title:"Fare Manipulation",desc:"Uber ride fares are calculated client-side. Setting a negative fare means you get paid.",objective:"Change the fare amount to a negative value to earn money on your ride."},
            w7l2:{title:"Driver Account Takeover",desc:"Driver sessions use cookies. Change the driver_id cookie to steal a different driver's account.",objective:"Set the driver_id cookie to 'DRV-001' to take over the first driver's account."},
            w7l3:{title:"GPS Location Spoof",desc:"Pickup coordinates come from the client. Spoof them to 0,0 to send the driver to Null Island.",objective:"Add ?pickup=0,0 to the URL to spoof your GPS pickup location."},
            w7l4:{title:"Rating System Exploit",desc:"Driver ratings accept values above 5.0. Inflate a rating to manipulate the system.",objective:"Set the driver rating to a value greater than 5.0 to exploit the rating system."},
            w7l5:{title:"Payment Gateway Bypass",desc:"Payment confirmation is stored in localStorage. Set it to 'bypass' to ride for free.",objective:"Set localStorage Uber_payment to 'bypass' to skip payment processing."}
        },
            w6l1:{title:"Prompt Injection Leak",desc:"A premium AI chat interface hides its system instructions via a client-side layout trick. Intercept the DOM structure to extract the hidden system prompt guidelines.",objective:"Find the hidden system prompt element and make it visible to extract the AI's internal instructions."},
            w6l2:{title:"Token Temperature Flooding",desc:"The AI slider parameter controls allow floating-point modification. Force the temperature configuration past its maximum ceiling via the console.",objective:"Set the temperature input to a value greater than 2.0 via DevTools or console to crash the generation loop."},
            w6l3:{title:"Premium Stream Hijack",desc:"The response streaming layout restricts viewable text length based on a CSS class .blur-response.",objective:"Remove the .blur-response class from the response container to read the full generated output without a subscription."},
            w6l4:{title:"System Instruction Swap",desc:"The chat shell initializes with a dataset role attribute.",objective:"Change data-system-context from 'user' to 'admin' to force the UI to render the internal fine-tuning dashboard."},
            w6l5:{title:"Pre-Seed Parameter Poisoning",desc:"An invisible, unvalidated hidden form field exists inside the generation engine.",objective:"Find the hidden input name='assistant_override' and set its value to true to reveal developer model diagnostic controls."},
            w7l1:{title:"Prescription Multiplier",desc:"The pharmacy checkout calculates total item quantities using client-side mathematical variables.",objective:"Modify the local quantity variables in memory to purchase 100x doses while displaying a single-dose cost."},
            w7l2:{title:"The Glass Backdrop",desc:"Confidential patient historical charts are rendered on the page but covered by a translucent modal screen.",objective:"Delete the modal overlay node from the DOM tree to reveal the hidden patient data behind it."},
            w7l3:{title:"Global Namespace Scrape",desc:"A sloppy frontend compilation exposes a private patient registry data object on the global scope.",objective:"Access window.__INTERNAL_PATIENT_DUMP__ from the console and parse the array of patient records."},
            w7l4:{title:"Operational Interval Freeze",desc:"The security portal enforces a verification lock countdown using a client-side setInterval loop.",objective:"Nullify the timer handle from the console to instantly skip the waiting boundary and bypass verification."},
            w7l5:{title:"Structural Constraint Severance",desc:"Strip out strict form validations from medical intake fields to pass invalid year strings.",objective:"Change type='date' to 'text' and remove max attributes on medical forms to break the age-checking logic."},
            w8l1:{title:"Cookie Allowance Expansion",desc:"The asset tracker stores tier limitations inside plain, non-HttpOnly browser cookies.",objective:"Change user_tier cookie from 'free' to 'whale' to instantly bypass asset display ceilings."},
            w8l2:{title:"Verification State Injection",desc:"KYC verification status is stored in localStorage.",objective:"Set localStorage kyc_approved to 'true' via the console to force premium asset trading interfaces to load."},
            w8l3:{title:"Endless Session Wrap",desc:"Session lifetime timestamps are stored in sessionStorage.",objective:"Advance the epoch validation numbers decades into the future to override the security logout timer."},
            w8l4:{title:"Base64 Claim Deconstruction",desc:"A packed configuration token is stored in local storage with base64 encoding.",objective:"Base64-decode the token, flip can_withdraw from false to true, re-encode it and save back to trick the wallet."},
            w8l5:{title:"Namespace Sabotage",desc:"Wipe foundational initialization keys from web storage to force the wallet into a critical fallback state.",objective:"Delete key initialization values from localStorage to trigger fallback mode that prints active developer variables."},
            w9l1:{title:"Grid Row Deselection",desc:"An industrial climate console hides high-voltage sector controls using .hidden-grids { display: none }.",objective:"Delete the .hidden-grids class from the stylesheet to reveal the hidden control switches."},
            w9l2:{title:"DOM Node Fabrication",desc:"Manually construct and inject a custom button markup into the dashboard grid.",objective:"Create a button with id='emergency-override-trigger' and inject it into the DOM to bind with native background scripts."},
            w9l3:{title:"Target Endpoint Divergence",desc:"A real-time grid component pulls metrics from a path specified in a data attribute.",objective:"Change data-source-path from '/api/public' to '/api/private/diagnostics' to pull confidential matrices."},
            w9l4:{title:"Comment Mapping Extraction",desc:"Scan the deeply nested DOM layout tree of a factory view for developer comments.",objective:"Find left-behind developer markup comments in the HTML containing private internal master routes."},
            w9l5:{title:"Notification Silencing",desc:"Unbind warning event interceptor scripts to prevent security anomaly notifications.",objective:"Locate and remove event listener attachments that prevent parameter violations from being detected."},
            w10l1:{title:"The $0 Customs Valuation",desc:"A high-end international customs manifest copies package weights directly from an editable layout node.",objective:"Rewrite the weight string on the manifest to bypass heavy-cargo billing rules and pay $0."},
            w10l2:{title:"Event Interceptor Removal",desc:"Defensive event listener attachments check shipment weight forms.",objective:"Strip out event.preventDefault handlers on the shipment form to submit raw, unchecked parameters."},
            w10l3:{title:"Route ID Crawling",desc:"Modify numerical indexing values inside resource path patterns to view parallel corporate cargo routes.",objective:"Change /fleet/shipment/4001 to /4002 via the console to access other cargo routes without authentication."},
            w10l4:{title:"Asset Pipeline Hijack",desc:"Modify the image source locations of fleet vehicles using custom error-handling properties.",objective:"Set onerror attributes on fleet images to execute unauthorized validation scripts."},
            w10l5:{title:"Source Map Harvesting",desc:"Deep-dive into compiled production distribution files in the source tab.",objective:"Recover hardcoded development authorization keys left behind in production source maps during automated build pipelines."},
            w11l1:{title:"Control Character Splitting",desc:"Inject structural string terminators into payee name text inputs to break down transaction validation parsers.",objective:"Type %00 or %0A in the payee name field to split backend string parsing and bypass validation."},
            w11l2:{title:"Inline Property Jailbreak",desc:"Escape text box boundaries within profile cards by injecting precise quote delimiters.",objective:"Inject ' onfocus=alert(1) into a text field to turn an inert input into a functional execution script."},
            w11l3:{title:"Parameter Naming Collision",desc:"Use the DOM editor to duplicate an input element inside a wire form with identical name properties.",objective:"Duplicate the recipient_routing field to create a naming collision and test parser isolation."},
            w11l4:{title:"Interleaved Filter Slip",desc:"Subvert word-blocking regex expressions by nesting forbidden keywords within themselves.",objective:"Type <scr<script>ipt> in a filtered field to test if the client-side scrub routine re-assembles the malicious payload."},
            w11l5:{title:"Property Definition Mutation",desc:"Change an input component from type='number' to type='text' to feed alpha-numeric arrays into numeric-only backends.",objective:"Change a number input to text via DevTools and submit complex alpha-numeric script arrays."},
            w12l1:{title:"Query Address Inversion",desc:"Assemble specialized URL search arguments that reflect values directly from the route to inner layout.",objective:"Add ?search=<svg/onload=alert(1)> to the URL and check if it's reflected unescaped in the page layout."},
            w12l2:{title:"Container Inversion Split",desc:"Pass explicit layout HTML closing sequences inside custom address entries to kill active structural wrappers.",objective:"Type </div></td> in an input field to prematurely close HTML wrappers and draw your own layout."},
            w12l3:{title:"Live Stream Context Evasion",desc:"A profile description field live-streams user character changes onto a preview screen via unescaped string operations.",objective:"Pass execution hooks into the reactive typing loop through unescaped live-stream string rendering."},
            w12l4:{title:"Protocol Anchor Mutation",desc:"Mutate a checkout button's standard link property into an inline executable script destination.",objective:"Change the checkout button href to 'javascript:alert(1)' to turn navigation into an execution vector."},
            w12l5:{title:"State Property Overwriting",desc:"Intercept and overwrite local network response objects inside memory caches to inject custom privilege attributes.",objective:"Override cached response objects in memory to add admin privileges that unlock hidden UI options."},
            w13l1:{title:"Boolean Identity Extraction",desc:"Input logical true assertions into product filter search boxes to force unconditional query resolution.",objective:"Type ' OR '1'='1 in the search box to dump hidden enterprise inventory beyond normal access."},
            w13l2:{title:"Query Suffix Pruning",desc:"Add standard query comment syntax inside search entry fields to truncate SQL conditional logic.",objective:"Add -- or /* after your search query to comment out subsequent database WHERE conditions."},
            w13l3:{title:"Signature Spoofing Verification",desc:"Inject specific credential termination sequences into a multi-field login search box.",objective:"Type admin' -- in the username field to bypass the password check and log in as administrator."},
            w13l4:{title:"Column Length Fingerprinting",desc:"Feed sequential array sorting parameters into catalogue search bars to map out internal inventory table profiles.",objective:"Use ORDER BY with incrementing numbers to determine how many columns the backend table contains."},
            w13l5:{title:"Union Database Merger",desc:"Append compound selection strings to public lookup fields to merge secret administrative logs into the retail grid.",objective:"Type UNION SELECT username,password FROM users-- to merge secret admin tables into the public view."},
            w14l1:{title:"Upward Traversal Stepping",desc:"Insert relative path escape sequences inside public image upload properties to extract configuration blueprints.",objective:"Use ../../system_manifest.json in an upload path to read files outside the sandboxed directory."},
            w14l2:{title:"High-Probability Flag Polling",desc:"Manually probe the application's root routes for classic deployment artifacts left open by lazy build routines.",objective:"Navigate to /debug-log.json, /.env, /config.yml to find leaked configuration summaries."},
            w14l3:{title:"Recursive Inclusion Loops",desc:"Feed local layout parameters back into the documentation rendering tool to trigger processing loops.",objective:"Set the file parameter to itself to trigger infinite recursion and out-of-memory overflow."},
            w14l4:{title:"Environmental Route Forcing",desc:"Append forgotten developer URL arguments onto standard storefront paths.",objective:"Add ?skip_perimeter=1 or ?override_auth=true to URLs to find hidden shortcuts bypassing validation."},
            w14l5:{title:"Memory Segment Scraping",desc:"Inspect dynamic global cache structures from the console tab for unmapped internal staging environments.",objective:"Access window.__DEV_FLAGS__ from the console to uncover internal staging environments and system credentials."},
            w15l1:{title:"Persistent Storage Injection",desc:"Save complex execution script strings inside long-term forum or messaging components.",objective:"Store <script> payloads in forum posts and check if the code fires when other profiles view the message."},
            w15l2:{title:"Invisible Interaction Traps",desc:"Wrap a normal-looking text payload inside an interactive layout tag containing automatic mouse listeners.",objective:"Use onmouseenter attributes in payload text to execute scripts when users hover over the content."},
            w15l3:{title:"Sub-Frame Presentation Hijack",desc:"Pass raw HTML iframe strings into input fields to test if the platform allows rogue external windows.",objective:"Inject <iframe src='https://evil.com'> into a field and check if it mounts on the page."},
            w15l4:{title:"The Base64 Payload Cloak",desc:"Convert an injection string entirely into base64, routing delivery via inline functions that compile and execute at runtime.",objective:"Pass eval(atob('base64_encoded_payload')) through an input to slip past word filter blacklists."},
            w15l5:{title:"Runtime Character Compilation",desc:"Piece together forbidden script terms using safe decimal character matrices.",objective:"Use String.fromCharCode(60,115,99,...) to build a script tag that completely bypasses word filter blacklists."}

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
            w2l1:{title:"تصعيد صلاحية الكوكيز",desc:"NNNetflix يحدد جودة البث بناءً على الكوكيز. غيّرها للحصول على بريميوم.",objective:"غيّر tier cookie من free إلى premium لترقية صلاحية البث."},
            w2l2:{title:"حذف طبقة الاشتراك",desc:"طبقة الاشتراك تمنع تشغيل الفيديو. لكنها مجرد عنصر DOM يمكن حذفه.",objective:"احذف عنصر subscription-overlay من DOM لتشغيل البث المميز."},
            w2l3:{title:"اختطاف redirect",desc:"تسجيل الدخول بـ Google يعيد التوجيه إلى URL محدد. غيّره لاختطاف الدخول.",objective:"غيّر data-redirect في زر Google SSO إلى evil.com."},
            w2l4:{title:"التلاعب بالمؤقت",desc:"المؤقت التجريبي يعد من 10 ثوانٍ. لكنه مخزن في متغير عام.",objective:"غيّر window.trialSecondsRemaining إلى 999999 لتمديد التجربة."},
            w2l5:{title:"تلويث النموذج الأولي",desc:"التحقق من الصلاحية يستخدم Object.prototype.isAuthorized. لوّثه لتجاوز التحقق.",objective:"غيّر Object.prototype.isAuthorized إلى true في الكونسول."},
            w3l1:{title:"الكمية السالبة",desc:"Amazon يتحقق من الكميات من جهة العميل. القيم السالبة تقلب السعر.",objective:"أدخل كمية سالبة للحصول على المال بدلاً من الدفع."},
            w3l2:{title:"حقن خيار شحن مخصص",desc:"خيارات الشحن محددة مسبقاً. يمكن إضافة خيار مجاني.",objective:"أضف option بقيمة '0' إلى قائمة الشحن واختره."},
            w3l3:{title:"تجاوز الضريبة المخفية",desc:"الضريبة مخزنة في حقل مخفي. غيّر قيمتها إلى صفر.",objective:"غيّر قيمة hidden input tax-rate من 0.15 إلى 0."},
            w3l4:{title:"تجاوز حقل readonly",desc:"حقل الكوبون readonly بقيمة NONE. احذف readonly وأدخل كوبون.",objective:"احذف readonly من حقل الكوبون وأدخل 'FREE100'."},
            w3l5:{title:"حقن باراميتر DOM",desc:"نموذج الدفع يقرأ كل الحقول تلقائياً. أضف حقل خصم مخفي.",objective:"أضف hidden input بـ id='discount_value' وقيمة '500'."},
            w4l1:{title:"انتحال معرف المستخدم",desc:"Slack يتعرف على المستخدمين عبر cookie. غيّره لانتحال حساب أدمن.",objective:"غيّر user_id cookie إلى '1' لانتحال صلاحية المشرف."},
            w4l2:{title:"تجاوز الـ IP",desc:"IP البوابة مخزن في متغير عام. غيّره إلى 127.0.0.1.",objective:"غيّر window.gatewayIp إلى '127.0.0.1' لتجاوز قيود الشبكة."},
            w4l3:{title:"تعديل مسار API",desc:"زر حفظ الإعدادات يرسل إلى مسار عام. المسار مخزن في data attribute.",objective:"غيّر data-endpoint إلى '/v1/admin/shutdown'."},
            w4l4:{title:"انتحال المصدر",desc:"التحقق من المصدر يستخدم window.originHeader. غيّره للمصدر الداخلي.",objective:"غيّر window.originHeader إلى 'Slack.com'."},
            w4l5:{title:"تجاوز المصادقة",desc:"حالة SSO مخزنة في localStorage. غيّرها لتجاوز تسجيل الدخول.",objective:"غيّر localStorage auth_status إلى 'authorized'."},
            w5l1:{title:"عكس التواريخ",desc:"Airbnb يتحقق من تواريخ الحجز من جهة العميل. اعكسها للحصول على مدة سالبة.",objective:"اجعل تاريخ المغادرة قبل تاريخ الوصول للحصول على مدة سلبية."},
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
            w7l5:{title:"تجاوز بوابة الدفع",desc:"تأكيد الدفع مخزن في localStorage. غيّره لتتخطى الدفع.",objective:"غيّر localStorage Uber_payment إلى 'bypass
            w6l1:{title:"تسريب تعليمات النظام",desc:"واجهة ذكاء اصطناعي تخفي تعليماتها الداخلية باستخدام خدعة CSS. اعترض هيكل DOM لاستخراج التوجيهات المخفية.",objective:"جد عنصر تعليمات النظام المخفي واجعله مرئياً لاستخراج التعليمات الداخلية للذكاء الاصطناعي."},
            w6l2:{title:"فيضان درجة الحرارة",desc:"عناصر التحكم بالانزلاق تسمح بتعديل القيم العشرية. تجاوز الحد الأقصى لدرجة الحرارة.",objective:"غيّر قيمة درجة الحرارة إلى أكثر من 2.0 عبر DevTools لتعطيل حلقة التوليد."},
            w6l3:{title:"اختطاف البث المميز",desc:"تخطيط عرض البث يقيد طول النص المرئي بناءً على كود CSS.",objective:"احذف الكود .blur-response من حاوية الرد لقراءة المخرجات الكاملة بدون اشتراك."},
            w6l4:{title:"تبديل تعليمات النظام",desc:"واجهة المحادثة تبدأ بـ data-system-context بقيمة user.",objective:"غيّر data-system-context من user إلى admin لعرض لوحة التحكم الداخلية."},
            w6l5:{title:"تسميم الباراميترات الأولية",desc:"حقل نموذج مخفي موجود داخل محرك التوليد.",objective:"جد المدخل المخفي assistant_override وغيّر قيمته إلى true للكشف عن أدوات التشخيص."},
            w7l1:{title:"مضاعف الوصفات الطبية",desc:"نظام دفع الصيدلية يحسب الكميات باستخدام متغيرات حسابية من جهة العميل.",objective:"عدّل المتغيرات المحلية في الذاكرة لشراء 100x جرعة بسعر جرعة واحدة."},
            w7l2:{title:"الخلفية الزجاجية",desc:"سجلات المرضى التاريخية موجودة على الصفحة لكن مغطاة بشاشة شفافة.",objective:"احذف العقدة الطبقية من شجرة DOM للكشف عن بيانات المرضى المخفية."},
            w7l3:{title:"مسح النطاق العام",desc:"كود أمامي مهمل يكشف كائن بيانات المرضى في النطاق العام.",objective:"ادخل إلى window.__INTERNAL_PATIENT_DUMP__ من الكونسول وحلل المصفوفة."},
            w7l4:{title:"تجميد الفاصل التشغيلي",desc:"بوابة الأمان تفرض عداً تنازلياً للتحقق باستخدام setInterval من جهة العميل.",objective:"ألغِ مؤقت setInterval من الكونسول لتجاوز فترة الانتظار فوراً."},
            w7l5:{title:"كسر القيود الهيكلية",desc:"احذف تحققات صارمة من النماذج الطبية لتمرير سلاسل غير صالحة.",objective:"غيّر type='date' إلى 'text' واحذف max من النماذج الطبية لكسر منطق التحقق من العمر."},
            w8l1:{title:"توسيع صلاحية الكوكيز",desc:"متعقب الأصول يخزن حدود الفئة في كوكيز غير HttpOnly.",objective:"غيّر user_tier cookie من 'free' إلى 'whale' لتجاوز سقف عرض الأصول."},
            w8l2:{title:"حقن حالة التحقق",desc:"حالة KYC مخزنة في localStorage.",objective:"غيّر localStorage kyc_approved إلى 'true' عبر الكونسول لتفعيل تداول الأصول المميز."},
            w8l3:{title:"تغليف الجلسة اللانهائي",desc:"طوابع وقت الجلسة مخزنة في sessionStorage.",objective:"قدّم أرقام التحقق الزمنية عقوداً إلى المستقبل لتجاوز مؤقت تسجيل الخروج."},
            w8l4:{title:"تفكيك مطالبات Base64",desc:"رمز إعدادات مشفر base64 مخزن في التخزين المحلي.",objective:"فك تشفير base64، اقلب can_withdraw إلى true، وأعد تشفيره لخداع المحفظة."},
            w8l5:{title:"تخريب مساحة الاسم",desc:"امسح مفاتيح التهيئة الأساسية من التخزين لإجبار المحفظة على حالة الطوارئ.",objective:"احذف قيم التهيئة من localStorage لتفعيل وضع الطوارئ الذي يطبع متغيرات المطور."},
            w9l1:{title:"إلغاء تحديد الصف",desc:"لوحة تحكم صناعية تخفي مفاتيح تحكم الجهد العالي باستخدام قاعدة CSS.",objective:"احذف الكود .hidden-grids من ورقة الأنماط للكشف عن مفاتيح التحكم المخفية."},
            w9l2:{title:"تصنيع عقدة DOM",desc:"قم ببناء وحقن ترميز زر مخصص في لوحة القيادة.",objective:"أنشئ زراً بـ id='emergency-override-trigger' واحقنه في DOM للارتباط بالنصوص الخلفية."},
            w9l3:{title:"انحراف نقطة النهاية",desc:"مكون الشبكة يسحب المقاييس من مسار محدد في data-source-path.",objective:"غيّر data-source-path من '/api/public' إلى '/api/private/diagnostics'."},
            w9l4:{title:"استخراج تعليقات المطور",desc:"امسح شجرة DOM العميقة للبحث عن تعليقات مطور متروكة.",objective:"جد تعليقات HTML متروكة تحتوي على مسارات رئيسية داخلية خاصة."},
            w9l5:{title:"إسكات التنبيهات",desc:"فك ارتباط نصوص اعتراض التحذير لمنع إشعارات الأمان.",objective:"احذف مستمعي الأحداث الذين يمنعون اكتشاف انتهاكات الباراميترات."},
            w10l1:{title:"تقييم جمركي $0",desc:"بيان جمركي ينسخ أوزان الشحن من عقدة قابلة للتعديل.",objective:"أعد كتابة سلسلة الوزن لتجاوز قواعد فوترة الشحن الثقيل وادفع $0."},
            w10l2:{title:"إزالة معترض الأحداث",desc:"مستمعو أحداث دفاعية يفحصون نماذج وزن الشحن.",objective:"احذف event.preventDefault من نموذج الشحن لإرسال باراميترات غير مفحوصة."},
            w10l3:{title:"زحف معرف المسار",desc:"عدّل قيم الفهرسة الرقمية في أنماط مسار الموارد لعرض طرق شحن أخرى.",objective:"غيّر /fleet/shipment/4001 إلى /4002 عبر الكونسول للوصول إلى طرق شحن أخرى."},
            w10l4:{title:"اختطاف خط الأصول",desc:"عدّل مصادر صور المركبات باستخدام خصائص معالجة أخطاء مخصصة.",objective:"ضع onerror على صور الأسطول لتنفيذ نصوص تحقق غير مصرح بها."},
            w10l5:{title:"حصاد خرائط المصدر",desc:"تعمق في ملفات الإنتاج المترجمة في تبويب المصادر.",objective:"استخرج مفاتيح تفويض التطوير المضمنة في خرائط المصدر أثناء بناء الإنتاج."},
            w11l1:{title:"تقسيم أحرف التحكم",desc:"احقن فاصلات سلسلة هيكلية في مدخلات اسم المستفيد لكسر محللات التحقق.",objective:"اكتب %00 أو %0A في حقل اسم المستفيد لتقسيم تحليل السلسلة الخلفية."},
            w11l2:{title:"كسر حدود الحقل",desc:"تجاوز حدود مربع النص بحقن محدّدات اقتباس دقيقة.",objective:"احقن ' onfocus=alert(1) في حقل نصي لتحويله إلى نص تنفيذي."},
            w11l3:{title:"تصادم تسمية الباراميترات",desc:"استخدم محرر DOM لتكرار عنصر إدخال بنفس خصائص الاسم.",objective:"كرر حقل recipient_routing لإنشاء تصادم تسمية واختبار عزل المحلل."},
            w11l4:{title:"انزلاق الفلتر المتداخل",desc:"تجاوز تعبيرات regex بحظر الكلمات بتضمينها داخل نفسها.",objective:"اكتب <scr<script>ipt> في حقل مفلتر لاختبار إعادة تجميع الحمولة."},
            w11l5:{title:"تغيير نوع الإدخال",desc:"غيّر type='number' إلى 'text' لتغذية مصفوفات نصية إلى خلفيات رقمية.",objective:"غيّر مدخل رقمي إلى نصي عبر DevTools وقدم مصفوفات نصوص معقدة."},
            w12l1:{title:"انعكاس وسيطات الاستعلام",desc:"جمع وسيطات URL متخصصة تنعكس من المسار إلى الطبقة الداخلية.",objective:"أضف ?search=<svg/onload=alert(1)> إلى الرابط وتحقق من انعكاسه في الصفحة."},
            w12l2:{title:"انقسام عكس الحاوية",desc:"مرر تسلسلات إغلاق HTML داخل حقول العناوين المخصصة لقتل الأغلفة الهيكلية.",objective:"اكتب </div></td> في حقل إدخال لإغلاق الأغلفة قبل الأوان ورسم تخطيطك."},
            w12l3:{title:"تهرب سياق البث الحي",desc:"حقل وصف الملف يبث تغييرات المستخدم مباشرة إلى شاشة المعاينة.",objective:"مرر خطاطيف تنفيذية إلى حلقة الكتابة التفاعلية عبر عرض سلسلة غير مهروب."},
            w12l4:{title:"تحويل رابط البروتوكول",desc:"حوّل رابط زر الدفع إلى وجهة تنفيذية.",objective:"غيّر href زر الدفع إلى 'javascript:alert(1)' لتحويل التنقل إلى تنفيذ."},
            w12l5:{title:"كتابة فوق خصائص الحالة",desc:"اعترض وأعد كتابة كائنات استجابة الشبكة المحلية في ذاكرة التخزين المؤقت.",objective:"تجاوز كائنات الاستجابة المخزنة لإضافة صلاحيات مدير تفتح خيارات واجهة مخفية."},
            w13l1:{title:"استخراج الهوية المنطقية",desc:"أدخل تأكيدات منطقية صحيحة في مربعات بحث المنتجات لتفريغ المخزون المخفي.",objective:"اكتب ' OR '1'='1 في مربع البحث لتفريغ مخزون المؤسسة المخفي."},
            w13l2:{title:"تقليم لاحقة الاستعلام",desc:"أضف صيغة تعليق استعلام قياسية داخل حقول البحث لاقتطاع الشروط.",objective:"أضف -- أو /* بعد استعلامك لتعليق شروط WHERE اللاحقة في قاعدة البيانات."},
            w13l3:{title:"تزييف توقيع التحقق",desc:"احقن تسلسلات إنهاء بيانات اعتماد محددة في مربع بحث تسجيل الدخول متعدد الحقول.",objective:"اكتب admin' -- في حقل المستخدم لتجاوز فحص كلمة المرور."},
            w13l4:{title:"بصمة طول العمود",desc:"غذِّ باراميترات ترتيب مصفوفة متسلسلة في أشرطة البحث لرسم ملفات جدول المخزون.",objective:"استخدم ORDER BY مع أرقام متزايدة لتحديد عدد أعمدة الجدول الخلفي."},
            w13l5:{title:"دمج قاعدة بيانات موحدة",desc:"ألحق سلاسل اختيار مركبة بحقول البحث العامة لدمج سجلات إدارية سرية.",objective:"اكتب UNION SELECT username,password FROM users-- لدمج جداول الإدارة السرية."},
            w14l1:{title:"صعود المسار النسبي",desc:"أدخل تسلسلات هروب مسار نسبي داخل خصائص تحميل الصور العامة.",objective:"استخدم ../../system_manifest.json في مسار تحميل لقراءة الملفات خارج الصندوق الرملي."},
            w14l2:{title:"استطلاع العلم عالي الاحتمال",desc:"افحص مسارات الجذر للتطبيق بحثاً عن قطع أثرية نشر كلاسيكية.",objective:"تنقل إلى /debug-log.json و /.env و /config.yml للعثور على ملخصات تكوين مسربة."},
            w14l3:{title:"حلقات التضمين المتكررة",desc:"غذِّ باراميترات التخطيط المحلية مرة أخرى إلى أداة عرض التوثيق لتفعيل حلقات المعالجة.",objective:"ضع باراميتر الملف ليشير إلى نفسه لتفعيل تكرار لا نهائي وفيضان الذاكرة."},
            w14l4:{title:"فرض المسار البيئي",desc:"ألحق وسيطات URL منسية من قبل المطورين إلى مسارات واجهة المتجر القياسية.",objective:"أضف ?skip_perimeter=1 أو ?override_auth=true للروابط للعثور على اختصارات مخفية."},
            w14l5:{title:"كشط مقاطع الذاكرة",desc:"افحص هياكل ذاكرة التخزين المؤقت العامة من تبويب الكونسول.",objective:"ادخل إلى window.__DEV_FLAGS__ من الكونسول للكشف عن بيئات مرحلية داخلية وبيانات اعتماد."},
            w15l1:{title:"حقن تخزين دائم",desc:"احفظ سلاسل نصوص تنفيذية معقدة داخل مكونات منتدى أو مراسلة طويلة الأمد.",objective:"خزن حمولات script في منشورات المنتدى وتحقق من تنفيذ الكود عندما يشاهدها مستخدمون آخرون."},
            w15l2:{title:"مصائد تفاعل غير مرئية",desc:"غلف حمولة نصية عادية داخل وسم تخطيط تفاعلي يحتوي على مستمعي فأرة تلقائيين.",objective:"استخدم onmouseenter في نص الحمولة لتنفيذ نصوص عندما يمرر المستخدمون فوق المحتوى."},
            w15l3:{title:"اختطاف عرض الإطار الفرعي",desc:"مرر سلاسل iframe HTML خام إلى حقول الإدخال لاختبار السماح بنوافذ خارجية.",objective:"احقن <iframe src='https://evil.com'> في حقل وتحقق مما إذا كان يظهر على الصفحة."},
            w15l4:{title:"عباءة حمولة Base64",desc:"حوّل سلسلة حقن بالكامل إلى base64، موجهاً التسليم عبر دوال مضمنة تترجم وتنفذ.",objective:"مرر eval(atob('base64_payload')) عبر مدخل للتسلل عبر مرشحات الكلمات."},
            w15l5:{title:"تجميع أحرف وقت التشغيل",desc:"جمع مصطلحات النص المحظورة باستخدام مصفوفات أحرف عشرية آمنة.",objective:"استخدم String.fromCharCode(60,115,99,...) لبناء وسم script يتجاوز مرشحات الكلمات."}
'."}
        }
    };

    function getRoomData() {
        const db = ROOM_DATA[state.lang] || ROOM_DATA.en;
        const key = 'w'+state.world+'l'+state.level;
        return db[key] || { title:"ByteLab Challenge", desc:"Inspect the target and find the vulnerability.", objective:"Exploit the client-side control to capture the flag." };
    }

    window.hasWon = false;
    let state = { world:1, level:1, mode:'attack', lang:'en', hasWon:false, observer:null, watchInterval:null };

    const AudioEngine = {
        ctx:null, init(){if(!this.ctx)this.ctx=new(window.AudioContext||window.webkitAudioContext)()},
        playPop(){this.init();const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sine';o.frequency.setValueAtTime(400,this.ctx.currentTime);o.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.12);g.gain.setValueAtTime(.08,this.ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12);o.connect(g);g.connect(this.ctx.destination);o.start();o.stop(this.ctx.currentTime+.12)},
        playChime(){this.init();[523.25,659.25,783.99,1046.5].forEach((f,i)=>{const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sine';o.frequency.setValueAtTime(f,this.ctx.currentTime+i*.1);g.gain.setValueAtTime(.12,this.ctx.currentTime+i*.1);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+i*.1+.4);o.connect(g);g.connect(this.ctx.destination);o.start(this.ctx.currentTime+i*.1);o.stop(this.ctx.currentTime+i*.1+.4)})},
        playError(){this.init();const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sawtooth';o.frequency.setValueAtTime(110,this.ctx.currentTime);o.frequency.linearRampToValueAtTime(70,this.ctx.currentTime+.35);g.gain.setValueAtTime(.14,this.ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35);o.connect(g);g.connect(this.ctx.destination);o.start();o.stop(this.ctx.currentTime+.35)}
    };

    window.initLevel = function({world,level}) {

    const settings = JSON.parse(localStorage.getItem('bytelab_settings') || '{"unlock":false,"hardcore":false}');
    if (level > 1 && !settings.unlock) {
        // Quick validation to see if they solved previous levels
        // Determine mode from url or default to attack
        const p = new URLSearchParams(window.location.search);
        const m = p.get('mode') || 'attack';
        const solved = JSON.parse(localStorage.getItem(`bl_solved_${m}_${world}`) || localStorage.getItem(`bytelearn_${m}_${world}`) || '[]');

        if (!solved.includes(level - 1)) {
            document.body.innerHTML = `
                <div style="height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0f172a;color:white;font-family:sans-serif;">
                    <h1 style="font-size:3rem;margin-bottom:1rem;color:#e11d48;">403 Access Denied</h1>
                    <p style="color:#94a3b8;margin-bottom:2rem;">You haven't unlocked this level yet. Complete the previous challenges or upgrade your clearance.</p>
                    <button onclick="window.location.href='../../../game.html'" style="background:#4546d7;color:white;padding:12px 24px;border-radius:8px;border:none;cursor:pointer;font-weight:bold;">Return to Hub</button>
                </div>
            `;
            return;
        }
    }

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

    window.quitToPortal=function(){window.location.href=\'../../../game.html\'};

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
        if (new URLSearchParams(window.location.search).get('hc') === '1') {
            let hcTime = 30;
            const hcTimer = document.createElement('div');
            hcTimer.style.position = 'fixed';
            hcTimer.style.top = '20px';
            hcTimer.style.left = '50%';
            hcTimer.style.transform = 'translateX(-50%)';
            hcTimer.style.background = '#e11d48';
            hcTimer.style.color = 'white';
            hcTimer.style.padding = '8px 24px';
            hcTimer.style.borderRadius = '99px';
            hcTimer.style.fontWeight = 'bold';
            hcTimer.style.zIndex = '9999';
            hcTimer.style.fontSize = '1.2rem';
            hcTimer.innerText = `00:${hcTime}`;

            // Wait for DOM to be ready
            setTimeout(() => {
                document.body.appendChild(hcTimer);
            }, 100);

            const hcInterval = setInterval(() => {
                if (window.hasWon) {
                    clearInterval(hcInterval);
                    return;
                }
                hcTime--;
                hcTimer.innerText = `00:${hcTime < 10 ? '0'+hcTime : hcTime}`;
                if (hcTime <= 0) {
                    clearInterval(hcInterval);
                    alert('Hardcore time limit reached! Restarting level.');
                    window.location.reload();
                }
            }, 1000);
        }
