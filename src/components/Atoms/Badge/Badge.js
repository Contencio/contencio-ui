import PropTypes from "prop-types";
import { StyledBadge } from "./style";

const Badge = ({ value, children }) => {
	if (value && typeof value === "number" && value > 0)
		return (
			<StyledBadge badgeContent={value} max={99} color="#f50057">
				{children}
			</StyledBadge>
		);
	else
		return (
			<StyledBadge color="secondary" variant="dot" color="#f50057">
				{children}
			</StyledBadge>
		);
};

Badge.propTypes = {
	value: PropTypes.number,
	children: PropTypes.element,
};

Badge.defaultProps = {
	value: 0,
	children: <div>div</div>,
};

export default Badge;
