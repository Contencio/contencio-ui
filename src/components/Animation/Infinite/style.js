import styled from "styled-components";

export const StyledAnimationInfinite = styled.div`
	background: ${(props) => props.theme.palette.bg.primary};
	/* Cool infinite background scrolling animation.
 * Twitter: @kootoopas
 */

	/* Animations */
	@-webkit-keyframes bg-scrolling-reverse {
		100% {
			background-position: 50px 50px;
		}
	}
	@-moz-keyframes bg-scrolling-reverse {
		100% {
			background-position: 50px 50px;
		}
	}
	@-o-keyframes bg-scrolling-reverse {
		100% {
			background-position: 50px 50px;
		}
	}
	@keyframes bg-scrolling-reverse {
		100% {
			background-position: 50px 50px;
		}
	}

	@-webkit-keyframes bg-scrolling {
		0% {
			background-position: 50px 50px;
		}
	}
	@-moz-keyframes bg-scrolling {
		0% {
			background-position: 50px 50px;
		}
	}
	@-o-keyframes bg-scrolling {
		0% {
			background-position: 50px 50px;
		}
	}
	@keyframes bg-scrolling {
		0% {
			background-position: 50px 50px;
		}
	}
	position: relative;
	background: ${(props) =>
		props.theme.palette.mode === "dark"
			? `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVRoge3awQ3DMBDEQJ6REtV/K/IzBSSAKYNTwfK/s9bawACbc82Hb8Q8POYX++L8CIC5nl7wL4XYFGJTiE0hNoXYFGJTiE0hNoXYFGJTiE0hNoXYFGJTiE0hNoXYFGJTiE0hNoXYFGLzqpDTT2cA+wb5AAhiuAXmVgAAAABJRU5ErkJggg==') repeat 0 0`
			: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkElEQVRoge3a0QnCUAyF4cQRbqGOWDeykCxosTMch1Dof+V8kPf8eU7u+1Pb9sjjeCkmta73DElRVZIUs05VKc/zrTGWvPqq37pdvcCvOITGITQOoXEIjUNoHELjEBqH0DiExiE0DqFxCI1DaBxC4xAah9A4hMYhNA6hcQiNQ2gcQvM/IWMs2d3TPp1FRHS3Pik6p0nD6X+BAAAAAElFTkSuQmCC")
			repeat 0 0`};

	//backdrop-filter: invert(80%);

	-webkit-animation: bg-scrolling-reverse 0.92s infinite; /* Safari 4+ */
	-moz-animation: bg-scrolling-reverse 0.92s infinite; /* Fx 5+ */
	-o-animation: bg-scrolling-reverse 0.92s infinite; /* Opera 12+ */
	animation: bg-scrolling-reverse 0.92s infinite; /* IE 10+ */
	-webkit-animation-timing-function: linear;
	-moz-animation-timing-function: linear;
	-o-animation-timing-function: linear;
	animation-timing-function: linear;

	.blur {
		background: ${(props) =>
			`linear-gradient(0deg, ${props.theme.palette.bg.primary} 0%, rgba(255, 255, 255, 0) 100%)`};
		height: 5rem;
		width: 100%;
		position: absolute;
		bottom: 0px;
	}
`;
