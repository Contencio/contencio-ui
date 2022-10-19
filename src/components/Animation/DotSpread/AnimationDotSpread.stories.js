import AnimationDotSpread from "./AnimationDotSpread.js";
import Typography from "../../Theme/Typography/Typography.js";

export default {
	title: "ANIMATION/DotSpread",
	component: AnimationDotSpread,
	args: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
		blur: false,
	},
};

const Default = (args) => (
	<AnimationDotSpread {...args}>
		<Typography outline={true} variant="h4">
			Programming & Tech{" "}
		</Typography>
	</AnimationDotSpread>
);
export const View = Default.bind({});
