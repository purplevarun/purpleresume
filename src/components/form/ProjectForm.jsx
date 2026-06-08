import { BulletEditor } from "../ui/BulletEditor";
import { CardShell, Input } from "../ui/primitives";

export const ProjectForm = ({ proj, onChange, onRemove }) => {
	const update = (field, val) => onChange({ ...proj, [field]: val });

	return (
		<CardShell title={proj.name || "New Project"} onRemove={onRemove}>
			<div className="grid grid-cols-2 gap-x-2">
				<Input
					label="Project Name"
					value={proj.name}
					onChange={(v) => update("name", v)}
				/>
				<Input
					label="Tech Stack"
					value={proj.tech}
					onChange={(v) => update("tech", v)}
					placeholder="React, Node.js, AWS"
				/>
			</div>
			<Input
				label="GitHub / Link"
				value={proj.link}
				onChange={(v) => update("link", v)}
				placeholder="github.com/username/repo"
			/>
			<BulletEditor
				bullets={proj.bullets}
				onChange={(b) => update("bullets", b)}
				placeholder="What you built, its scale or impact..."
			/>
		</CardShell>
	);
};
