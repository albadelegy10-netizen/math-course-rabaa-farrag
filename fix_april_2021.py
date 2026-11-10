import re
import json

def get_file_content(path):
    with open(path, 'r') as f:
        return f.read()

def save_file_content(path, content):
    with open(path, 'w') as f:
        f.write(content)

def update_question_svg(file_content, q_id, new_svg):
    # Regex to match the svg field of a specific question ID
    # This is tricky because the svg field can be multi-line
    # Let's find the index of the question ID
    idx = file_content.find(f'id: "{q_id}"')
    if idx == -1:
        print(f"Question {q_id} not found!")
        return file_content
    
    # Find the next 'svg: `'
    svg_start = file_content.find('svg: `', idx)
    if svg_start == -1:
        print(f"svg field not found for {q_id}")
        return file_content
    
    svg_end = file_content.find('`,', svg_start)
    if svg_end == -1:
        print(f"End of svg not found for {q_id}")
        return file_content
    
    # Replace
    new_content = file_content[:svg_start] + 'svg: `' + new_svg + file_content[svg_end:]
    return new_content

# We also need to update HTML tables for Q17-19, Q28-30.
# Because the `svg` field can hold HTML strings too (tables).

# SVG for Q6 & 7
svg_q6 = """<svg viewBox="0 0 400 400" width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e5e7eb" stroke-width="1">
    <!-- Vertical lines -->
    <line x1="50" y1="50" x2="50" y2="350"/>
    <line x1="87.5" y1="50" x2="87.5" y2="350"/>
    <line x1="125" y1="50" x2="125" y2="350"/>
    <line x1="162.5" y1="50" x2="162.5" y2="350"/>
    <line x1="200" y1="50" x2="200" y2="350"/>
    <line x1="237.5" y1="50" x2="237.5" y2="350"/>
    <line x1="275" y1="50" x2="275" y2="350"/>
    <line x1="312.5" y1="50" x2="312.5" y2="350"/>
    <line x1="350" y1="50" x2="350" y2="350"/>
    <!-- Horizontal lines -->
    <line x1="50" y1="50" x2="350" y2="50"/>
    <line x1="50" y1="87.5" x2="350" y2="87.5"/>
    <line x1="50" y1="125" x2="350" y2="125"/>
    <line x1="50" y1="162.5" x2="350" y2="162.5"/>
    <line x1="50" y1="200" x2="350" y2="200"/>
    <line x1="50" y1="237.5" x2="350" y2="237.5"/>
    <line x1="50" y1="275" x2="350" y2="275"/>
    <line x1="50" y1="312.5" x2="350" y2="312.5"/>
    <line x1="50" y1="350" x2="350" y2="350"/>
  </g>
  
  <!-- Axes -->
  <g stroke="black" stroke-width="2">
    <!-- X axis -->
    <line x1="40" y1="237.5" x2="360" y2="237.5"/>
    <polygon points="360,234 366,237.5 360,241" fill="black"/>
    <!-- Y axis -->
    <line x1="162.5" y1="360" x2="162.5" y2="40"/>
    <polygon points="159,40 162.5,34 166,40" fill="black"/>
  </g>
  
  <!-- Line passes through (0, 1.5) and (1, 0.5) -->
  <!-- 1 unit = 37.5 px -->
  <!-- Origin (0,0) is at (162.5, 237.5) -->
  <!-- (0, 1.5) -> (162.5, 237.5 - 1.5*37.5) = (162.5, 181.25) -->
  <!-- (1, 0.5) -> (162.5 + 37.5, 237.5 - 0.5*37.5) = (200, 218.75) -->
  <!-- Line equation: y = -x + 1.5 -->
  <!-- P1 at x=-2 -> y=3.5 -> (162.5 - 2*37.5, 237.5 - 3.5*37.5) = (87.5, 106.25) -->
  <!-- P2 at x=4 -> y=-2.5 -> (162.5 + 4*37.5, 237.5 - (-2.5)*37.5) = (312.5, 331.25) -->
  <line x1="87.5" y1="106.25" x2="312.5" y2="331.25" stroke="black" stroke-width="2"/>
  <polygon points="87.5,106.25 91,114 84,111" fill="black" transform="rotate(45, 87.5, 106.25)"/>
  <polygon points="312.5,331.25 316,324 309,327" fill="black" transform="rotate(45, 312.5, 331.25)"/>
  
  <!-- Point A(1, 0.5) -->
  <text x="210" y="210" font-family="serif" font-size="14" fill="black">A (1, 0.5)</text>
  <circle cx="200" cy="218.75" r="3" fill="black"/>
  <!-- Small cross at point A -->
  <line x1="196" y1="214.75" x2="204" y2="222.75" stroke="black" stroke-width="1.5"/>
  <line x1="204" y1="214.75" x2="196" y2="222.75" stroke="black" stroke-width="1.5"/>
</svg>"""

