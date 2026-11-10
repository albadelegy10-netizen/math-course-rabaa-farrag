import re

with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix Q14, 15, 16
text = text.replace('    html: `<table', '    svg: `<table')

# Fix Q9 & Q10 SVG
new_svg = """<svg viewBox="0 0 350 250" class="mx-auto h-56 w-auto">
  <!-- Grid lines -->
  <line x1="50" y1="200" x2="330" y2="200" stroke="black" stroke-width="1.5" />
  <line x1="50" y1="20" x2="50" y2="200" stroke="black" stroke-width="1.5" />
  
  <!-- Y axis ticks (0 to 10) -->
  <text x="35" y="204" font-size="10" text-anchor="end">0</text>
  <line x1="45" y1="164" x2="50" y2="164" stroke="black" />
  <text x="35" y="168" font-size="10" text-anchor="end">2</text>
  <line x1="45" y1="128" x2="50" y2="128" stroke="black" />
  <text x="35" y="132" font-size="10" text-anchor="end">4</text>
  <line x1="45" y1="92" x2="50" y2="92" stroke="black" />
  <text x="35" y="96" font-size="10" text-anchor="end">6</text>
  <line x1="45" y1="56" x2="50" y2="56" stroke="black" />
  <text x="35" y="60" font-size="10" text-anchor="end">8</text>
  <line x1="45" y1="20" x2="50" y2="20" stroke="black" />
  <text x="35" y="24" font-size="10" text-anchor="end">10</text>
  <text x="15" y="110" font-size="12" transform="rotate(-90 15,110)">Height (cm)</text>

  <!-- X axis ticks (0 to 25) -->
  <line x1="106" y1="200" x2="106" y2="205" stroke="black" />
  <text x="106" y="220" font-size="10" text-anchor="middle">5</text>
  <line x1="162" y1="200" x2="162" y2="205" stroke="black" />
  <text x="162" y="220" font-size="10" text-anchor="middle">10</text>
  <line x1="218" y1="200" x2="218" y2="205" stroke="black" />
  <text x="218" y="220" font-size="10" text-anchor="middle">15</text>
  <line x1="274" y1="200" x2="274" y2="205" stroke="black" />
  <text x="274" y="220" font-size="10" text-anchor="middle">20</text>
  <line x1="330" y1="200" x2="330" y2="205" stroke="black" />
  <text x="330" y="220" font-size="10" text-anchor="middle">25</text>
  <text x="190" y="240" font-size="12" text-anchor="middle">Radius (cm)</text>

  <!-- Points and Line of Best Fit -->
  <!-- Line equation roughly y = 0.1915x + 5.1561 -->
  <!-- At x=0, y=5.15. Map to SVG: y = 200 - (5.15 / 10) * 180 = 200 - 92.7 = 107.3 -->
  <!-- At x=25, y=9.94. Map to SVG: y = 200 - (9.94 / 10) * 180 = 200 - 178.9 = 21.1 -->
  <line x1="50" y1="107.3" x2="330" y2="21.1" stroke="red" stroke-width="2" />
  
  <!-- Some scatter points around the line -->
  <circle cx="83.6" cy="100.5" r="3" fill="blue" />  <!-- x=3, y=5.53 -> px=50+(3/25)*280=83.6, py=200-(5.53/10)*180=100.5 -->
  <circle cx="128.4" cy="88" r="3" fill="blue" />   <!-- x=7, y=6.2 -> px=128.4, py=88.4 -->
  <circle cx="173.2" cy="74" r="3" fill="blue" />   <!-- x=11, y=7 -> px=173.2, py=74 -->
  <circle cx="218" cy="45" r="3" fill="blue" />     <!-- x=15, y=8.6 -> px=218, py=45.2 -->
  <circle cx="262.8" cy="38" r="3" fill="blue" />   <!-- x=19, y=9 -> px=262.8, py=38 -->
  <circle cx="296.4" cy="28" r="3" fill="blue" />   <!-- x=22, y=9.5 -> px=296.4, py=29 -->
</svg>"""

# Using regex to replace the SVG for Q9 and Q10
text = re.sub(r'svg: `<svg viewBox="0 0 300 200".*?</svg>`', f'svg: `{new_svg}`', text, flags=re.DOTALL)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated exam file!")
