const fs = require('fs');
let content = fs.readFileSync('components/LessonContent.tsx', 'utf8');

const targetFuncStart = '  const renderStudyNotes = (notes: string) => {';
const newFunc = `  const renderStudyNotes = (notes: string) => {
    return notes.split('\\n').map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;
      
      // Check for Media Tags (img, a href for PDF/Video) or SVG
      if (trimmed.startsWith('<svg') || trimmed.startsWith('<img') || trimmed.startsWith('<a ')) {
          return (
              <div key={idx} className="my-6 w-full" dangerouslySetInnerHTML={{ __html: trimmed }} />
          );
      }

      // H1 Title
      if (trimmed.startsWith('# ')) {
          const content = trimmed.replace(/^#\\s+/, '');
          return (
              <h2 key={idx} className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8 mt-8 flex items-center border-b border-purple-100 pb-4">
                  <Sparkles className="w-7 h-7 text-pink-500 mr-2 flex-shrink-0" />
                  {renderRichText(content)}
              </h2>
          );
      }
      
      // H2 Title
      if (trimmed.startsWith('## ')) {
          const content = trimmed.replace(/^##\\s+/, '');
          return (
              <h3 key={idx} className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 mt-8 flex items-center border-b border-blue-100 pb-3">
                  <Sparkles className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
                  {renderRichText(content)}
              </h3>
          );
      }
      
      // H3 Subtitle
      if (trimmed.startsWith('### ')) {
          const content = trimmed.replace(/^###\\s+/, '');
          return (
              <h4 key={idx} className="text-xl font-bold text-teal-700 mb-4 mt-8 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-3 inline-block"></span>
                  {renderRichText(content)}
              </h4>
          );
      }

      // Main Exam Title (Legacy support for bold only)
      if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.match(/^\\d/) && !trimmed.includes("Example") && !trimmed.includes("Solution") && !trimmed.includes("Rule")) {
          return (
              <h3 key={idx} className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8 mt-8 flex items-center border-b border-purple-100 pb-4">
                  <Sparkles className="w-6 h-6 text-pink-500 mr-2 inline-block" />
                  {trimmed.replace(/\\*\\*/g, '').replace(/\\$/g, '')}
              </h3>
          );
      }
      
      // Solved Examples
      if (trimmed.startsWith('**Example:**') || trimmed.startsWith('**Example**:')) {
         const content = trimmed.replace(/\\*\\*Example:?\\*\\*\\s*/, '');
         return (
             <div key={idx} className="ml-4 mt-6 mb-4 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl shadow-sm">
                 <div className="flex items-start">
                     <Brain className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                     <div>
                         <span className="font-bold text-blue-800 block text-xs uppercase tracking-widest mb-2">Solved Example</span>
                         <div className="text-blue-900 font-medium text-lg leading-relaxed">{renderRichText(content)}</div>
                     </div>
                 </div>
             </div>
         );
      }

      // Regular text fallback
      return (
          <div key={idx} className="text-gray-600 mb-3 leading-relaxed text-lg pl-1">
              {renderRichText(trimmed)}
          </div>
      );
    });
  };`;

const oldEnd = '    });\n  };';
const startIndex = content.indexOf(targetFuncStart);
if (startIndex === -1) {
  console.log("Could not find start index");
  process.exit(1);
}
let endIndex = content.indexOf(oldEnd, startIndex);
if (endIndex === -1) {
    // try different spacing
    endIndex = content.indexOf('    });\r\n  };', startIndex);
    if(endIndex === -1) {
        console.log("Could not find end index");
        process.exit(1);
    }
}
const endIdxToReplace = endIndex + oldEnd.length;

content = content.substring(0, startIndex) + newFunc + content.substring(endIdxToReplace);
fs.writeFileSync('components/LessonContent.tsx', content);
console.log("Successfully patched renderStudyNotes");