# SVG for Q8 (Circle)
svg_q8 = """<svg viewBox="0 0 400 400" width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e5e7eb" stroke-width="1">
    <!-- Grid 9x9 from 50 to 350, spacing 33.33 -->
    <line x1="50" y1="50" x2="350" y2="50"/>
    <line x1="50" y1="83.33" x2="350" y2="83.33"/>
    <line x1="50" y1="116.66" x2="350" y2="116.66"/>
    <line x1="50" y1="150" x2="350" y2="150"/>
    <line x1="50" y1="183.33" x2="350" y2="183.33"/>
    <line x1="50" y1="216.66" x2="350" y2="216.66"/>
    <line x1="50" y1="250" x2="350" y2="250"/>
    <line x1="50" y1="283.33" x2="350" y2="283.33"/>
    <line x1="50" y1="316.66" x2="350" y2="316.66"/>
    <line x1="50" y1="350" x2="350" y2="350"/>
    
    <line x1="50" y1="50" x2="50" y2="350"/>
    <line x1="83.33" y1="50" x2="83.33" y2="350"/>
    <line x1="116.66" y1="50" x2="116.66" y2="350"/>
    <line x1="150" y1="50" x2="150" y2="350"/>
    <line x1="183.33" y1="50" x2="183.33" y2="350"/>
    <line x1="216.66" y1="50" x2="216.66" y2="350"/>
    <line x1="250" y1="50" x2="250" y2="350"/>
    <line x1="283.33" y1="50" x2="283.33" y2="350"/>
    <line x1="316.66" y1="50" x2="316.66" y2="350"/>
    <line x1="350" y1="50" x2="350" y2="350"/>
  </g>
  
  <!-- Axes: Origin (0,0) at (216.66, 250) -->
  <g stroke="black" stroke-width="2">
    <!-- X axis -->
    <line x1="40" y1="250" x2="360" y2="250"/>
    <polygon points="360,246 366,250 360,254" fill="black"/>
    <!-- Y axis -->
    <line x1="216.66" y1="360" x2="216.66" y2="40"/>
    <polygon points="212.66,40 216.66,34 220.66,40" fill="black"/>
  </g>
  
  <!-- Circle: Center E(-1, 2) => (216.66 - 33.33, 250 - 2*33.33) = (183.33, 183.33) -->
  <!-- Passes through F(-3, 0) => (216.66 - 3*33.33, 250) = (116.66, 250) -->
  <!-- Radius = sqrt((-2)^2 + (2)^2) = sqrt(8) = 2.828 units = 2.828 * 33.33 = 94.28 px -->
  <circle cx="183.33" cy="183.33" r="94.28" fill="none" stroke="#4b5563" stroke-width="2"/>
  
  <!-- Center E -->
  <circle cx="183.33" cy="183.33" r="4" fill="black"/>
  <text x="183.33" y="175" font-family="serif" font-size="16" fill="black" text-anchor="middle">E</text>
  
  <!-- Point F -->
  <circle cx="116.66" cy="250" r="4" fill="black"/>
  <text x="106.66" y="265" font-family="serif" font-size="16" fill="black" text-anchor="middle">F</text>
</svg>"""

