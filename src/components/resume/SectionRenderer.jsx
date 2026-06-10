import { renderText } from "./renderText";
import { BulletList, ContactLink } from "./resumeStyles";

// ─── Shared entry components used by multiple templates ───────────────────────

export const ExpEntry = ({ exp, R, compact = false }) => (
	<div style={{ marginBottom: compact ? R.entryGap * 0.7 : R.entryGap }}>
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
					fontSize: R.tinySize,
					color: R.midGray,
					flexShrink: 0,
					marginLeft: 6,
				}}
			>
				{exp.start}
				{exp.end ? ` – ${exp.end}` : ""}
			</span>
		</div>
		<div style={{ display: "flex", justifyContent: "space-between" }}>
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

export const EduEntry = ({ edu, R, compact = false }) => (
	<div style={{ marginBottom: compact ? R.entryGap * 0.6 : R.entryGap }}>
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
			<span style={{ fontSize: R.tinySize, color: R.midGray }}>
				{edu.year}
			</span>
		</div>
		<div
			style={{
				fontSize: R.smallSize,
				color: R.midGray,
				fontStyle: "italic",
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

export const ProjEntry = ({ proj, R, compact = false }) => (
	<div style={{ marginBottom: compact ? R.entryGap * 0.7 : R.entryGap }}>
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
							fontSize: R.tinySize,
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

export const SkillRow = ({ cat, val, R, compact = false }) => (
	<div style={{ fontSize: R.bodySize, marginBottom: compact ? 1.5 : 2.5 }}>
		<span style={{ fontWeight: 700, color: R.black }}>{cat}: </span>
		<span style={{ color: R.darkGray }}>{renderText(val)}</span>
	</div>
);

export const SimpleList = ({ items, R, compact = false }) => (
	<ul style={{ margin: "3px 0 0 0", paddingLeft: 13 }}>
		{items.filter(Boolean).map((item, i) => (
			<li
				key={i}
				style={{
					fontSize: R.bodySize,
					color: R.darkGray,
					lineHeight: 1.5,
					marginBottom: compact ? 1 : 2,
				}}
			>
				{renderText(item)}
			</li>
		))}
	</ul>
);
