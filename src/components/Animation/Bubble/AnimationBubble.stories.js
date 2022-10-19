import AnimationBubble from "./AnimationBubble.js";
import Typography from "../../Theme/Typography/Typography.js";

export default {
	title: "ANIMATION/Bubble",
	component: AnimationBubble,
	args: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
		blur: false,
	},
};

const Default = (args) => (
	<AnimationBubble {...args}>
		<Typography outline={true} variant="h4">
			Programming & Tech{" "}
		</Typography>
	</AnimationBubble>
);
export const View = Default.bind({});
