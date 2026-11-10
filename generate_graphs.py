import matplotlib.pyplot as plt
import numpy as np
import io
import base64
import json

def get_base64_image(fig):
    buf = io.BytesIO()
    fig.savefig(buf, format='png', bbox_inches='tight', dpi=150)
    buf.seek(0)
    return "data:image/png;base64," + base64.b64encode(buf.read()).decode('utf-8')

images = {}

# 1. est1_2021_april_6 (Line with slope -7/8)
fig, ax = plt.subplots(figsize=(5, 5))
ax.set_xlim(-3, 5)
ax.set_ylim(-3, 5)
ax.grid(True, which='both', linestyle='-', linewidth=0.5, color='gray')
ax.axhline(y=0, color='k', linewidth=1.5)
ax.axvline(x=0, color='k', linewidth=1.5)
ax.set_xticks(np.arange(-3, 6, 1))
ax.set_yticks(np.arange(-3, 6, 1))
ax.set_xticklabels([])
ax.set_yticklabels([])
x = np.array([-2, 5])
y = -7/8 * x + 11/8
ax.plot(x, y, color='k', linewidth=1.5)
ax.plot(1, 0.5, 'kx')
ax.text(1.2, 0.6, 'A(1, 0.5)', fontsize=12)
ax.annotate('', xy=(5.2, 0), xytext=(5, 0), arrowprops=dict(arrowstyle="->", color='k', lw=1.5))
ax.annotate('', xy=(0, 5.2), xytext=(0, 5), arrowprops=dict(arrowstyle="->", color='k', lw=1.5))
images['est1_2021_april_6'] = get_base64_image(fig)
plt.close(fig)

# 2. est1_2021_april_8 (Circle)
fig, ax = plt.subplots(figsize=(5, 5))
ax.set_xlim(-6, 4)
ax.set_ylim(-3, 7)
ax.grid(True, which='both', linestyle='-', linewidth=0.5, color='gray')
ax.axhline(y=0, color='k', linewidth=1.5)
ax.axvline(x=0, color='k', linewidth=1.5)
ax.set_xticks(np.arange(-6, 5, 1))
ax.set_yticks(np.arange(-3, 8, 1))
ax.set_xticklabels([])
ax.set_yticklabels([])
circle = plt.Circle((-1, 2), np.sqrt(8), color='k', fill=False, linewidth=1.5)
ax.add_artist(circle)
ax.plot(-1, 2, 'ko')
ax.text(-0.8, 2.2, 'E', fontsize=12)
ax.plot(-3, 0, 'ko')
ax.text(-3.3, -0.4, 'F', fontsize=12)
ax.annotate('', xy=(4.2, 0), xytext=(4, 0), arrowprops=dict(arrowstyle="->", color='k', lw=1.5))
ax.annotate('', xy=(0, 7.2), xytext=(0, 7), arrowprops=dict(arrowstyle="->", color='k', lw=1.5))
images['est1_2021_april_8'] = get_base64_image(fig)
plt.close(fig)

# 3. est1_2021_april_14 (Triangle)
fig, ax = plt.subplots(figsize=(6, 3))
ax.plot([0, 0, 13, 0], [4.899, 0, 0, 4.899], 'k-', linewidth=1.5)
ax.plot([0, 5], [4.899, 0], 'k-', linewidth=1.5)
ax.plot(0, 4.899, 'ko')
ax.plot(0, 0, 'ko')
ax.plot(5, 0, 'ko')
ax.plot(13, 0, 'ko')
ax.text(-0.3, 5.1, 'A', fontsize=12)
ax.text(-0.3, -0.5, 'D', fontsize=12)
ax.text(4.9, -0.5, 'B', fontsize=12)
ax.text(13.1, -0.5, 'C', fontsize=12)
ax.plot([0, 0.5, 0.5, 0], [0.5, 0.5, 0, 0], 'k-', linewidth=1)
ax.axis('off')
images['est1_2021_april_14'] = get_base64_image(fig)
plt.close(fig)

