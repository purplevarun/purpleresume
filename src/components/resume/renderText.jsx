/**
 * renderText — parses a small subset of inline markdown for resume bullets:
 *   **bold**        → <strong>
 *   [text](url)     → <a href="url">
 *   bare URLs       → <a href="url"> (auto-detected)
 *
 * ATS note: <strong> and <a> are both ATS-safe; most parsers read them fine.
 */
export function renderText(text) {
	if (!text) return null;

	// Combined regex: bold (**...**) OR link ([text](url)) OR bare URL
	const TOKEN =
		/\*\*(.+?)\*\*|\[(.+?)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<]+)/g;

	const parts = [];
	let lastIndex = 0;
	let match;

	while ((match = TOKEN.exec(text)) !== null) {
		// Push plain text before this match
		if (match.index > lastIndex) {
			parts.push(text.slice(lastIndex, match.index));
		}

		if (match[1] !== undefined) {
			// **bold**
			parts.push(
				<strong key={match.index} style={{ fontWeight: 700 }}>
					{match[1]}
				</strong>,
			);
		} else if (match[2] !== undefined) {
			// [text](url)
			const href = match[3].startsWith("http")
				? match[3]
				: `https://${match[3]}`;
			parts.push(
				<a
					key={match.index}
					href={href}
					style={{ color: "inherit", textDecoration: "underline" }}
				>
					{match[2]}
				</a>,
			);
		} else if (match[4] !== undefined) {
			// bare URL
			const href = match[4].startsWith("http")
				? match[4]
				: `https://${match[4]}`;
			parts.push(
				<a
					key={match.index}
					href={href}
					style={{ color: "inherit", textDecoration: "underline" }}
				>
					{match[4]}
				</a>,
			);
		}

		lastIndex = TOKEN.lastIndex;
	}

	// Remaining plain text
	if (lastIndex < text.length) {
		parts.push(text.slice(lastIndex));
	}

	return parts.length === 1 && typeof parts[0] === "string"
		? parts[0]
		: parts;
}
