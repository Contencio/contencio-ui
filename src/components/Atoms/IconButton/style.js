import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

const getFontSize = (size) => {
	switch (size) {
		case "small":
			return "0.8rem";
		case "medium":
			return "1rem";
		case "large":
			return "1.2rem";
		default:
			return "1rem";
	}
};
const getPadding = (size) => {
	switch (size) {
		case "small":
			return "0.6rem 1.5rem";
		case "medium":
			return "0.8rem 2rem";
		case "large":
			return "1.1rem 2.6rem";
		default:
			return "0.8rem 2rem";
	}
};

export const StyledIconButton = styled(IconButton)`
	&& {
		text-tranform: none !important;
		color: ${(props) =>
			props?.fontColor && props?.fontColor?.length > 0
				? props.fontColor
				: props.variant !== "contained"
				? props.color
					? props.color
					: props.theme.palette.secondary.main
				: props.theme.palette.primary.main};
		background: ${(props) =>
			props.variant === "contained"
				? props.color
					? props.color
					: props.theme.palette.mode === "dark"
					? props.theme.palette.colors.deepWhite
					: props.theme.palette.colors.deepSpace
				: ""};
		border: ${(props) =>
			props.variant === "outlined"
				? props.color && props.color.length > 0
					? `double 1px ${props.color}`
					: `double 1px ${props.theme.palette.secondary.main}`
				: ""};
		background-image: ${(props) =>
				props.variant === "outlined"
					? props.color
						? `linear-gradient(${props.theme.palette.primary.main}, ${props.theme.palette.primary.main})`
						: ""
					: ""},
			${(props) => (props.color ? props.color : "")};
		background-origin: border-box;
		background-clip: padding-box, border-box;

		//	padding: ${(props) => getPadding(props.size)};
		position: relative;
		//	font-size: ${(props) => getFontSize(props.size)};
		font-weight: 900;
		// margin: 1.5rem 0;
		border-radius: ${(props) => (props.size === "small" ? "0.5rem" : "1rem")};
		font-style: italic;
		:disabled {
			background: ${(props) =>
				props.variant === "contained" &&
				props.theme.palette.colors.primaryGrey};
			color: ${(props) =>
				props.variant !== "contained" &&
				props.theme.palette.colors.primaryGrey};
			border: ${(props) =>
				props.variant === "outlined"
					? `1px solid ${props.theme.palette.colors.primaryGrey}`
					: ""};
		}
	}
`;