# 4. est1_2021_april_19 (Triangle with angles)
fig, ax = plt.subplots(figsize=(5, 4))
ax.plot([0, 8], [0, 0], 'k-', linewidth=1.5)
ax.plot([1, 6], [0, 5], 'k-', linewidth=1.5)
ax.plot([6, 4], [5, 0], 'k-', linewidth=1.5)
ax.text(1.5, 0.2, '$2x-3$', fontsize=12)
ax.text(4.2, 0.2, '$x+22$', fontsize=12)
ax.text(6.5, 3.8, '$x+4$', fontsize=12)
from matplotlib.patches import Arc
ax.add_patch(Arc((6, 5), 2, 2, angle=0, theta1=240, theta2=330, color='k', linewidth=1))
ax.annotate('', xy=(6.9, 4.1), xytext=(6.7, 4.0), arrowprops=dict(arrowstyle="-|>", color='k'))
ax.axis('off')
images['est1_2021_april_19'] = get_base64_image(fig)
plt.close(fig)

# 5. est1_2021_april_24 (Scatter plot of salary)
fig, ax = plt.subplots(figsize=(7, 4))
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
values = [2, 3, 2, 8, 6, 4, 2, 1, 11, 9, 3, 6]
ax.set_ylim(0, 13)
ax.set_xlim(-1, 12)
ax.grid(True, which='both', linestyle='-', linewidth=0.5, color='gray')
ax.axhline(y=0, color='k', linewidth=1.5)
ax.axvline(x=-0.5, color='k', linewidth=1.5)
ax.set_xticks(np.arange(12))
ax.set_xticklabels(months)
ax.set_yticks(np.arange(0, 14, 2))
ax.text(-0.3, 13, 'in thousands dollars', fontsize=10)
for i in range(12):
    ax.plot([i, i], [0, values[i]], 'k-', linewidth=1)
    ax.plot(i, values[i], 'kx')
ax.annotate('', xy=(12, 0), xytext=(11.5, 0), arrowprops=dict(arrowstyle="->", color='k', lw=1.5))
ax.annotate('', xy=(-0.5, 13.5), xytext=(-0.5, 13), arrowprops=dict(arrowstyle="->", color='k', lw=1.5))
images['est1_2021_april_24'] = get_base64_image(fig)
plt.close(fig)

# 6. est1_2021_april_34 (Shaded Area)
fig, ax = plt.subplots(figsize=(6, 6))
ax.set_xlim(-5, 6)
ax.set_ylim(-5, 6)
ax.grid(True, which='both', linestyle='-', linewidth=0.5, color='gray')
ax.axhline(y=0, color='k', linewidth=1.5)
ax.axvline(x=0, color='k', linewidth=1.5)
ax.set_xticks(np.arange(-5, 7, 1))
ax.set_yticks(np.arange(-5, 7, 1))
ax.set_xticklabels([])
ax.set_yticklabels([])
poly1 = plt.Polygon([(-3, -3), (1, -3), (1, 3), (-1, 3)], color='lightgray', ec='k', linewidth=1.5)
poly2 = plt.Polygon([(1, 0), (4, 1), (4, 4), (1, 3)], color='lightgray', ec='k', linewidth=1.5)
ax.add_patch(poly1)
ax.add_patch(poly2)
points_x = [-3, 1, 1, -1, 1, 4, 4]
points_y = [-3, -3, 3, 3, 0, 1, 4]
ax.plot(points_x, points_y, 'ko')
ax.annotate('', xy=(6.2, 0), xytext=(6, 0), arrowprops=dict(arrowstyle="->", color='k', lw=1.5))
ax.annotate('', xy=(0, 6.2), xytext=(0, 6), arrowprops=dict(arrowstyle="->", color='k', lw=1.5))
images['est1_2021_april_34'] = get_base64_image(fig)
plt.close(fig)

# 7. est1_2021_april_54 (Scatterplot)
fig, ax = plt.subplots(figsize=(7, 4))
ax.set_xlim(2009, 2016)
ax.set_ylim(14, 24)
ax.grid(True, which='both', linestyle='-', linewidth=0.5, color='gray')
ax.set_xticks(np.arange(2009, 2017, 1))
ax.set_yticks(np.arange(14, 26, 2))
data = {
    2010: [15, 18, 19],
    2011: [16, 17, 20],
    2012: [15, 16, 17, 19],
    2013: [19, 20, 22],
    2014: [15, 16, 18, 21],
    2015: [18, 19, 22]
}
for year, vals in data.items():
    for v in vals:
        ax.plot(year, v, 'o', color='gray')
ax.plot([2010, 2015], [17.1, 19.1], '--', color='gray', linewidth=2)
ax.text(2009.8, 16.6, '17.4', fontsize=12, color='gray')
ax.text(2014.9, 19.3, '19', fontsize=12, color='gray')
images['est1_2021_april_54'] = get_base64_image(fig)
plt.close(fig)

print(json.dumps(images))
