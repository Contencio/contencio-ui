import styled from "styled-components";

export const StyledAnimationDotSpread = styled.div`
	background: ${(props) => props.theme.palette.bg.accent};
	.blur {
		background: ${(props) =>
			`linear-gradient(0deg, ${props.theme.palette.bg.primary} 0%, rgba(255, 255, 255, 0) 100%)`};
		height: 5rem;
		width: 100%;
		position: absolute;
		bottom: 0px;
	}

	@keyframes move {
		100% {
			transform: translate3d(0, 0, 1px) rotate(360deg);
		}
	}

	//background: #3e1e68;
	overflow: hidden;

	span {
		width: 20vmin;
		height: 20vmin;
		border-radius: 20vmin;
		backface-visibility: hidden;
		position: absolute;
		animation: move;
		animation-duration: 45;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	span:nth-child(0) {
		color: #e45a84;
		top: 24%;
		left: 91%;
		animation-duration: 12s;
		animation-delay: -37s;
		transform-origin: 13vw -14vh;
		box-shadow: 40vmin 0 5.557194409465126vmin currentColor;
	}
	span:nth-child(1) {
		color: #e45a84;
		top: 2%;
		left: 62%;
		animation-duration: 26s;
		animation-delay: -49s;
		transform-origin: 18vw -14vh;
		box-shadow: -40vmin 0 5.048608646410557vmin currentColor;
	}
	span:nth-child(2) {
		color: #583c87;
		top: 90%;
		left: 45%;
		animation-duration: 41s;
		animation-delay: -26s;
		transform-origin: -6vw -6vh;
		box-shadow: -40vmin 0 5.883785591174854vmin currentColor;
	}
	span:nth-child(3) {
		color: #583c87;
		top: 39%;
		left: 70%;
		animation-duration: 50s;
		animation-delay: -11s;
		transform-origin: 18vw -12vh;
		box-shadow: 40vmin 0 5.650576858377896vmin currentColor;
	}
	span:nth-child(4) {
		color: #e45a84;
		top: 58%;
		left: 10%;
		animation-duration: 41s;
		animation-delay: -20s;
		transform-origin: -20vw -7vh;
		box-shadow: -40vmin 0 5.849571300379665vmin currentColor;
	}
	span:nth-child(5) {
		color: #583c87;
		top: 9%;
		left: 37%;
		animation-duration: 7s;
		animation-delay: -44s;
		transform-origin: 25vw -16vh;
		box-shadow: -40vmin 0 5.955704818862616vmin currentColor;
	}
	span:nth-child(6) {
		color: #ffacac;
		top: 23%;
		left: 30%;
		animation-duration: 19s;
		animation-delay: -20s;
		transform-origin: -13vw -22vh;
		box-shadow: 40vmin 0 5.7751350364336504vmin currentColor;
	}
	span:nth-child(7) {
		color: #e45a84;
		top: 57%;
		left: 68%;
		animation-duration: 15s;
		animation-delay: -3s;
		transform-origin: -8vw -7vh;
		box-shadow: -40vmin 0 5.487445288024808vmin currentColor;
	}
	span:nth-child(8) {
		color: #ffacac;
		top: 67%;
		left: 14%;
		animation-duration: 55s;
		animation-delay: -19s;
		transform-origin: 6vw 14vh;
		box-shadow: -40vmin 0 5.509227737206329vmin currentColor;
	}
	span:nth-child(9) {
		color: #e45a84;
		top: 94%;
		left: 38%;
		animation-duration: 11s;
		animation-delay: -32s;
		transform-origin: -6vw -5vh;
		box-shadow: 40vmin 0 5.363376185909232vmin currentColor;
	}
	span:nth-child(10) {
		color: #e45a84;
		top: 77%;
		left: 93%;
		animation-duration: 23s;
		animation-delay: -8s;
		transform-origin: -19vw -4vh;
		box-shadow: 40vmin 0 5.659861071921037vmin currentColor;
	}
	span:nth-child(11) {
		color: #583c87;
		top: 90%;
		left: 66%;
		animation-duration: 36s;
		animation-delay: -15s;
		transform-origin: -9vw 9vh;
		box-shadow: 40vmin 0 5.728130979263028vmin currentColor;
	}
	span:nth-child(12) {
		color: #583c87;
		top: 33%;
		left: 97%;
		animation-duration: 22s;
		animation-delay: -49s;
		transform-origin: 24vw -11vh;
		box-shadow: 40vmin 0 5.154327313800458vmin currentColor;
	}
	span:nth-child(13) {
		color: #e45a84;
		top: 30%;
		left: 54%;
		animation-duration: 36s;
		animation-delay: -50s;
		transform-origin: -10vw -15vh;
		box-shadow: -40vmin 0 5.882703972411676vmin currentColor;
	}
	span:nth-child(14) {
		color: #e45a84;
		top: 29%;
		left: 43%;
		animation-duration: 48s;
		animation-delay: -38s;
		transform-origin: 24vw 12vh;
		box-shadow: -40vmin 0 5.37155557687846vmin currentColor;
	}
	span:nth-child(15) {
		color: #583c87;
		top: 28%;
		left: 57%;
		animation-duration: 34s;
		animation-delay: -41s;
		transform-origin: -8vw -19vh;
		box-shadow: -40vmin 0 5.559847682768231vmin currentColor;
	}
	span:nth-child(16) {
		color: #ffacac;
		top: 19%;
		left: 1%;
		animation-duration: 44s;
		animation-delay: -9s;
		transform-origin: -24vw -8vh;
		box-shadow: -40vmin 0 5.365707283091843vmin currentColor;
	}
	span:nth-child(17) {
		color: #ffacac;
		top: 47%;
		left: 3%;
		animation-duration: 41s;
		animation-delay: -30s;
		transform-origin: -20vw 16vh;
		box-shadow: -40vmin 0 5.311074796834034vmin currentColor;
	}
	span:nth-child(18) {
		color: #583c87;
		top: 12%;
		left: 77%;
		animation-duration: 9s;
		animation-delay: -6s;
		transform-origin: 16vw 12vh;
		box-shadow: 40vmin 0 5.815911380257743vmin currentColor;
	}
	span:nth-child(19) {
		color: #583c87;
		top: 16%;
		left: 78%;
		animation-duration: 54s;
		animation-delay: -44s;
		transform-origin: 1vw 19vh;
		box-shadow: 40vmin 0 5.788953731187375vmin currentColor;
	}
`;
