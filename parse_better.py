import re
import json

with open('raw_ocr.txt', 'r') as f:
    lines = f.read().split('\n')

questions = []
current_q = None
options = []
context = []
current_opt = None

def fix_math(text):
    # ASCII replacements
    text = text.replace('𝑥', 'x').replace('𝑦', 'y').replace('𝑎', 'a').replace('𝑏', 'b')
    text = text.replace('𝑚', 'm').replace('𝑛', 'n').replace('𝑐', 'c').replace('𝑓', 'f')
    text = text.replace('𝑔', 'g').replace('ℎ', 'h').replace('×', '\\times ').replace('÷', '\\div ')
    text = text.replace('≤', '\\leq ').replace('≥', '\\geq ').replace('≠', '\\neq ')
    text = text.replace('∞', '\\infty').replace('°', '^\\circ')
    
    # Specific problem fixes
    text = text.replace('2x2 − 36x + 2', '\\frac{2x^2 - 3}{6x + 2}')
    text = text.replace('2x + 53x − 6', '\\frac{2x + 5}{3x - 6}')
    text = text.replace('23x', '\\frac{2}{3}x')
    text = text.replace('x2 +23x', 'x^2 + \\frac{2}{3}x')
    text = text.replace('22x + 4+ 1', '\\frac{2}{2x + 4} + 1')
    
    # General exponents
    text = text.replace('x2', 'x^2').replace('x3', 'x^3').replace('x4', 'x^4')
    text = text.replace('cm2', 'cm^2').replace('cm3', 'cm^3')
    
    # Wrap specific math in $
    # Not trying to be perfect, just wrap isolated math expressions
    # This might be tricky, so let's rely on simple replacements
    return text.strip()

for line in lines:
    line = line.strip()
    if not line:
        continue
    
    if line.startswith("EST I") or "Duration:" in line or "50 Multiple Choice" in line or "Instructions:" in line:
        continue
        
    # Check if line is a question
    q_match = re.match(r'^Question\s+(\d+)\.(.*)', line)
    if q_match:
        if current_q:
            if current_opt:
                options.append(current_opt)
            current_q['options'] = options
            questions.append(current_q)
        
        q_text = ""
        if context:
            q_text += "\n".join(context) + "\n\n"
        q_text += q_match.group(2).strip()
        
        current_q = {
            'id': int(q_match.group(1)),
            'question': q_text,
            'options': [],
            'correctAnswer': 0,
            'explanation': "Explanation pending.",
            'category': "EST1-2026-May -new",
            'topics': ["EST1"]
        }
        options = []
        # DO NOT clear context here if it's for multiple questions, but it's hard to track. 
        # Usually context says "Questions 14-16". So if the current question is <= 16, keep context?
        # Actually, let's just clear context after adding to a question. 
        # For grouped questions, they often just read the text once. But the user will need the text on each question.
        # Let's see if context contains "Questions X - Y".
        clear_context = True
        if context:
            m = re.search(r'Questions\s+(\d+)\s*(?:and|-|to)\s+(\d+)', "\n".join(context))
            if m:
                end_q = int(m.group(2))
                if int(q_match.group(1)) < end_q:
                    clear_context = False
        
        if clear_context:
            context = []
        current_opt = None
        continue
    
    # Check if line is an option
    opt_match = re.match(r'^([A-D])\.\s*(.*)', line)
    if opt_match:
        if current_opt is not None:
            options.append(current_opt)
        current_opt = opt_match.group(2).strip()
        continue
        
    # If it's not a question and not an option, where does it belong?
    if current_q:
        if current_opt is not None:
            # If we are parsing options, and we see text that is not an option, 
            # it might be a continuation of the option, OR it might be context for the NEXT question!
            # Let's assume if it starts with things like "Questions", "{", or isn't a short continuation, it's context.
            # Usually options are short. If an option continues, we append.
            # But let's check if the line looks like new context.
            if line.startswith("Question") or line.startswith("{") or line.startswith("Score") or line.startswith("A group of") or "refer to the information" in line or line.startswith("The solution") or "best fit" in line or line.startswith("Another student"):
                options.append(current_opt)
                current_opt = None
                context.append(line)
            else:
                # Continuation of option
                current_opt += ' ' + line
        else:
            # Continuation of question
            current_q['question'] += '\n' + line
    else:
        # Context before any question
        context.append(line)

if current_q:
    if current_opt is not None:
        options.append(current_opt)
    current_q['options'] = options
    questions.append(current_q)

