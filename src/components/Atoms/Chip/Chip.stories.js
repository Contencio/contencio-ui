import contencioColors from "../../../theme/colors.js";
import { Close, Mail } from "@material-ui/icons";
import Avatar from "../Avatar/Avatar.js";
import Chip from "./Chip.js";

export default {
	title: "ATOMS/Chip",
	component: Chip,
	args: {
		label: "Hello World",
		variant: "contained",
		weight: "normal",
		color: "",
		fontColor: "",
		disabled: false,
		deletable: false,
		size: "medium",
		deleteIcon: <Close />,
		clickable: true,
	},
	argTypes: {
		variant: {
			options: ["outlined", "contained"],
			control: "radio",
		},
		weight: {
			options: ["900", "800", "600", "normal", "400", "200"],
			control: "radio",
		},
		size: {
			options: ["small", "medium"],
			control: "radio",
		},
	},
};

const Template = () => (
	<div className="flex-column" style={{ width: "fit-content" }}>
		<Chip
			onClick={() => console.log("ok")}
			label="Hello World"
			variant="outlined"
		/>
		<Chip
			label="Hello World"
			onDelete={() => console.log("ok")}
			deletable={true}
			variant="contained"
		/>
		<Chip
			label="Hello World"
			onDelete={() => console.log("ok")}
			deletable={true}
			variant="contained"
			avatar={<Avatar size="mini" />}
		/>

		<Chip
			label="Hello World"
			onDelete={() => console.log("ok")}
			deletable={true}
			variant="outlined"
			avatar={<Avatar size="mini" isOnline={true} />}
		/>
		<Chip
			label="Hello World"
			onDelete={() => console.log("ok")}
			variant="contained"
			icon={<Mail />}
		/>

		<Chip
			label="Hello World"
			onDelete={() => console.log("ok")}
			variant="outlined"
			icon={<Mail />}
		/>
		<Chip
			label="Hello World"
			onDelete={() => console.log("ok")}
			variant="outlined"
			size="small"
			icon={<Mail />}
		/>
	</div>
);

const Controlled = (args) => <Chip {...args} />;

export const View = Template.bind({});
export const Control = Controlled.bind({});
Controlled.args = {
	label: "Hello World",
	variant: "contained",
	weight: "normal",
	color: "",
	fontColor: "",
	disabled: false,
	deletable: false,
	size: "medium",
	clickable: true,

	deleteIcon: <Close />,
	icon: <Mail />,
};
