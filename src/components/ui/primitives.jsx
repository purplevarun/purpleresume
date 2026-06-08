// ─── Input ───────────────────────────────────────────────────────────────────
export const Input = ({
	label,
	value,
	onChange,
	placeholder,
	className = "",
}) => (
	<div className={`mb-3 ${className}`}>
		<label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">
			{label}
		</label>
		<input
			className="w-full bg-[#0d1117] border border-[#21262d] rounded px-3 py-1.5 text-[13px] text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder || label}
		/>
	</div>
);

// ─── Textarea ─────────────────────────────────────────────────────────────────
export const Textarea = ({ label, value, onChange, rows = 3, placeholder }) => (
	<div className="mb-3">
		<label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">
			{label}
		</label>
		<textarea
			rows={rows}
			className="w-full bg-[#0d1117] border border-[#21262d] rounded px-3 py-1.5 text-[13px] text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
		/>
	</div>
);

// ─── SectionHeader ────────────────────────────────────────────────────────────
export const SectionHeader = ({ children }) => (
	<div className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mt-5 mb-2.5 pb-1 border-b border-[#21262d]">
		{children}
	</div>
);

// ─── AddButton ────────────────────────────────────────────────────────────────
export const AddButton = ({ onClick, children }) => (
	<button
		onClick={onClick}
		className="w-full mt-1 py-2 border border-dashed border-[#30363d] rounded-lg text-[12px] font-semibold text-violet-400 hover:border-violet-500 hover:bg-violet-500/5 transition-all cursor-pointer"
	>
		{children}
	</button>
);

// ─── RemoveButton ─────────────────────────────────────────────────────────────
export const RemoveButton = ({ onClick }) => (
	<button
		onClick={onClick}
		className="text-[11px] text-slate-600 hover:text-red-400 transition-colors cursor-pointer"
	>
		✕ Remove
	</button>
);

// ─── CardShell ────────────────────────────────────────────────────────────────
export const CardShell = ({ title, onRemove, children }) => (
	<div className="border border-[#21262d] rounded-lg p-3 mb-3 bg-[#0d1117]/60">
		<div className="flex justify-between items-center mb-2.5">
			<span className="text-[12px] font-semibold text-slate-300 truncate pr-2">
				{title}
			</span>
			<RemoveButton onClick={onRemove} />
		</div>
		{children}
	</div>
);

// ─── Tip ──────────────────────────────────────────────────────────────────────
export const Tip = ({ children }) => (
	<p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
		{children}
	</p>
);
