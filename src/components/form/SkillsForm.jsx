import { useState } from "react";

export const SkillsForm = ({ skills, onChange }) => {
	const [newCat, setNewCat] = useState("");

	const addCat = () => {
		const cat = newCat.trim();
		if (cat && !skills[cat]) {
			onChange({ ...skills, [cat]: "" });
			setNewCat("");
		}
	};

	const removeCat = (cat) => {
		const s = { ...skills };
		delete s[cat];
		onChange(s);
	};

	const updateVal = (cat, val) => onChange({ ...skills, [cat]: val });

	return (
		<div>
			{Object.keys(skills).map((cat) => (
				<div key={cat} className="mb-3">
					<div className="flex justify-between items-center mb-1">
						<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
							{cat}
						</span>
						<button
							onClick={() => removeCat(cat)}
							className="text-[11px] text-slate-600 hover:text-red-400 transition-colors cursor-pointer"
						>
							✕
						</button>
					</div>
					<input
						className="w-full bg-[#0d1117] border border-[#21262d] rounded px-3 py-1.5 text-[13px] text-slate-200 focus:outline-none focus:border-violet-500 transition-colors"
						value={skills[cat]}
						onChange={(e) => updateVal(cat, e.target.value)}
						placeholder={`${cat} (comma-separated)`}
					/>
				</div>
			))}
			<div className="flex gap-2 mt-3">
				<input
					className="flex-1 bg-[#0d1117] border border-[#21262d] rounded px-3 py-1.5 text-[13px] text-slate-200 focus:outline-none focus:border-violet-500 transition-colors"
					value={newCat}
					onChange={(e) => setNewCat(e.target.value)}
					placeholder="New category name..."
					onKeyDown={(e) => e.key === "Enter" && addCat()}
				/>
				<button
					onClick={addCat}
					className="bg-violet-600 hover:bg-violet-500 text-white text-[12px] font-semibold px-4 py-1.5 rounded transition-colors cursor-pointer"
				>
					Add
				</button>
			</div>
		</div>
	);
};