# SVG for Q14 Part 1 (Right Triangle)
svg_q14_pt1 = """<svg viewBox="0 0 400 250" width="100%" height="250" xmlns="http://www.w3.org/2000/svg">
  <!-- Right triangle ADC -->
  <!-- A: (50, 20), D: (50, 200), C: (350, 200) -->
  <polygon points="50,20 50,200 350,200" fill="none" stroke="black" stroke-width="2"/>
  
  <!-- Right angle at D -->
  <polyline points="50,185 65,185 65,200" fill="none" stroke="black" stroke-width="1.5"/>
  
  <!-- Point B on DC. Say B is at (180, 200) -->
  <line x1="50" y1="20" x2="180" y2="200" stroke="black" stroke-width="2"/>
  
  <!-- Points -->
  <circle cx="50" cy="20" r="4" fill="black"/>
  <text x="45" y="15" font-family="serif" font-size="16" fill="black" text-anchor="end">A</text>
  
  <circle cx="50" cy="200" r="4" fill="black"/>
  <text x="45" y="215" font-family="serif" font-size="16" fill="black" text-anchor="end">D</text>
  
  <circle cx="350" cy="200" r="4" fill="black"/>
  <text x="355" y="215" font-family="serif" font-size="16" fill="black">C</text>
  
  <circle cx="180" cy="200" r="4" fill="black"/>
  <text x="180" y="215" font-family="serif" font-size="16" fill="black" text-anchor="middle">B</text>
</svg>"""

# SVG for Q19 Part 1 (Triangle with angles)
svg_q19 = """<svg viewBox="0 0 400 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Base line -->
  <line x1="50" y1="250" x2="350" y2="250" stroke="black" stroke-width="2"/>
  
  <!-- Triangle sides -->
  <!-- Left vertex at (80, 250) -->
  <!-- Right vertex at (220, 250) -->
  <!-- Top vertex at (270, 50) -->
  <line x1="80" y1="250" x2="270" y2="50" stroke="black" stroke-width="2"/>
  <line x1="220" y1="250" x2="270" y2="50" stroke="black" stroke-width="2"/>
  
  <!-- Arcs for angles -->
  <!-- Angle 2x-3 -->
  <path d="M 120 250 A 40 40 0 0 0 102 227" fill="none" stroke="black" stroke-width="1.5"/>
  <text x="130" y="240" font-family="serif" font-size="14" font-style="italic" fill="black">2x - 3</text>
  
  <!-- Angle x+22 (Exterior) -->
  <path d="M 245 250 A 25 25 0 0 0 231 205" fill="none" stroke="black" stroke-width="1.5"/>
  <text x="255" y="240" font-family="serif" font-size="14" font-style="italic" fill="black">x + 22</text>
  
  <!-- Angle x+4 (Interior at top) -->
  <!-- The image shows the label outside, with an arrow pointing to the interior arc -->
  <path d="M 256 65 A 30 30 0 0 0 252 80" fill="none" stroke="black" stroke-width="1.5"/>
  <text x="300" y="100" font-family="serif" font-size="14" font-style="italic" fill="black">x + 4</text>
  <!-- Arrow -->
  <path d="M 295 95 Q 275 80 255 75" fill="none" stroke="black" stroke-width="1"/>
  <polygon points="255,75 262,72 260,78" fill="black"/>
</svg>"""

