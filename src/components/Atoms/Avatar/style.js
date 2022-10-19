import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const xsmall = "25px";
const small = "30px";
const medium = "50px";
const large = "75px";
const xlarge = "100px";

const getSize = (size) => {
	switch (size.toLowerCase()) {
		case "mini":
			return {
				fontSize: "0.6rem",
				width: "1.1rem",
			};
		case "xsmall":
			return {
				fontSize: "1rem",
				width: "1.9rem",
			};
		case "small":
			return {
				fontSize: "1.4rem",
				width: "2.5rem",
			};
		case "medium":
			return {
				fontSize: "2rem",
				width: "3.2rem",
			};
		case "large":
			return {
				fontSize: "2.8rem",
				width: "5.0rem",
			};
		case "xlarge":
			return {
				fontSize: "4.2rem",
				width: "7.2rem",
			};
		default:
			return {
				fontSize: "1.4rem",
				width: "1.8rem",
			};
	}
};

const StyledAvatar = styled(Avatar)`
	background: ${(props) => props.color};
	color: ${(props) => props.theme.palette.common.white};
	height: ${(props) => (props?.size ? getSize(props.size).width : props.height)};
	width: ${(props) => (props.size ? getSize(props.size).width : props.width)};
	font-family: "MT";
	font-size: ${(props) => (props?.size ? getSize(props.size).fontSize : "")};
	font-weight: 800;
	border-radius: 15%;
	position: relative;
	.online-icon {
		width: 1rem;
		height: 1rem;
		background: ${(props) => props.theme.palette.success.main};
		border-radius: 15%;
		box-shadow: 0px 0px 0px 2px red;
		&::after {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			animation: ripple 1.2s infinite ease-in-out;
			border: 1px solid currentColor;
			content: "";
		}
	}

 @keyframes ripple: {
    0%: {
      transform: scale(.8);
      opacity: 1;
    },
    100%: {
      transform: scale(2.4);
      opacity: 0;
    },
  },
`;

export default StyledAvatar;
