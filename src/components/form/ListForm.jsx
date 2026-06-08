export const ListForm = ({ items, onChange, placeholder = "Add item..." }) => {
	const update = (i, val) => {
		const a = [...items];
		a[i] = val;
		onChange(a);
	};
	const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
	const add = () => onChange([...items, ""]);

	return (
		<div>
			{items.map((item, i) => (
				<div key={i} className="flex gap-1.5 mb-1.5">
					<input
						className="flex-1 bg-[#0d1117] border border-[#21262d] rounded px-3 py-1.5 text-[13px] text-slate-200 focus:outline-none focus:border-violet-500 transition-colors"
						value={item}
						onChange={(e) => update(i, e.target.value)}
						placeholder={placeholder}
					/>
					<button
						onClick={() => remove(i)}
						className="text-slate-600 hover:text-red-400 text-[11px] px-1 transition-colors cursor-pointer"
					>
						✕
					</button>
				</div>
			))}
			<button
				onClick={add}
				className="text-[11px] text-violet-500 hover:text-violet-400 transition-colors cursor-pointer mt-1"
			>
				+ Add item
			</button>
		</div>
	);
};