# SVG for Q4-6 Scatter plot (Part 2)
svg_q24 = """<svg viewBox="0 0 600 350" width="100%" height="350" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e5e7eb" stroke-width="1">
    <!-- Horizontal lines -->
    <!-- Y axis: 0 to 12. step=2 => 6 intervals. Say 30px each -->
    <!-- 0 is at y=300 -->
    <!-- 2: 270, 4: 240, 6: 210, 8: 180, 10: 150, 12: 120 -->
    <line x1="50" y1="120" x2="550" y2="120"/>
    <line x1="50" y1="150" x2="550" y2="150"/>
    <line x1="50" y1="180" x2="550" y2="180"/>
    <line x1="50" y1="210" x2="550" y2="210"/>
    <line x1="50" y1="240" x2="550" y2="240"/>
    <line x1="50" y1="270" x2="550" y2="270"/>
    
    <line x1="50" y1="135" x2="550" y2="135"/>
    <line x1="50" y1="165" x2="550" y2="165"/>
    <line x1="50" y1="195" x2="550" y2="195"/>
    <line x1="50" y1="225" x2="550" y2="225"/>
    <line x1="50" y1="255" x2="550" y2="255"/>
    <line x1="50" y1="285" x2="550" y2="285"/>
    
    <!-- Vertical lines -->
    <!-- 12 months. Start x=90, spacing 40 -->
    <line x1="90" y1="100" x2="90" y2="300"/>
    <line x1="130" y1="100" x2="130" y2="300"/>
    <line x1="170" y1="100" x2="170" y2="300"/>
    <line x1="210" y1="100" x2="210" y2="300"/>
    <line x1="250" y1="100" x2="250" y2="300"/>
    <line x1="290" y1="100" x2="290" y2="300"/>
    <line x1="330" y1="100" x2="330" y2="300"/>
    <line x1="370" y1="100" x2="370" y2="300"/>
    <line x1="410" y1="100" x2="410" y2="300"/>
    <line x1="450" y1="100" x2="450" y2="300"/>
    <line x1="490" y1="100" x2="490" y2="300"/>
    <line x1="530" y1="100" x2="530" y2="300"/>
  </g>
  
  <!-- Axes -->
  <line x1="50" y1="300" x2="570" y2="300" stroke="black" stroke-width="2"/>
  <polygon points="570,296 576,300 570,304" fill="black"/>
  <line x1="70" y1="320" x2="70" y2="90" stroke="black" stroke-width="2"/>
  <polygon points="66,90 70,84 74,90" fill="black"/>
  
  <text x="80" y="85" font-family="sans-serif" font-size="12" fill="black">in thousands dollars</text>
  
  <!-- Y labels -->
  <text x="60" y="274" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">2</text>
  <text x="60" y="244" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">4</text>
  <text x="60" y="214" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">6</text>
  <text x="60" y="184" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">8</text>
  <text x="60" y="154" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">10</text>
  <text x="60" y="124" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">12</text>
  
  <!-- X labels -->
  <text x="90" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Jan</text>
  <text x="130" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Feb</text>
  <text x="170" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Mar</text>
  <text x="210" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Apr</text>
  <text x="250" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">May</text>
  <text x="290" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">June</text>
  <text x="330" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">July</text>
  <text x="370" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Aug</text>
  <text x="410" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Sep</text>
  <text x="450" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Oct</text>
  <text x="490" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Nov</text>
  <text x="530" y="315" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">Dec</text>
  
  <!-- Data points and drop lines -->
  <g stroke="black" stroke-width="1.5">
    <line x1="90" y1="300" x2="90" y2="270"/> <text x="90" y="270" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="130" y1="300" x2="130" y2="255"/> <text x="130" y="255" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="170" y1="300" x2="170" y2="270"/> <text x="170" y="270" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="210" y1="300" x2="210" y2="180"/> <text x="210" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="250" y1="300" x2="250" y2="210"/> <text x="250" y="210" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="290" y1="300" x2="290" y2="240"/> <text x="290" y="240" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="330" y1="300" x2="330" y2="270"/> <text x="330" y="270" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="370" y1="300" x2="370" y2="285"/> <text x="370" y="285" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="410" y1="300" x2="410" y2="135"/> <text x="410" y="135" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="450" y1="300" x2="450" y2="165"/> <text x="450" y="165" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="490" y1="300" x2="490" y2="255"/> <text x="490" y="255" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
    <line x1="530" y1="300" x2="530" y2="210"/> <text x="530" y="210" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="central">x</text>
  </g>
</svg>"""

