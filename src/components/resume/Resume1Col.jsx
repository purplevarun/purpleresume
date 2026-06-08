import { renderText } from "./renderText.jsx";
import { buildR, BulletList, ContactLink, HRule } from "./resumeStyles.jsx";

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
		{ val: d.email },
		{ val: d.phone },
		{ val: d.location },
		{ val: d.linkedin },
		{ val: d.github },
		{ val: d.portfolio },
	].filter((c) => c.val);

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
						letterSpacing: 0.3,
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
					gap: "3px 8px",
				}}
			>
				{contacts.map((c, i) => (
					<span
						key={i}
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
						}}
					>
						{i > 0 && <span style={{ color: "#aaa" }}>|</span>}
						<ContactLink
							value={c.val}
							style={{ fontSize: R.smallSize, color: R.midGray }}
						/>
					</span>
				))}
			</div>
			<HRule mt={7} mb={0} thick />
		</div>
	);
};

const ExpEntry = ({ exp, R }) => (
	<div style={{ marginBottom: R.entryGap }}>
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "baseline",
			}}
		>
			<span
				style={{
					fontWeight: 700,
					fontSize: R.bodySize,
					color: R.black,
				}}
			>
				{exp.role || "Role"}
			</span>
			<span style={{ fontSize: R.smallSize, color: R.midGray }}>
				{exp.start}
				{exp.end ? ` – ${exp.end}` : ""}
			</span>
		</div>
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "baseline",
			}}
		>
			<span
				style={{
					fontSize: R.smallSize,
					color: R.midGray,
					fontStyle: "italic",
				}}
			>
				{exp.company}
			</span>
			{exp.location && (
				<span style={{ fontSize: R.tinySize, color: R.lightGray }}>
					{exp.location}
				</span>
			)}
		</div>
		<BulletList bullets={exp.bullets} R={R} />
	</div>
);

const EduEntry = ({ edu, R }) => (
	<div style={{ marginBottom: R.entryGap - 1 }}>
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "baseline",
			}}
		>
			<span
				style={{
					fontWeight: 700,
					fontSize: R.bodySize,
					color: R.black,
				}}
			>
				{edu.institution}
			</span>
			<span style={{ fontSize: R.smallSize, color: R.midGray }}>
				{edu.year}
			</span>
		</div>
		<div
			style={{
				fontSize: R.smallSize,
				color: R.midGray,
				fontStyle: "italic",
				marginTop: 1,
			}}
		>
			{edu.degree}
			{edu.score && (
				<span
					style={{
						fontStyle: "normal",
						fontWeight: 600,
						color: R.darkGray,
						marginLeft: 6,
					}}
				>
					{edu.score}
				</span>
			)}
		</div>
	</div>
);

const ProjEntry = ({ proj, R }) => (
	<div style={{ marginBottom: R.entryGap }}>
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "baseline",
			}}
		>
			<span
				style={{
					fontWeight: 700,
					fontSize: R.bodySize,
					color: R.black,
				}}
			>
				{proj.name || "Project"}
				{proj.tech && (
					<span
						style={{
							fontWeight: 400,
							fontStyle: "italic",
							color: R.midGray,
							marginLeft: 5,
							fontSize: R.smallSize,
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
						fontSize: R.tinySize,
						color: R.lightGray,
						fontStyle: "italic",
					}}
				/>
			)}
		</div>
		<BulletList bullets={proj.bullets} R={R} />
	</div>
);

const SkillRow = ({ cat, val, R }) => (
	<div style={{ fontSize: R.bodySize, marginBottom: 2.5 }}>
		<span style={{ fontWeight: 700, color: R.black }}>{cat}: </span>
		<span style={{ color: R.darkGray }}>{renderText(val)}</span>
	</div>
);

export const Resume1Col = ({ d, settings }) => {
	const R = buildR(settings);
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

			{d.summary && (
				<>
					<SecHead title="Summary" R={R} />
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
				</>
			)}

			{d.education.length > 0 && (
				<>
					<SecHead title="Education" R={R} />
					{d.education.map((edu) => (
						<EduEntry key={edu.id} edu={edu} R={R} />
					))}
				</>
			)}

			{d.experience.length > 0 && (
				<>
					<SecHead title="Experience" R={R} />
					{d.experience.map((exp) => (
						<ExpEntry key={exp.id} exp={exp} R={R} />
					))}
				</>
			)}

			{d.projects.length > 0 && (
				<>
					<SecHead title="Projects" R={R} />
					{d.projects.map((p) => (
						<ProjEntry key={p.id} proj={p} R={R} />
					))}
				</>
			)}

			{Object.keys(d.skills).length > 0 && (
				<>
					<SecHead title="Technical Skills" R={R} />
					{Object.entries(d.skills).map(([cat, val]) =>
						val ? (
							<SkillRow key={cat} cat={cat} val={val} R={R} />
						) : null,
					)}
				</>
			)}

			{d.achievements.filter(Boolean).length > 0 && (
				<>
					<SecHead title="Achievements" R={R} />
					<BulletList bullets={d.achievements} R={R} />
				</>
			)}

			{d.certifications.filter(Boolean).length > 0 && (
				<>
					<SecHead title="Certifications" R={R} />
					<BulletList bullets={d.certifications} R={R} />
				</>
			)}
		</div>
	);
};
