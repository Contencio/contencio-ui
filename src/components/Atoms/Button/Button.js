import PropTypes from "prop-types";
import { StyledButton } from "./style";
import contencioColors from "../../../theme/colors";

const Button = ({
	children,
	variant,
	disabled = false,
	onClick = (e) => {},
	color,
	fontColor,
	size,
	startIcon,
	endIcon,
}) => {
	return (
		<StyledButton
			startIcon={startIcon}
			endIcon={endIcon}
			color={color}
			size={size}
			fontColor={fontColor}
			variant={variant}
			style={{ textTransform: "none", borderRadius: "1rem" }}
			disabled={disabled}
			onClick={(e) => onClick(e)}
		>
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	children: PropTypes.string,
	variant: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	color: PropTypes.string,
	fontColor: PropTypes.string,
	size: PropTypes.string,
	endIcon: PropTypes.element,
	startIcon: PropTypes.element,
};

Button.defaultProps = {
	children: "Hello World",
	variant: "contained",
	disabled: false,
	onClick: (e) => {
		console.log(e);
	},
	size: "large",
	startIcon: <></>,
	endIcon: <></>,
};

export default Button;
