const fs = require('fs');
const file = '/app/applet/index.tsx';
let code = fs.readFileSync(file, 'utf-8');

const sanitizer = `
// Intercept console methods to prevent circular structure errors in AI Studio proxy
['log', 'warn', 'error', 'info'].forEach(method => {
  const original = (console as any)[method];
  (console as any)[method] = (...args: any[]) => {
    const safeArgs = args.map(arg => {
      if (arg instanceof Error) {
        return arg.message + (arg.stack ? '\\n' + arg.stack : '');
      }
      try {
        JSON.stringify(arg);
        return arg;
      } catch (e) {
        return "[Circular or Unserializable Object]";
      }
    });
    original.apply(console, safeArgs);
  };
});
`;

if (!code.includes("Intercept console methods")) {
    code = code.replace(
        "import App from './App';",
        "import App from './App';\n" + sanitizer
    );
    fs.writeFileSync(file, code, 'utf-8');
    console.log("Console patched.");
} else {
    console.log("Console already patched.");
}
