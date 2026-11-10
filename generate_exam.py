import json

# Let's define all SVGs and question objects
svg_arrow_def = '''<defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b" />
    </marker>
  </defs>'''

# Q19 SVG matching Screenshot_20260906_160533.jpg exactly
def make_q19_svg():
    # Grid 12 squares wide, 20 squares high
    # square_size = 16
    # grid_x0 = 40, grid_y0 = 30
    # width = 40 + 192 + 35 = 267 -> viewBox="0 0 280 390"
    # Origin (0,0) is at x = 40 + 6*16 = 136, y = 30 + 14*16 = 254
    lines = []
    lines.append('<svg viewBox="0 0 280 390" class="mx-auto h-80 w-auto bg-white rounded border border-gray-200 shadow-sm my-2">')
    lines.append('  <defs>')
    lines.append('    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">')
    lines.append('      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b" />')
    lines.append('    </marker>')
    lines.append('  </defs>')
    
    # Grid lines
    # Vertical grid lines: 13 lines (from col 0 to 12)
    for c in range(13):
        x = 40 + c * 16
        lines.append(f'  <line x1="{x}" y1="30" x2="{x}" y2="350" stroke="#e2e8f0" stroke-width="1" />')
    # Horizontal grid lines: 21 lines (from row 0 to 20)
    for r in range(21):
        y = 30 + r * 16
        lines.append(f'  <line x1="40" y1="{y}" x2="232" y2="{y}" stroke="#e2e8f0" stroke-width="1" />')
    
    # Axes
    # x-axis at y = 254 (row 14)
    lines.append('  <line x1="25" y1="254" x2="255" y2="254" stroke="#1e293b" stroke-width="1.75" marker-end="url(#arrow)" />')
    lines.append('  <text x="264" y="258" font-size="14" font-style="italic" font-family="serif" fill="#1e293b">x</text>')
    
    # y-axis at x = 136 (col 6)
    lines.append('  <line x1="136" y1="365" x2="136" y2="15" stroke="#1e293b" stroke-width="1.75" marker-end="url(#arrow)" />')
    lines.append('  <text x="133" y="10" font-size="14" font-style="italic" font-family="serif" fill="#1e293b">y</text>')
    
    # Ticks and tick numbers
    # x = -1 is at col 2 -> x = 72
    lines.append('  <line x1="72" y1="251" x2="72" y2="257" stroke="#1e293b" stroke-width="1.5" />')
    lines.append('  <text x="72" y="271" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1e293b">-1</text>')
    
    # x = 1 is at col 10 -> x = 200
    lines.append('  <line x1="200" y1="251" x2="200" y2="257" stroke="#1e293b" stroke-width="1.5" />')
    lines.append('  <text x="200" y="271" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1e293b">1</text>')
    
    # Origin 0
    lines.append('  <text x="126" y="269" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1e293b">0</text>')
    
    # y = -1 is at row 18 -> y = 318
    lines.append('  <line x1="133" y1="318" x2="139" y2="318" stroke="#1e293b" stroke-width="1.5" />')
    lines.append('  <text x="126" y="322" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1e293b">-1</text>')
    
    # y = 1 is at row 10 -> y = 190
    lines.append('  <line x1="133" y1="190" x2="139" y2="190" stroke="#1e293b" stroke-width="1.5" />')
    lines.append('  <text x="126" y="194" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1e293b">1</text>')
    
    # y = 2 is at row 6 -> y = 126
    lines.append('  <line x1="133" y1="126" x2="139" y2="126" stroke="#1e293b" stroke-width="1.5" />')
    lines.append('  <text x="126" y="130" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1e293b">2</text>')
    
    # y = 3 is at row 2 -> y = 62
    lines.append('  <line x1="133" y1="62" x2="139" y2="62" stroke="#1e293b" stroke-width="1.5" />')
    lines.append('  <text x="126" y="66" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1e293b">3</text>')
    
    # Function Line f: passes through (-1, -1) [x=72, y=318], (0, 1.5) [x=136, y=158], (0.8, 3.5) [x=187.2, y=30], (-1.2, -1.5) [x=59.2, y=350]
    lines.append('  <line x1="59" y1="350" x2="188" y2="28" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" />')
    # Label f
    lines.append('  <text x="175" y="85" font-size="16" font-style="italic" font-family="serif" font-weight="bold" fill="#0f172a">f</text>')
    lines.append('</svg>')
    return '\n'.join(lines)

print("Q19 SVG created successfully!")
