import AnimationInfinite from "./AnimationInfinite.js";
import Typography from "../../Theme/Typography/Typography.js";

export default {
	title: "ANIMATION/Infinite",
	component: AnimationInfinite,
	args: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
		blur: false,
	},
};

const Default = (args) => (
	<AnimationInfinite {...args}>
		<Typography outline={true} variant="h4">
			Programming & Tech{" "}
		</Typography>
	</AnimationInfinite>
);
export const View = Default.bind({});
