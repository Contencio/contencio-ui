import Typography from "./Typography.js";

const variants = [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"p",
	"subtitle1",
	"subtitle2",
	"body1",
	"body2",
	"button",
	"caption",
	"overline",
];

export default {
	title: "THEME/Typography",
	component: Typography,
	args: {
		children: "Hello friend",
		variant: "p",
		italic: false,
		transform: "none",
		weight: "normal",
		underline: false,
		color: "",
		outline: false,
	},
	argTypes: {
		variant: {
			options: variants,
			control: { type: "radio" },
		},

		transform: {
			options: ["none", "uppercase", "lowercase", "capitalize"],
			control: { type: "radio" },
		},
		weight: {
			options: ["normal", "200", "400", "bold", "800", "900"],
			control: { type: "radio" },
		},
	},
};

const Template = (args) => (
	<div>
		<Typography {...args} />
		<table>
			<tr>
				<th>Variant</th>
				<th>Fonts</th>
			</tr>
			<tbody>
				{variants?.map((variant, index) => (
					<tr key={`variant-${index}`}>
						<td>{variant}</td>
						<td>
							<Typography variant={variant}>
								Lorem Ipsum dolor sit amet
							</Typography>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
export const Standard = Template.bind({});
Standard.args = {
	children: "Hello friend",
	italic: false,
	weight: "normal",
	variant: "p",
	transform: "none",
	underline: false,
	color: "",
	outline: false,
};
