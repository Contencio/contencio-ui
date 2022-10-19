//import { createTheme } from "@material-ui/core/styles";
import typography from "./typography";

import contencioColors from "./colors";

const LightTheme = {
	overrides: {
		MuiPaper: {
			root: {
				backgroundColor: contencioColors.primaryWhite,
			},
		},
		MuiBadge: {
			badge: {
				background: "#f50057",

				colorPrimary: {
					background: "#f50057",
				},
			},

			colorPrimary: {
				backgroundColor: "#f50057",
			},
		},
	},

	palette: {
		mode: "light",

		// DEFAULT MUI VARIABLES
		common: {
			black: "#000",
			white: "#fff",
		},

		primary: {
			main: contencioColors.primaryWhite,
		},
		secondary: {
			main: contencioColors.primaryDark,
		},

		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.54)",
			disabled: "rgba(0, 0, 0, 0.38)",
			hint: "rgba(0, 0, 0, 0.38)",
		},
		divider: "rgba(0, 0, 0, 0.12)",

		success: {
			light: "#81c784",
			main: "#4caf50",
			dark: "#388e3c",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "#fff",
		},

		// CUSTOM VARIABLES

		bg: {
			primary: contencioColors.primaryWhite,
			accent: contencioColors.accentWhite,
			dark: contencioColors.darkWhite,
		},
		contrast: {
			primary: contencioColors.primaryDark,
			accent: contencioColors.accentDark,
			dark: contencioColors.darkDark,
		},
		colors: contencioColors,
	},
	typography: typography,
};

export default LightTheme;