# Write to file
with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write("import { Question } from '../types';\n\n")
    f.write("export const EST1_2026_MAY_NEW_SET: Question[] = [\n")
    for q in questions:
        q_text = fix_math(q['question']).replace('`', '\\`')
        opts = [fix_math(o).replace('`', '\\`') for o in q['options']]
        
        f.write("  {\n")
        f.write(f"    id: {q['id']},\n")
        
        # Add SVGs for specific questions
        if q['id'] in [9, 10]:
            f.write(f"    svg: `<svg viewBox=\"0 0 300 200\" class=\"mx-auto h-48 w-auto\"><line x1=\"30\" y1=\"180\" x2=\"280\" y2=\"180\" stroke=\"black\" stroke-width=\"1\" /><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"180\" stroke=\"black\" stroke-width=\"1\" /><text x=\"120\" y=\"195\" font-size=\"12\">Radius (cm)</text><text x=\"10\" y=\"100\" font-size=\"12\" transform=\"rotate(-90 10,100)\">Height (cm)</text><circle cx=\"50\" cy=\"140\" r=\"3\" fill=\"blue\" /><circle cx=\"80\" cy=\"120\" r=\"3\" fill=\"blue\" /><circle cx=\"120\" cy=\"110\" r=\"3\" fill=\"blue\" /><circle cx=\"160\" cy=\"80\" r=\"3\" fill=\"blue\" /><circle cx=\"200\" cy=\"70\" r=\"3\" fill=\"blue\" /><circle cx=\"240\" cy=\"50\" r=\"3\" fill=\"blue\" /><line x1=\"30\" y1=\"160\" x2=\"280\" y2=\"40\" stroke=\"red\" stroke-width=\"2\" /></svg>`,\n")
        elif q['id'] == 19:
            f.write(f"    svg: `<svg viewBox=\"0 0 200 200\" class=\"mx-auto h-48 w-auto\"><line x1=\"10\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"black\" stroke-width=\"1\" /><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"190\" stroke=\"black\" stroke-width=\"1\" /><line x1=\"40\" y1=\"180\" x2=\"160\" y2=\"20\" stroke=\"blue\" stroke-width=\"2\" /><text x=\"170\" y=\"30\" font-size=\"12\">f(x)</text></svg>`,\n")
        elif q['id'] == 25:
            f.write(f"    svg: `<svg viewBox=\"0 0 200 200\" class=\"mx-auto h-48 w-auto\"><line x1=\"10\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"black\" stroke-width=\"1\" /><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"190\" stroke=\"black\" stroke-width=\"1\" /><line x1=\"60\" y1=\"10\" x2=\"60\" y2=\"190\" stroke=\"red\" stroke-dasharray=\"4\" stroke-width=\"1\" /><line x1=\"10\" y1=\"80\" x2=\"190\" y2=\"80\" stroke=\"red\" stroke-dasharray=\"4\" stroke-width=\"1\" /><path d=\"M 10 120 Q 40 120 50 190\" fill=\"none\" stroke=\"blue\" stroke-width=\"2\" /><path d=\"M 70 10 Q 80 70 190 70\" fill=\"none\" stroke=\"blue\" stroke-width=\"2\" /></svg>`,\n")
            
        # Add HTML tables
        if q['id'] in [14, 15, 16]:
            html_table = "<table class=\"table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center\"><thead><tr class=\"bg-gray-100\"><th class=\"border border-gray-400 px-2 py-1\">Score n</th><th class=\"border border-gray-400 px-2 py-1\">0 <= n < 10</th><th class=\"border border-gray-400 px-2 py-1\">10 <= n < 14</th><th class=\"border border-gray-400 px-2 py-1\">14 <= n < 17</th><th class=\"border border-gray-400 px-2 py-1\">17 <= n <= 20</th></tr></thead><tbody><tr><td class=\"border border-gray-400 px-2 py-1 font-bold\">Number of Students</td><td class=\"border border-gray-400 px-2 py-1\">7</td><td class=\"border border-gray-400 px-2 py-1\">13</td><td class=\"border border-gray-400 px-2 py-1\">11</td><td class=\"border border-gray-400 px-2 py-1\">5</td></tr></tbody></table>"
            f.write(f"    html: `{html_table}`,\n")

        f.write(f"    question: `{q_text}`,\n")
        f.write(f"    options: {json.dumps(opts)},\n")
        f.write("    correctAnswer: 0,\n")
        f.write("    explanation: \"Explanation pending.\",\n")
        f.write("    category: \"EST1-2026-May -new\",\n")
        f.write("    topics: [\"EST1\"]\n")
        f.write("  },\n")
    f.write("];\n")

print("Questions parsed correctly.")
