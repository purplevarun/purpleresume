import { FONT_OPTIONS } from "../../data/defaults";
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
	<div className="mb-4">
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

export const SettingsForm = ({ settings, updateSetting, resetAll }) => {
	return (
		<>
			<SectionHeader>Font</SectionHeader>
			<div className="mb-4">
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
				{/* Live font preview */}
				<div
					className="mt-2 px-3 py-2 border border-[#21262d] rounded text-[13px] text-slate-400 bg-[#0d1117]/60"
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

			<SectionHeader>Page Margins</SectionHeader>
			<Tip>
				Margins apply to the PDF export. The preview canvas reflects
				them live.
			</Tip>

			<SliderRow
				label="Top Margin"
				value={settings.marginTop}
				min={6}
				max={30}
				unit="mm"
				onChange={updateSetting("marginTop")}
			/>
			<SliderRow
				label="Bottom Margin"
				value={settings.marginBottom}
				min={6}
				max={30}
				unit="mm"
				onChange={updateSetting("marginBottom")}
			/>
			<SliderRow
				label="Left Margin"
				value={settings.marginLeft}
				min={6}
				max={30}
				unit="mm"
				onChange={updateSetting("marginLeft")}
			/>
			<SliderRow
				label="Right Margin"
				value={settings.marginRight}
				min={6}
				max={30}
				unit="mm"
				onChange={updateSetting("marginRight")}
			/>

			<SectionHeader>Formatting Guide</SectionHeader>
			<div className="space-y-2 text-[11px] text-slate-500 leading-relaxed">
				<div className="p-2.5 bg-[#0d1117] border border-[#21262d] rounded font-mono">
					<div className="text-slate-400 mb-1 text-[10px] uppercase tracking-widest font-sans font-semibold">
						Bold text
					</div>
					<div>
						**your text here** →{" "}
						<strong className="text-slate-300">
							your text here
						</strong>
					</div>
				</div>
				<div className="p-2.5 bg-[#0d1117] border border-[#21262d] rounded font-mono">
					<div className="text-slate-400 mb-1 text-[10px] uppercase tracking-widest font-sans font-semibold">
						Clickable link
					</div>
					<div>
						[label](https://url) →{" "}
						<span className="text-blue-400 underline">label</span>
					</div>
				</div>
				<div className="p-2.5 bg-[#0d1117] border border-[#21262d] rounded font-mono">
					<div className="text-slate-400 mb-1 text-[10px] uppercase tracking-widest font-sans font-semibold">
						Bare URL (auto-linked)
					</div>
					<div>
						https://github.com/... →{" "}
						<span className="text-blue-400 underline">
							auto-link
						</span>
					</div>
				</div>
				<p className="text-[10px] text-slate-600 mt-2">
					Works in bullets, summary, certifications, and achievements.
				</p>
			</div>

			<SectionHeader>Data</SectionHeader>
			<Tip>
				All changes auto-save to your browser. Clearing browser data
				will reset the resume.
			</Tip>
			<button
				onClick={() => {
					if (
						window.confirm(
							"Reset everything to defaults? This cannot be undone.",
						)
					) {
						resetAll();
					}
				}}
				className="w-full py-2 border border-red-900/50 rounded-lg text-[12px] font-semibold text-red-400 hover:bg-red-900/20 transition-all cursor-pointer mt-1"
			>
				↺ Reset to defaults
			</button>
		</>
	);
};
