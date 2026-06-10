/**
 * MODERN — Deedy Das style, two column, ATS-safe.
 * Left sidebar: skills, education, certs, achievements.
 * Right main: experience, projects.
 * Summary always top-right unless in sidebar sections.
 */
import { renderText } from "./renderText";
import { buildR, ContactLink, HRule } from "./resumeStyles";
import { ExpEntry, ProjEntry } from "./SectionRenderer";
import { getVisibleSections } from "./templateUtils";

const SIDEBAR_SECTIONS = new Set([
	"skills",
	"education",
	"certifications",
	"achievements",
]);
const MAIN_SECTIONS = new Set(["summary", "experience", "projects"]);

const MainHead = ({ title, R }) => (
	<div style={{ marginTop: R.sectionGap, marginBottom: 4 }}>
		<div
			style={{
				fontSize: R.sectionSize,
				fontWeight: 800,
				textTransform: "uppercase",
				letterSpacing: 1.2,
				color: R.black,
			}}
		>
			{title}
		</div>
		<HRule mt={2} mb={5} thick />
	</div>
);
const SideHead = ({ title, R }) => (
	<div style={{ marginTop: 9, marginBottom: 4 }}>
		<div
			style={{
				fontSize: R.tinySize,
				fontWeight: 800,
				textTransform: "uppercase",
				letterSpacing: 1.5,
				color: R.black,
			}}
		>
			{title}
		</div>
		<HRule mt={2} mb={4} thick />
	</div>
);

export const TemplateModern = ({ d, settings }) => {
	const R = buildR(settings);
	const sections = getVisibleSections(settings);
	const sideIds = sections.filter((id) => SIDEBAR_SECTIONS.has(id));
	const mainIds = sections.filter((id) => MAIN_SECTIONS.has(id));

	return (
		<div
			style={{
				fontFamily: R.fontFamily,
				fontSize: R.bodySize,
				color: R.darkGray,
				lineHeight: 1.4,
				background: R.bg,
			}}
		>
			{/* Header */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end",
					paddingBottom: 6,
				}}
			>
				<div>
					<div
						style={{
							fontSize: R.nameSize + 2,
							fontWeight: 800,
							color: R.black,
							textTransform: "uppercase",
							letterSpacing: 0.5,
							lineHeight: 1.1,
						}}
					>
						{d.name}
					</div>
					{d.title && (
						<div
							style={{
								fontSize: R.titleSize,
								color: R.midGray,
								fontWeight: 500,
								marginTop: 3,
							}}
						>
							{d.title}
						</div>
					)}
				</div>
				<div
					style={{
						fontSize: R.tinySize,
						color: R.midGray,
						textAlign: "right",
						lineHeight: 1.9,
					}}
				>
					{d.email && (
						<div>
							<ContactLink
								value={d.email}
								style={{
									color: R.midGray,
									fontSize: R.tinySize,
								}}
							/>
						</div>
					)}
					{d.phone && <div>{d.phone}</div>}
					{d.location && <div>{d.location}</div>}
					{d.linkedin && (
						<div>
							<ContactLink
								value={d.linkedin}
								style={{
									color: R.midGray,
									fontSize: R.tinySize,
								}}
							/>
						</div>
					)}
					{d.github && (
						<div>
							<ContactLink
								value={d.github}
								style={{
									color: R.midGray,
									fontSize: R.tinySize,
								}}
							/>
						</div>
					)}
					{d.portfolio && (
						<div>
							<ContactLink
								value={d.portfolio}
								style={{
									color: R.midGray,
									fontSize: R.tinySize,
								}}
							/>
						</div>
					)}
				</div>
			</div>
			<HRule mb={0} thick />

			<div style={{ display: "flex", marginTop: 8 }}>
				{/* Sidebar 30% */}
				<div
					style={{
						width: "30%",
						paddingRight: 12,
						borderRight: "1px solid #ccc",
						flexShrink: 0,
					}}
				>
					{sideIds.map((id) => {
						if (id === "skills" && Object.keys(d.skills).length)
							return (
								<div key={id}>
									<SideHead title="Skills" R={R} />
									{Object.entries(d.skills).map(([c, v]) =>
										v ? (
											<div
												key={c}
												style={{ marginBottom: 5 }}
											>
												<div
													style={{
														fontSize: R.tinySize,
														fontWeight: 700,
														color: R.black,
														textTransform:
															"uppercase",
														letterSpacing: 0.4,
													}}
												>
													{c}
												</div>
												<div
													style={{
														fontSize: R.tinySize,
														color: R.midGray,
														marginTop: 1,
														lineHeight: 1.5,
													}}
												>
													{renderText(v)}
												</div>
											</div>
										) : null,
									)}
								</div>
							);
						if (id === "education" && d.education.length)
							return (
								<div key={id}>
									<SideHead title="Education" R={R} />
									{d.education.map((e) => (
										<div
											key={e.id}
											style={{ marginBottom: 6 }}
										>
											<div
												style={{
													fontWeight: 700,
													fontSize: R.tinySize,
													color: R.black,
													lineHeight: 1.3,
												}}
											>
												{e.institution}
											</div>
											<div
												style={{
													fontSize: R.tinySize,
													color: R.midGray,
													fontStyle: "italic",
													marginTop: 1,
												}}
											>
												{e.degree}
											</div>
											{e.score && (
												<div
													style={{
														fontSize: R.tinySize,
														color: R.lightGray,
													}}
												>
													{e.score}
												</div>
											)}
											{e.year && (
												<div
													style={{
														fontSize: R.tinySize,
														color: R.lightGray,
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
									<SideHead title="Certifications" R={R} />
									{d.certifications
										.filter(Boolean)
										.map((c, i) => (
											<div
												key={i}
												style={{
													fontSize: R.tinySize,
													color: R.midGray,
													marginBottom: 3,
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
									<SideHead title="Achievements" R={R} />
									{d.achievements
										.filter(Boolean)
										.map((a, i) => (
											<div
												key={i}
												style={{
													fontSize: R.tinySize,
													color: R.midGray,
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

				{/* Main 70% */}
				<div style={{ flex: 1, paddingLeft: 14 }}>
					{mainIds.map((id) => {
						if (id === "summary" && d.summary)
							return (
								<div key={id}>
									<MainHead title="Summary" R={R} />
									<p
										style={{
											fontSize: R.bodySize,
											color: R.darkGray,
											lineHeight: 1.6,
											margin: "0 0 8px 0",
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
									{d.experience.map((e) => (
										<ExpEntry key={e.id} exp={e} R={R} />
									))}
								</div>
							);
						if (id === "projects" && d.projects.length)
							return (
								<div key={id}>
									<MainHead title="Projects" R={R} />
									{d.projects.map((p) => (
										<ProjEntry key={p.id} proj={p} R={R} />
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
