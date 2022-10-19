import PropTypes from "prop-types";
import { StyledAnimationDotSpread } from "./style";

const AnimationDotSpread = ({
	width = "100%",
	height = "auto",
	alignItems = "center",
	justifyContent = "center",
	blur = false,
	children,
}) => (
	<StyledAnimationDotSpread
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
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		{blur && <div className="blur" />}
		<div style={{ zIndex: 1 }}>{children}</div>
	</StyledAnimationDotSpread>
);
AnimationDotSpread.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	alignItems: PropTypes.string,
	children: PropTypes.element,
	justifyContent: PropTypes.string,
	blur: PropTypes.bool,
};
AnimationDotSpread.defaultProps = {
	width: "100%",
	height: "auto",
	alignItems: "center",
	justifyContent: "center",
	blur: false,
};

export default AnimationDotSpread;
