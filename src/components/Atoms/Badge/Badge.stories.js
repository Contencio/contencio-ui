import Badge from "./Badge.js";
import Avatar from "../Avatar/Avatar.js";
export default {
	title: "ATOMS/Badge",
	component: Badge,
	args: {
		value: 5,
		children: <div>div</div>,
	},
};

const Template = (args) => (
	<div className="flex align-items-center mt-5" style={{ gap: "5rem" }}>
		<Badge {...args} />
		<Badge />
		<Badge value={69} />
		<Badge value={999} />
	</div>
);

export const Standard = Template.bind({});
Standard.args = {
	value: 5,
	children: <div>div</div>,
};
