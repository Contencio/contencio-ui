import "styled-components";
import { Theme } from "@mui/material/styles";

interface ContentioTheme {
	bg: {
		primary: string;
		accent: string;
		dark: string;
	};
	contrast: {
		primary: string;
		accent: string;
		dark: string;
	};
	colors: {
		primaryRed: string;
		accentRed: string;
		darkRed: string;
		primaryPink: string;
		accentPink: string;
		darkPink: string;
		primaryPurple: string;
		accentPurple: string;
		darkPurple: string;

		primaryBlue: string;
		accentBlue: string;
		darkBlue: string;
		primaryGreen: string;
		accentGreen: string;
		darkGreen: string;
		primaryYellow: string;
		accentYellow: string;
		darkYellow: string;
		primaryOrange: string;
		accentOrange: string;
		darkOrange: string;
		primaryBrown: string;
		accentBrown: string;
		darkBrown: string;
		primaryGrey: string;
		accentGrey: string;
		darkGrey: string;
		primaryWhite: string;
		accentWhite: string;
		darkWhite: string;
		primaryDark: string;
		accentDark: string;
		darkDark: string;
		pinkBlue: string;
		blueGreen: string;
		bluePurple: string;
		deepSpace: string;
		megaTron: string;
		emeraldWater: string;
		themeDarkPrimary: string;
		themeDarkAccent: string;
		themeDarkDark: string;
	};
}
declare module "@mui/material/styles" {
	interface Theme extends ContentioTheme {}
	interface ThemeOptions extends ContentioTheme {}
}

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
