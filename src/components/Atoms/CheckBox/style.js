import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
export const StyledCheckbox = styled(Checkbox)`
	&& {
		border-radius: 1rem;
		color: ${(props) =>
			props.disabled
				? props.theme.palette.colors.primaryGrey
				: props.color
				? props.color
				: props.theme.palette.secondary.main};
	}
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
	&& {
		span:nth-child(2) {
			font-weight: ${(props) => (props.checked ? 750 : 400)};
			color: ${(props) =>
				props.disabled
					? props.theme.palette.colors.primaryGrey
					: props.fontColor
					? props.fontColor
					: props.theme.palette.secondary.main};
		}
	}
`;
