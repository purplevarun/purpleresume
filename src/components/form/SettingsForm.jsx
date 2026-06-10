import { ALL_SECTIONS, FONT_OPTIONS } from "../../data/defaults";
import { SectionHeader, Tip } from "../ui/primitives";

const SliderRow = ({
	label,
	value,
	min,
	max,
	step = 1,
	unit = "",
	onChange,
}) => (
	<div className="mb-3">
		<div className="flex justify-between items-center mb-1">
			<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
				{label}
			</label>
			<span className="text-[11px] font-mono text-violet-400">
				{value}
				{unit}
			</span>
		</div>
		<input
			type="range"
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={(e) => onChange(Number(e.target.value))}
			className="w-full accent-violet-500 cursor-pointer"
		/>
		<div className="flex justify-between text-[9px] text-slate-700 mt-0.5">
			<span>
				{min}
				{unit}
			</span>
			<span>
				{max}
				{unit}
			</span>
		</div>
	</div>
);

export const SettingsForm = ({
	settings,
	updateSetting,
	moveSectionUp,
	moveSectionDown,
	toggleSection,
	resetAll,
}) => {
	const order = settings.sectionOrder ?? ALL_SECTIONS.map((s) => s.id);
	const visible = settings.sectionVisible ?? {};

	return (
		<>
			{/* ── Section Visibility & Order ── */}
			<SectionHeader>Sections</SectionHeader>
			<Tip>
				Toggle sections on/off. Use arrows to reorder them in the
				resume.
			</Tip>
			<div className="space-y-1 mb-2">
				{order.map((id, idx) => {
					const sec = ALL_SECTIONS.find((s) => s.id === id);
					if (!sec) return null;
					const isVisible = visible[id] !== false;
					return (
						<div
							key={id}
							className="flex items-center gap-2 px-2 py-1.5 rounded-md border border-[#21262d] bg-[#0d1117]/60 hover:border-[#30363d] transition-colors"
						>
							{/* Toggle */}
							<button
								onClick={() => toggleSection(id)}
								className={`w-8 h-4 rounded-full transition-all cursor-pointer flex-shrink-0 relative ${isVisible ? "bg-violet-600" : "bg-[#21262d]"}`}
								title={
									isVisible ? "Hide section" : "Show section"
								}
							>
								<span
									className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${isVisible ? "left-4.5" : "left-0.5"}`}
									style={{ left: isVisible ? 14 : 2 }}
								/>
							</button>

							{/* Label */}
							<span
								className={`flex-1 text-[12px] font-medium ${isVisible ? "text-slate-200" : "text-slate-600 line-through"}`}
							>
								{sec.label}
							</span>

							{/* Order arrows */}
							<div className="flex gap-0.5">
								<button
									onClick={() => moveSectionUp(id)}
									disabled={idx === 0}
									className="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-slate-300 disabled:opacity-20 cursor-pointer disabled:cursor-default text-[10px]"
									title="Move up"
								>
									▲
								</button>
								<button
									onClick={() => moveSectionDown(id)}
									disabled={idx === order.length - 1}
									className="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-slate-300 disabled:opacity-20 cursor-pointer disabled:cursor-default text-[10px]"
									title="Move down"
								>
									▼
								</button>
							</div>
						</div>
					);
				})}
			</div>

			{/* ── Font ── */}
			<SectionHeader>Font</SectionHeader>
			<div className="mb-3">
				<label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
					Typeface
				</label>
				<select
					className="w-full bg-[#0d1117] border border-[#21262d] rounded px-3 py-2 text-[13px] text-slate-200 focus:outline-none focus:border-violet-500 cursor-pointer"
					value={settings.fontFamily}
					onChange={(e) =>
						updateSetting("fontFamily")(e.target.value)
					}
				>
					{FONT_OPTIONS.map((f) => (
						<option
							key={f.value}
							value={f.value}
							style={{ fontFamily: f.value }}
						>
							{f.label}
						</option>
					))}
				</select>
				<div
					className="mt-2 px-3 py-2 border border-[#21262d] rounded text-[12px] text-slate-400 bg-[#0d1117]/60"
					style={{ fontFamily: settings.fontFamily }}
				>
					The quick brown fox — AaBbCcDd 1234
				</div>
			</div>
			<SliderRow
				label="Base Font Size"
				value={settings.fontSize}
				min={8}
				max={13}
				step={0.5}
				unit="pt"
				onChange={updateSetting("fontSize")}
			/>

			{/* ── Margins ── */}
			<SectionHeader>Page Margins</SectionHeader>
			<Tip>Applied to PDF export and reflected live in preview.</Tip>
			<SliderRow
				label="Top"
				value={settings.marginTop}
				min={6}
				max={30}
				unit="mm"
				onChange={updateSetting("marginTop")}
			/>
			<SliderRow
				label="Bottom"
				value={settings.marginBottom}
				min={6}
				max={30}
				unit="mm"
				onChange={updateSetting("marginBottom")}
			/>
			<SliderRow
				label="Left"
				value={settings.marginLeft}
				min={6}
				max={30}
				unit="mm"
				onChange={updateSetting("marginLeft")}
			/>
			<SliderRow
				label="Right"
				value={settings.marginRight}
				min={6}
				max={30}
				unit="mm"
				onChange={updateSetting("marginRight")}
			/>

			{/* ── Formatting guide ── */}
			<SectionHeader>Formatting Syntax</SectionHeader>
			<div className="space-y-2 mb-4">
				{[
					[
						"Bold",
						"**your text**",
						<>
							<strong className="text-slate-300">
								your text
							</strong>
						</>,
					],
					[
						"Link",
						"[label](https://url)",
						<span className="text-blue-400 underline">label</span>,
					],
					[
						"Auto-link",
						"https://github.com/...",
						<span className="text-blue-400 underline">
							auto-link
						</span>,
					],
				].map(([name, syntax, preview]) => (
					<div
						key={name}
						className="px-2.5 py-2 bg-[#0d1117] border border-[#21262d] rounded"
					>
						<div className="text-[9px] text-slate-600 uppercase tracking-widest font-semibold mb-1">
							{name}
						</div>
						<div className="font-mono text-[11px] text-slate-500">
							{syntax} → {preview}
						</div>
					</div>
				))}
				<p className="text-[10px] text-slate-700">
					Works in bullets, summary, certs, achievements.
				</p>
			</div>

			{/* ── Data ── */}
			<SectionHeader>Data</SectionHeader>
			<Tip>All changes auto-save to your browser.</Tip>
			<button
				onClick={() => {
					if (
						window.confirm(
							"Reset everything to defaults? This cannot be undone.",
						)
					)
						resetAll();
				}}
				className="w-full py-2 border border-red-900/50 rounded-lg text-[12px] font-semibold text-red-400 hover:bg-red-900/20 transition-all cursor-pointer mt-1"
			>
				↺ Reset to defaults
			</button>
		</>
	);
};
