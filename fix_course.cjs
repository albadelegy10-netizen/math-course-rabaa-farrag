const fs = require('fs');
let content = fs.readFileSync('components/CourseDetail.tsx', 'utf8');
content = content.replace(/if \(l\.course\) return l\.course === course;/g, "if (l.course) return l.course.toUpperCase() === course.toUpperCase();");
fs.writeFileSync('components/CourseDetail.tsx', content);
