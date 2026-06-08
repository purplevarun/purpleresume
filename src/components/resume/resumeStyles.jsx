import { renderText } from "./renderText";

/**
 * buildR — derives all resume style constants from user settings.
 * All sizes relative to settings.fontSize (base body size).
 */
export function buildR(settings) {
	const base = settings?.fontSize ?? 10;
	const font = settings?.fontFamily ?? "Calibri, Arial, sans-serif";
	return {
		fontFamily: font,
		nameSize: base * 2.1,
		titleSize: base * 1.1,
		sectionSize: base * 1.0,
		bodySize: base,
		smallSize: base * 0.95,
		tinySize: base * 0.9,
		sectionGap: base * 1.1,
		entryGap: base * 0.75,
		black: "#000000",
		darkGray: "#222222",
		midGray: "#444444",
		lightGray: "#666666",
		rule: "#000000",
		bg: "#ffffff",
	};
}

// ─── BulletList ───────────────────────────────────────────────────────────────
export const BulletList = ({ bullets, R }) => (
	<ul style={{ margin: "3px 0 0 0", paddingLeft: 13 }}>
		{bullets.filter(Boolean).map((b, i) => (
			<li
				key={i}
				style={{
					fontSize: R.bodySize,
					color: R.darkGray,
					lineHeight: 1.5,
					marginBottom: 1.5,
				}}
			>
				{renderText(b)}
			</li>
		))}
	</ul>
);

// ─── HRule ────────────────────────────────────────────────────────────────────
export const HRule = ({ mt = 0, mb = 4, thick = false }) => (
	<div
		style={{
			borderBottom: thick ? `1.5px solid #000` : `0.75px solid #aaa`,
			marginTop: mt,
			marginBottom: mb,
		}}
	/>
);

// ─── ContactLink — renders a contact field as a link if it looks like one ────
export const ContactLink = ({ value, style }) => {
	if (!value) return null;

	let href = null;
	const v = value.trim();

	if (v.startsWith("http://") || v.startsWith("https://")) {
		href = v;
	} else if (v.includes("linkedin.com")) {
		href = `https://${v}`;
	} else if (v.includes("github.com")) {
		href = `https://${v}`;
	} else if (v.includes("@") && !v.includes(" ")) {
		href = `mailto:${v}`;
	} else if (v.match(/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/|$)/)) {
		href = `https://${v}`;
	}

	if (href) {
		return (
			<a
				href={href}
				style={{ ...style, color: "inherit", textDecoration: "none" }}
			>
				{value}
			</a>
		);
	}
	return <span style={style}>{value}</span>;
};
