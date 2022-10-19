import styled from "styled-components";

export const StyledAnimationMovingGradient = styled.div`
	background: ${(props) => props.theme.palette.bg.primary};
	.blur {
		background: ${(props) =>
			`linear-gradient(0deg, ${props.theme.palette.bg.primary} 0%, rgba(255, 255, 255, 0) 100%)`};
		height: 5rem;
		width: 100%;
		position: absolute;
		bottom: 0px;
	}
`;
