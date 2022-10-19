import PropTypes from "prop-types";
import { StyledAnimationInfinite } from "./style";

const AnimationInfinite = ({
	width = "100%",
	height = "auto",
	alignItems = "center",
	justifyContent = "center",
	blur = false,
	children,
}) => (
	<StyledAnimationInfinite
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
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		{blur && <div className="blur" />}
		<div style={{ zIndex: 1 }}>{children}</div>
	</StyledAnimationInfinite>
);
AnimationInfinite.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	alignItems: PropTypes.string,
	children: PropTypes.element,
	justifyContent: PropTypes.string,
  	blur : PropTypes.bool
};
AnimationInfinite.defaultProps = {
	width: "100%",
	height: "auto",
	alignItems: "center",
	justifyContent: "center",
  	blur: false,
};

export default AnimationInfinite;
