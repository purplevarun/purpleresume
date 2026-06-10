# PurpleResume — ATS Resume Builder

A split-panel resume builder for Indian SDE resumes.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Features

**Templates** (dropdown in topbar)

- **Classic** — Jake Ryan-style single column, fully ATS-safe
- **Modern** — Deedy Das-style two-column, ATS-safe
- **Compact** — Dense single column for high-content resumes, ATS-safe
- **Elegant** — Centered serif header with flanking rules, ATS-safe
- **Styled** — Enhancv-inspired sidebar with accent color, photo slot, skill chips (design-focused, NOT ATS-safe)

**Sections**

- All sections optional — toggle on/off in ⚙ Settings
- Reorder sections with ▲▼ arrows in ⚙ Settings — order is reflected live in preview

**Appearance**

- Font picker: Calibri, Arial, Georgia, Times New Roman, Garamond, Helvetica, Palatino
- Base font size: 8–13pt
- Per-side margin control (top/bottom/left/right), reflected live

**Data**

- All data and settings auto-save to localStorage
- Photo upload (used by Styled template)
- Reset to defaults button in Settings

**Formatting** (works in bullets, summary, certs, achievements)

- `**bold text**` → bold
- `[label](https://url)` → clickable link
- bare `https://...` URLs → auto-linked

## File Structure

```
src/
├── App.jsx
├── data/defaults.js              # Templates, fonts, section defs, seed data
├── hooks/
│   ├── useResumeData.js          # State + localStorage + section order/toggle
│   └── usePrint.js
├── components/
│   ├── ui/primitives.jsx
│   ├── ui/BulletEditor.jsx
│   ├── form/
│   │   ├── BasicsForm.jsx        # Includes photo upload
│   │   ├── ExperienceForm.jsx
│   │   ├── EducationForm.jsx
│   │   ├── ProjectForm.jsx
│   │   ├── SkillsForm.jsx
│   │   ├── ListForm.jsx
│   │   └── SettingsForm.jsx      # Section toggle/reorder, font, margins
│   └── resume/
│       ├── renderText.jsx        # **bold** and [link](url) parser
│       ├── resumeStyles.jsx      # buildR(), BulletList, HRule, ContactLink
│       ├── SectionRenderer.jsx   # Shared ExpEntry, EduEntry, ProjEntry, etc.
│       ├── templateUtils.jsx     # getVisibleSections()
│       ├── ResumeRenderer.jsx    # Template switcher
│       ├── TemplateClassic.jsx
│       ├── TemplateModern.jsx
│       ├── TemplateCompact.jsx
│       ├── TemplateElegant.jsx
│       └── TemplateStyled.jsx
```
