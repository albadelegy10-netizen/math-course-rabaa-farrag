import { jsPDF } from "jspdf";
import * as fs from "fs";

const doc = new jsPDF();
doc.text("Line 1: 3√(z) - 5 √(x)", 10, 10);
doc.text("Line 2: ³√(z) - 5 √(x)", 10, 20);
fs.writeFileSync("test.pdf", Buffer.from(doc.output('arraybuffer')));
console.log("wrote test.pdf");
