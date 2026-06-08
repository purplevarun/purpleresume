import { Input, SectionHeader, Textarea, Tip } from "../ui/primitives";

export const BasicsForm = ({ data, updateField }) => (
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
			placeholder="Software Development Engineer"
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
		<SectionHeader>Professional Summary</SectionHeader>
		<Tip>
			2–3 sentences. Mention years of exp, core stack, and one key
			achievement. ATS scanners read this first.
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
