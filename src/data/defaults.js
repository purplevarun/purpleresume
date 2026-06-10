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
	name: "Varun Kedia",
	title: "Software Developer",
	email: "purplevarun@gmail.com",
	phone: "+91 70018 07604",
	location: "Bangalore, India",
	linkedin: "linkedin.com/in/purplevarun",
	github: "github.com/purplevarun",
	portfolio: "",
	photo: "",
	summary:
		"Results-driven Software Developer with 3+ years at Thoughtworks delivering scalable full-stack solutions across ed-tech and fintech. Proficient in Java, Spring Boot, React, and cloud-native architectures. Strong track record of **30%+ client satisfaction** gains and measurable performance improvements.",
	experience: [
		{
			id: 1,
			company: "Thoughtworks",
			role: "Senior Developer",
			location: "Bangalore, India",
			start: "12/2024",
			end: "Present",
			bullets: [
				"Led code reviews and mentoring sessions to ensure best coding practices and knowledge sharing.",
				"Collaborated with international clients across the **US, UK, Germany, India, and Japan**, delivering customized solutions in ed-tech and fintech, resulting in a **30% increase** in client satisfaction.",
				"Migrated legacy applications from **Java 8 to Java 17**, leveraging new features for improved performance and security.",
				"Conducted technical interviews and onboarded new developers to strengthen the engineering team.",
				"Integrated **SonarQube** for static code analysis to maintain high-quality code.",
				"Leveraged design patterns and best coding practices, resulting in a **40% improvement** in code maintainability.",
			],
		},
		{
			id: 2,
			company: "Thoughtworks",
			role: "Developer",
			location: "Bangalore, India",
			start: "08/2022",
			end: "12/2024",
			bullets: [
				"Migrated monolithic applications to **microservices architecture** using SOLID principles.",
				"Designed a dynamic **locale-based content delivery system**, expanding adoption to **10+ countries**.",
				"Designed and implemented RESTful APIs and integrated third-party services for enhanced functionality.",
				"Optimized complex SQL queries and stored procedures for **PostgreSQL** databases.",
				"Used **Kafka** and **RabbitMQ** for async messaging, cutting response time by **10%**.",
			],
		},
	],
	education: [
		{
			id: 1,
			institution: "Asansol Engineering College",
			degree: "BTech – Information Technology",
			score: "CGPA: 9.2 / 10",
			year: "08/2018 – 07/2022",
		},
	],
	skills: {
		Languages: "Java, JavaScript, Python, SQL",
		Frontend: "React JS, React Native",
		Backend: "Spring Boot, REST API, Serverless, Kafka, RabbitMQ",
		Databases: "PostgreSQL, MongoDB",
		"Cloud & DevOps": "AWS, Docker, Kubernetes, GIT",
		Practices: "Design Patterns, Unit Testing, Domain-Driven Design",
	},
	projects: [
		{
			id: 1,
			name: "PurpleCoins",
			tech: "React Native, SQLite, MongoDB",
			link: "https://github.com/purplevarun/purplecoins",
			bullets: [
				"Personal finance tracking Android app using **React Native**.",
				"Utilized **MongoDB** for cloud syncing across devices.",
				"Used **SQLite3** for local-first offline approach.",
			],
		},
	],
	certifications: ["AWS Certified Solutions Architect – Associate"],
	achievements: [
		"Employee of the Month — Thoughtworks",
		'Received **"Exceeded Expectations"** performance rating',
		"Mentored **5+ junior developers**",
		"Solved **200+ DSA problems** on LeetCode",
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
