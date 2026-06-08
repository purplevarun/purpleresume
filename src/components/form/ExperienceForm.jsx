import { BulletEditor } from "../ui/BulletEditor";
import { CardShell, Input } from "../ui/primitives";

export const ExperienceForm = ({ exp, onChange, onRemove }) => {
	const update = (field, val) => onChange({ ...exp, [field]: val });

	return (
		<CardShell title={exp.company || "New Experience"} onRemove={onRemove}>
			<div className="grid grid-cols-2 gap-x-2">
				<Input
					label="Company"
					value={exp.company}
					onChange={(v) => update("company", v)}
				/>
				<Input
					label="Location"
					value={exp.location}
					onChange={(v) => update("location", v)}
				/>
				<Input
					label="Role / Title"
					value={exp.role}
					onChange={(v) => update("role", v)}
					className="col-span-2"
				/>
				<Input
					label="Start"
					value={exp.start}
					onChange={(v) => update("start", v)}
					placeholder="Aug 2022"
				/>
				<Input
					label="End"
					value={exp.end}
					onChange={(v) => update("end", v)}
					placeholder="Present"
				/>
			</div>
			<BulletEditor
				bullets={exp.bullets}
				onChange={(b) => update("bullets", b)}
				placeholder="Led X using Y, achieving Z% improvement..."
			/>
		</CardShell>
	);
};
