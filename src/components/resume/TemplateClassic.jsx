/**
 * CLASSIC — Jake Ryan style, single column, fully ATS-safe.
 * Section heading: uppercase + thick rule underneath.
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
	<div style={{ marginTop: R.sectionGap + 2, marginBottom: 4 }}>
		<div
			style={{
				fontSize: R.sectionSize,
				fontWeight: 800,
				textTransform: "uppercase",
				letterSpacing: 1.4,
				color: R.black,
			}}
		>
			{title}
		</div>
		<HRule mt={2} mb={5} thick />
	</div>
);

const Header = ({ d, R }) => {
	const contacts = [
		d.email,
		d.phone,
		d.location,
		d.linkedin,
		d.github,
		d.portfolio,
	].filter(Boolean);
	return (
		<div style={{ textAlign: "center", marginBottom: 10 }}>
			<div
				style={{
					fontSize: R.nameSize,
					fontWeight: 800,
					color: R.black,
					letterSpacing: 0.5,
					textTransform: "uppercase",
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
						marginTop: 2,
					}}
				>
					{d.title}
				</div>
			)}
			<div
				style={{
					fontSize: R.smallSize,
					color: R.midGray,
					marginTop: 5,
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "3px 0",
				}}
			>
				{contacts.map((c, i) => (
					<span
						key={i}
						style={{ display: "inline-flex", alignItems: "center" }}
					>
						{i > 0 && (
							<span style={{ color: "#bbb", margin: "0 6px" }}>
								|
							</span>
						)}
						<ContactLink
							value={c}
							style={{ fontSize: R.smallSize, color: R.midGray }}
						/>
					</span>
				))}
			</div>
			{/*<HRule mt={7} mb={0} thick />*/}
		</div>
	);
};

const LABELS = {
	summary: "Summary",
	experience: "Experience",
	education: "Education",
	skills: "Technical Skills",
	projects: "Projects",
	certifications: "Certifications",
	achievements: "Achievements",
};

export const TemplateClassic = ({ d, settings }) => {
	const R = buildR(settings);
	const sections = getVisibleSections(settings);
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
			<Header d={d} R={R} />
			{sections.map((id) => {
				if (id === "summary" && d.summary)
					return (
						<div key={id}>
							<SecHead title={LABELS[id]} R={R} />
							<p
								style={{
									fontSize: R.bodySize,
									color: R.darkGray,
									lineHeight: 1.6,
									margin: 0,
								}}
							>
								{renderText(d.summary)}
							</p>
						</div>
					);
				if (id === "experience" && d.experience.length)
					return (
						<div key={id}>
							<SecHead title={LABELS[id]} R={R} />
							{d.experience.map((e) => (
								<ExpEntry key={e.id} exp={e} R={R} />
							))}
						</div>
					);
				if (id === "education" && d.education.length)
					return (
						<div key={id}>
							<SecHead title={LABELS[id]} R={R} />
							{d.education.map((e) => (
								<EduEntry key={e.id} edu={e} R={R} />
							))}
						</div>
					);
				if (id === "skills" && Object.keys(d.skills).length)
					return (
						<div key={id}>
							<SecHead title={LABELS[id]} R={R} />
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
							<SecHead title={LABELS[id]} R={R} />
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
							<SecHead title={LABELS[id]} R={R} />
							<SimpleList items={d.certifications} R={R} />
						</div>
					);
				if (
					id === "achievements" &&
					d.achievements.filter(Boolean).length
				)
					return (
						<div key={id}>
							<SecHead title={LABELS[id]} R={R} />
							<SimpleList items={d.achievements} R={R} />
						</div>
					);
				return null;
			})}
		</div>
	);
};
