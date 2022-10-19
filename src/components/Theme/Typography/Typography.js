import PropTypes from "prop-types";
import StyledTypography from "./style";

const Typography = ({
	children,
	variant,
	weight = "normal",
	transform = "none",
	underline = false,
	italic = { italic },
	outline = false,
	color,
	sx = {},
}) => (
	<StyledTypography
		weight={weight}
		variant={variant}
		italic={italic}
		transform={transform}
		underline={underline}
		color={color}
		outline={outline}
		style={sx}
	>
		{children}
	</StyledTypography>
);

Typography.propTypes = {
	italic: PropTypes.bool,
	underline: PropTypes.bool,
	outline: PropTypes.bool,

	weight: PropTypes.string,
	children: PropTypes.string,
	variant: PropTypes.string,
	transform: PropTypes.string,
	color: PropTypes.string,
};

Typography.defaultProps = {
	children: "hello friend",
	variant: "p",
	weight: "normal",
	italic: false,
	transform: "none",
	underline: false,
	color: "",
	outline: false,
};

export default Typography;
