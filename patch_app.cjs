const fs = require('fs');

let appCode = fs.readFileSync('App.tsx', 'utf-8');

if (!appCode.includes("import NotificationBell")) {
    appCode = appCode.replace(
        "import WhatsAppButton from './components/WhatsAppButton';",
        "import WhatsAppButton from './components/WhatsAppButton';\nimport NotificationBell from './components/NotificationBell';"
    );
}

if (!appCode.includes("<NotificationBell />")) {
    appCode = appCode.replace(
        "<main className={`flex-1 transition-all duration-300 min-h-screen w-full ${(isSidebarOpen && view !== 'quiz' && view !== 'editor') ? 'lg:ml-64' : 'ml-0'}`}>\n        {!isSidebarOpen && view !== 'quiz' && view !== 'editor' && (",
        "<main className={`flex-1 transition-all duration-300 min-h-screen w-full ${(isSidebarOpen && view !== 'quiz' && view !== 'editor') ? 'lg:ml-64' : 'ml-0'}`}>\n        <div className=\"fixed top-6 right-6 z-30\">\n          <NotificationBell />\n        </div>\n        {!isSidebarOpen && view !== 'quiz' && view !== 'editor' && ("
    );
}

fs.writeFileSync('App.tsx', appCode, 'utf-8');
console.log("App.tsx patched.");
