/**
 * COMPACT — Dense single column, smaller gaps, tighter spacing.
 * Good for cramming a lot onto one page. ATS-safe.
 */
import { renderText } from "./renderText";
import { buildR, ContactLink, HRule } from "./resumeStyles";
import {
	EduEntry,
	ExpEntry,
	ProjEntry,
	SimpleList,
	SkillRow,
} from "./SectionRenderer";
import { getVisibleSections } from "./templateUtils";

const SecHead = ({ title, R }) => (
	<div
		style={{
			marginTop: R.sectionGap * 0.8,
			marginBottom: 3,
			display: "flex",
			alignItems: "center",
			gap: 8,
		}}
	>
		<div
			style={{
				fontSize: R.sectionSize * 0.95,
				fontWeight: 800,
				textTransform: "uppercase",
				letterSpacing: 1.2,
				color: R.black,
				whiteSpace: "nowrap",
			}}
		>
			{title}
		</div>
		<HRule thick mb={0} mt={1} />
	</div>
);

export const TemplateCompact = ({ d, settings }) => {
	const compact_settings = {
		...settings,
		fontSize: Math.max(8, (settings?.fontSize ?? 10) - 0.5),
	};
	const R = buildR(compact_settings);
	const sections = getVisibleSections(settings);
	const contacts = [
		d.email,
		d.phone,
		d.location,
		d.linkedin,
		d.github,
		d.portfolio,
	].filter(Boolean);

	return (
		<div
			style={{
				fontFamily: R.fontFamily,
				fontSize: R.bodySize,
				color: R.darkGray,
				lineHeight: 1.35,
				background: R.bg,
			}}
		>
			{/* Header */}
			<div style={{ marginBottom: 6 }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "baseline",
					}}
				>
					<div
						style={{
							fontSize: R.nameSize * 0.9,
							fontWeight: 800,
							color: R.black,
							textTransform: "uppercase",
							letterSpacing: 0.5,
						}}
					>
						{d.name}
					</div>
					{d.title && (
						<div
							style={{
								fontSize: R.smallSize,
								color: R.midGray,
								fontWeight: 500,
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
						marginTop: 3,
						display: "flex",
						flexWrap: "wrap",
						gap: "2px 0",
					}}
				>
					{contacts.map((c, i) => (
						<span
							key={i}
							style={{
								display: "inline-flex",
								alignItems: "center",
							}}
						>
							{i > 0 && (
								<span
									style={{ color: "#ccc", margin: "0 5px" }}
								>
									·
								</span>
							)}
							<ContactLink
								value={c}
								style={{
									fontSize: R.tinySize,
									color: R.midGray,
								}}
							/>
						</span>
					))}
				</div>
				<HRule mt={4} mb={0} thick />
			</div>

			{sections.map((id) => {
				if (id === "summary" && d.summary)
					return (
						<div key={id}>
							<SecHead title="Summary" R={R} />
							<p
								style={{
									fontSize: R.bodySize,
									color: R.darkGray,
									lineHeight: 1.5,
									margin: "3px 0 0 0",
								}}
							>
								{renderText(d.summary)}
							</p>
						</div>
					);
				if (id === "experience" && d.experience.length)
					return (
						<div key={id}>
							<SecHead title="Experience" R={R} />
							{d.experience.map((e) => (
								<ExpEntry key={e.id} exp={e} R={R} compact />
							))}
						</div>
					);
				if (id === "education" && d.education.length)
					return (
						<div key={id}>
							<SecHead title="Education" R={R} />
							{d.education.map((e) => (
								<EduEntry key={e.id} edu={e} R={R} compact />
							))}
						</div>
					);
				if (id === "skills" && Object.keys(d.skills).length)
					return (
						<div key={id}>
							<SecHead title="Skills" R={R} />
							{Object.entries(d.skills).map(([c, v]) =>
								v ? (
									<SkillRow
										key={c}
										cat={c}
										val={v}
										R={R}
										compact
									/>
								) : null,
							)}
						</div>
					);
				if (id === "projects" && d.projects.length)
					return (
						<div key={id}>
							<SecHead title="Projects" R={R} />
							{d.projects.map((p) => (
								<ProjEntry key={p.id} proj={p} R={R} compact />
							))}
						</div>
					);
				if (
					id === "certifications" &&
					d.certifications.filter(Boolean).length
				)
					return (
						<div key={id}>
							<SecHead title="Certifications" R={R} />
							<SimpleList
								items={d.certifications}
								R={R}
								compact
							/>
						</div>
					);
				if (
					id === "achievements" &&
					d.achievements.filter(Boolean).length
				)
					return (
						<div key={id}>
							<SecHead title="Achievements" R={R} />
							<SimpleList items={d.achievements} R={R} compact />
						</div>
					);
				return null;
			})}
		</div>
	);
};
