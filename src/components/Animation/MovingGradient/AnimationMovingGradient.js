import PropTypes from "prop-types";
import { StyledAnimationMovingGradient } from "./style";

const AnimationMovingGradient = ({
	width = "100%",
	height = "auto",
	alignItems = "center",
	justifyContent = "center",
	blur = false,
	children,
}) => (
	<StyledAnimationMovingGradient
		style={{
			width: width,
			height: height,
			position: "relative",
			overflow: "hidden",
			padding: "1rem",
			display: "flex",
			justifyContent: justifyContent,
			alignItems: alignItems,
		}}
	>
		{blur && <div className="blur" />}
		<div style={{ zIndex: 1 }}>{children}</div>
	</StyledAnimationMovingGradient>
);
AnimationMovingGradient.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	alignItems: PropTypes.string,
	children: PropTypes.element,
	justifyContent: PropTypes.string,
	blur: PropTypes.bool,
};
AnimationMovingGradient.defaultProps = {
	width: "100%",
	height: "auto",
	alignItems: "center",
	justifyContent: "center",
	blur: false,
};

export default AnimationMovingGradient;
