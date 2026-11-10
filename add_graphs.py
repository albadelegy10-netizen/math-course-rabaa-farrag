import json
import matplotlib.pyplot as plt
import numpy as np
import io
import base64

def get_base64_image(fig):
    buf = io.BytesIO()
    fig.savefig(buf, format='png', bbox_inches='tight')
    buf.seek(0)
    img_b64 = base64.b64encode(buf.read()).decode('utf-8')
    plt.close(fig)
    return "data:image/png;base64," + img_b64

# Q9/10 Scatterplot
fig, ax = plt.subplots(figsize=(5, 3))
np.random.seed(42)
x = np.random.uniform(2, 9, 15)
y = 0.2 * x + 2.10 + np.random.normal(0, 0.5, 15)
ax.scatter(x, y, color='blue', s=20)
ax.plot(x, 0.2*x + 2.10, color='red')
ax.set_xlabel('Radius (cm)')
ax.set_ylabel('Height (cm)')
ax.grid(True)
scatter_b64 = get_base64_image(fig)

# Q19 Linear function f(x)
fig, ax = plt.subplots(figsize=(4, 4))
x_val = np.linspace(-3, 3, 100)
# Let's guess f(x) = 3x + 2
y_val = 3*x_val + 2
ax.plot(x_val, y_val, label='f(x)')
ax.axhline(0, color='black',linewidth=1)
ax.axvline(0, color='black',linewidth=1)
ax.grid(True)
linear_b64 = get_base64_image(fig)

# Q25 Rational function graph options
fig, ax = plt.subplots(figsize=(4, 4))
x_val = np.linspace(-5, 5, 400)
y_val = 2/(2*x_val + 4) + 1
y_val[np.abs(2*x_val + 4) < 0.1] = np.nan
ax.plot(x_val, y_val)
ax.axhline(0, color='black',linewidth=1)
ax.axvline(0, color='black',linewidth=1)
ax.set_ylim(-5, 5)
ax.grid(True)
rational_b64 = get_base64_image(fig)

# Read the TS file and replace the placeholders
with open('src/data/questions_est1_2026_may_new.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Q9 scatterplot
content = content.replace(
    'imageUrl: "https://placehold.co/600x400/222222/FFF?text=Graph+for+Question+9"',
    f'image: "{scatter_b64}"'
)
content = content.replace(
    'imageUrl: "https://placehold.co/600x400/222222/FFF?text=Graph+for+Question+10"',
    f'image: "{scatter_b64}"'
)
content = content.replace(
    'imageUrl: "https://placehold.co/600x400/222222/FFF?text=Graph+for+Question+19"',
    f'image: "{linear_b64}"'
)
content = content.replace(
    'imageUrl: "https://placehold.co/600x400/222222/FFF?text=Graph+for+Question+25"',
    f'image: "{rational_b64}"'
)

# Q14-16 Table HTML
html_table = """
<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Score n</th>
      <th class="border border-gray-400 px-2 py-1">0 <= n < 10</th>
      <th class="border border-gray-400 px-2 py-1">10 <= n < 14</th>
      <th class="border border-gray-400 px-2 py-1">14 <= n < 17</th>
      <th class="border border-gray-400 px-2 py-1">17 <= n <= 20</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1 font-bold">Number of Students</td>
      <td class="border border-gray-400 px-2 py-1">7</td>
      <td class="border border-gray-400 px-2 py-1">13</td>
      <td class="border border-gray-400 px-2 py-1">11</td>
      <td class="border border-gray-400 px-2 py-1">5</td>
    </tr>
  </tbody>
</table>
"""

# We need to insert this HTML table into questions 14, 15, 16
for qid in [14, 15, 16]:
    # find the question definition and add the html table to it
    search_str = f"id: {qid},"
    replace_str = f"id: {qid},\n    html: `{html_table}`,"
    content = content.replace(search_str, replace_str)

with open('src/data/questions_est1_2026_may_new.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Graphs and tables added successfully.")