# SVG for Q14 (Part 2) Shaded Region
svg_q34 = """<svg viewBox="0 0 400 400" width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e5e7eb" stroke-width="1">
    <!-- Grid -5 to 5, unit=35px -->
    <!-- Origin (200, 200) -->
    <line x1="25" y1="25" x2="375" y2="25"/>
    <line x1="25" y1="60" x2="375" y2="60"/>
    <line x1="25" y1="95" x2="375" y2="95"/>
    <line x1="25" y1="130" x2="375" y2="130"/>
    <line x1="25" y1="165" x2="375" y2="165"/>
    <line x1="25" y1="200" x2="375" y2="200"/>
    <line x1="25" y1="235" x2="375" y2="235"/>
    <line x1="25" y1="270" x2="375" y2="270"/>
    <line x1="25" y1="305" x2="375" y2="305"/>
    <line x1="25" y1="340" x2="375" y2="340"/>
    <line x1="25" y1="375" x2="375" y2="375"/>
    
    <line x1="25" y1="25" x2="25" y2="375"/>
    <line x1="60" y1="25" x2="60" y2="375"/>
    <line x1="95" y1="25" x2="95" y2="375"/>
    <line x1="130" y1="25" x2="130" y2="375"/>
    <line x1="165" y1="25" x2="165" y2="375"/>
    <line x1="200" y1="25" x2="200" y2="375"/>
    <line x1="235" y1="25" x2="235" y2="375"/>
    <line x1="270" y1="25" x2="270" y2="375"/>
    <line x1="305" y1="25" x2="305" y2="375"/>
    <line x1="340" y1="25" x2="340" y2="375"/>
    <line x1="375" y1="25" x2="375" y2="375"/>
  </g>
  
  <!-- Shaded Polygons -->
  <g fill="#e5e7eb" stroke="black" stroke-width="2">
    <!-- Left Polygon: (-3, -3) to (-1, 3) to (0, 3) to (0, -3) -->
    <polygon points="95,305 165,95 200,95 200,305"/>
    <!-- Right Polygon: (0, 0) to (0, 3) to (4, 4) to (4, 1) -->
    <polygon points="200,200 200,95 340,60 340,165"/>
  </g>
  
  <!-- Axes -->
  <g stroke="black" stroke-width="2">
    <!-- X axis -->
    <line x1="20" y1="200" x2="380" y2="200"/>
    <polygon points="380,196 386,200 380,204" fill="black"/>
    <!-- Y axis -->
    <line x1="200" y1="380" x2="200" y2="20"/>
    <polygon points="196,20 200,14 204,20" fill="black"/>
  </g>
  
  <!-- Points -->
  <g fill="black">
    <circle cx="95" cy="305" r="4"/>
    <circle cx="165" cy="95" r="4"/>
    <circle cx="200" cy="95" r="4"/>
    <circle cx="200" cy="305" r="4"/>
    <circle cx="200" cy="200" r="4"/>
    <circle cx="340" cy="60" r="4"/>
    <circle cx="340" cy="165" r="4"/>
  </g>
</svg>"""

# HTML Table for Q17-19
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

# HTML Table for Q28-30
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

# SVG for Q34-35 (Scatter laptops)
svg_q54 = """<svg viewBox="0 0 600 350" width="100%" height="350" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e5e7eb" stroke-width="1">
    <!-- Y axis: 14 to 24 (step 2), but grid lines every 1 unit? Wait, image shows grid lines every 1 unit. -->
    <!-- y values: 14 to 24. 10 intervals. 20px each -->
    <!-- 14: 280, 15: 260, 16: 240, 17: 220, 18: 200, 19: 180, 20: 160, 21: 140, 22: 120, 23: 100, 24: 80 -->
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
    
    <!-- X axis: 2009 to 2016 -->
    <!-- x values: 80, 140, 200, 260, 320, 380, 440, 500, 560 -->
    <!-- Wait, we only need to 2016 (500) -->
    <line x1="80" y1="80" x2="80" y2="280"/>
    <line x1="140" y1="80" x2="140" y2="280"/>
    <line x1="200" y1="80" x2="200" y2="280"/>
    <line x1="260" y1="80" x2="260" y2="280"/>
    <line x1="320" y1="80" x2="320" y2="280"/>
    <line x1="380" y1="80" x2="380" y2="280"/>
    <line x1="440" y1="80" x2="440" y2="280"/>
    <line x1="500" y1="80" x2="500" y2="280"/>
  </g>
  
  <!-- Outer Border -->
  <rect x="80" y="80" width="470" height="200" fill="none" stroke="gray" stroke-width="2"/>
  
  <!-- Y labels -->
  <text x="70" y="285" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">14</text>
  <text x="70" y="245" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">16</text>
  <text x="70" y="205" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">18</text>
  <text x="70" y="165" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">20</text>
  <text x="70" y="125" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">22</text>
  <text x="70" y="85" font-family="sans-serif" font-size="12" fill="black" text-anchor="end">24</text>
  
  <!-- X labels -->
  <text x="80" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2009</text>
  <text x="140" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2010</text>
  <text x="200" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2011</text>
  <text x="260" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2012</text>
  <text x="320" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2013</text>
  <text x="380" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2014</text>
  <text x="440" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2015</text>
  <text x="500" y="300" font-family="sans-serif" font-size="12" fill="black" text-anchor="middle">2016</text>
  
  <!-- Line of best fit (dashed) -->
  <!-- 2010 -> 17.4 => 140, 280 - (17.4-14)*20 = 280 - 68 = 212 -->
  <!-- 2015 -> 19.0 => 440, 280 - (19.0-14)*20 = 280 - 100 = 180 -->
  <line x1="140" y1="212" x2="440" y2="180" stroke="gray" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="120" y="222" font-family="sans-serif" font-size="12" font-weight="bold" fill="gray">17.4</text>
  <text x="430" y="172" font-family="sans-serif" font-size="12" font-weight="bold" fill="gray">19</text>
  
  <!-- Data Points (gray circles) -->
  <g fill="gray">
    <!-- 2010: 15, 18, 19 -->
    <circle cx="140" cy="260" r="4"/>
    <circle cx="140" cy="200" r="4"/>
    <circle cx="140" cy="180" r="4"/>
    
    <!-- 2011: 16, 17, 20 -->
    <circle cx="200" cy="240" r="4"/>
    <circle cx="200" cy="220" r="4"/>
    <circle cx="200" cy="160" r="4"/>
    
    <!-- 2012: 15, 16, 17, 19 -->
    <circle cx="260" cy="260" r="4"/>
    <circle cx="260" cy="240" r="4"/>
    <circle cx="260" cy="220" r="4"/>
    <circle cx="260" cy="180" r="4"/>
    
    <!-- 2013: 19, 20, 22 -->
    <circle cx="320" cy="180" r="4"/>
    <circle cx="320" cy="160" r="4"/>
    <circle cx="320" cy="120" r="4"/>
    
    <!-- 2014: 15, 16, 18, 21 -->
    <circle cx="380" cy="260" r="4"/>
    <circle cx="380" cy="240" r="4"/>
    <circle cx="380" cy="200" r="4"/>
    <circle cx="380" cy="140" r="4"/>
    
    <!-- 2015: 18, 19, 22 -->
    <circle cx="440" cy="200" r="4"/>
    <circle cx="440" cy="180" r="4"/>
    <circle cx="440" cy="120" r="4"/>
  </g>
</svg>"""

