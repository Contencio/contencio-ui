import PropTypes from "prop-types";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import config from "./particle-config.js";
import { StyledAnimationNetwork } from "./style";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";

const AnimationMovingGradient = ({
	width = "100%",
	height = "auto",
	alignItems = "center",
	justifyContent = "center",
	blur = false,
	customConfig,
	children,
}) => {
	const theme = useContext(ThemeContext);
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	return (
		<StyledAnimationNetwork
			style={{
				width: width,
				height: height,
				position: "relative",
				overflow: "hidden",
				display: "flex",
				justifyContent: justifyContent,
				alignItems: alignItems,
			}}
		>
			<Particles
				id="network"
				init={particlesInit}
				options={customConfig ? customConfig : config(theme)}
			/>
			{blur && <div className="blur" />}
			<div style={{ zIndex: 1 }}>{children}</div>
		</StyledAnimationNetwork>
	);
};
AnimationMovingGradient.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	alignItems: PropTypes.string,
	children: PropTypes.element,
	justifyContent: PropTypes.string,
	blur: PropTypes.bool,
	customConfig: PropTypes.object,
};
AnimationMovingGradient.defaultProps = {
	width: "100%",
	height: "auto",
	alignItems: "center",
	justifyContent: "center",
	blur: false,
};

export default AnimationMovingGradient;
