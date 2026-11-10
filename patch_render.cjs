const fs = require('fs');

let code = fs.readFileSync('components/StudentHomework.tsx', 'utf-8');

code = code.replace(
    "const { completed, score } = getStatus(assignment.lessonId);",
    "const { completed, score, attempts } = getStatus(assignment.lessonId);"
);

const oldJSX = `{completed ? (
                    <div className="text-right">
                      <span className="block text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Completed</span>
                      <span className="text-xl font-black text-gray-900">{score}%</span>
                    </div>
                  ) : (
                    <div className="text-right mr-2">
                       <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</span>
                       <span className={\`text-sm font-bold \${isOverdue ? 'text-red-600' : 'text-blue-600'}\`}>
                         {isOverdue ? 'Overdue' : 'Pending'}
                       </span>
                    </div>
                  )}`;

const newJSX = `{completed ? (
                    <div className="text-right flex flex-col items-end">
                      <span className="flex items-center text-xs font-bold text-green-600 uppercase tracking-wider mb-2 bg-green-50 px-2 py-1 rounded-md">
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          Done
                      </span>
                      <div className="flex flex-col gap-1 items-end">
                          {attempts && attempts.map((attempt, idx) => {
                             const isExam = lesson?.type === 'exam';
                             const displayScore = isExam 
                                 ? Math.round((attempt.correctCount / attempt.totalQuestions) * 800) 
                                 : attempt.score;
                             return (
                                 <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 flex items-center justify-between min-w-[140px]">
                                     <span className="font-medium text-gray-500">Attempt {idx + 1}:</span>
                                     <span className="font-bold text-gray-900 ml-2">
                                         {displayScore}{isExam ? '' : '%'} <span className="text-gray-400 font-normal">({attempt.correctCount}/{attempt.totalQuestions})</span>
                                     </span>
                                 </div>
                             );
                          })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-right mr-2">
                       <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</span>
                       <span className={\`text-sm font-bold \${isOverdue ? 'text-red-600' : 'text-blue-600'}\`}>
                         {isOverdue ? 'Overdue' : 'Pending'}
                       </span>
                    </div>
                  )}`;

code = code.replace(oldJSX, newJSX);

fs.writeFileSync('components/StudentHomework.tsx', code);
console.log("Patched rendering");
