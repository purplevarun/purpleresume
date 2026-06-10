/**
 * STYLED — Enhancv-inspired. Deep sidebar with accent color, skill chips,
 * photo slot. Design-focused, NOT ATS-safe (labeled in UI).
 */
import { renderText } from "./renderText";
import { buildR, BulletList, ContactLink } from "./resumeStyles";
import { getVisibleSections } from "./templateUtils";

const ACCENT = "#2d3a8c"; // deep navy
const SIDEBAR = "#1e2a6e";
const SIDEBG = "#f0f2fb";

const SideHead = ({ title }) => (
	<div
		style={{
			fontSize: 7.5,
			fontWeight: 800,
			textTransform: "uppercase",
			letterSpacing: 2,
			color: ACCENT,
			marginTop: 14,
			marginBottom: 5,
			borderBottom: `1.5px solid ${ACCENT}`,
			paddingBottom: 2,
		}}
	>
		{title}
	</div>
);
const MainHead = ({ title, R }) => (
	<div style={{ marginTop: R.sectionGap, marginBottom: 4 }}>
		<div
			style={{
				fontSize: R.sectionSize,
				fontWeight: 800,
				textTransform: "uppercase",
				letterSpacing: 1.2,
				color: ACCENT,
			}}
		>
			{title}
		</div>
		<div
			style={{
				borderBottom: `1.5px solid ${ACCENT}`,
				marginTop: 2,
				marginBottom: 5,
			}}
		/>
	</div>
);

const SkillChip = ({ label }) => (
	<span
		style={{
			display: "inline-block",
			background: "white",
			border: `1px solid ${ACCENT}`,
			color: ACCENT,
			fontSize: 7.5,
			fontWeight: 600,
			padding: "1.5px 6px",
			borderRadius: 10,
			margin: "2px 2px 2px 0",
			letterSpacing: 0.3,
		}}
	>
		{label}
	</span>
);

const ContactRow = ({ icon, value }) => {
	if (!value) return null;
	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-start",
				gap: 5,
				marginBottom: 4,
				fontSize: 8,
			}}
		>
			<span
				style={{
					color: ACCENT,
					fontSize: 9,
					flexShrink: 0,
					marginTop: 0,
				}}
			>
				{icon}
			</span>
			<ContactLink
				value={value}
				style={{
					color: "#334155",
					fontSize: 8,
					lineHeight: 1.4,
					wordBreak: "break-all",
				}}
			/>
		</div>
	);
};