def run():
    p1 = "src/data/questions_est1_2021_april_part1.ts"
    p2 = "src/data/questions_est1_2021_april_part2.ts"
    
    c1 = get_file_content(p1)
    c2 = get_file_content(p2)
    
    # Q6 & 7
    c1 = update_question_svg(c1, "est1_2021_april_6", svg_q6)
    c1 = update_question_svg(c1, "est1_2021_april_7", svg_q6)
    
    # Q8
    c1 = update_question_svg(c1, "est1_2021_april_8", svg_q8)
    
    # Q14 Part 1
    c1 = update_question_svg(c1, "est1_2021_april_14", svg_q14_pt1)
    
    # Q19 Part 1
    c1 = update_question_svg(c1, "est1_2021_april_19", svg_q19)
    
    # Q24-26 (Part 2: Q4-6)
    c2 = update_question_svg(c2, "est1_2021_april_24", svg_q24)
    c2 = update_question_svg(c2, "est1_2021_april_25", svg_q24)
    c2 = update_question_svg(c2, "est1_2021_april_26", svg_q24)
    
    # Q34 (Part 2: Q14)
    c2 = update_question_svg(c2, "est1_2021_april_34", svg_q34)
    
    # Q37-39 (Part 2: Q17-19)
    c2 = update_question_svg(c2, "est1_2021_april_37", table_q37)
    c2 = update_question_svg(c2, "est1_2021_april_38", table_q37)
    c2 = update_question_svg(c2, "est1_2021_april_39", table_q37)
    
    # Q48-50 (Part 2: Q28-30)
    c2 = update_question_svg(c2, "est1_2021_april_48", table_q48)
    c2 = update_question_svg(c2, "est1_2021_april_49", table_q48)
    c2 = update_question_svg(c2, "est1_2021_april_50", table_q48)
    
    # Q54-55 (Part 2: Q34-35)
    c2 = update_question_svg(c2, "est1_2021_april_54", svg_q54)
    c2 = update_question_svg(c2, "est1_2021_april_55", svg_q54)
    
    save_file_content(p1, c1)
    save_file_content(p2, c2)
    print("Files updated successfully!")

if __name__ == "__main__":
    run()
