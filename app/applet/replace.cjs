const fs = require('fs');
const files = [
  './components/Sidebar.tsx',
  './components/SignIn.tsx',
  './components/AdminReports.tsx',
  './components/ReviewPlan.tsx',
  './index.html'
];
for(const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/by Eng Rabaa/g, 'with Eng Rabaa');
  fs.writeFileSync(file, content);
  console.log(`Replaced in ${file}`);
}
