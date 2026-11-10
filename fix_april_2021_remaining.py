import re
import json

def get_file_content(path):
    with open(path, 'r') as f:
        return f.read()

def save_file_content(path, content):
    with open(path, 'w') as f:
        f.write(content)

def update_question_svg(file_content, q_id, new_svg):
    idx = file_content.find(f'id: "{q_id}"')
    if idx == -1:
        print(f"Question {q_id} not found!")
        return file_content
    
    svg_start = file_content.find('svg: `', idx)
    if svg_start == -1 or svg_start > idx + 500:
        print(f"svg field not found for {q_id}")
        options_idx = file_content.find('options: [', idx)
        if options_idx != -1:
            return file_content[:options_idx] + 'svg: `' + new_svg + '`,\n    ' + file_content[options_idx:]
        
        # for grid-in questions options: [] might not exist, but let's check explanation
        explanation_idx = file_content.find('explanation: ', idx)
        if explanation_idx != -1:
             return file_content[:explanation_idx] + 'svg: `' + new_svg + '`,\n    ' + file_content[explanation_idx:]
        return file_content
    
    svg_end = file_content.find('`,', svg_start)
    if svg_end == -1:
        print(f"End of svg not found for {q_id}")
        return file_content
    
    new_content = file_content[:svg_start] + 'svg: `' + new_svg + file_content[svg_end:]
    return new_content

table_q37 = """<table class="table-auto border-collapse border border-gray-400 w-full max-w-sm mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-4 py-2 font-bold">Year</th>
      <th class="border border-gray-400 px-4 py-2 font-bold">Average Closing Price ($)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-4 py-2">2020</td><td class="border border-gray-400 px-4 py-2">1,771.9</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">2019</td><td class="border border-gray-400 px-4 py-2">1,393.34</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">2018</td><td class="border border-gray-400 px-4 py-2">1,268.93</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">2017</td><td class="border border-gray-400 px-4 py-2">1,251.92</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">2016</td><td class="border border-gray-400 px-4 py-2">1,158.86</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">2015</td><td class="border border-gray-400 px-4 py-2">1,266.06</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">2014</td><td class="border border-gray-400 px-4 py-2">1,409.51</td></tr>
    <tr><td class="border border-gray-400 px-4 py-2">2013</td><td class="border border-gray-400 px-4 py-2">1,668.86</td></tr>
  </tbody>
</table>"""

table_q48 = """<div class="flex flex-col gap-6 mb-4">
<table class="table-auto border-collapse border border-gray-400 w-full text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1" colspan="3">Average number of tickets sold at the entrance door per game</th>
      <th class="border border-gray-400 px-2 py-1" colspan="2">Seasonal tickets</th>
    </tr>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
      <th class="border border-gray-400 px-2 py-1">Child</th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2018</td>
      <td class="border border-gray-400 px-2 py-1">4521</td>
      <td class="border border-gray-400 px-2 py-1">1254</td>
      <td class="border border-gray-400 px-2 py-1">759</td>
      <td class="border border-gray-400 px-2 py-1">1122</td>
      <td class="border border-gray-400 px-2 py-1">780</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2019</td>
      <td class="border border-gray-400 px-2 py-1">4668</td>
      <td class="border border-gray-400 px-2 py-1">1102</td>
      <td class="border border-gray-400 px-2 py-1">884</td>
      <td class="border border-gray-400 px-2 py-1">1088</td>
      <td class="border border-gray-400 px-2 py-1">794</td>
    </tr>
  </tbody>
</table>

<table class="table-auto border-collapse border border-gray-400 w-full text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1" colspan="3">Ticket revenue from selling them at the entrance door per game ($)</th>
      <th class="border border-gray-400 px-2 py-1" colspan="2">Seasonal ticket revenue ($)</th>
    </tr>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1"></th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
      <th class="border border-gray-400 px-2 py-1">Child</th>
      <th class="border border-gray-400 px-2 py-1">Male</th>
      <th class="border border-gray-400 px-2 py-1">Female</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2018</td>
      <td class="border border-gray-400 px-2 py-1">72336</td>
      <td class="border border-gray-400 px-2 py-1">16552.8</td>
      <td class="border border-gray-400 px-2 py-1">4402.2</td>
      <td class="border border-gray-400 px-2 py-1">78540</td>
      <td class="border border-gray-400 px-2 py-1">47970</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">2019</td>
      <td class="border border-gray-400 px-2 py-1">79822.8</td>
      <td class="border border-gray-400 px-2 py-1">15428</td>
      <td class="border border-gray-400 px-2 py-1">4420</td>
      <td class="border border-gray-400 px-2 py-1">80512</td>
      <td class="border border-gray-400 px-2 py-1">47640</td>
    </tr>
  </tbody>
</table>
</div>"""

