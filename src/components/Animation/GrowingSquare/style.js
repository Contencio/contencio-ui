import styled from "styled-components";

export const StyledAnimationGrowingSquare = styled.div`
	background: ${(props) => props.theme.palette.bg.accent};
	.blur {
		background: ${(props) =>
			`linear-gradient(0deg, ${props.theme.palette.bg.primary} 0%, rgba(255, 255, 255, 0) 100%)`};
		height: 5rem;
		width: 100%;
		position: absolute;
		bottom: 0px;
	}
	@keyframes cube {
		from {
			transform: scale(0) rotate(0deg) translate(-50%, -50%);
			opacity: 1;
		}
		to {
			transform: scale(20) rotate(960deg) translate(-50%, -50%);
			opacity: 0;
		}
	}

	overflow: hidden;
	li {
		position: absolute;
		top: 80vh;
		left: 45vw;
		width: 10px;
		height: 10px;
		border: solid 1px ${(props) => props.theme.palette.bg.dark};
		color: transparent;
		transform-origin: top left;
		transform: scale(0) rotate(0deg) translate(-50%, -50%);
		animation: cube 8s ease-in forwards infinite;
	}
	li:nth-child(0) {
		animation-delay: 0s;
		left: 2vw;
		top: 10vh;
	}

	li:nth-child(1) {
		animation-delay: 2s;
		left: 87vw;
		top: 26vh;

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(2) {
		animation-delay: 4s;
		left: 50vw;
		top: 62vh;

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(3) {
		animation-delay: 6s;
		left: 29vw;
		top: 2vh;
	}

	li:nth-child(4) {
		animation-delay: 8s;
		left: 13vw;
		top: 76vh;
	}

	li:nth-child(5) {
		animation-delay: 10s;
		left: 54vw;
		top: 69vh;
	}

	li:nth-child(6) {
		animation-delay: 12s;
		left: 32vw;
		top: 71vh;
	}

	li:nth-child(7) {
		animation-delay: 14s;
		left: 2vw;
		top: 96vh;

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(8) {
		animation-delay: 16s;
		left: 95vw;
		top: 73vh;
	}

	li:nth-child(9) {
		animation-delay: 18s;
		left: 20vw;
		top: 30vh;
	}

	li:nth-child(10) {
		animation-delay: 20s;
		left: 57vw;
		top: 47vh;
	}

	li:nth-child(11) {
		animation-delay: 22s;
		left: 48vw;
		top: 22vh;

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(12) {
		animation-delay: 24s;
		left: 8vw;
		top: 92vh;
	}

	li:nth-child(13) {
		animation-delay: 26s;
		left: 39vw;
		top: 43vh;
	}

	li:nth-child(14) {
		animation-delay: 28s;
		left: 77vw;
		top: 54vh;
	}

	li:nth-child(15) {
		animation-delay: 30s;
		left: 62vw;
		top: 9vh;
	}

	li:nth-child(16) {
		animation-delay: 32s;
		left: 18vw;
		top: 84vh;
	}

	li:nth-child(17) {
		animation-delay: 34s;
		left: 91vw;
		top: 3vh;
	}

	li:nth-child(18) {
		animation-delay: 36s;
		left: 65vw;
		top: 66vh;

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(19) {
		animation-delay: 38s;
		left: 82vw;
		top: 55vh;
		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(20) {
		animation-delay: 40s;
		left: 62vw;
		top: 14vh;
	}

	li:nth-child(21) {
		animation-delay: 42s;
		left: 30vw;
		top: 46vh;
	}

	li:nth-child(22) {
		animation-delay: 44s;
		left: 75vw;
		top: 40vh;
	}

	li:nth-child(23) {
		animation-delay: 46s;
		left: 58vw;
		top: 33vh;
		border-color: ${(props) => props.theme.palette.bg.dark};

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(24) {
		animation-delay: 48s;
		left: 15vw;
		top: 86vh;
	}

	li:nth-child(25) {
		animation-delay: 50s;
		left: 67vw;
		top: 51vh;
		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(26) {
		animation-delay: 52s;
		left: 45vw;
		top: 6vh;
		border-color: ${(props) => props.theme.palette.bg.dark};

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(27) {
		animation-delay: 54s;
		left: 6vw;
		top: 97vh;
		border-color: ${(props) => props.theme.palette.bg.dark};

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(28) {
		animation-delay: 56s;
		left: 94vw;
		top: 28vh;
	}

	li:nth-child(29) {
		animation-delay: 58s;
		left: 73vw;
		top: 16vh;
		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(30) {
		animation-delay: 60s;
		left: 84vw;
		top: 35vh;
	}

	li:nth-child(31) {
		animation-delay: 62s;
		left: 44vw;
		top: 88vh;
	}

	li:nth-child(32) {
		animation-delay: 64s;
		left: 86vw;
		top: 91vh;
		border-color: ${(props) => props.theme.palette.bg.dark};

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(33) {
		animation-delay: 66s;
		left: 11vw;
		top: 81vh;
		border-color: ${(props) => props.theme.palette.bg.dark};

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(34) {
		animation-delay: 68s;
		left: 42vw;
		top: 38vh;
		border-color: ${(props) => props.theme.palette.bg.dark};

		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(35) {
		animation-delay: 70s;
		left: 24vw;
		top: 18vh;
		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(36) {
		animation-delay: 72s;
		left: 36vw;
		top: 24vh;
		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(37) {
		animation-delay: 74s;
		left: 26vw;
		top: 77vh;
		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(38) {
		animation-delay: 76s;
		left: 99vw;
		top: 59vh;
		border-color: ${(props) => props.theme.palette.bg.dark};
	}

	li:nth-child(39) {
		animation-delay: 78s;
		left: 70vw;
		top: 64vh;
	}
`;
