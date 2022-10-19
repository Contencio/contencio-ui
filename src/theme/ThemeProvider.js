import React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core";
import { AppStyles } from "./AppStyles";
import { createTheme } from "@material-ui/core/styles";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeProvider = ({ theme, children }) => {
	const nextTheme = Object.assign({}, theme);
	const muTheme = createTheme(nextTheme);

	return (
		<>
			<StylesProvider injectFirst>
				<MuiThemeProvider theme={muTheme}>
					<StyledThemeProvider theme={nextTheme}>
						<CssBaseline />
						<AppStyles />
						{children}
					</StyledThemeProvider>
				</MuiThemeProvider>
			</StylesProvider>
		</>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
	theme: PropTypes.object.isRequired,
};

export default ThemeProvider;
