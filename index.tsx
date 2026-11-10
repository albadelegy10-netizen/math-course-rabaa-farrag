
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Intercept console methods to prevent circular structure errors in AI Studio proxy
['log', 'warn', 'error', 'info'].forEach(method => {
  const original = (console as any)[method];
  (console as any)[method] = (...args: any[]) => {
    const safeArgs = args.map(arg => {
      if (arg instanceof Error) {
        return arg.message + (arg.stack ? '\n' + arg.stack : '');
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


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
