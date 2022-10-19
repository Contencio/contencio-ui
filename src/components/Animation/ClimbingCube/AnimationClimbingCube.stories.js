import AnimationClimbingCube from "./AnimationClimbingCube.js";
import Typography from "../../Theme/Typography/Typography.js";

export default {
	title: "ANIMATION/ClimbingCube",
	component: AnimationClimbingCube,
	args: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
		blur: false,
	},
};

const Default = (args) => (
	<AnimationClimbingCube {...args}>
		<Typography outline={true} variant="h4">
			Programming & Tech{" "}
		</Typography>
	</AnimationClimbingCube>
);
export const View = Default.bind({});
