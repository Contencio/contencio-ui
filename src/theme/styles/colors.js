const styles = ({ theme }) =>
	Object.entries(theme.palette).map(
		([colorName, colorHex]) => `
        .text-${colorName} { color: ${colorHex} }
        .bg-${colorName} { background-color: ${colorHex} }
      `
	);

export default styles;
