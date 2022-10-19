import PropTypes from "prop-types";
import { StyledIconButton } from "./style";
import contencioColors from "../../../theme/colors";
import {
	Mail,
	Notifications,
	Add,
	Remove,
	Menu,
	Check,
	Close,
	Home,
	Dashboard,
	Category,
	Favorite,
} from "@material-ui/icons";

const getIcon = (icon, args) => {
	switch (icon) {
		case "mail":
			return <Mail {...args} />;
		case "notification":
			return <Notifications {...args} />;
		case "add":
			return <Add {...args} />;
		case "remove":
			return <Remove {...args} />;
		case "menu":
			return <Menu {...args} />;

		case "check":
			return <Check {...args} />;
		case "close":
			return <Close {...args} />;
		case "home":
			return <Home {...args} />;
		case "dashboard":
			return <Dashboard {...args} />;
		case "category":
			return <Category {...args} />;
		case "list":
			return <Favorite {...args} />;
	}
};

const IconButton = ({
	size = "medium",
	fontColor,
	variant,
	disabled,
	onClick = (e) => {},
	color,
	icon,
	disableRipple,
	className,
}) => {
	return (
		<>
			<StyledIconButton
				color={color}
				variant={variant}
				disabled={disabled}
				size={size}
				onClick={(e) => onClick(e)}
				fontColor={fontColor}
				disableRipple={disableRipple}
				className={className}
			>
				{getIcon(icon, { fontSize: "inherit" })}
			</StyledIconButton>
		</>
	);
};

IconButton.propTypes = {
	variant: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	color: PropTypes.string,
	fontColor: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.string,
};

IconButton.defaultProps = {
	variant: "contained",
	disabled: false,
	onClick: (e) => {
		console.log(e);
	},
	size: "large",
	icon: "mail",
};

export default IconButton;
