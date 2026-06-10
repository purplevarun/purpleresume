// Returns the ordered, visible section IDs for a given settings object
export function getVisibleSections(settings) {
	const order = settings?.sectionOrder ?? [
		"summary",
		"experience",
		"education",
		"skills",
		"projects",
		"certifications",
		"achievements",
	];
	const visible = settings?.sectionVisible ?? {};
	return order.filter((id) => visible[id] !== false);
}
