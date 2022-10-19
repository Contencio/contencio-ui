import styled from "styled-components";

export const StyledAnimationNetwork = styled.div`
	background: ${(props) => props.theme.palette.bg.primary};
	position: relative;
	.blur {
		background: ${(props) =>
			`linear-gradient(0deg, ${props.theme.palette.bg.primary} 0%, rgba(255, 255, 255, 0) 100%)`};
		height: 5rem;
		width: 100%;
		position: absolute;
		bottom: 0px;
	}

	#network {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;

		background: ${(props) => props.theme.palette.bg.accent};
	}
`;
