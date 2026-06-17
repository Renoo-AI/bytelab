// ByteLearn 50-Level Dual-Path Challenge Database
// 10 Worlds, 5 Levels each for ATTACK and DEFEND

window.BYTE_CHALLENGES = {
  ATTACK: [
    // --- WORLD 1: PayBal (Financial Logic) ---
    {
      id: "w1l1", world: 1, level: 1, title: "Disabled Bypass",
      story: "The 'Transfer Funds' menu item is currently disabled in the sidebar navigation. Inspect the DOM element and remove the 'disabled' attribute to unlock it.",
      hint: "Inspect the 'Transfer Funds' sidebar item, find the 'disabled' attribute, and delete it from the tag.",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "Transfer Funds"],
      targetView: "transfer",
      disabledItemIdx: 3, // "Transfer Funds"
      checkType: "dom_attribute",
      targetId: "transfer-btn",
      attribute: "disabled",
      shouldExist: false
    },
    {
      id: "w1l2", world: 1, level: 2, title: "Pointer Lock Bypass",
      story: "The transfers route is locked via a CSS class that sets pointer-events to none. Inspect the sidebar and remove the 'locked' class from the button.",
      hint: "Inspect the 'Transfer Funds' menu link, find class='locked', and delete 'locked' from the element's class list.",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "Transfer Funds"],
      targetView: "transfer",
      disabledItemIdx: 3,
      checkType: "dom_class",
      targetId: "transfer-btn",
      className: "locked",
      shouldExist: false
    },
    {
      id: "w1l3", world: 1, level: 3, title: "Hidden Input Price",
      story: "The transaction fee in the transfer form is hardcoded inside a hidden input field. Inspect the DOM, find the hidden input 'fee-amount', and change its value to a negative number to get a cashback refund.",
      hint: "Inspect the transfer card, locate the hidden input <input type='hidden' id='fee-amount' ...>, and set value='-150.00'. Then click Confirm.",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "Transfer Funds"],
      targetView: "transfer",
      checkType: "dom_value_negative",
      targetId: "fee-amount"
    },
    {
      id: "w1l4", world: 1, level: 4, title: "Invisible Balance",
      story: "The real account balance is hidden from standard users by a style attribute. Find the hidden element `#balance-real` and change its style display to 'block' or remove display:none to make it visible.",
      hint: "Inspect the overview cards, locate <p id='balance-real' style='display: none;'>, and remove the style attribute or set it to display: block.",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "Transfer Funds"],
      targetView: "overview",
      checkType: "dom_visibility",
      targetId: "balance-real"
    },
    {
      id: "w1l5", world: 1, level: 5, title: "Role Attribute Bypass",
      story: "The interface displays options based on a custom data-role attribute on the dashboard. Edit the profile node's data attribute data-role='member' to 'admin' to unlock admin logs.",
      hint: "Inspect the container <div id='profile-node' data-role='member'>, change data-role to 'admin', and click the unlocked Request Logs button.",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "Transfer Funds"],
      targetView: "overview",
      checkType: "dom_dataset",
      targetId: "profile-node",
      datasetKey: "role",
      expectedValue: "admin"
    },

    // --- WORLD 2: Netflox (Streaming Platform) ---
    {
      id: "w2l1", world: 2, level: 1, title: "Cookie Escalation",
      story: "A cookie holds your membership tier. Open the browser Console, check document.cookie, and modify it to 'tier=premium' to stream content.",
      hint: "In your browser console, run: document.cookie = 'tier=premium'; then click the Play Stream button.",
      sidebar: ["Browse Movies", "My Watchlist", "Player Console"],
      targetView: "player",
      checkType: "cookie_value",
      cookieName: "tier",
      expectedValue: "premium"
    },
    {
      id: "w2l2", world: 2, level: 2, title: "Overlay Removal",
      story: "The premium video player is covered by an annoying subscription overlay div. Inspect the DOM and delete the overlay element `#subscription-overlay` entirely.",
      hint: "Find the div with id='subscription-overlay' in the inspect window, right-click, and choose 'Delete Element'.",
      sidebar: ["Browse Movies", "My Watchlist", "Player Console"],
      targetView: "player",
      checkType: "dom_existence",
      targetId: "subscription-overlay",
      shouldExist: false
    },
    {
      id: "w2l3", world: 2, level: 3, title: "SSO Redirect Spoof",
      story: "The 'Sign in with Google' button holds a redirect URL in its dataset. Spoof the destination by changing the data-redirect attribute to 'http://evil.com'.",
      hint: "Inspect the Google login button and change data-redirect='...' to data-redirect='http://evil.com', then click the login button.",
      sidebar: ["Browse Movies", "My Watchlist", "Player Console"],
      targetView: "browse",
      checkType: "dom_dataset",
      targetId: "google-sso-btn",
      datasetKey: "redirect",
      expectedValue: "http://evil.com"
    },
    {
      id: "w2l4", world: 2, level: 4, title: "Global Timer Abuse",
      story: "A global trial timer limits your session. Open your browser Console and modify window.trialSecondsRemaining to 999999.",
      hint: "Type: window.trialSecondsRemaining = 999999; in the console, then click the Check session status button.",
      sidebar: ["Browse Movies", "My Watchlist", "Player Console"],
      targetView: "player",
      checkType: "global_variable",
      varName: "trialSecondsRemaining",
      expectedValue: 999999
    },
    {
      id: "w2l5", world: 2, level: 5, title: "Prototype Pollution",
      story: "The auth middleware checks permissions using base objects. Pollute the base Object prototype in the console by setting Object.prototype.isAuthorized = true.",
      hint: "In your console, run: Object.prototype.isAuthorized = true; then click the Verify Credentials button.",
      sidebar: ["Browse Movies", "My Watchlist", "Player Console"],
      targetView: "player",
      checkType: "prototype_pollution",
      propName: "isAuthorized",
      expectedValue: true
    },

    // --- WORLD 3: CloudStore (eCommerce) ---
    {
      id: "w3l1", world: 3, level: 1, title: "Min Quantity Bypass",
      story: "The checkout form blocks negative quantities via HTML input boundaries. Inspect the quantity input, remove min='1', and set the value to -10 to force a negative cost.",
      hint: "Inspect <input type='number' id='qty-input' min='1'>. Remove min='1' (or change it to -99) and type -10. Click Checkout.",
      sidebar: ["Catalog", "Shopping Cart", "Checkout Page"],
      targetView: "cart",
      checkType: "dom_value_negative",
      targetId: "qty-input"
    },
    {
      id: "w3l2", world: 3, level: 2, title: "Custom Select Options",
      story: "The delivery method is locked to paid options. Inspect the select element and inject a new option with value='0' and label 'Free Shipping' to bypass delivery charges.",
      hint: "Right-click the select dropdown, edit it as HTML, and insert: <option value='0' selected>Free</option>. Then click Checkout.",
      sidebar: ["Catalog", "Shopping Cart", "Checkout Page"],
      targetView: "cart",
      checkType: "dom_value_zero",
      targetId: "shipping-select"
    },
    {
      id: "w3l3", world: 3, level: 3, title: "Hidden Tax Override",
      story: "The sales tax is computed from a hidden input tax-rate value. Inspect the DOM and change the value of `#tax-rate` to 0.",
      hint: "Locate the hidden input <input type='hidden' id='tax-rate' ...> and modify value='0.15' to value='0'. Click Checkout.",
      sidebar: ["Catalog", "Shopping Cart", "Checkout Page"],
      targetView: "cart",
      checkType: "dom_value_zero",
      targetId: "tax-rate"
    },
    {
      id: "w3l4", world: 3, level: 4, title: "Readonly Coupon Bypass",
      story: "The coupon code input field is marked as readonly. Inspect the input element, remove the 'readonly' attribute, and type 'FREE100' in the box.",
      hint: "Inspect the coupon input box, delete the 'readonly' attribute, then type 'FREE100' inside it and click Checkout.",
      sidebar: ["Catalog", "Shopping Cart", "Checkout Page"],
      targetView: "cart",
      checkType: "dom_value_match",
      targetId: "coupon-input",
      expectedValue: "FREE100"
    },
    {
      id: "w3l5", world: 3, level: 5, title: "DOM Parameter Injection",
      story: "The check-out logic accepts arbitrary forms mapping. Inject a new hidden input parameter name='discount_value' with value='500' inside the form wrapper.",
      hint: "Right-click the form element, edit it as HTML, and append: <input type='hidden' id='discount_value' value='500'>. Click Checkout.",
      sidebar: ["Catalog", "Shopping Cart", "Checkout Page"],
      targetView: "cart",
      checkType: "dom_value_match",
      targetId: "discount_value",
      expectedValue: "500"
    },

    // --- WORLD 4: WorkspaceX (Access Control) ---
    {
      id: "w4l1", world: 4, level: 1, title: "SSO User ID Spoofing",
      story: "The active account index is read from a user_id cookie. Modify the cookie to 'user_id=1' to impersonate the root admin.",
      hint: "Open your browser Console and type: document.cookie = 'user_id=1'; then click Request Admin Panel.",
      sidebar: ["Workspace Logs", "Access Controls", "SSO Portal"],
      targetView: "portal",
      checkType: "cookie_value",
      cookieName: "user_id",
      expectedValue: "1"
    },
    {
      id: "w4l2", world: 4, level: 2, title: "IP Proxy Override",
      story: "The system reads your network proxy headers from a global configuration object. Modify window.gatewayIp to '127.0.0.1' in the console.",
      hint: "Type: window.gatewayIp = '127.0.0.1'; in the console, then click request connection.",
      sidebar: ["Workspace Logs", "Access Controls", "SSO Portal"],
      targetView: "controls",
      checkType: "global_variable",
      varName: "gatewayIp",
      expectedValue: "127.0.0.1"
    },
    {
      id: "w4l3", world: 4, level: 3, title: "Endpoint Path Tampering",
      story: "The data submission button directs requests to a public route stored in its data-endpoint attribute. Edit the attribute to '/v1/admin/shutdown'.",
      hint: "Inspect the 'Save Configurations' button, change data-endpoint='/v1/public/save' to data-endpoint='/v1/admin/shutdown', then click the button.",
      sidebar: ["Workspace Logs", "Access Controls", "SSO Portal"],
      targetView: "controls",
      checkType: "dom_dataset",
      targetId: "submit-config-btn",
      datasetKey: "endpoint",
      expectedValue: "/v1/admin/shutdown"
    },
    {
      id: "w4l4", world: 4, level: 4, title: "Host Header Spoofing",
      story: "A configuration variable stores the allowed origin host. Open your Console and modify window.originHeader to 'workspacex.com'.",
      hint: "Type: window.originHeader = 'workspacex.com'; in your browser console, then click Verify Origin.",
      sidebar: ["Workspace Logs", "Access Controls", "SSO Portal"],
      targetView: "controls",
      checkType: "global_variable",
      varName: "originHeader",
      expectedValue: "workspacex.com"
    },
    {
      id: "w4l5", world: 4, level: 5, title: "SSO Storage Bypass",
      story: "Single Sign-On session statuses are read from localStorage. Set key 'auth_status' to 'authorized' in your console.",
      hint: "In your console, execute: localStorage.setItem('auth_status', 'authorized'); then click Enter Portal.",
      sidebar: ["Workspace Logs", "Access Controls", "SSO Portal"],
      targetView: "portal",
      checkType: "localstorage_value",
      storageKey: "auth_status",
      expectedValue: "authorized"
    },

    // --- WORLD 5: AirBook (Scheduling Checks) ---
    {
      id: "w5l1", world: 5, level: 1, title: "Reverse Date Chronology",
      story: "Checkout validation calculates intervals between date inputs. Inspect the check-out input field and change its value to a date before check-in.",
      hint: "Inspect the checkout calendar, set value='2026-06-15' (while check-in is '2026-06-18') and click Book Flight.",
      sidebar: ["Flight Board", "Hotel Booking", "Seat Selector"],
      targetView: "hotel",
      checkType: "reverse_dates",
      checkInId: "date-in",
      checkOutId: "date-out"
    },
    {
      id: "w5l2", world: 5, level: 2, title: "NaN Numeric Input",
      story: "The luggage weight input field blocks text parameters. Inspect the input element, change type='number' to type='text', and type 'NaN' into it.",
      hint: "Inspect <input type='number' id='luggage-input'>, change type='number' to type='text'. Then type NaN in the field and click Book.",
      sidebar: ["Flight Board", "Hotel Booking", "Seat Selector"],
      targetView: "hotel",
      checkType: "dom_value_match",
      targetId: "luggage-input",
      expectedValue: "NaN"
    },
    {
      id: "w5l3", world: 5, level: 3, title: "Seat Tier Desync",
      story: "The seat grid matches economy prices but sends seat classes. Inspect seat button '#seat-1A', remove the 'disabled' tag, and change its class tier to 'economy'.",
      hint: "Inspect <button id='seat-1A' disabled>, remove 'disabled', and set its data-tier='economy'. Click the seat button.",
      sidebar: ["Flight Board", "Hotel Booking", "Seat Selector"],
      targetView: "seats",
      checkType: "dom_dataset",
      targetId: "seat-1A",
      datasetKey: "tier",
      expectedValue: "economy"
    },
    {
      id: "w5l4", world: 5, level: 4, title: "Open Redirect Link",
      story: "The flight portal logo redirects to the homepage. Inspect the logo anchor element and change its href to 'http://evil.com'.",
      hint: "Inspect <a id='logo-link' href='/'> and change href to 'http://evil.com'. Click the logo.",
      sidebar: ["Flight Board", "Hotel Booking", "Seat Selector"],
      targetView: "flight",
      checkType: "dom_attribute",
      targetId: "logo-link",
      attribute: "href",
      expectedValue: "http://evil.com"
    },
    {
      id: "w5l5", world: 5, level: 5, title: "Config Variable Override",
      story: "An API config structure controls access. Open the browser Console and set window.flightConfig = { bypass_verification: true }.",
      hint: "Type: window.flightConfig = { bypass_verification: true }; in the console, then click Book Flight.",
      sidebar: ["Flight Board", "Hotel Booking", "Seat Selector"],
      targetView: "flight",
      checkType: "global_variable_sub",
      varName: "flightConfig",
      subKey: "bypass_verification",
      expectedValue: true
    },

    // --- WORLD 6: SecureChat (Header Control) ---
    {
      id: "w6l1", world: 6, level: 1, title: "User-Agent Spoofing",
      story: "A validation agent checks browsers. Override the global config variable window.userAgentOverride to 'ByteLearn-Admin-Console'.",
      hint: "In your browser console, type: window.userAgentOverride = 'ByteLearn-Admin-Console'; then click Connect Chat CLI.",
      sidebar: ["Active Chats", "System Webhooks", "Terminal Console"],
      targetView: "terminal",
      checkType: "global_variable",
      varName: "userAgentOverride",
      expectedValue: "ByteLearn-Admin-Console"
    },
    {
      id: "w6l2", world: 6, level: 2, title: "Security Header Bypass",
      story: "The iframe security configuration blocks access check tags. Inspect input `#iframe-lock` and change value to 'false'.",
      hint: "Inspect <input type='hidden' id='iframe-lock' value='true'>, set value='false', and click Connect.",
      sidebar: ["Active Chats", "System Webhooks", "Terminal Console"],
      targetView: "terminal",
      checkType: "dom_value_match",
      targetId: "iframe-lock",
      expectedValue: "false"
    },
    {
      id: "w6l3", world: 6, level: 3, title: "Content-Type Tamper",
      story: "The file upload parameter filters non-image types. Inspect the input field `#avatar-type` and change its value to 'image/png'.",
      hint: "Inspect the hidden input <input type='hidden' id='avatar-type' value='text/plain'> and change value to 'image/png'. Click Upload.",
      sidebar: ["Active Chats", "System Webhooks", "Terminal Console"],
      targetView: "terminal",
      checkType: "dom_value_match",
      targetId: "avatar-type",
      expectedValue: "image/png"
    },
    {
      id: "w6l4", world: 6, level: 4, title: "Command Injection Webhook",
      story: "A ping testing utility accepts raw IP inputs. Type '8.8.8.8; whoami' in the IP parameter input box to execute shell overrides.",
      hint: "Type '8.8.8.8; whoami' inside the IP testing input box and click Run Ping test.",
      sidebar: ["Active Chats", "System Webhooks", "Terminal Console"],
      targetView: "terminal",
      checkType: "dom_value_match",
      targetId: "ping-ip-input",
      expectedValue: "8.8.8.8; whoami"
    },
    {
      id: "w6l5", world: 6, level: 5, title: "CRLF Log Injection",
      story: "A search logging parameter accepts queries. Inject CRLF sequence characters (%0d%0a) inside the username input field to forge log files.",
      hint: "Type 'alice%0d%0a[INFO]+LOGGED_IN+admin' in the search field and click Log Query.",
      sidebar: ["Active Chats", "System Webhooks", "Terminal Console"],
      targetView: "terminal",
      checkType: "dom_value_contains",
      targetId: "search-input",
      substring: "%0d%0a"
    },

    // --- WORLD 7: HealthLink (Auth Override) ---
    {
      id: "w7l1", world: 7, level: 1, title: "Patient ID IDOR",
      story: "The portal queries patient profile records via data attribute patient-id. Inspect the card and change the id to '1001'.",
      hint: "Inspect the detail viewer card <div id='patient-card' data-patient-id='1089'> and set it to '1001'. Click Load Record.",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "Gateway Portal"],
      targetView: "records",
      checkType: "dom_dataset",
      targetId: "patient-card",
      datasetKey: "patientId",
      expectedValue: "1001"
    },
    {
      id: "w7l2", world: 7, level: 2, title: "XXE XML Entity Injection",
      story: "An XML processing field parses credentials. Type an XML External Entity declaration in the import textarea to extract files.",
      hint: "Type: <!DOCTYPE doc [<!ENTITY xxe SYSTEM \"file:///etc/passwd\">]><doctor><name>&xxe;</name></doctor> in the textarea, then click Import XML.",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "Gateway Portal"],
      targetView: "records",
      checkType: "dom_value_contains",
      targetId: "xml-import-box",
      substring: "!ENTITY"
    },
    {
      id: "w7l3", world: 7, level: 3, title: "SQL Injection Bypass",
      story: "A secure credentials validator parses passwords. Type a classic SQL Injection payload in the credentials password box.",
      hint: "In the password input field, type: ' OR '1'='1 then click Authenticate.",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "Gateway Portal"],
      targetView: "records",
      checkType: "dom_value_contains",
      targetId: "sql-pass-box",
      substring: "' OR '1'='1"
    },
    {
      id: "w7l4", world: 7, level: 4, title: "Insecure Deserialization",
      story: "A configuration parameter stores serialized settings. Modify the serialized string isAdmin boolean bit value from b:0 to b:1 in the input field.",
      hint: "Inspect the input box containing the serialized string. Locate 'isAdmin\";b:0;' and change it to 'isAdmin\";b:1;'. Click Load Settings.",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "Gateway Portal"],
      targetView: "records",
      checkType: "dom_value_contains",
      targetId: "serialize-box",
      substring: "isAdmin\";b:1;"
    },
    {
      id: "w7l5", world: 7, level: 5, title: "Sensitive SSN Mask Bypass",
      story: "A patient portal blocks sensitive parameter columns. Inspect the profile card `#profile-box` and remove class `masked-ssn`.",
      hint: "Inspect the element <div id='profile-box' class='masked-ssn ...'>. Delete 'masked-ssn' from the class list, then click Reveal SSN.",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "Gateway Portal"],
      targetView: "records",
      checkType: "dom_class",
      targetId: "profile-box",
      className: "masked-ssn",
      shouldExist: false
    },

    // --- WORLD 8: CryptoVault (HMAC & Signatures) ---
    {
      id: "w8l1", world: 8, level: 1, title: "Signature Secret Brute Force",
      story: "Compute valid signature checksums. The vault uses a weak signing key in the console window object. Change window.signatureKey to 'secret'.",
      hint: "Type: window.signatureKey = 'secret'; in the console, then click Generate signature.",
      sidebar: ["Exchange Wallet", "Node Verifications", "Key Ledger"],
      targetView: "ledger",
      checkType: "global_variable",
      varName: "signatureKey",
      expectedValue: "secret"
    },
    {
      id: "w8l2", world: 8, level: 2, title: "SHA-256 Wallet Checksum",
      story: "Input the correct SHA256 checksum of your user ID 'alice'. Input the hash '2bd806c97f5e3f4d47728e48b8c11a6a16f6e1f0e49d6bb8972e2cfc27382025' in the DOM verification field.",
      hint: "Inspect the hash input box and modify its value to '2bd806c97f5e3f4d47728e48b8c11a6a16f6e1f0e49d6bb8972e2cfc27382025'. Click Validate hash.",
      sidebar: ["Exchange Wallet", "Node Verifications", "Key Ledger"],
      targetView: "ledger",
      checkType: "dom_value_match",
      targetId: "wallet-hash",
      expectedValue: "2bd806c97f5e3f4d47728e48b8c11a6a16f6e1f0e49d6bb8972e2cfc27382025"
    },
    {
      id: "w8l3", world: 8, level: 3, title: "Replay Nonce Injection",
      story: "A transaction request nonce is hardcoded in inputs. Change the nonce value parameter in input `#tx-nonce` to a number greater than 1.",
      hint: "Inspect the DOM, locate <input type='hidden' id='tx-nonce' value='1'>. Change value='1' to value='2'. Click Send Transaction.",
      sidebar: ["Exchange Wallet", "Node Verifications", "Key Ledger"],
      targetView: "ledger",
      checkType: "dom_value_gt",
      targetId: "tx-nonce",
      minValue: 1
    },
    {
      id: "w8l4", world: 8, level: 4, title: "Client Key Leaks",
      story: "Find the developer private vault API key hidden inside html comments. Inject key 'V-KEY-99812' in input `#dev-secret`.",
      hint: "Right-click, View Page Source or Inspect and look for HTML comments. The leaked key is 'V-KEY-99812'. Enter it in the input field and click Verify.",
      sidebar: ["Exchange Wallet", "Node Verifications", "Key Ledger"],
      targetView: "ledger",
      checkType: "dom_value_match",
      targetId: "dev-secret",
      expectedValue: "V-KEY-99812"
    },
    {
      id: "w8l5", world: 8, level: 5, title: "Timing Check Override",
      story: "Override comparison timer security validation thresholds. Change window.bypassTimingLock variable to true in the console.",
      hint: "Type: window.bypassTimingLock = true; in your browser console, then click Check security timer.",
      sidebar: ["Exchange Wallet", "Node Verifications", "Key Ledger"],
      targetView: "ledger",
      checkType: "global_variable",
      varName: "bypassTimingLock",
      expectedValue: true
    },

    // --- WORLD 9 & 10: MatrixMainframe (Database & Prototypes) ---
    {
      id: "w9l1", world: 9, level: 1, title: "NoSQL login bypass",
      story: "The mainframe login checks username and password. Override window.loginPayload.password variable with a NoSQL operator: { '$ne': '' }.",
      hint: "In your console, type: window.loginPayload = { username: 'admin', password: { '$ne': '' } }; then click Login to Mainframe.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "override",
      checkType: "nosql_object",
      varName: "loginPayload"
    },
    {
      id: "w9l2", world: 9, level: 2, title: "NoSQL Wildcard query",
      story: "The query search input matches user columns. Type the NoSQL regex wildcard '.*' in the search field to dump all matching columns.",
      hint: "In the search input box, type: .* and click Search Database.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "override",
      checkType: "dom_value_match",
      targetId: "query-search",
      expectedValue: ".*"
    },
    {
      id: "w9l3", world: 9, level: 3, title: "NoSQL Array containment",
      story: "A category query filter accepts arrays. In the console, modify window.categoryFilter to use a NoSQL operator: { '$in': ['public', 'admin'] }.",
      hint: "In your console, type: window.categoryFilter = { '$in': ['public', 'admin'] }; then click Filter.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "override",
      checkType: "global_variable_sub",
      varName: "categoryFilter",
      subKey: "$in",
      expectedValue: ["public", "admin"]
    },
    {
      id: "w9l4", world: 9, level: 4, title: "NoSQL JavaScript where",
      story: "Database filters evaluate javascript where queries. Append a boolean OR validation condition '|| true' inside the text input box.",
      hint: "Inside the filter input box, type: this.status == 'active' || true then click Run Filter.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "override",
      checkType: "dom_value_contains",
      targetId: "where-input",
      substring: "|| true"
    },
    {
      id: "w9l5", world: 9, level: 5, title: "NoSQL boolean bypass",
      story: "Mainframe nodes bypass status verification. Override window.bypassStatus to a NoSQL operator object: { '$ne': true }.",
      hint: "Type: window.bypassStatus = { '$ne': true }; in the console, then click Bypass Status Gate.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "override",
      checkType: "global_variable_sub",
      varName: "bypassStatus",
      subKey: "$ne",
      expectedValue: true
    },
    {
      id: "w10l1", world: 10, level: 1, title: "Assign Pollution",
      story: "A config loader merges objects. In the console, run Object.prototype.isAdmin = true to pollute admin configurations.",
      hint: "In your console, run: Object.prototype.isAdmin = true; then click Configure Mainframe.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "mainframe",
      checkType: "prototype_pollution",
      propName: "isAdmin",
      expectedValue: true
    },
    {
      id: "w10l2", world: 10, level: 2, title: "Constructor Prototype Pollution",
      story: "Pollute the constructor base object configurations. Run Object.prototype.authorized = true in the console.",
      hint: "Type: Object.prototype.authorized = true; in your browser console, then click Authenticate Node.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "mainframe",
      checkType: "prototype_pollution",
      propName: "authorized",
      expectedValue: true
    },
    {
      id: "w10l3", world: 10, level: 3, title: "Array Index Pollution",
      story: "Pollute array indexing references. Run Object.prototype['0'] = 'admin' in the console.",
      hint: "Type: Object.prototype['0'] = 'admin'; in your browser console, then click Load Nodes List.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "mainframe",
      checkType: "prototype_pollution",
      propName: "0",
      expectedValue: "admin"
    },
    {
      id: "w10l4", world: 10, level: 4, title: "Path Override pollution",
      story: "Spoof system path redirection routing parameters. Run Object.prototype.redirectUrl = '/admin' in your console.",
      hint: "Type: Object.prototype.redirectUrl = '/admin'; in the browser console, then click Run Redirect Gate.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "mainframe",
      checkType: "prototype_pollution",
      propName: "redirectUrl",
      expectedValue: "/admin"
    },
    {
      id: "w10l5", world: 10, level: 5, title: "Bypass Freeze Pollution",
      story: "Trigger the absolute mainframe security bypass. Run Object.prototype.bypass_freeze = true in the console.",
      hint: "Type: Object.prototype.bypass_freeze = true; in the console, then click Unlock Mainframe Core.",
      sidebar: ["Override Matrix", "Mainframe Core", "Bypass Protocols"],
      targetView: "mainframe",
      checkType: "prototype_pollution",
      propName: "bypass_freeze",
      expectedValue: true
    }
  ],

  DEFEND: [
    // --- WORLD 1: PayBal (Financial Logic) ---
    {
      id: "w1l1", world: 1, level: 1, title: "Validate Fee Parameter",
      story: "Secure the payment transfers endpoint. Implement a check inside the WAF guard to ensure request body 'fee' is non-negative.",
      hint: "Write: return request.body && parseFloat(request.body.fee) >= 0;",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Implement non-negative fee validation\n  return true;\n}",
      testLegit: { body: { amount: 100, fee: 5.0 } },
      testAttack: { body: { amount: 100, fee: -50.0 } }
    },
    {
      id: "w1l2", world: 1, level: 2, title: "Verify User Role Header",
      story: "Access stats routes require admin role checks. Enforce a guard checking request headers for a valid 'x-user-role' equals 'admin'.",
      hint: "Write: return request.headers && request.headers['x-user-role'] === 'admin';",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Verify administrative header roles\n  return true;\n}",
      testLegit: { headers: { 'x-user-role': 'admin' } },
      testAttack: { headers: { 'x-user-role': 'member' } }
    },
    {
      id: "w1l3", world: 1, level: 3, title: "Filter Conversion Rate",
      story: "Sanitize currency conversion rates parameters. Enforce a check that limits exchange rate values to less than 100.",
      hint: "Write: return request.body && parseFloat(request.body.rate) < 100;",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Max rate threshold limits check\n  return true;\n}",
      testLegit: { body: { usd_amount: 10, rate: 0.90 } },
      testAttack: { body: { usd_amount: 10, rate: 9999.0 } }
    },
    {
      id: "w1l4", world: 1, level: 4, title: "Enforce Tenant ID checks",
      story: "Enforce query parameter verification. In IDOR scenarios, block query requests if the request query tenant ID does not match the active session user ID '123'.",
      hint: "Write: return request.query && request.query.tenant === '123';",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Validate query parameter tenant permissions\n  return true;\n}",
      testLegit: { query: { id: '1001', tenant: '123' } },
      testAttack: { query: { id: '1001', tenant: 'user_456' } }
    },
    {
      id: "w1l5", world: 1, level: 5, title: "Validate Referer Domain",
      story: "Validate request domain origins. Check the Referer header to ensure it originates from the local host domain.",
      hint: "Write: return request.headers && request.headers['referer'] === 'http://localhost:8080/mainframe';",
      sidebar: ["Account Overview", "Transaction History", "Security Settings", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Verify referer hostname\n  return true;\n}",
      testLegit: { headers: { referer: 'http://localhost:8080/mainframe' } },
      testAttack: { headers: { referer: 'http://google.com' } }
    },

    // --- WORLD 2: Netflox (Streaming Platform) ---
    {
      id: "w2l1", world: 2, level: 1, title: "Verify Session Cookie",
      story: "Validate session membership cookies. Read cookies, decrypt Base64 strings, and verify tier values equal 'premium'.",
      hint: "Decrypted session holds JSON. Write: return request.headers && request.headers.cookie && request.headers.cookie.includes('tier=premium'); or similar checks.",
      sidebar: ["Browse Movies", "My Watchlist", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Verify cookie authorizations\n  return request.headers && request.headers.cookie && request.headers.cookie.includes('session=premium');\n}",
      testLegit: { headers: { cookie: 'session=premium' } },
      testAttack: { headers: { cookie: 'session=free' } }
    },
    {
      id: "w2l2", world: 2, level: 2, title: "Block Method Overrides",
      story: "Bypass override request tunnels. Block header methods override parameters specifying DELETE operations.",
      hint: "Write: return !request.headers || request.headers['x-http-method-override'] !== 'DELETE';",
      sidebar: ["Browse Movies", "My Watchlist", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block override method deletes\n  return true;\n}",
      testLegit: { headers: { 'x-http-method-override': 'POST' } },
      testAttack: { headers: { 'x-http-method-override': 'DELETE' } }
    },
    {
      id: "w2l3", world: 2, level: 3, title: "Sanitize File Path Traversals",
      story: "Filter path traversal characters. Check file query parameters and block strings containing double dots '..'.",
      hint: "Write: return request.query && !request.query.file.includes('..');",
      sidebar: ["Browse Movies", "My Watchlist", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Prevent directory path traversals\n  return true;\n}",
      testLegit: { query: { file: 'poster.png' } },
      testAttack: { query: { file: '../../config.json' } }
    },
    {
      id: "w2l4", world: 2, level: 4, title: "Check Expiration bounds",
      story: "Verify session expiration intervals. Enforce values to not exceed the maximum allowed duration of 3600 seconds.",
      hint: "Write: return request.body && parseInt(request.body.expires_in, 10) <= 3600;",
      sidebar: ["Browse Movies", "My Watchlist", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Enforce session time bounds\n  return true;\n}",
      testLegit: { body: { expires_in: 600 } },
      testAttack: { body: { expires_in: 9999999 } }
    },
    {
      id: "w2l5", world: 2, level: 5, title: "Filter Prototype Keys",
      story: "Sanitize parameters. Block configurations properties carrying prototype namespace triggers like '__proto__'.",
      hint: "Write: return !request.bodyRaw || !request.bodyRaw.includes('__proto__');",
      sidebar: ["Browse Movies", "My Watchlist", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block prototype pollutions keys\n  return true;\n}",
      testLegit: { bodyRaw: '{"theme":"dark"}' },
      testAttack: { bodyRaw: '{"__proto__":{"isAdmin":true}}' }
    },

    // --- WORLD 3: CloudStore (eCommerce) ---
    {
      id: "w3l1", world: 3, level: 1, title: "Verify Positive Quantity",
      story: "Prevent negative quantities. Validate checkout payloads to verify item quantity is strictly greater than 0.",
      hint: "Write: return request.body && parseInt(request.body.quantity, 10) > 0;",
      sidebar: ["Catalog", "Shopping Cart", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Check quantity boundaries\n  return true;\n}",
      testLegit: { body: { quantity: 1 } },
      testAttack: { body: { quantity: -5 } }
    },
    {
      id: "w3l2", world: 3, level: 2, title: "Block Array Pollution Parameter",
      story: "Prevent discount coupon arrays stacking. Validate coupons fields type to strictly reject arrays.",
      hint: "Write: return request.body && !Array.isArray(request.body.coupon);",
      sidebar: ["Catalog", "Shopping Cart", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject arrays in coupon parameter\n  return true;\n}",
      testLegit: { body: { coupon: "DISCOUNT10" } },
      testAttack: { body: { coupon: ["DISCOUNT10", "DISCOUNT10"] } }
    },
    {
      id: "w3l3", world: 3, level: 3, title: "Validate Shipping Cost",
      story: "Sanitize shipping fees values. Ensure fee values cannot be set to 0 unless subtotal exceeds $100.",
      hint: "Write: return request.body && (parseFloat(request.body.shipping) > 0 || parseFloat(request.body.subtotal) > 100);",
      sidebar: ["Catalog", "Shopping Cart", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Validate shipping fee criteria\n  return true;\n}",
      testLegit: { body: { shipping: 15, subtotal: 30 } },
      testAttack: { body: { shipping: 0, subtotal: 30 } }
    },
    {
      id: "w3l4", world: 3, level: 4, title: "Filter Tax rate",
      story: "Enforce tax value rules. Check payloads tax_rate values to verify they are at least equal to 0.15.",
      hint: "Write: return request.body && parseFloat(request.body.tax_rate) >= 0.15;",
      sidebar: ["Catalog", "Shopping Cart", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Verify tax rate boundaries\n  return true;\n}",
      testLegit: { body: { tax_rate: 0.15 } },
      testAttack: { body: { tax_rate: 0.0 } }
    },
    {
      id: "w3l5", world: 3, level: 5, title: "Block Mass Assignment properties",
      story: "Bypass mass parameter mapping properties. Enforce validations that block requests carrying 'discount_amount' keys.",
      hint: "Write: return !request.body || request.body.discount_amount === undefined;",
      sidebar: ["Catalog", "Shopping Cart", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block hidden mass assignments discount fields\n  return true;\n}",
      testLegit: { body: { item: "standard" } },
      testAttack: { body: { item: "standard", discount_amount: 1000 } }
    },

    // --- WORLD 4 TO 10: Defend Challenges ---
    {
      id: "w4l1", world: 4, level: 1, title: "Verify User ID boundary",
      story: "Protect corporate systems indexes. Enforce user ID cookie validation to block index ranges below 100.",
      hint: "Write: return request.headers && request.headers.cookie && !request.headers.cookie.includes('user_id=1');",
      sidebar: ["Workspace Logs", "Access Controls", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block corporate root ID accesses\n  return true;\n}",
      testLegit: { headers: { cookie: 'user_id=102' } },
      testAttack: { headers: { cookie: 'user_id=1' } }
    },
    {
      id: "w4l2", world: 4, level: 2, title: "Verify Gateway proxy",
      story: "Verify connection gateways IPs. Check X-Forwarded-For headers to block local proxy bypasses IP values ('127.0.0.1').",
      hint: "Write: return !request.headers || request.headers['x-forwarded-for'] !== '127.0.0.1';",
      sidebar: ["Workspace Logs", "Access Controls", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block localhost proxy headers overrides\n  return true;\n}",
      testLegit: { headers: { 'x-forwarded-for': '182.16.8.21' } },
      testAttack: { headers: { 'x-forwarded-for': '127.0.0.1' } }
    },
    {
      id: "w4l3", world: 4, level: 3, title: "Sanitize Routing Headers",
      story: "Bypass routing override headers. Block requests that contain X-Original-URL routes.",
      hint: "Write: return !request.headers || request.headers['x-original-url'] === undefined;",
      sidebar: ["Workspace Logs", "Access Controls", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject URL hijack routing headers\n  return true;\n}",
      testLegit: { headers: { host: "api.workspacex.com" } },
      testAttack: { headers: { 'x-original-url': '/v1/admin/shutdown' } }
    },
    {
      id: "w4l4", world: 4, level: 4, title: "Validate Origin Hosts",
      story: "Validate CORS origins headers. Check Origin hosts values to ensure they do not carry subdomains redirects bypasses.",
      hint: "Write: return !request.headers || !request.headers.origin || request.headers.origin === 'http://workspacex.com';",
      sidebar: ["Workspace Logs", "Access Controls", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Enforce rigid Origin controls\n  return true;\n}",
      testLegit: { headers: { origin: 'http://workspacex.com' } },
      testAttack: { headers: { origin: 'http://workspacex.com.evil.com' } }
    },
    {
      id: "w4l5", world: 4, level: 5, title: "Reject alg none tokens",
      story: "Validate JWT signatures algorithms. Block Authorization parameters headers using bearer algorithm values none.",
      hint: "Write: return !request.headers || !request.headers.authorization || !request.headers.authorization.includes('eyJhbGciOiJub25lIn0');",
      sidebar: ["Workspace Logs", "Access Controls", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject JWT algorithm none triggers\n  return true;\n}",
      testLegit: { headers: { authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.sig' } },
      testAttack: { headers: { authorization: 'Bearer eyJhbGciOiJub25lIn0.sig' } }
    },

    // --- WORLD 5: AirBook (Defend checks) ---
    {
      id: "w5l1", world: 5, level: 1, title: "Check Booking Chronology",
      story: "Validate checkout chronologies. Enforce that check_in dates are chronologically before check_out dates.",
      hint: "Write: return request.body && new Date(request.body.check_in) < new Date(request.body.check_out);",
      sidebar: ["Flight Board", "Hotel Booking", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Enforce chronological bookings date ranges\n  return true;\n}",
      testLegit: { body: { check_in: "2026-06-16", check_out: "2026-06-18" } },
      testAttack: { body: { check_in: "2026-06-18", check_out: "2026-06-16" } }
    },
    {
      id: "w5l2", world: 5, level: 2, title: "Reject NaN values",
      story: "Protect numerical validations. Reject weight properties carrying non-numeric weight values (e.g. NaN).",
      hint: "Write: return request.body && typeof request.body.weight === 'number' && !isNaN(request.body.weight);",
      sidebar: ["Flight Board", "Hotel Booking", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject NaN inputs\n  return true;\n}",
      testLegit: { body: { weight: 25 } },
      testAttack: { body: { weight: "NaN" } }
    },
    {
      id: "w5l3", world: 5, level: 3, title: "Enforce Seat pricing consistency",
      story: "Validate seat category selections. Ensure first class seats ID (e.g. 1A) cannot be booked with Economy tier.",
      hint: "Write: return request.body && !(request.body.seat_id === '1A' && request.body.tier === 'Economy');",
      sidebar: ["Flight Board", "Hotel Booking", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Enforce pricing category maps checks\n  return true;\n}",
      testLegit: { body: { seat_id: "14D", tier: "Economy" } },
      testAttack: { body: { seat_id: "1A", tier: "Economy" } }
    },
    {
      id: "w5l4", world: 5, level: 4, title: "Validate Redirection links",
      story: "Block open redirect requests. Verify next query destination parameters to match local paths.",
      hint: "Write: return request.query && request.query.next.startsWith('/');",
      sidebar: ["Flight Board", "Hotel Booking", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Validate relative next path destinations\n  return true;\n}",
      testLegit: { query: { next: "/dashboard" } },
      testAttack: { query: { next: "http://evil.com" } }
    },
    {
      id: "w5l5", world: 5, level: 5, title: "Validate Nested JSON size",
      story: "Block deeply nested parsing bombs. Read diagnostic body payloads to verify nesting levels are small.",
      hint: "Write: return !request.bodyRaw || !request.bodyRaw.includes(':{'); (or JSON depth tests). Simple check: return !request.bodyRaw || request.bodyRaw.split('{').length < 4;",
      sidebar: ["Flight Board", "Hotel Booking", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Max depth check parser\n  return true;\n}",
      testLegit: { bodyRaw: '{"key":"value"}' },
      testAttack: { bodyRaw: '{"key":{"a":{"b":{"c":1}}}}' }
    },

    // --- WORLD 6: SecureChat (Defend checks) ---
    {
      id: "w6l1", world: 6, level: 1, title: "Validate User-Agent browser",
      story: "Filter request crawlers. Enforce validations that check User-Agent strings to block Admin Console impersonations.",
      hint: "Write: return request.headers && request.headers['user-agent'] !== 'ByteLearn-Admin-Console';",
      sidebar: ["Active Chats", "System Webhooks", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Verify client headers user-agents\n  return true;\n}",
      testLegit: { headers: { 'user-agent': 'Mozilla/5.0' } },
      testAttack: { headers: { 'user-agent': 'ByteLearn-Admin-Console' } }
    },
    {
      id: "w6l2", world: 6, level: 2, title: "Validate Clickjacking headers",
      story: "Configure clickjacking filters. Ensure allowed iframe parameter queries do not enable embedding.",
      hint: "Write: return !request.query || request.query.allow_embed !== 'true';",
      sidebar: ["Active Chats", "System Webhooks", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block iframe parameters embed requests\n  return true;\n}",
      testLegit: { query: { allow_embed: "false" } },
      testAttack: { query: { allow_embed: "true" } }
    },
    {
      id: "w6l3", world: 6, level: 3, title: "Sanitize Content-Types files",
      story: "Validate avatar uploads content-types. Enforce checks that require content-type headers to equal image/png.",
      hint: "Write: return request.headers && request.headers['content-type'] === 'image/png';",
      sidebar: ["Active Chats", "System Webhooks", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Verify file content-type\n  return true;\n}",
      testLegit: { headers: { 'content-type': 'image/png' } },
      testAttack: { headers: { 'content-type': 'text/plain' } }
    },
    {
      id: "w6l4", world: 6, level: 4, title: "Sanitize command strings",
      story: "Filter webhook IP queries. Sanitize input strings to reject shell command injections overrides (e.g. semicolon ';').",
      hint: "Write: return request.body && !request.body.ip.includes(';');",
      sidebar: ["Active Chats", "System Webhooks", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject shell command injection parameters\n  return true;\n}",
      testLegit: { body: { ip: "8.8.8.8" } },
      testAttack: { body: { ip: "8.8.8.8; whoami" } }
    },
    {
      id: "w6l5", world: 6, level: 5, title: "Filter CRLF linebreaks",
      story: "Filter CRLF characters. Check logging username parameters to reject line break triggers (%0d, %0a, \\r, \\n).",
      hint: "Write: return request.query && !request.query.username.includes('%0d') && !request.query.username.includes('\\r');",
      sidebar: ["Active Chats", "System Webhooks", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block CRLF injection parameters\n  return true;\n}",
      testLegit: { query: { username: "alice" } },
      testAttack: { query: { username: "alice%0d%0a[2026]+SUCCESS" } }
    },

    // --- WORLD 7: HealthLink (Defend checks) ---
    {
      id: "w7l1", world: 7, level: 1, title: "Check patient ID permissions",
      story: "Protect patient database records. Enforce validations that check requested patient IDs to verify they belong to standard session ranges.",
      hint: "Write: return request.query && request.query.patient_id !== '1001';",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Validate patient ID range access\n  return true;\n}",
      testLegit: { query: { patient_id: "1089" } },
      testAttack: { query: { patient_id: "1001" } }
    },
    {
      id: "w7l2", world: 7, level: 2, title: "Reject XML Entity tags",
      story: "Block XXE parsing exports. Sanitize XML payload files to reject DOCTYPE and ENTITY declarations.",
      hint: "Write: return !request.bodyRaw || (!request.bodyRaw.includes('!ENTITY') && !request.bodyRaw.includes('!DOCTYPE'));",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block XML External Entity declarations\n  return true;\n}",
      testLegit: { bodyRaw: "<doctor><name>Smith</name></doctor>" },
      testAttack: { bodyRaw: "<!DOCTYPE doc [<!ENTITY xxe SYSTEM \"file\">]>" }
    },
    {
      id: "w7l3", world: 7, level: 3, title: "Sanitize SQL parameters",
      story: "Sanitize login queries. Check login parameters to reject SQL OR indicators (e.g. ' OR ').",
      hint: "Write: return request.body && !request.body.password.includes(' OR ');",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Sanitize SQL Injection payloads\n  return true;\n}",
      testLegit: { body: { username: "admin", password: "xyz" } },
      testAttack: { body: { username: "admin", password: "' OR '1'='1" } }
    },
    {
      id: "w7l4", world: 7, level: 4, title: "Validate Serialized status",
      story: "Sanitize deserialization parameters. Scan config payload strings to block flags enabling admin privileges.",
      hint: "Write: return request.body && !request.body.config.includes('isAdmin\";b:1;');",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block malicious deserializations configurations\n  return true;\n}",
      testLegit: { body: { config: 'isAdmin";b:0;' } },
      testAttack: { body: { config: 'isAdmin";b:1;' } }
    },
    {
      id: "w7l5", world: 7, level: 5, title: "Block SSN leaks",
      story: "Sanitize clinic metadata responses. Enforce checks that reject SSN reveal requests unless user ID permissions match authorized profiles.",
      hint: "Write: return request.query && request.query.mask !== 'false';",
      sidebar: ["Diagnostics Dashboard", "Clinical Records", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Prevent SSN leakage\n  return true;\n}",
      testLegit: { query: { mask: "true" } },
      testAttack: { query: { mask: "false" } }
    },

    // --- WORLD 8: CryptoVault (Defend checks) ---
    {
      id: "w8l1", world: 8, level: 1, title: "Check key strength",
      story: "Verify signature encryption secrets. Block verification requests using weak signing secrets ('secret').",
      hint: "Write: return request.body && request.body.key !== 'secret';",
      sidebar: ["Exchange Wallet", "Node Verifications", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject weak key signature configurations\n  return true;\n}",
      testLegit: { body: { key: "strong_crypt_key" } },
      testAttack: { body: { key: "secret" } }
    },
    {
      id: "w8l2", world: 8, level: 2, title: "Verify checksum format",
      story: "Verify hex hashes format. Validate hash input strings to require length exactly equal to 64 characters.",
      hint: "Write: return request.body && request.body.hash.length === 64;",
      sidebar: ["Exchange Wallet", "Node Verifications", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Validate SHA256 checksum strings length\n  return true;\n}",
      testLegit: { body: { hash: "2bd806c97f5e3f4d47728e48b8c11a6a16f6e1f0e49d6bb8972e2cfc27382025" } },
      testAttack: { body: { hash: "temp_hash" } }
    },
    {
      id: "w8l3", world: 8, level: 3, title: "Prevent Nonce Replays",
      story: "Validate request transaction nonces. Verify that incoming nonces values are strictly greater than 1.",
      hint: "Write: return request.body && parseInt(request.body.nonce, 10) > 1;",
      sidebar: ["Exchange Wallet", "Node Verifications", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block transaction nonce reuse\n  return true;\n}",
      testLegit: { body: { nonce: 2 } },
      testAttack: { body: { nonce: 1 } }
    },
    {
      id: "w8l4", world: 8, level: 4, title: "Block hardcoded secrets",
      story: "Sanitize API secret checks. Block requests that contain hardcoded vault developer keys ('V-KEY-99812').",
      hint: "Write: return request.body && request.body.secret_key !== 'V-KEY-99812';",
      sidebar: ["Exchange Wallet", "Node Verifications", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block leaked dev key usage\n  return true;\n}",
      testLegit: { body: { secret_key: "USR-8821" } },
      testAttack: { body: { secret_key: "V-KEY-99812" } }
    },
    {
      id: "w8l5", world: 8, level: 5, title: "Enforce timing locks",
      story: "Block request overrides. Check if comparison flags are set to true to trigger timing locks.",
      hint: "Write: return request.body && request.body.bypass_check !== true;",
      sidebar: ["Exchange Wallet", "Node Verifications", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject timing lock bypass overrides\n  return true;\n}",
      testLegit: { body: { bypass_check: false } },
      testAttack: { body: { bypass_check: true } }
    },

    // --- WORLD 9 & 10: MatrixMainframe (Defend checks) ---
    {
      id: "w9l1", world: 9, level: 1, title: "Block NoSQL operators",
      story: "Block NoSQL injections. Validate password inputs to reject object structures.",
      hint: "Write: return request.body && typeof request.body.password !== 'object';",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block nested objects in fields\n  return true;\n}",
      testLegit: { body: { password: "xyz" } },
      testAttack: { body: { password: { "$ne": "" } } }
    },
    {
      id: "w9l2", world: 9, level: 2, title: "Sanitize database lookups",
      story: "Sanitize lookup parameters. Block name searches specifying regex wildcards ('.*').",
      hint: "Write: return request.query && request.query.search !== '.*';",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject wildcard lookup patterns\n  return true;\n}",
      testLegit: { query: { search: "bob" } },
      testAttack: { query: { search: ".*" } }
    },
    {
      id: "w9l3", world: 9, level: 3, title: "Sanitize category queries",
      story: "Sanitize category filter options. Block category fields from utilizing NoSQL array checks ($in).",
      hint: "Write: return request.body && (typeof request.body.category !== 'object' || request.body.category['$in'] === undefined);",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block array query parameter operations\n  return true;\n}",
      testLegit: { body: { category: "public" } },
      testAttack: { body: { category: { "$in": ["public", "admin"] } } }
    },
    {
      id: "w9l4", world: 9, level: 4, title: "Filter Mainframe JavaScript executions",
      story: "Block $where script executions. Validate requests to reject parameters containing execution indicators ($where).",
      hint: "Write: return !request.body || request.body['$where'] === undefined;",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block script injections parameters\n  return true;\n}",
      testLegit: { body: { status: "active" } },
      testAttack: { body: { "$where": "this.status == 'active'" } }
    },
    {
      id: "w9l5", world: 9, level: 5, title: "Verify status lock parameter",
      story: "Protect status variables overrides. Validate status values payloads to reject non-boolean checks ($ne).",
      hint: "Write: return request.body && typeof request.body.is_locked === 'boolean';",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Enforce boolean types validation\n  return true;\n}",
      testLegit: { body: { is_locked: true } },
      testAttack: { body: { is_locked: { "$ne": true } } }
    },
    {
      id: "w10l1", world: 10, level: 1, title: "Block Prototype overrides",
      story: "Prevent prototype pollutions. Enforce validations that check incoming body payloads to block object prototypes keys (__proto__).",
      hint: "Write: return !request.bodyRaw || !request.bodyRaw.includes('__proto__');",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Sanitize prototype declarations keys\n  return true;\n}",
      testLegit: { bodyRaw: '{"theme":"light"}' },
      testAttack: { bodyRaw: '{"__proto__":{"isAdmin":true}}' }
    },
    {
      id: "w10l2", world: 10, level: 2, title: "Block Constructor namespace",
      story: "Sanitize constructor overrides parameters. Enforce validations that reject constructor pollution keys ('constructor').",
      hint: "Write: return !request.bodyRaw || !request.bodyRaw.includes('constructor');",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Sanitize constructor namespace overrides\n  return true;\n}",
      testLegit: { bodyRaw: '{"username":"alice"}' },
      testAttack: { bodyRaw: '{"constructor":{"prototype":{"authorized":true}}}' }
    },
    {
      id: "w10l3", world: 10, level: 3, title: "Block Array index pollution",
      story: "Prevent array prototyping pollution indices. Block requests carrying prototype indices overrides inside body parameters.",
      hint: "Write: return !request.bodyRaw || !request.bodyRaw.includes('__proto__');",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Block array indices prototype manipulations\n  return true;\n}",
      testLegit: { bodyRaw: '{"tags":["normal"]}' },
      testAttack: { bodyRaw: '{"__proto__":{"0":"admin"}}' }
    },
    {
      id: "w10l4", world: 10, level: 4, title: "Filter route redirect parameters",
      story: "Prevent redirect target prototype overrides. Enforce checks that verify redirects options types to block prototype manipulations.",
      hint: "Write: return !request.bodyRaw || !request.bodyRaw.includes('__proto__');",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject route parameter hijacks\n  return true;\n}",
      testLegit: { bodyRaw: '{"path":"/home"}' },
      testAttack: { bodyRaw: '{"__proto__":{"redirectUrl":"/admin"}}' }
    },
    {
      id: "w10l5", world: 10, level: 5, title: "Block ultimate freeze overrides",
      story: "Mainframe locks verification. Reject ultimate configuration overrides specifying bypass_freeze options inside prototype parameters.",
      hint: "Write: return !request.bodyRaw || !request.bodyRaw.includes('bypass_freeze');",
      sidebar: ["Override Matrix", "Mainframe Core", "WAF Guard"],
      targetView: "waf",
      wafDefault: "function check(request) {\n  // Reject ultimate status freeze overrides\n  return true;\n}",
      testLegit: { bodyRaw: '{"lock":true}' },
      testAttack: { bodyRaw: '{"__proto__":{"bypass_freeze":true}}' }
    }
  ]
};
