import { TemplateClassic } from "./TemplateClassic";
import { TemplateCompact } from "./TemplateCompact";
import { TemplateElegant } from "./TemplateElegant";
import { TemplateModern } from "./TemplateModern";
import { TemplateStyled } from "./TemplateStyled";

export const ResumeRenderer = ({ d, settings }) => {
	switch (settings?.template) {
		case "modern":
			return <TemplateModern d={d} settings={settings} />;
		case "compact":
			return <TemplateCompact d={d} settings={settings} />;
		case "elegant":
			return <TemplateElegant d={d} settings={settings} />;
		case "styled":
			return <TemplateStyled d={d} settings={settings} />;
		default:
			return <TemplateClassic d={d} settings={settings} />;
	}
};
