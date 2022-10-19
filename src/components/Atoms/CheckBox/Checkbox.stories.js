import { useState } from "react";
import Checkbox from "./Checkbox.js";
import { action } from "@storybook/addon-actions";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

export default {
	title: "ATOMS/Checkbox",
	component: Checkbox,
	args: {
		disabled: false,
		indeterminate: false,
		checked: false,
		color: "",
		fontColor: "",
		label: "",
		size: "",
		labelPlacement: "end",
	},
	argTypes: {
		onChange: { action: "clicked" },
		size: { options: ["small", "medium"], control: "radio" },
		labelPlacement: {
			options: ["top", "bottom", "end", "start"],
			control: "radio",
		},
	},
};

const Template = () => {
	const [check, setCheck] = useState(false);
	return (
		<div className="flex-column" style={{ gap: 10 }}>
			<Checkbox
				icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
				checked={check}
				onChange={() => setCheck(!check)}
			/>

			<Checkbox
				checked={check}
				onChange={() => setCheck(!check)}
				label="Hello World!"
			/>
			<Checkbox
				checked={check}
				onChange={() => setCheck(!check)}
				label="Hello World!"
				color={"red"}
			/>

			<Checkbox
				checked={check}
				onChange={() => setCheck(!check)}
				label="Hello World!"
				fontColor={"red"}
			/>
		</div>
	);
};

const Controlled = (args) => {
	const [isCheck, setIsCheck] = useState(false);
	return (
		<>
			{" "}
			<Checkbox
				{...args}
				checked={isCheck}
				onChange={(e) => {
					setIsCheck(!isCheck);
					action("e");
				}}
			/>
		</>
	);
};
export const View = Template.bind({});
export const Control = Controlled.bind({});
Controlled.args = {
	disabled: false,
};
