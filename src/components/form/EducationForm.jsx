import { CardShell, Input } from "../ui/primitives";

export const EducationForm = ({ edu, onChange, onRemove }) => {
	const update = (field, val) => onChange({ ...edu, [field]: val });

	return (
		<CardShell
			title={edu.institution || "New Education"}
			onRemove={onRemove}
		>
			<Input
				label="Institution"
				value={edu.institution}
				onChange={(v) => update("institution", v)}
				placeholder="IIT Delhi / NIT Trichy / BITS Pilani..."
			/>
			<Input
				label="Degree"
				value={edu.degree}
				onChange={(v) => update("degree", v)}
				placeholder="B.Tech in Computer Science and Engineering"
			/>
			<div className="grid grid-cols-2 gap-x-2">
				<Input
					label="Score"
					value={edu.score}
					onChange={(v) => update("score", v)}
					placeholder="CGPA: 8.5 / 10"
				/>
				<Input
					label="Year"
					value={edu.year}
					onChange={(v) => update("year", v)}
					placeholder="2017 – 2021"
				/>
			</div>
		</CardShell>
	);
};
