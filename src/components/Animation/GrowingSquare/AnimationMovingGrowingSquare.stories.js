import AnimationGrowingSquare from "./AnimationGrowingSquare.js";
import Typography from "../../Theme/Typography/Typography.js";

export default {
	title: "ANIMATION/GrowingSquare",
	component: AnimationGrowingSquare,
	args: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
		blur: false,
	},
};

const Default = (args) => (
	<AnimationGrowingSquare {...args}>
		<Typography outline={true} variant="h4">
			Programming & Tech{" "}
		</Typography>
	</AnimationGrowingSquare>
);
export const View = Default.bind({});
