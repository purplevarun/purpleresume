export const BulletEditor = ({
	bullets,
	onChange,
	placeholder = "Start with an action verb + metric...",
}) => {
	const update = (i, val) => {
		const b = [...bullets];
		b[i] = val;
		onChange(b);
	};
	const remove = (i) => onChange(bullets.filter((_, idx) => idx !== i));
	const add = () => onChange([...bullets, ""]);

	return (
		<div>
			<label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
				Bullet Points
			</label>
			{bullets.map((b, i) => (
				<div key={i} className="flex gap-1 mb-1.5">
					<textarea
						rows={2}
						className="flex-1 bg-[#0d1117] border border-[#21262d] rounded px-2 py-1.5 text-[12px] text-slate-200 focus:outline-none focus:border-violet-500 resize-none transition-colors"
						value={b}
						onChange={(e) => update(i, e.target.value)}
						placeholder={placeholder}
					/>
					<button
						onClick={() => remove(i)}
						className="text-slate-600 hover:text-red-400 text-[11px] px-1 transition-colors cursor-pointer self-start pt-1.5"
					>
						✕
					</button>
				</div>
			))}
			<button
				onClick={add}
				className="text-[11px] text-violet-500 hover:text-violet-400 transition-colors cursor-pointer mt-0.5"
			>
				+ Add bullet
			</button>
		</div>
	);
};
