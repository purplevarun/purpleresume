// ─── Section definitions ──────────────────────────────────────────────────────
// id must match the key used in resume data/rendering
export const ALL_SECTIONS = [
	{ id: "summary", label: "Summary" },
	{ id: "experience", label: "Experience" },
	{ id: "education", label: "Education" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "certifications", label: "Certifications" },
	{ id: "achievements", label: "Achievements" },
];

export const DEFAULT_SECTION_ORDER = ALL_SECTIONS.map((s) => s.id);
export const DEFAULT_SECTION_VISIBLE = Object.fromEntries(
	ALL_SECTIONS.map((s) => [s.id, true]),
);

// ─── Templates ───────────────────────────────────────────────────────────────
export const TEMPLATES = [
	{
		id: "classic",
		label: "Classic",
		desc: "Single column · ATS-safe",
		ats: true,
	},
	{
		id: "modern",
		label: "Modern",
		desc: "Two column · ATS-safe",
		ats: true,
	},
	{
		id: "compact",
		label: "Compact",
		desc: "Dense single column · ATS-safe",
		ats: true,
	},
	{
		id: "elegant",
		label: "Elegant",
		desc: "Serif · centered header · ATS-safe",
		ats: true,
	},
	{
		id: "styled",
		label: "Styled",
		desc: "Sidebar accent · design-focused",
		ats: false,
	},
];

// ─── Fonts ───────────────────────────────────────────────────────────────────
export const FONT_OPTIONS = [
	{ label: "Calibri", value: "Calibri, Arial, sans-serif" },
	{ label: "Arial", value: "Arial, sans-serif" },
	{ label: "Georgia", value: "Georgia, serif" },
	{ label: "Times New Roman", value: "'Times New Roman', Times, serif" },
	{ label: "Garamond", value: "Garamond, serif" },
	{ label: "Helvetica", value: "Helvetica, Arial, sans-serif" },
	{ label: "Palatino", value: "Palatino, 'Book Antiqua', serif" },
];

// ─── Default resume data ──────────────────────────────────────────────────────
export const DEFAULT_DATA = {
	name: "Lorem Ipsum",
	title: "Software Engineer",
	email: "lorem@example.com",
	phone: "+00 00000 00000",
	location: "Lorem City, Country",
	linkedin: "linkedin.com/in/loremipsum",
	github: "github.com/loremipsum",
	portfolio: "portfolio.example.com",
	photo: "",
	summary:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",

	experience: [
		{
			id: 1,
			company: "Lorem Technologies",
			role: "Senior Software Engineer",
			location: "Lorem City, Country",
			start: "01/2024",
			end: "Present",
			bullets: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
				"Duis aute irure dolor in reprehenderit in voluptate velit esse.",
				"Excepteur sint occaecat cupidatat non proident.",
			],
		},
		{
			id: 2,
			company: "Ipsum Solutions",
			role: "Software Engineer",
			location: "Dolor City, Country",
			start: "01/2022",
			end: "12/2023",
			bullets: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
				"Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
				"Temporibus autem quibusdam et aut officiis debitis aut rerum.",
			],
		},
	],

	education: [
		{
			id: 1,
			institution: "Lorem University",
			degree: "Bachelor of Technology",
			score: "CGPA: 9.0 / 10",
			year: "2018 – 2022",
		},
	],

	skills: {
		Languages: "Lorem, Ipsum, Dolor",
		Frontend: "LoremJS, IpsumUI",
		Backend: "Dolor API, Sit Framework",
		Databases: "LoremDB, IpsumSQL",
		"Cloud & DevOps": "CloudX, ContainerY",
		Practices: "Design Patterns, Testing, Agile",
	},

	projects: [
		{
			id: 1,
			name: "Lorem Project",
			tech: "React, Node.js, PostgreSQL",
			link: "https://github.com/example/lorem-project",
			bullets: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			],
		},
	],

	certifications: [
		"Lorem Certified Professional",
		"Ipsum Cloud Practitioner",
	],

	achievements: [
		"Lorem ipsum dolor sit amet",
		"Consectetur adipiscing elit",
		"Sed do eiusmod tempor incididunt",
		"Ut labore et dolore magna aliqua",
	],
};

export const DEFAULT_SETTINGS = {
	template: "classic",
	fontFamily: "Calibri, Arial, sans-serif",
	fontSize: 10,
	marginTop: 14,
	marginBottom: 14,
	marginLeft: 14,
	marginRight: 14,
	sectionOrder: DEFAULT_SECTION_ORDER,
	sectionVisible: DEFAULT_SECTION_VISIBLE,
};

export const EMPTY_EXP = {
	company: "",
	role: "",
	location: "",
	start: "",
	end: "",
	bullets: [""],
};
export const EMPTY_EDU = {
	institution: "",
	degree: "",
	score: "",
	year: "",
};
export const EMPTY_PROJ = {
	name: "",
	tech: "",
	link: "",
	bullets: [""],
};
