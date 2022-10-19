import PropTypes from "prop-types";
import StyledAvatar from "./style";
import { OnlineBadge } from "../Badge/style";
import Typography from "../../Theme/Typography/Typography.js";

const Avatar = ({
	alt,
	color,
	fontColor,
	size,
	onClick,
	isOnline = false,
	src = "",
	variant,
	walletAddress,
}) => {
	const Icon = () => (
		<StyledAvatar
			alt={alt}
			color={color}
			onClick={onClick}
			variant="rounded"
			size={size}
			src={src}
		>
			{alt?.charAt(0)?.toUpperCase()}
		</StyledAvatar>
	);
	const OnlineAvatar = () => (
		<div
			style={{
				position: "relative",
				width: "fit-content",
				height: "fit-content",
			}}
		>
			<Icon />

			<OnlineBadge size={size} />
		</div>
	);

	const Username = () => (
		<Typography
			weight="bold"
			color={fontColor}
			sx={{
				fontSize:
					size === "mini"
						? "0.6rem"
						: size === "xsmall"
						? "1rem"
						: size === "small"
						? "1.4rem"
						: size === "medium"
						? "2rem"
						: size === "large"
						? "2.8rem"
						: size === "xlarge"
						? "4.2rem"
						: "1.4rem",
			}}
		>
			{alt}
		</Typography>
	);

	const WalletAddress = () => (
		<Typography
			sx={{
				fontSize:
					size === "mini"
						? "0.09rem"
						: size === "xsmall"
						? "0.3rem"
						: size === "small"
						? "0.7rem"
						: size === "medium"
						? "1.3rem"
						: size === "large"
						? "2.1rem"
						: size === "xlarge"
						? "3.5rem"
						: "0.7rem",
			}}
			weight={300}
		>
			{walletAddress}
		</Typography>
	);
	return (
		<div className="flex align-items-center" style={{ gap: 8 }}>
			{!isOnline ? <Icon /> : <OnlineAvatar />}
			{variant === "text" && (
				<div className="flex-column">
					<Username />

					{walletAddress && <WalletAddress />}
				</div>
			)}
		</div>
	);
	if (!isOnline) return <Icon />;
	return <OnlineAvatar />;
};

Avatar.propTypes = {
	alt: PropTypes.string,
	color: PropTypes.string,
	fontColor: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.string,
	isOnline: PropTypes.bool,
	src: PropTypes.string,
	variant: PropTypes.string,
};

Avatar.defaultProps = {
	alt: "Oscar Macieira",
	color: "red",
	size: "xlarge",
	isOnline: false,
	src: "",
	variant: "",
};
export default Avatar;
