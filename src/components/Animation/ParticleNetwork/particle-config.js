const config = (theme) => {
	return {
		fullScreen: { enable: false },
		particles: {
			number: {
				value: 30,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: theme.palette.contrast.primary,
			},
			shape: {
				type: "polygon",
				stroke: {
					width: 1,
					color: theme.palette.contrast.primary,
				},
				polygon: {
					nb_sides: 4,
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 0.10422178395625899,
				random: true,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 36.076771369474265,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 160.3412060865523,
				color: theme.palette.contrast.primary,
				opacity: 0.4,
				width: 2,
			},
			move: {
				enable: true,
				speed: 3,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "bounce",
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "grab",
				},
				onclick: {
					enable: true,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 0.5,
					},
				},
				bubble: {
					distance: 400,
					size: 10,
					duration: 0.3,
					opacity: 1,
					speed: 3,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
	};
};

export default config;
