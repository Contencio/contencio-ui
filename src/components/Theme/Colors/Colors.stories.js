import Color from "./Colors.js";
import ContentioColors from "../../../theme/colors";

export default {
	title: "THEME/Colors",
	component: Color,
	args: {
		color: "",
		title: "",
	},
};

const Template = () =>
	Object.keys(ContentioColors).map((el, index) => (
		<Color key={`color-${index}`} color={ContentioColors[el]} title={el} />
	));

export const Standard = Template.bind({});
