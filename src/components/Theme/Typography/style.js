import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const fontSizes = {
	h1: "7,2rem",
	h2: "5,6rem",
	h3: "4,8rem",
	h4: "4rem",
	h5: "2,8rem",
	subtitle1: "3,2rem",
	subtitle2: "2,4rem",
	button: "1,6rem",
	caption: "1,1rem",
	overline: "1,2rem",
};
const StyledTypography = styled(Typography)`
	color: ${(props) =>
		props?.color && props.color !== ""
			? props?.color
			: props.theme.palette.secondary.main};
font-family: ${(props) => (props.outline ? "MT Outline" : "MT")} !important;

	font-weight: ${(props) => props.weight};

	font-style: ${(props) =>
		props.italic || props.variant === "button" ? "italic" : ""};
text-transform ${(props) =>
	props?.variant === "overline" ? "uppercase" : props.transform};
text-decoration: ${(props) => (props.underline ? "underline" : "")};
// font-size: ${(props) => fontSizes[props.variant] || ""};
`;

export default StyledTypography;
