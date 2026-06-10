import { renderText } from "./renderText";

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
		tinySize: base * 0.88,
		sectionGap: base * 1.1,
		entryGap: base * 0.8,
		black: "#000",
		nearBlack: "#111",
		darkGray: "#222",
		midGray: "#444",
		lightGray: "#666",
		bg: "#fff",
	};
}

export const BulletList = ({ bullets, R, style = {} }) => (
	<ul style={{ margin: "3px 0 0 0", paddingLeft: 13 }}>
		{bullets.filter(Boolean).map((b, i) => (
			<li
				key={i}
				style={{
					fontSize: R.bodySize,
					color: R.darkGray,
					lineHeight: 1.5,
					marginBottom: 1.5,
					...style,
				}}
			>
				{renderText(b)}
			</li>
		))}
	</ul>
);

export const HRule = ({ mt = 0, mb = 4, thick = false, color }) => (
	<div
		style={{
			borderBottom: thick
				? `1.5px solid ${color || "#000"}`
				: `0.75px solid ${color || "#bbb"}`,
			marginTop: mt,
			marginBottom: mb,
		}}
	/>
);

export const ContactLink = ({ value, style }) => {
	if (!value) return null;
	const v = value.trim();
	let href = null;
	if (v.startsWith("http://") || v.startsWith("https://")) href = v;
	else if (v.includes("linkedin.com")) href = `https://${v}`;
	else if (v.includes("github.com")) href = `https://${v}`;
	else if (v.includes("@") && !v.includes(" ")) href = `mailto:${v}`;
	else if (v.match(/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/|$)/))
		href = `https://${v}`;
	return href ? (
		<a
			href={href}
			style={{ ...style, color: "inherit", textDecoration: "none" }}
		>
			{value}
		</a>
	) : (
		<span style={style}>{value}</span>
	);
};
