# Printable exam PDF tools

- `build_est.cjs` — module `build(jobs, theme)`; renders branded Rabaa Farrag exam PDFs
  (cover, question cards, answer key, step-by-step solutions) with Playwright + KaTeX.
  Each job: `{ slug, qs: Question[], C: {kicker, reach, label, title, subtitle, topics, minutes,
  expert, expertCaps, short, banner}, out: '/path/file.pdf' }`. See `preview_example.cjs`.
- `theme_est1.json` — EST1 forest-green theme chosen by the owner (#14532d).
- `build_act2.cjs` — original ACT2 (navy) builder used for public/pdfs/act2.
- `figs_crop_clean.py` — crops figures from 150-dpi page renders and strips grey watermarks.
- `gen_ts_example.py` — turns transcribed questions into `src/data/...` TS files (base64 figures,
  tables in the required Tailwind HTML format).

Setup: `npm i @fontsource/poppins@5.0.14`, copy KaTeX dist to `www/katex` and the Poppins
woff2 files (400–900) into `www/`; Playwright/Chromium must be available.
