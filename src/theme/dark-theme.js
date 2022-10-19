//import { createTheme } from "@material-ui/core/styles";
import { typography } from "./typography";
import contencioColors from "./colors";
//import MADE_TOMMY_Regular from "../assets/fonts/made_tommy/MADE_TOMMY_Regular.otf";

const DarkTheme = {
	overrides: {
		MuiPaper: {
			root: {
				backgroundColor: contencioColors.themeDarkPrimary,
			},
		},
		MuiBadge: {
			badge: {
				backgroundColor: "#f50057",
			},
		},
	},
	palette: {
		mode: "dark",

		// DEFAULT MUI VARIABLES
		common: {
			black: "#000",
			white: "#fff",
		},

		primary: {
			main: contencioColors.primaryDark,
		},
		secondary: {
			main: contencioColors.primaryWhite,
		},
		text: {
			primary: "rgba(255, 255, 255, 0.87)",
			secondary: "rgba(255, 255, 255, 0.54)",
			disabled: "rgba(255, 255, 255, 0.38)",
			hint: "rgba(255, 255, 255, 0.38)",
		},
		divider: "rgba(255,255,255, 0.12)",
		success: {
			light: "#81c784",
			main: "#4caf50",
			dark: "#388e3c",
			contrastText: "rgba(255, 255, 255, 0.87)",
		},
		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "#fff",
		},
		// CUSTOM VARIABLES
		bg: {
			primary: contencioColors.themeDarkPrimary,
			accent: contencioColors.themeDarkAccent,
			dark: contencioColors.themeDarkDark,
		},
		contrast: {
			primary: contencioColors.primaryWhite,
			accent: contencioColors.accentWhite,
			dark: contencioColors.darkWhite,
		},
		colors: contencioColors,
	},
	typography: typography,
};

export default DarkTheme;
