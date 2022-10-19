import styled from "styled-components";

export const StyledAnimationWave = styled.div`
	background: ${(props) => props.theme.palette.bg.primary};

	overflow: hidden;
	.blur {
		background: ${(props) =>
			`linear-gradient(0deg, ${props.theme.palette.bg.primary} 0%, rgba(255, 255, 255, 0) 100%)`};
		height: 5rem;
		width: 100%;
		position: absolute;
		bottom: 0px;
	}

	.wave,
	.wave::before,
	.wave::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 250vw;
		height: 250vw;
		margin-left: -125vw;
		transform-origin: 50% 50%;
		background-color: transparent;
		border-radius: 38% 42%;
		box-shadow: inset 0 0 10vw rgba(255, 0, 255, 0.8);
		animation: spin 16s infinite linear;
		mix-blend-mode: multiply;
	}

	.wave::before {
		width: 105%;
		height: 95%;
		margin-top: -125vw;
		transform-origin: 49% 51%;
		border-radius: 40% 38%;
		box-shadow: inset 0 0 10vw rgba(255, 255, 0, 0.8);
		animation: spin 13s infinite linear;
	}

	.wave::after {
		width: 102%;
		height: 98%;
		margin-top: -125vw;
		transform-origin: 51% 49%;
		border-radius: 48% 42%;
		box-shadow: inset 0 0 10vw rgba(0, 255, 255, 0.8);
		animation: spin 10s infinite linear;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
`;
