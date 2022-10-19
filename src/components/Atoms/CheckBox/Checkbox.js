import PropTypes from "prop-types";
import { StyledCheckbox, StyledFormControlLabel } from "./style";

const Checkbox = ({
	disabled = false,
	indeterminate = false,
	color,
	fontColor,
	checked,
	onChange = (e) => {},
	label,
	size,
	icon,
	checkedIcon,
	labelPlacement,
}) => {
	return (
		<StyledFormControlLabel
			control={
				<StyledCheckbox
					disabled={disabled}
					indeterminate={indeterminate}
					checked={checked}
					onChange={onChange}
					color={color}
					size={size}
					icon={icon}
					checkedIcon={checkedIcon}
				/>
			}
			checked={checked}
			label={label}
			labelPlacement={labelPlacement}
			fontColor={fontColor}
			disabled={disabled}
		/>
	);
};

Checkbox.propTypes = {
	disabled: PropTypes.bool,
	indeterminate: PropTypes.bool,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	color: PropTypes.string,
	onChange: PropTypes.func,
	label: PropTypes.string,
	size: PropTypes.string,
	fontColor: PropTypes.string,
	icon: PropTypes.element,
	checkedIcon: PropTypes.element,
	labelPlacement: PropTypes.string,
};

Checkbox.defaultProps = {
	disabled: false,
	indeterminate: false,
	checked: false,
	onChange: (e) => {
		console.log(e);
	},
	color: "",
};

export default Checkbox;
