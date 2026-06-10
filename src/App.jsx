import { useRef, useState } from "react";
import { BasicsForm } from "./components/form/BasicsForm";
import { EducationForm } from "./components/form/EducationForm";
import { ExperienceForm } from "./components/form/ExperienceForm";
import { ListForm } from "./components/form/ListForm";
import { ProjectForm } from "./components/form/ProjectForm";
import { SettingsForm } from "./components/form/SettingsForm";
import { SkillsForm } from "./components/form/SkillsForm";
import { ResumeRenderer } from "./components/resume/ResumeRenderer";
import { AddButton, SectionHeader, Tip } from "./components/ui/primitives";
import { TEMPLATES } from "./data/defaults";
import { usePrint } from "./hooks/usePrint";
import { useResumeData } from "./hooks/useResumeData";

const TABS = [
	{ id: "basics", label: "Basics" },
	{ id: "experience", label: "Experience" },
	{ id: "education", label: "Education" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "extras", label: "Extras" },
	{ id: "settings", label: "⚙ Settings" },
];

// mm → px for live preview (96dpi screen, 1mm = 3.7795px)
const MM = 3.7795;

export default function App() {
	const {
		data,
		settings,
		updateField,
		updateSetting,
		resetAll,
		moveSectionUp,
		moveSectionDown,
		toggleSection,
		addExp,
		updateExp,
		removeExp,
		addEdu,
		updateEdu,
		removeEdu,
		addProj,
		updateProj,
		removeProj,
	} = useResumeData();

	const [activeTab, setActiveTab] = useState("basics");
	const previewRef = useRef(null);
	const { print } = usePrint();

	const previewPad = {
		paddingTop: `${(settings.marginTop ?? 14) * MM}px`,
		paddingBottom: `${(settings.marginBottom ?? 14) * MM}px`,
		paddingLeft: `${(settings.marginLeft ?? 14) * MM}px`,
		paddingRight: `${(settings.marginRight ?? 14) * MM}px`,
	};

	const currentTemplate =
		TEMPLATES.find((t) => t.id === settings.template) ?? TEMPLATES[0];

	return (
		<div
			style={{
				fontFamily: "'Inter', system-ui, sans-serif",
				background: "#0a0c10",
				color: "#e2e8f0",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
			}}
		>
			{/* ── Topbar ── */}
			<header
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0 20px",
					height: 48,
					background: "#0d1117",
					borderBottom: "1px solid #21262d",
					flexShrink: 0,
				}}
			>
				{/* Logo */}
				<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8,
						}}
					>
						<div
							style={{
								width: 26,
								height: 26,
								background:
									"linear-gradient(135deg, #7c3aed, #a855f7)",
								borderRadius: 6,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 11,
								fontWeight: 900,
								color: "white",
								letterSpacing: -0.5,
								flexShrink: 0,
							}}
						>
							PR
						</div>
						<span
							style={{
								fontSize: 15,
								fontWeight: 800,
								color: "#f1f5f9",
								letterSpacing: "-0.5px",
							}}
						>
							Purple
							<span style={{ color: "#a78bfa" }}>Resume</span>
						</span>
					</div>
					{/* Template dropdown */}
					<div
						style={{
							position: "relative",
							display: "flex",
							alignItems: "center",
						}}
					>
						<select
							value={settings.template}
							onChange={(e) =>
								updateSetting("template")(e.target.value)
							}
							style={{
								background: "#161b22",
								border: "1px solid #30363d",
								borderRadius: 7,
								color: "#e2e8f0",
								fontSize: 12,
								fontWeight: 500,
								padding: "4px 28px 4px 10px",
								cursor: "pointer",
								appearance: "none",
								WebkitAppearance: "none",
								outline: "none",
							}}
						>
							{TEMPLATES.map((t) => (
								<option key={t.id} value={t.id}>
									{t.label} — {t.desc}
								</option>
							))}
						</select>
						<span
							style={{
								position: "absolute",
								right: 8,
								pointerEvents: "none",
								fontSize: 9,
								color: "#64748b",
							}}
						>
							▼
						</span>
					</div>
					{/* ATS badge */}
					{currentTemplate.ats ? (
						<span
							style={{
								fontSize: 10,
								color: "#4ade80",
								border: "1px solid #14532d",
								background: "#052e16",
								padding: "2px 7px",
								borderRadius: 20,
								fontWeight: 600,
							}}
						>
							✓ ATS Safe
						</span>
					) : (
						<span
							style={{
								fontSize: 10,
								color: "#fb923c",
								border: "1px solid #431407",
								background: "#1c0a00",
								padding: "2px 7px",
								borderRadius: 20,
								fontWeight: 600,
							}}
						>
							⚠ Design Only
						</span>
					)}
				</div>

				{/* Right actions */}
				<button
					onClick={() => print(previewRef, data.name, settings)}
					style={{
						display: "flex",
						alignItems: "center",
						gap: 6,
						background: "#7c3aed",
						color: "white",
						border: "none",
						borderRadius: 8,
						padding: "6px 16px",
						fontSize: 12,
						fontWeight: 700,
						cursor: "pointer",
					}}
					onMouseEnter={(e) =>
						(e.currentTarget.style.background = "#6d28d9")
					}
					onMouseLeave={(e) =>
						(e.currentTarget.style.background = "#7c3aed")
					}
				>
					↓ Export PDF
				</button>
			</header>

			{/* ── Body ── */}
			<div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
				{/* ── Left panel ── */}
				<div
					style={{
						width: 380,
						flexShrink: 0,
						display: "flex",
						flexDirection: "column",
						background: "#0d1117",
						borderRight: "1px solid #21262d",
					}}
				>
					{/* Tabs */}
					<div
						style={{
							display: "flex",
							borderBottom: "1px solid #21262d",
							overflowX: "auto",
							padding: "0 4px",
							flexShrink: 0,
						}}
					>
						{TABS.map((t) => (
							<button
								key={t.id}
								onClick={() => setActiveTab(t.id)}
								style={{
									padding: "10px 10px",
									fontSize: 11,
									fontWeight: 600,
									whiteSpace: "nowrap",
									border: "none",
									cursor: "pointer",
									background: "transparent",
									transition: "all 0.12s",
									color:
										activeTab === t.id
											? "#a78bfa"
											: "#4b5563",
									borderBottom:
										activeTab === t.id
											? "2px solid #7c3aed"
											: "2px solid transparent",
								}}
							>
								{t.label}
							</button>
						))}
					</div>

					{/* Tab content */}
					<div
						style={{
							flex: 1,
							overflowY: "auto",
							padding: "14px 16px",
						}}
					>
						{activeTab === "basics" && (
							<BasicsForm data={data} updateField={updateField} />
						)}

						{activeTab === "experience" && (
							<>
								<SectionHeader>Work Experience</SectionHeader>
								<Tip>
									Use action verbs + metrics. Wrap numbers in
									**bold**: "reduced latency by **40%**"
								</Tip>
								{data.experience.map((exp) => (
									<ExperienceForm
										key={exp.id}
										exp={exp}
										onChange={(e) => updateExp(exp.id, e)}
										onRemove={() => removeExp(exp.id)}
									/>
								))}
								<AddButton onClick={addExp}>
									+ Add Experience
								</AddButton>
							</>
						)}

						{activeTab === "education" && (
							<>
								<SectionHeader>Education</SectionHeader>
								<Tip>
									List most recent first. Include CGPA if
									7.5+.
								</Tip>
								{data.education.map((edu) => (
									<EducationForm
										key={edu.id}
										edu={edu}
										onChange={(e) => updateEdu(edu.id, e)}
										onRemove={() => removeEdu(edu.id)}
									/>
								))}
								<AddButton onClick={addEdu}>
									+ Add Education
								</AddButton>
							</>
						)}

						{activeTab === "skills" && (
							<>
								<SectionHeader>Technical Skills</SectionHeader>
								<Tip>
									Mirror keywords from job descriptions. ATS
									scores on keyword density.
								</Tip>
								<SkillsForm
									skills={data.skills}
									onChange={updateField("skills")}
								/>
							</>
						)}

						{activeTab === "projects" && (
							<>
								<SectionHeader>Projects</SectionHeader>
								<Tip>
									Show scale & impact. GitHub links
									auto-become clickable in the resume.
								</Tip>
								{data.projects.map((p) => (
									<ProjectForm
										key={p.id}
										proj={p}
										onChange={(np) => updateProj(p.id, np)}
										onRemove={() => removeProj(p.id)}
									/>
								))}
								<AddButton onClick={addProj}>
									+ Add Project
								</AddButton>
							</>
						)}

						{activeTab === "extras" && (
							<>
								<SectionHeader>Certifications</SectionHeader>
								<Tip>
									AWS, GCP, Azure certs carry strong ATS
									weight.
								</Tip>
								<ListForm
									items={data.certifications}
									onChange={updateField("certifications")}
									placeholder="AWS Certified Solutions Architect (2024)"
								/>
								<SectionHeader>
									Achievements & Awards
								</SectionHeader>
								<Tip>
									Competitive coding ranks, hackathon wins,
									open source.
								</Tip>
								<ListForm
									items={data.achievements}
									onChange={updateField("achievements")}
									placeholder="Employee of the Month — **Acme Corp**"
								/>
							</>
						)}

						{activeTab === "settings" && (
							<SettingsForm
								settings={settings}
								updateSetting={updateSetting}
								moveSectionUp={moveSectionUp}
								moveSectionDown={moveSectionDown}
								toggleSection={toggleSection}
								resetAll={resetAll}
							/>
						)}
					</div>
				</div>

				{/* ── Preview panel ── */}
				<div
					style={{
						flex: 1,
						overflowY: "auto",
						background: "#161b22",
						display: "flex",
						justifyContent: "center",
						padding: "28px 24px",
					}}
				>
					<div
						ref={previewRef}
						style={{
							background: "white",
							width: "210mm",
							minHeight: "297mm",
							...previewPad,
							boxShadow:
								"0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
							borderRadius: 2,
							flexShrink: 0,
						}}
					>
						<ResumeRenderer d={data} settings={settings} />
					</div>
				</div>
			</div>
		</div>
	);
}
