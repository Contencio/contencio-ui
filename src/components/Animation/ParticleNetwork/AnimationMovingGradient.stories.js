import AnimationMovingGradient from "./AnimationMovingGradient.js";
import Typography from "../../Theme/Typography/Typography.js";

export default {
	title: "ANIMATION/Network",
	component: AnimationMovingGradient,
	args: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
		blur: false,
	},
};

const Default = (args) => (
	<AnimationMovingGradient {...args}>
		<Typography variant="h4">Programming & Tech </Typography>
	</AnimationMovingGradient>
);
export const View = Default.bind({});
