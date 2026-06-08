import { renderText } from "./renderText.jsx";
import { buildR, BulletList, ContactLink, HRule } from "./resumeStyles.jsx";

const MainSecHead = ({ title, R }) => (
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

const SideSecHead = ({ title, R }) => (
	<div style={{ marginTop: 10, marginBottom: 4 }}>
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
		<HRule mt={2} mb={5} thick />
	</div>
);

const Header = ({ d, R }) => (
	<div
		style={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "flex-end",
			marginBottom: 0,
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
						letterSpacing: 0.3,
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
						style={{ color: R.midGray, fontSize: R.tinySize }}
					/>
				</div>
			)}
			{d.phone && <div>{d.phone}</div>}
			{d.location && <div>{d.location}</div>}
			{d.linkedin && (
				<div>
					<ContactLink
						value={d.linkedin}
						style={{ color: R.midGray, fontSize: R.tinySize }}
					/>
				</div>
			)}
			{d.github && (
				<div>
					<ContactLink
						value={d.github}
						style={{ color: R.midGray, fontSize: R.tinySize }}
					/>
				</div>
			)}
			{d.portfolio && (
				<div>
					<ContactLink
						value={d.portfolio}
						style={{ color: R.midGray, fontSize: R.tinySize }}
					/>
				</div>
			)}
		</div>
	</div>
);

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
			<span
				style={{
					fontSize: R.smallSize,
					color: R.midGray,
					flexShrink: 0,
					marginLeft: 4,
				}}
			>
				{exp.start}
				{exp.end ? ` – ${exp.end}` : ""}
			</span>
		</div>
		<div
			style={{
				fontSize: R.smallSize,
				color: R.midGray,
				fontStyle: "italic",
				marginBottom: 1,
			}}
		>
			{exp.company}
			{exp.location ? `, ${exp.location}` : ""}
		</div>
		<BulletList bullets={exp.bullets} R={R} />
	</div>
);

const ProjEntry = ({ proj, R }) => (
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
				{proj.name || "Project"}
			</span>
			{proj.link && (
				<ContactLink
					value={proj.link}
					style={{
						fontSize: R.tinySize,
						color: R.lightGray,
						fontStyle: "italic",
						flexShrink: 0,
						marginLeft: 4,
					}}
				/>
			)}
		</div>
		{proj.tech && (
			<div
				style={{
					fontSize: R.smallSize,
					color: R.midGray,
					fontStyle: "italic",
					marginBottom: 1,
				}}
			>
				{proj.tech}
			</div>
		)}
		<BulletList bullets={proj.bullets} R={R} />
	</div>
);

const SideSkillBlock = ({ cat, val, R }) => (
	<div style={{ marginBottom: 5 }}>
		<div
			style={{
				fontSize: R.tinySize,
				fontWeight: 700,
				color: R.black,
				textTransform: "uppercase",
				letterSpacing: 0.4,
			}}
		>
			{cat}
		</div>
		<div
			style={{
				fontSize: R.tinySize,
				color: R.midGray,
				marginTop: 1,
				lineHeight: 1.5,
			}}
		>
			{renderText(val)}
		</div>
	</div>
);

const SideEduBlock = ({ edu, R }) => (
	<div style={{ marginBottom: 6 }}>
		<div
			style={{
				fontWeight: 700,
				fontSize: R.tinySize,
				color: R.black,
				lineHeight: 1.3,
			}}
		>
			{edu.institution}
		</div>
		<div
			style={{
				fontSize: R.tinySize,
				color: R.midGray,
				fontStyle: "italic",
				marginTop: 1,
			}}
		>
			{edu.degree}
		</div>
		{edu.score && (
			<div style={{ fontSize: R.tinySize, color: R.lightGray }}>
				{edu.score}
			</div>
		)}
		{edu.year && (
			<div style={{ fontSize: R.tinySize, color: R.lightGray }}>
				{edu.year}
			</div>
		)}
	</div>
);

export const Resume2Col = ({ d, settings }) => {
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
			<HRule mt={0} mb={0} thick />

			<div style={{ display: "flex", gap: 0, marginTop: 8 }}>
				{/* Sidebar */}
				<div
					style={{
						width: "30%",
						paddingRight: 12,
						borderRight: "1px solid #ccc",
						flexShrink: 0,
					}}
				>
					{d.summary && (
						<>
							<SideSecHead title="About" R={R} />
							<p
								style={{
									fontSize: R.tinySize,
									color: R.midGray,
									lineHeight: 1.55,
									margin: 0,
								}}
							>
								{renderText(d.summary)}
							</p>
						</>
					)}
					{Object.keys(d.skills).length > 0 && (
						<>
							<SideSecHead title="Skills" R={R} />
							{Object.entries(d.skills).map(([cat, val]) =>
								val ? (
									<SideSkillBlock
										key={cat}
										cat={cat}
										val={val}
										R={R}
									/>
								) : null,
							)}
						</>
					)}
					{d.education.length > 0 && (
						<>
							<SideSecHead title="Education" R={R} />
							{d.education.map((edu) => (
								<SideEduBlock key={edu.id} edu={edu} R={R} />
							))}
						</>
					)}
					{d.certifications.filter(Boolean).length > 0 && (
						<>
							<SideSecHead title="Certifications" R={R} />
							{d.certifications.filter(Boolean).map((c, i) => (
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
						</>
					)}
					{d.achievements.filter(Boolean).length > 0 && (
						<>
							<SideSecHead title="Achievements" R={R} />
							{d.achievements.filter(Boolean).map((a, i) => (
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
						</>
					)}
				</div>

				{/* Main */}
				<div style={{ flex: 1, paddingLeft: 14 }}>
					{d.experience.length > 0 && (
						<>
							<MainSecHead title="Experience" R={R} />
							{d.experience.map((exp) => (
								<ExpEntry key={exp.id} exp={exp} R={R} />
							))}
						</>
					)}
					{d.projects.length > 0 && (
						<>
							<MainSecHead title="Projects" R={R} />
							{d.projects.map((p) => (
								<ProjEntry key={p.id} proj={p} R={R} />
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};