svg_q54 = """<svg viewBox="0 0 600 350" width="100%" height="350" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#e5e7eb" stroke-width="1">
    <line x1="80" y1="80" x2="550" y2="80"/>
    <line x1="80" y1="100" x2="550" y2="100"/>
    <line x1="80" y1="120" x2="550" y2="120"/>
    <line x1="80" y1="140" x2="550" y2="140"/>
    <line x1="80" y1="160" x2="550" y2="160"/>
    <line x1="80" y1="180" x2="550" y2="180"/>
    <line x1="80" y1="200" x2="550" y2="200"/>
    <line x1="80" y1="220" x2="550" y2="220"/>
    <line x1="80" y1="240" x2="550" y2="240"/>
    <line x1="80" y1="260" x2="550" y2="260"/>
    <line x1="80" y1="280" x2="550" y2="280"/>
    
    <line x1="80" y1="80" x2="80" y2="280"/>
    <line x1="140" y1="80" x2="140" y2="280"/>
    <line x1="200" y1="80" x2="200" y2="280"/>
    <line x1="260" y1="80" x2="260" y2="280"/>
    <line x1="320" y1="80" x2="320" y2="280"/>
    <line x1="380" y1="80" x2="380" y2="280"/>
    <line x1="440" y1="80" x2="440" y2="280"/>
    <line x1="500" y1="80" x2="500" y2="280"/>
  </g>
  
  <rect x="80" y="80" width="470" height="200" fill="none" stroke="gray" stroke-width="2"/>
  
  <text x="70" y="285" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">14</text>
  <text x="70" y="245" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">16</text>
  <text x="70" y="205" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">18</text>
  <text x="70" y="165" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">20</text>
  <text x="70" y="125" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">22</text>
  <text x="70" y="85" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">24</text>
  
  <text x="80" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2009</text>
  <text x="140" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2010</text>
  <text x="200" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2011</text>
  <text x="260" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2012</text>
  <text x="320" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2013</text>
  <text x="380" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2014</text>
  <text x="440" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2015</text>
  <text x="500" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2016</text>
  
  <line x1="140" y1="212" x2="440" y2="180" stroke="gray" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="120" y="222" font-family="sans-serif" font-size="12" font-weight="bold" fill="gray">17.4</text>
  <text x="430" y="172" font-family="sans-serif" font-size="12" font-weight="bold" fill="gray">19</text>
  
  <g fill="gray">
    <circle cx="140" cy="260" r="4"/>
    <circle cx="140" cy="200" r="4"/>
    <circle cx="140" cy="180" r="4"/>
    <circle cx="200" cy="240" r="4"/>
    <circle cx="200" cy="220" r="4"/>
    <circle cx="200" cy="160" r="4"/>
    <circle cx="260" cy="260" r="4"/>
    <circle cx="260" cy="240" r="4"/>
    <circle cx="260" cy="220" r="4"/>
    <circle cx="260" cy="180" r="4"/>
    <circle cx="320" cy="180" r="4"/>
    <circle cx="320" cy="160" r="4"/>
    <circle cx="320" cy="120" r="4"/>
    <circle cx="380" cy="260" r="4"/>
    <circle cx="380" cy="240" r="4"/>
    <circle cx="380" cy="200" r="4"/>
    <circle cx="380" cy="140" r="4"/>
    <circle cx="440" cy="200" r="4"/>
    <circle cx="440" cy="180" r="4"/>
    <circle cx="440" cy="120" r="4"/>
  </g>
</svg>"""

def run():
    p1 = "src/data/questions_est1_2021_april_part1.ts"
    p2 = "src/data/questions_est1_2021_april_part2.ts"
    p3 = "src/data/questions_est1_2021_april_part3.ts"
    
    c2 = get_file_content(p2)
    c3 = get_file_content(p3)
    
    c2 = update_question_svg(c2, "est1_2021_april_38", table_q37)
    c2 = update_question_svg(c2, "est1_2021_april_39", table_q37)
    
    c3 = update_question_svg(c3, "est1_2021_april_49", table_q48)
    c3 = update_question_svg(c3, "est1_2021_april_50", table_q48)
    c3 = update_question_svg(c3, "est1_2021_april_55", svg_q54)
    
    save_file_content(p2, c2)
    save_file_content(p3, c3)
    print("Remaining questions updated successfully!")

if __name__ == "__main__":
    run()
