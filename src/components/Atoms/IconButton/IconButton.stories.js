import Typography from "../../Theme/Typography/Typography.js";
import contencioColors from "../../../theme/colors.js";
import AccessAlarm from "@material-ui/icons/AccessAlarm";

import IconButton from "./IconButton.js";

export default {
	title: "ATOMS/IconButton",
	component: IconButton,
	args: {
		variant: "contained",
		disabled: false,
		fontColor: "",
		size: "medium",
		icon: "mail",
	},
	argTypes: {
		variant: { options: ["contained", "text", "outlined"], control: "radio" },
		size: { options: ["small", "large"], control: "radio" },
		icon: {
			options: [
				"mail",
				"notification",
				"add",
				"remove",
				"menu",
				"check",
				"close",
				"home",
				"dashboard",
				"list",
				"category",
			],
			control: "radio",
		},
		onClick: { action: "clicked" },
	},
};
const Controlled = (args) => <IconButton {...args} disableElevation />;

export const Control = Controlled.bind({});
Controlled.args = {
	variant: "contained",
	disabled: false,
	fontColor: "",
	color: "",
};
