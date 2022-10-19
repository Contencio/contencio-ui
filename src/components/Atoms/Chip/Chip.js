import PropTypes from "prop-types";
import { StyledChip } from "./style";
import { Close } from "@material-ui/icons";

const Chip = ({
	label,
	variant = "contained",
	weight = "normal",
	onClick = () => {},
	clickable = true,
	disabled = false,
	onDelete = () => {},
	color,
	fontColor,
	deletable = false,
	size = "medium",
	deleteIcon = <Close />,
	avatar,
	icon,
}) => {
	return (
		<StyledChip
			avatar={avatar}
			label={label}
			variant={variant}
			weight={weight}
			onClick={clickable ? onClick : null}
			disabled={disabled}
			onDelete={deletable ? onDelete : null}
			color={color}
			size={size}
			fontColor={fontColor}
			deleteIcon={deleteIcon}
			icon={icon}
		/>
	);
};

Chip.propTypes = {
	label: PropTypes.string,
	variant: PropTypes.string,
	weight: PropTypes.string,
	onClick: PropTypes.func,
	onDelete: PropTypes.func,
	disabled: PropTypes.bool,
	color: PropTypes.string,
	fontColor: PropTypes.string,
	deletable: PropTypes.bool,
	size: PropTypes.string,
	deleteIcon: PropTypes.element,
	clickable: PropTypes.bool,
	avatar: PropTypes.element,
	icon: PropTypes.element,
};

Chip.defaultProps = {
	label: "Hello World",
	variant: "outlined",
	weight: "normal",

	disabled: false,
	color: "",
	fontColor: "",
	deletable: false,
	size: "medium",
	deleteIcon: <Close />,
	clickable: true,
};

export default Chip;
