import Typography from "../../Theme/Typography/Typography.js";
import contencioColors from "../../../theme/colors.js";
import AccessAlarm from "@material-ui/icons/AccessAlarm";

import Button from "./Button.js";
export default {
	title: "ATOMS/Button",
	component: Button,
	args: {
		children: "Hello World",
		variant: "contained",
		disabled: false,
		color: "",
		fontColor: "",
		size: "medium",
		startIcon: <></>,
		endIcon: <></>,
	},
	argTypes: {
		variant: { options: ["contained", "text", "outlined"], control: "radio" },
		size: { options: ["small", "medium", "large"], control: "radio" },
		onClick: { action: "clicked" },
	},
};

const Template = () => (
	<div className="flex-column align-items-center mt-5" style={{ gap: "5rem" }}>
		<div className="flex align-items-center" style={{ gap: 10 }}>
			<Button variant="text">Hello!</Button>
			<Button variant="text" disabled={true}>
				Hello!
			</Button>

			<Button
				fontColor={(props) => props.theme.palette.secondary.main}
				color={contencioColors.contencioDark}
				variant="text"
			>
				Hello!
			</Button>
		</div>
		<div className="flex align-items-center" style={{ gap: 10 }}>
			<Button variant="outlined">Hello!</Button>

			<Button disabled={true} variant="outlined">
				Hello!
			</Button>

			<Button
				fontColor={(props) => props.theme.palette.secondary.main}
				color={contencioColors.contencioDark}
				variant="outlined"
			>
				Hello!
			</Button>
		</div>

		<div className="flex align-items-center" style={{ gap: 10 }}>
			<Button variant="contained">Hello!</Button>
			<Button disabled={true} variant="contained">
				Hello!
			</Button>

			<Button
				fontColor={(props) => props.theme.palette.common.white}
				color={contencioColors.contencioDark}
				variant="contained"
			>
				Hello!
			</Button>
		</div>
		<div className="flex align-items-center" style={{ gap: 10 }}>
			<Button endIcon={<AccessAlarm />} variant="contained">
				Hello!
			</Button>
			<Button disabled={true} variant="contained" startIcon={<AccessAlarm />}>
				Hello!
			</Button>

			<Button
				fontColor={(props) => props.theme.palette.common.white}
				startIcon={<AccessAlarm />}
				color={contencioColors.contencioDark}
				variant="contained"
			>
				Hello!
			</Button>
		</div>
	</div>
);

const Controlled = (args) => <Button {...args} disableElevation />;

export const View = Template.bind({});
export const Control = Controlled.bind({});
Controlled.args = {
	children: "Hello World",
	variant: "contained",
	disabled: false,
	fontColor: "",
	color: "",
	size: "medium",
	startIcon: <></>,
	endIcon: <></>,
};
