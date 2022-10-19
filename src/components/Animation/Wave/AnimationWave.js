import PropTypes from "prop-types";
import { StyledAnimationWave } from "./style";

const AnimationWave = ({
	width = "100%",
	height = "auto",
	alignItems = "center",
	justifyContent = "center",
	blur = false,
	children,
}) => (
	<StyledAnimationWave
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
		<div className="wave" />
		{blur && <div className="blur" />}
		<div style={{ zIndex: 1 }}>{children}</div>
	</StyledAnimationWave>
);
AnimationWave.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	alignItems: PropTypes.string,
	children: PropTypes.element,
	justifyContent: PropTypes.string,
	blur: PropTypes.bool,
};
AnimationWave.defaultProps = {
	width: "100%",
	height: "auto",
	alignItems: "center",
	justifyContent: "center",
	blur: false,
};

export default AnimationWave;
