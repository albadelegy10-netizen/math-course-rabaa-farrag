const fs = require('fs');

let cleanText = "\\\\frac{1}{x-y} = \\\\frac{3}{8}";
let prevText;
do {
  prevText = cleanText;
  cleanText = cleanText.replace(
    /\\\\frac\\s*{([^{}]+)}\\s*{([^{}]+)}/g,
    (match, num, den) => {
      const cleanNum = /^[a-zA-Z0-9.\\s]+$/.test(num) ? num.trim() : `(${num.trim()})`;
      const cleanDen = /^[a-zA-Z0-9.\\s]+$/.test(den) ? den.trim() : `(${den.trim()})`;
      return `${cleanNum}/${cleanDen}`;
    }
  );
} while (prevText !== cleanText);

console.log(cleanText);
