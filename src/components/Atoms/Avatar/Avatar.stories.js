import Avatar from "./Avatar.js";

export default {
	title: "ATOMS/Avatar",
	component: Avatar,
	args: {
		alt: "Oscar Macieira",
		color: "red",
		size: "xlarge",
		isOnline: false,
		src: "",
		variant: "",
		walletAddress: "0xabc302189fe23310Ac123C123f",
		fontColor: "",
	},
	argTypes: {
		size: {
			options: ["mini", "xsmall", "small", "medium", "large", "xlarge"],
			control: { type: "radio" },
		},
		variant: {
			options: ["", "text"],
			control: "radio",
		},
	},
};

const imgSrc =
	"https://cdn.dribbble.com/users/5592443/screenshots/14279501/media/03a05059cbfbc4ed313162fff2476111.png";

const Template = () => (
	<div className="flex" style={{ gap: 15 }}>
		<div className="flex-column" style={{ gap: 5 }}>
			<Avatar size="mini" />
			<Avatar size="xsmall" />
			<Avatar size="small" />
			<Avatar size="medium" />
			<Avatar size="large" />
			<Avatar size="xlarge" />
		</div>
		<div className="flex-column" style={{ gap: 5 }}>
			<Avatar isOnline={true} size="mini" />
			<Avatar isOnline={true} size="xsmall" />
			<Avatar isOnline={true} size="small" />
			<Avatar size="medium" isOnline={true} />
			<Avatar size="large" isOnline={true} />
			<Avatar size="xlarge" isOnline={true} />
		</div>

		<div className="flex-column" style={{ gap: 5 }}>
			<Avatar isOnline={true} size="mini" src={imgSrc} />
			<Avatar isOnline={true} size="xsmall" src={imgSrc} />
			<Avatar isOnline={true} size="small" src={imgSrc} />
			<Avatar size="medium" isOnline={true} src={imgSrc} />
			<Avatar size="large" isOnline={true} src={imgSrc} />
			<Avatar size="xlarge" isOnline={true} src={imgSrc} />
		</div>
	</div>
);

const Controlled = (args) => <Avatar {...args} />;

export const View = Template.bind({});
export const Control = Controlled.bind({});

Controlled.args = {
	color: "red",
	isOnline: false,
	alt: "Oscar Macieira",
	size: "xlarge",
	src: "",
};
