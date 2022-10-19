import PropTypes from "prop-types";
import StyledColor from "./style";

const Color = ({ color, title }) => (
	<div style={{ display: "flex", width: 500, justifyContent: "space-between" }}>
		{title}
		<StyledColor color={color} />
	</div>
);

Color.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string,
};

Color.defaultProps = {
	color: "",
	title: "",
};

export default Color;
