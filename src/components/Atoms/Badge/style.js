import styled from "styled-components";
import Badge from "@material-ui/core/Badge";

export const StyledBadge = styled(Badge)`
	color: ${(props) => props.theme.palette.common.white};
`;

const getBadgeWidth = (size) => {
	switch (size) {
		case "mini":
			return "0.3rem";
		case "xsmall":
			return "0.4rem";
		case "small":
			return "0.6rem";
		case "medium":
			return "0.8rem";
		case "large":
			return "1rem";
		case "xlarge":
			return "1.2rem";
		default:
			return "0.8rem";
	}
};

const getBorderSize = (size) => {
	switch (size) {
		case "mini":
			return "0.08rem";
		case "xsmall":
			return "0.1rem";
		case "small":
			return "0.2rem";
		case "medium":
			return "0.3rem";
		case "large":
			return "0.4rem";
		case "xlarge":
			return "0.5rem";
		default:
			return "0.3rem";
	}
};

export const OnlineBadge = styled.div`
	background: #44b700;
	color: #44b700;
	box-shadow: 0px 0px 0px ${(props) => getBorderSize(props.size)}
		${(props) => props.theme.palette.primary.main};
	width: ${(props) => getBadgeWidth(props.size)};
	height: ${(props) => getBadgeWidth(props.size)};
	position: absolute;
	border-radius: 50%;
	top: -0.2rem;
	right: -0.2rem;
	&::after {
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 50%;
		animation: ripple 1.2s infinite ease-in-out;
		border: 1px solid currentColor;
		content: "";
	}

	@keyframes ripple {
		from {
			transform: scale(0.8);
			opacity: 1;
		}
		to {
			transform: scale(2.1);
			opacity: 0;
		}
	}
`;
