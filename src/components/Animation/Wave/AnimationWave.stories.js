import AnimationWave from "./AnimationWave.js";
import Typography from "../../Theme/Typography/Typography.js";

export default {
	title: "ANIMATION/Wave",
	component: AnimationWave,
	args: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
		blur: false,
	},
};

const Default = (args) => (
	<AnimationWave {...args}>
		<Typography outline={true} variant="h4">
			Programming & Tech{" "}
		</Typography>
	</AnimationWave>
);
export const View = Default.bind({});