export const TemplateStyled = ({ d, settings }) => {
	const R = buildR(settings);
	const sections = getVisibleSections(settings);
	const sideIds = [
		"skills",
		"education",
		"certifications",
		"achievements",
	].filter((id) => sections.includes(id));
	const mainIds = ["summary", "experience", "projects"].filter((id) =>
		sections.includes(id),
	);

	// Flatten all skill values into chips
	const allSkills = Object.values(d.skills)
		.join(", ")
		.split(",")
		.map((s) => s.trim())
		.filter(Boolean);

	return (
		<div
			style={{
				fontFamily: R.fontFamily,
				fontSize: R.bodySize,
				color: "#1e293b",
				lineHeight: 1.4,
				background: "white",
				display: "flex",
				flexDirection: "column",
				minHeight: "100%",
			}}
		>
			{/* Full-width top header bar */}
			<div
				style={{
					background: SIDEBAR,
					padding: "14px 16px 12px",
					display: "flex",
					alignItems: "center",
					gap: 14,
				}}
			>
				{/* Photo slot */}
				{d.photo ? (
					<img
						src={d.photo}
						alt="photo"
						style={{
							width: 54,
							height: 54,
							borderRadius: "50%",
							objectFit: "cover",
							border: "2px solid rgba(255,255,255,0.3)",
							flexShrink: 0,
						}}
					/>
				) : (
					<div
						style={{
							width: 54,
							height: 54,
							borderRadius: "50%",
							background: "rgba(255,255,255,0.12)",
							flexShrink: 0,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: 20,
							fontWeight: 800,
							color: "rgba(255,255,255,0.4)",
						}}
					>
						{(d.name || "?")[0].toUpperCase()}
					</div>
				)}
				<div style={{ flex: 1 }}>
					<div
						style={{
							fontSize: R.nameSize * 0.95,
							fontWeight: 800,
							color: "white",
							letterSpacing: 0.5,
							lineHeight: 1.15,
						}}
					>
						{d.name}
					</div>
					{d.title && (
						<div
							style={{
								fontSize: R.titleSize,
								color: "rgba(255,255,255,0.7)",
								fontWeight: 500,
								marginTop: 2,
							}}
						>
							{d.title}
						</div>
					)}
				</div>
			</div>

			{/* Two-column body */}
			<div style={{ display: "flex", flex: 1 }}>
				{/* Sidebar */}
				<div
					style={{
						width: "32%",
						background: SIDEBG,
						padding: "12px 10px",
						borderRight: `1px solid #d1d9f0`,
						flexShrink: 0,
					}}
				>
					{/* Contact */}
					<SideHead title="Contact" />
					<ContactRow icon="✉" value={d.email} />
					<ContactRow icon="☎" value={d.phone} />
					<ContactRow icon="⌖" value={d.location} />
					<ContactRow icon="in" value={d.linkedin} />
					<ContactRow icon="⌥" value={d.github} />
					{d.portfolio && (
						<ContactRow icon="🌐" value={d.portfolio} />
					)}

					{/* Sidebar sections */}
					{sideIds.map((id) => {
						if (id === "skills" && allSkills.length)
							return (
								<div key={id}>
									<SideHead title="Skills" />
									<div style={{ marginTop: 2 }}>
										{allSkills.map((s, i) => (
											<SkillChip key={i} label={s} />
										))}
									</div>
								</div>
							);
						if (id === "education" && d.education.length)
							return (
								<div key={id}>
									<SideHead title="Education" />
									{d.education.map((e) => (
										<div
											key={e.id}
											style={{ marginBottom: 7 }}
										>
											<div
												style={{
													fontWeight: 700,
													fontSize: 8,
													color: ACCENT,
												}}
											>
												{e.institution}
											</div>
											<div
												style={{
													fontSize: 7.5,
													color: "#475569",
													fontStyle: "italic",
												}}
											>
												{e.degree}
											</div>
											{e.score && (
												<div
													style={{
														fontSize: 7.5,
														color: "#64748b",
													}}
												>
													{e.score}
												</div>
											)}
											{e.year && (
												<div
													style={{
														fontSize: 7.5,
														color: "#94a3b8",
													}}
												>
													{e.year}
												</div>
											)}
										</div>
									))}
								</div>
							);
						if (
							id === "certifications" &&
							d.certifications.filter(Boolean).length
						)
							return (
								<div key={id}>
									<SideHead title="Certifications" />
									{d.certifications
										.filter(Boolean)
										.map((c, i) => (
											<div
												key={i}
												style={{
													fontSize: 7.5,
													color: "#475569",
													marginBottom: 4,
													lineHeight: 1.4,
												}}
											>
												• {renderText(c)}
											</div>
										))}
								</div>
							);
						if (
							id === "achievements" &&
							d.achievements.filter(Boolean).length
						)
							return (
								<div key={id}>
									<SideHead title="Achievements" />
									{d.achievements
										.filter(Boolean)
										.map((a, i) => (
											<div
												key={i}
												style={{
													fontSize: 7.5,
													color: "#475569",
													marginBottom: 4,
													lineHeight: 1.5,
												}}
											>
												• {renderText(a)}
											</div>
										))}
								</div>
							);
						return null;
					})}
				</div>

				{/* Main */}
				<div style={{ flex: 1, padding: "10px 14px" }}>
					{mainIds.map((id) => {
						if (id === "summary" && d.summary)
							return (
								<div key={id}>
									<MainHead title="Summary" R={R} />
									<p
										style={{
											fontSize: R.bodySize,
											color: "#334155",
											lineHeight: 1.6,
											margin: "0 0 6px 0",
										}}
									>
										{renderText(d.summary)}
									</p>
								</div>
							);
						if (id === "experience" && d.experience.length)
							return (
								<div key={id}>
									<MainHead title="Experience" R={R} />
									{d.experience.map((exp) => (
										<div
											key={exp.id}
											style={{
												marginBottom: R.entryGap + 1,
											}}
										>
											<div
												style={{
													display: "flex",
													justifyContent:
														"space-between",
													alignItems: "baseline",
												}}
											>
												<span
													style={{
														fontWeight: 700,
														fontSize: R.bodySize,
														color: "#0f172a",
													}}
												>
													{exp.role}
												</span>
												<span
													style={{
														fontSize: R.tinySize,
														color: "#94a3b8",
													}}
												>
													{exp.start}
													{exp.end
														? ` – ${exp.end}`
														: ""}
												</span>
											</div>
											<div
												style={{
													fontSize: R.smallSize,
													color: ACCENT,
													fontWeight: 600,
													marginBottom: 1,
												}}
											>
												{exp.company}
												{exp.location
													? ` · ${exp.location}`
													: ""}
											</div>
											<BulletList
												bullets={exp.bullets}
												R={{
													...R,
													darkGray: "#334155",
												}}
											/>
										</div>
									))}
								</div>
							);
						if (id === "projects" && d.projects.length)
							return (
								<div key={id}>
									<MainHead title="Projects" R={R} />
									{d.projects.map((proj) => (
										<div
											key={proj.id}
											style={{ marginBottom: R.entryGap }}
										>
											<div
												style={{
													display: "flex",
													justifyContent:
														"space-between",
													alignItems: "baseline",
												}}
											>
												<span
													style={{
														fontWeight: 700,
														fontSize: R.bodySize,
														color: "#0f172a",
													}}
												>
													{proj.name}
													{proj.tech && (
														<span
															style={{
																fontWeight: 400,
																fontStyle:
																	"italic",
																color: "#64748b",
																marginLeft: 5,
																fontSize:
																	R.tinySize,
															}}
														>
															| {proj.tech}
														</span>
													)}
												</span>
												{proj.link && (
													<ContactLink
														value={proj.link}
														style={{
															fontSize:
																R.tinySize,
															color: ACCENT,
														}}
													/>
												)}
											</div>
											<BulletList
												bullets={proj.bullets}
												R={{
													...R,
													darkGray: "#334155",
												}}
											/>
										</div>
									))}
								</div>
							);
						return null;
					})}
				</div>
			</div>
		</div>
	);
};
