import { useRef } from "react";
import { Input, SectionHeader, Textarea, Tip } from "../ui/primitives";

export const BasicsForm = ({ data, updateField }) => {
	const fileRef = useRef(null);

	const handlePhoto = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (ev) => updateField("photo")(ev.target.result);
		reader.readAsDataURL(file);
	};

	return (
		<>
			<SectionHeader>Personal Info</SectionHeader>
			<Input
				label="Full Name"
				value={data.name}
				onChange={updateField("name")}
			/>
			<Input
				label="Professional Title"
				value={data.title}
				onChange={updateField("title")}
				placeholder="Software Developer"
			/>
			<div className="grid grid-cols-2 gap-x-2">
				<Input
					label="Email"
					value={data.email}
					onChange={updateField("email")}
				/>
				<Input
					label="Phone"
					value={data.phone}
					onChange={updateField("phone")}
					placeholder="+91 98765 43210"
				/>
				<Input
					label="Location"
					value={data.location}
					onChange={updateField("location")}
					placeholder="Bengaluru, Karnataka"
				/>
				<Input
					label="LinkedIn"
					value={data.linkedin}
					onChange={updateField("linkedin")}
					placeholder="linkedin.com/in/..."
				/>
				<Input
					label="GitHub"
					value={data.github}
					onChange={updateField("github")}
					placeholder="github.com/..."
				/>
				<Input
					label="Portfolio"
					value={data.portfolio}
					onChange={updateField("portfolio")}
					placeholder="yoursite.com (optional)"
				/>
			</div>

			{/* Photo upload — only relevant for Styled template */}
			<div className="mb-3">
				<label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
					Photo{" "}
					<span className="text-slate-700 normal-case">
						(Styled template only)
					</span>
				</label>
				<div className="flex items-center gap-3">
					{data.photo ? (
						<img
							src={data.photo}
							alt="photo"
							className="w-10 h-10 rounded-full object-cover border border-[#21262d]"
						/>
					) : (
						<div className="w-10 h-10 rounded-full bg-[#21262d] flex items-center justify-center text-slate-600 text-[10px]">
							None
						</div>
					)}
					<div className="flex gap-2">
						<button
							onClick={() => fileRef.current?.click()}
							className="text-[11px] text-violet-400 hover:text-violet-300 border border-[#21262d] px-2.5 py-1 rounded cursor-pointer transition-colors"
						>
							{data.photo ? "Change" : "Upload"}
						</button>
						{data.photo && (
							<button
								onClick={() => updateField("photo")("")}
								className="text-[11px] text-red-400 hover:text-red-300 border border-[#21262d] px-2.5 py-1 rounded cursor-pointer transition-colors"
							>
								Remove
							</button>
						)}
					</div>
					<input
						ref={fileRef}
						type="file"
						accept="image/*"
						className="hidden"
						onChange={handlePhoto}
					/>
				</div>
			</div>

			<SectionHeader>Professional Summary</SectionHeader>
			<Tip>
				2–3 sentences. Mention years of exp, core stack, one key
				achievement. Use **bold** for metrics.
			</Tip>
			<Textarea
				label="Summary"
				value={data.summary}
				onChange={updateField("summary")}
				rows={5}
				placeholder="Results-driven SDE with X years..."
			/>
		</>
	);
};
