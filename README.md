# PurpleResume — ATS Resume Builder

A split-panel resume builder for Indian SDE resumes. Clean monochrome output, ATS-safe.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Features

- **Live preview** — edits reflect instantly on the A4 canvas
- **1-column** (Jake Ryan-style, pure ATS) and **2-column** (Deedy Das-style) templates
- **Local storage** — all data and settings auto-save in your browser
- **Font picker** — Calibri, Arial, Georgia, Times New Roman, Garamond, Helvetica, Palatino
- **Font size control** — 8pt–13pt with live preview
- **Margin control** — top/bottom/left/right individually, reflected live in preview
- **Bold text** — wrap with `**double asterisks**` in any text field
- **Clickable links** — use `[label](https://url)` or paste a bare URL; auto-linked on export
- **Export PDF** — opens a print-ready A4 window with correct margins

## Formatting Syntax (works in bullets, summary, certs, achievements)

| Syntax                   | Result          |
| ------------------------ | --------------- |
| `**bold text**`          | **bold text**   |
| `[label](https://url)`   | clickable link  |
| `https://github.com/...` | auto-linked URL |

## File Structure

```
src/
├── App.jsx
├── data/defaults.js              # Seed data, font options, empty templates
├── hooks/
│   ├── useResumeData.js          # All state + localStorage persistence
│   └── usePrint.js               # PDF export
├── components/
│   ├── ui/
│   │   ├── primitives.jsx        # Input, Textarea, AddButton, CardShell, Tip
│   │   └── BulletEditor.jsx      # Bullet list editor
│   ├── form/
│   │   ├── BasicsForm.jsx
│   │   ├── ExperienceForm.jsx
│   │   ├── EducationForm.jsx
│   │   ├── ProjectForm.jsx
│   │   ├── SkillsForm.jsx
│   │   ├── ListForm.jsx
│   │   └── SettingsForm.jsx      # Font, size, margins, formatting guide
│   └── resume/
│       ├── renderText.jsx        # Inline markdown parser (**bold**, [link](url))
│       ├── resumeStyles.jsx      # buildR() — dynamic style constants + shared components
│       ├── Resume1Col.jsx        # Single column template
│       └── Resume2Col.jsx        # Two column template
```

## ATS Notes

- No tables, no text boxes, no graphics
- Pure inline styles — no external CSS in output
- Standard section names that ATS parsers recognise
- `<strong>` and `<a>` are both ATS-safe
- Strictly monochrome — no colour
