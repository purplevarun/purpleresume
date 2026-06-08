export const DEFAULT_DATA = {
	name: "Varun Sharma",
	title: "Software Development Engineer",
	email: "varun.sharma@gmail.com",
	phone: "+91 98765 43210",
	location: "Bengaluru, Karnataka",
	linkedin: "linkedin.com/in/varunsharma",
	github: "github.com/varunsharma",
	portfolio: "",
	summary:
		"Results-driven SDE with 3+ years of experience building scalable full-stack applications. Proficient in React, Node.js, and AWS. Strong track record of delivering high-impact features and optimizing system performance at scale.",
	experience: [
		{
			id: 1,
			company: "Flipkart",
			role: "Software Development Engineer II",
			location: "Bengaluru",
			start: "Aug 2022",
			end: "Present",
			bullets: [
				"Led development of a real-time inventory sync service handling **50K+ events/sec** using Kafka and Redis, reducing latency by **40%**.",
				"Architected and shipped a seller onboarding portal (React + Node.js) used by **10,000+ merchants**, cutting onboarding time by 60%.",
				"Drove migration of legacy monolith to microservices, improving deployment frequency from monthly to daily releases.",
			],
		},
		{
			id: 2,
			company: "Paytm",
			role: "Software Development Engineer I",
			location: "Noida",
			start: "Jul 2021",
			end: "Jul 2022",
			bullets: [
				"Built payment reconciliation pipelines in Java Spring Boot processing **₹5Cr+ daily** transactions with 99.9% accuracy.",
				"Implemented A/B testing framework that increased checkout conversion by **12%** across 2M+ daily active users.",
			],
		},
	],
	education: [
		{
			id: 1,
			institution: "Indian Institute of Technology, Delhi",
			degree: "B.Tech in Computer Science and Engineering",
			score: "CGPA: 8.7 / 10",
			year: "2017 – 2021",
		},
	],
	skills: {
		Languages: "Java, JavaScript, TypeScript, Python, SQL",
		Frontend: "React.js, Next.js, Redux, Tailwind CSS",
		Backend: "Node.js, Spring Boot, Express.js, REST APIs, GraphQL",
		Databases: "MySQL, PostgreSQL, MongoDB, Redis",
		"Cloud & DevOps":
			"AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD, Jenkins",
		Tools: "Git, Jira, Postman, IntelliJ IDEA, VS Code",
	},
	projects: [
		{
			id: 1,
			name: "CodeCollab",
			tech: "React, Node.js, WebSockets, MongoDB",
			link: "https://github.com/varunsharma/codecollab",
			bullets: [
				"Built a real-time collaborative code editor supporting **20+ programming languages** with live cursor sync for up to 10 users.",
				"Integrated Judge0 API for code execution with rate limiting and sandboxing.",
			],
		},
	],
	certifications: [
		"AWS Certified Solutions Architect – Associate (2023)",
		"Google Cloud Professional Data Engineer (2022)",
	],
	achievements: [
		"Ranked in **top 500** globally on LeetCode (handle: varunsharma); solved 800+ problems.",
		"Winner, Flipkart GRiD 4.0 (2022) – national-level engineering competition.",
	],
};

export const DEFAULT_SETTINGS = {
	layout: "1col",
	font: "Calibri",
	fontSize: 10,
	marginTop: 14,
	marginBottom: 14,
	marginLeft: 14,
	marginRight: 14,
};

export const FONT_OPTIONS = [
	{ label: "Calibri", value: "Calibri, Arial, sans-serif" },
	{ label: "Arial", value: "Arial, sans-serif" },
	{ label: "Georgia", value: "Georgia, serif" },
	{ label: "Times New Roman", value: "'Times New Roman', Times, serif" },
	{ label: "Garamond", value: "Garamond, serif" },
	{ label: "Helvetica", value: "Helvetica, Arial, sans-serif" },
	{ label: "Palatino", value: "Palatino, 'Book Antiqua', serif" },
];

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
