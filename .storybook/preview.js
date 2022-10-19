import { addDecorator, configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";
import ThemeProvider from "../src//theme/ThemeProvider";
import logo from "../src/assets/svg/logo/wordmark/dark.svg";
import LightTheme from "../src/theme/light-theme";
import DarkTheme from "../src/theme/dark-theme";
import { withThemes } from "@react-theming/storybook-addon";

const themes = [LightTheme, DarkTheme];
//const themingDecorator = withThemes(ThemeProvider, themes);

export const onThemeSwitch = (context) => {
	const { theme } = context;
	const background = theme.palette.bg.primary;
	const parameters = {
		backgrounds: {
			default: background,
		},
		// Pass backgrounds: null to disable background switching at all
	};
	return {
		parameters,
	};
};

const themingDecorator = withThemes(ThemeProvider, themes, { onThemeSwitch });

addDecorator(themingDecorator);

addParameters({
	options: {
		theme: create({
			base: "light",
			brandImage: logo,
			brandTitle: "Contencio UI",
		}),
	},
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: "fullscreen",
};
