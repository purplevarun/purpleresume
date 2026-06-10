/**
 * ELEGANT — Centered serif header, thin rules, all caps section labels.
 * Single column. ATS-safe.
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
	<div style={{ marginTop: R.sectionGap + 3, marginBottom: 5 }}>
		<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
			<HRule mb={0} mt={0} />
			<div
				style={{
					fontSize: R.tinySize,
					fontWeight: 700,
					textTransform: "uppercase",
					letterSpacing: 2.5,
					color: R.midGray,
					whiteSpace: "nowrap",
				}}
			>
				{title}
			</div>
			<HRule mb={0} mt={0} />
		</div>
	</div>
);

export const TemplateElegant = ({ d, settings }) => {
	const R = buildR(settings);
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
				lineHeight: 1.45,
				background: R.bg,
			}}
		>
			{/* Centered header */}
			<div
				style={{
					textAlign: "center",
					marginBottom: 12,
					paddingBottom: 10,
					borderBottom: "2px solid #000",
				}}
			>
				<div
					style={{
						fontSize: R.nameSize * 1.05,
						fontWeight: 400,
						color: R.black,
						letterSpacing: 4,
						textTransform: "uppercase",
						fontFamily: "Georgia, serif",
					}}
				>
					{d.name}
				</div>
				{d.title && (
					<div
						style={{
							fontSize: R.smallSize,
							color: R.midGray,
							letterSpacing: 1.5,
							textTransform: "uppercase",
							marginTop: 4,
							fontWeight: 400,
						}}
					>
						{d.title}
					</div>
				)}
				<div
					style={{
						fontSize: R.tinySize,
						color: R.midGray,
						marginTop: 6,
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: "3px 0",
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
									style={{ color: "#ccc", margin: "0 8px" }}
								>
									•
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
									lineHeight: 1.65,
									margin: 0,
									textAlign: "justify",
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
								<ExpEntry key={e.id} exp={e} R={R} />
							))}
						</div>
					);
				if (id === "education" && d.education.length)
					return (
						<div key={id}>
							<SecHead title="Education" R={R} />
							{d.education.map((e) => (
								<EduEntry key={e.id} edu={e} R={R} />
							))}
						</div>
					);
				if (id === "skills" && Object.keys(d.skills).length)
					return (
						<div key={id}>
							<SecHead title="Technical Skills" R={R} />
							{Object.entries(d.skills).map(([c, v]) =>
								v ? (
									<SkillRow key={c} cat={c} val={v} R={R} />
								) : null,
							)}
						</div>
					);
				if (id === "projects" && d.projects.length)
					return (
						<div key={id}>
							<SecHead title="Projects" R={R} />
							{d.projects.map((p) => (
								<ProjEntry key={p.id} proj={p} R={R} />
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
							<SimpleList items={d.certifications} R={R} />
						</div>
					);
				if (
					id === "achievements" &&
					d.achievements.filter(Boolean).length
				)
					return (
						<div key={id}>
							<SecHead title="Achievements" R={R} />
							<SimpleList items={d.achievements} R={R} />
						</div>
					);
				return null;
			})}
		</div>
	);
};
