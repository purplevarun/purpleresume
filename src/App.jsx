import { useRef, useState } from "react";
import { BasicsForm } from "./components/form/BasicsForm";
import { EducationForm } from "./components/form/EducationForm";
import { ExperienceForm } from "./components/form/ExperienceForm";
import { ListForm } from "./components/form/ListForm";
import { ProjectForm } from "./components/form/ProjectForm";
import { SettingsForm } from "./components/form/SettingsForm";
import { SkillsForm } from "./components/form/SkillsForm";
import { Resume1Col } from "./components/resume/Resume1Col";
import { Resume2Col } from "./components/resume/Resume2Col";
import { AddButton, SectionHeader, Tip } from "./components/ui/primitives";
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

export default function App() {
	const {
		data,
		settings,
		updateField,
		updateSetting,
		resetAll,
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

	// Convert mm margins to px for live preview (1mm ≈ 3.7795px)
	const MM_TO_PX = 3.7795;
	const previewPadding = {
		paddingTop: `${settings.marginTop * MM_TO_PX}px`,
		paddingBottom: `${settings.marginBottom * MM_TO_PX}px`,
		paddingLeft: `${settings.marginLeft * MM_TO_PX}px`,
		paddingRight: `${settings.marginRight * MM_TO_PX}px`,
	};

	// Derive fontFamily from settings font string (first font name)
	const fontSettings = {
		...settings,
		fontFamily: settings.fontFamily || "Calibri, Arial, sans-serif",
	};

	return (
		<div
			className="h-screen flex flex-col overflow-hidden"
			style={{
				fontFamily: "'Inter', system-ui, sans-serif",
				background: "#0a0c10",
				color: "#e2e8f0",
			}}
		>
			{/* ── Topbar ── */}
			<header
				className="flex items-center justify-between shrink-0"
				style={{
					padding: "10px 20px",
					background: "#0d1117",
					borderBottom: "1px solid #21262d",
				}}
			>
				<div className="flex items-center gap-3">
					{/* Logo */}
					<div className="flex items-center gap-2">
						<div
							style={{
								width: 22,
								height: 22,
								background: "#7c3aed",
								borderRadius: 5,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 11,
								fontWeight: 900,
								color: "white",
								letterSpacing: -0.5,
							}}
						>
							PR
						</div>
						<span
							style={{
								fontSize: 14,
								fontWeight: 700,
								color: "#f1f5f9",
								letterSpacing: "-0.3px",
							}}
						>
							PurpleResume
						</span>
					</div>
					<span
						style={{
							fontSize: 10,
							color: "#475569",
							fontWeight: 500,
							border: "1px solid #21262d",
							padding: "1px 8px",
							borderRadius: 20,
						}}
					>
						ATS-Optimized · Indian SDE
					</span>
				</div>

				<div className="flex items-center gap-2">
					{/* Layout toggle */}
					<div
						style={{
							display: "flex",
							background: "#161b22",
							border: "1px solid #21262d",
							borderRadius: 8,
							padding: 3,
							gap: 2,
						}}
					>
						{[
							{ id: "1col", label: "1 Column" },
							{ id: "2col", label: "2 Column" },
						].map((l) => (
							<button
								key={l.id}
								onClick={() => updateSetting("layout")(l.id)}
								style={{
									padding: "4px 12px",
									borderRadius: 6,
									fontSize: 11,
									fontWeight: 600,
									border: "none",
									cursor: "pointer",
									transition: "all 0.15s",
									background:
										settings.layout === l.id
											? "#7c3aed"
											: "transparent",
									color:
										settings.layout === l.id
											? "white"
											: "#64748b",
								}}
							>
								{l.label}
							</button>
						))}
					</div>

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
							transition: "background 0.15s",
						}}
						onMouseEnter={(e) =>
							(e.target.style.background = "#6d28d9")
						}
						onMouseLeave={(e) =>
							(e.target.style.background = "#7c3aed")
						}
					>
						↓ Export PDF
					</button>
				</div>
			</header>

			{/* ── Main Split ── */}
			<div className="flex flex-1 overflow-hidden">
				{/* ── Left panel: Editor ── */}
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
									padding: "10px 11px",
									fontSize: 11,
									fontWeight: 600,
									whiteSpace: "nowrap",
									border: "none",
									cursor: "pointer",
									background: "transparent",
									transition: "all 0.15s",
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
									scores on density.
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
									Show scale & impact. Add GitHub links — they
									auto-become clickable.
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
									placeholder="Top 500 LeetCode — **800+** problems solved"
								/>
							</>
						)}

						{activeTab === "settings" && (
							<SettingsForm
								settings={settings}
								updateSetting={updateSetting}
								resetAll={resetAll}
							/>
						)}
					</div>
				</div>

				{/* ── Right panel: Live Preview ── */}
				<div
					style={{
						flex: 1,
						overflowY: "auto",
						background: "#161b22",
						display: "flex",
						justifyContent: "center",
						padding: "32px 24px",
					}}
				>
					{/* A4 canvas */}
					<div
						ref={previewRef}
						style={{
							background: "white",
							width: "210mm",
							minHeight: "297mm",
							...previewPadding,
							boxShadow:
								"0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
							borderRadius: 2,
							flexShrink: 0,
						}}
					>
						{settings.layout === "1col" ? (
							<Resume1Col d={data} settings={fontSettings} />
						) : (
							<Resume2Col d={data} settings={fontSettings} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
