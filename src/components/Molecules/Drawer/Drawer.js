import React from "react";
import contencioColors from "../../../theme/colors.js";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Info from "@material-ui/icons/Info";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "../../Theme/Typography/Typography.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import { ListSubheader } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "../../Atoms/Avatar/Avatar.js";
import logo from "../../../assets/svg/logo/wordmark/dark.svg";
import IconButton from "../../Atoms/IconButton/IconButton.js";
import Button from "../../Atoms/Button/Button.js";
import Badge from "../../Atoms/Badge/Badge.js";
import Chip from "../../Atoms/Chip/Chip.js";
import Paper from "@material-ui/core/Paper";
import AnimationMovingGradient from "../../Animation/MovingGradient/AnimationMovingGradient.js";
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		width: "100%",
	},
	drawer: {
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("md")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		background: "white",
		boxShadow: "none",
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	subNested: {
		paddingLeft: theme.spacing(8),
	},

	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	content: {
		//flexGrow: 1,
		//	padding: theme.spacing(3),
	},
}));

const ResponsiveDrawer = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const [open, setOpen] = React.useState(true);
	const [subOpen, setSubOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const drawer = (
		<SideBar>
			<LogoZone className={classes.toolbar}>
				<Avatar
					variant={"text"}
					alt={"AreallyLongUsernameSir"}
					color="yellow"
					size="xsmall"
					isOnline={true}
				/>
			</LogoZone>
			<List>
				<ListItem selected={false} button>
					<ListItemIcon>
						<IconButton icon="home" size="small" />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>

				<ListItem selected={false} button>
					<ListItemIcon>
						<Badge value={12}>
							<IconButton icon="mail" size="small" />
						</Badge>
					</ListItemIcon>
					<ListItemText primary="Inbox" />
				</ListItem>

				<ListItem selected={false} button>
					<ListItemIcon>
						<IconButton icon="dashboard" size="small" />
					</ListItemIcon>

					<ListItemText primary="Dashboard" />
				</ListItem>

				<ListItem selected={false} button>
					<ListItemIcon>
						<IconButton icon="list" size="small" />
					</ListItemIcon>

					<ListItemText primary="List" />
				</ListItem>

				<ListItem button onClick={handleClick}>
					<ListItemIcon>
						<IconButton icon="category" size="small" />
					</ListItemIcon>

					<ListItemText primary="Categories" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem
							className={classes.nested}
							onClick={() => setSubOpen(!subOpen)}
						>
							<ListItemText primary="⚙️  Programming & Tech" />
							{subOpen ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<ListItem
							className={classes.nested}
							button
							onClick={() => setSubOpen(!subOpen)}
						>
							<ListItemText primary="🎨 Arts and Design" />
							{subOpen ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={subOpen} timeout="auto" unmountOnExit>
							<ListItem button className={classes.subNested}>
								<ListItemText primary="Smart Contacct" />
							</ListItem>
							<ListItem button className={classes.subNested}>
								<ListItemText primary="WebDev" />
							</ListItem>
						</Collapse>
					</List>
				</Collapse>
			</List>

			<Divider />
			<List
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Buying{" "}
					</ListSubheader>
				}
			>
				<ListItem selected={false} button>
					<ListItemText primary="Manage requests" />
				</ListItem>

				<ListItem selected={false} button>
					<ListItemText primary="Post a requests" />
				</ListItem>
			</List>

			<Divider />
			<List
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Selling
					</ListSubheader>
				}
			>
				<ListItem selected={false} button>
					<ListItemText primary="Manage gigs" />
				</ListItem>

				<ListItem selected={false} button>
					<ListItemText primary="Create a gig" />
				</ListItem>
			</List>
			<Divider />
			<List
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						General
					</ListSubheader>
				}
			>
				{["Settings", "Billing", "Logout", "English", "$ USD"].map(
					(text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					)
				)}
			</List>
		</SideBar>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root} style={{ padding: 0 }}>
			<StyledAppbar position="fixed" className={classes.appBar}>
				<Toolbar style={{ justifyContent: "space-between" }}>
					<IconButton
						onClick={handleDrawerToggle}
						icon="menu"
						variant="contained"
						size="small"
						className={classes.menuButton}
					/>
					<div className="flex" style={{ gap: 10 }}>
						<img src={logo} style={{ width: "145px" }} />
						<Chip
							variant="contained"
							label="TESTNET"
							size="small"
							weight={400}
							clickable={false}
							icon={<Info />}
						/>
					</div>
				</Toolbar>
			</StyledAppbar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation="css">
					<Drawer
						PaperProps={{
							sx: {
								borderLeft: "1px solid red",
							},
						}}
						classes={{
							paper: classes.drawerPaper,
						}}
						sx={{
							borderRight: "1px solid red",
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<Content className={classes.content} style={{ padding: "0px" }}>
				<div className={classes.toolbar} style={{ background: "none" }}></div>
				<AnimationMovingGradient alignItems="flex-start">
					<div className="flex-column align-items-center jutsify-content-center">
						<Typography variant="h3">Programming & Tech</Typography>
						<Button size="medium">How does it work?</Button>
					</div>
				</AnimationMovingGradient>

				<Typography variant="h5">Popular in Programming & Tech</Typography>
				<div className="flex align-items-center" style={{ gap: 10 }}>
					<Chip label="Sper thing" />
					<Chip label="Sper thing" />
					<Chip label="Sper thing" />
					<Chip label="Sper thing" />
				</div>
				<Paper elevation={2} style={{ width: "100px", height: "100px" }} />
			</Content>
		</div>
	);
};

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;

const LogoZone = styled.div`
	//border-bottom: 1px solid ${(props) => props.theme.palette.colors.darkWhite};
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	position: sticky;
	top: 0;
	z-index: 2;
	background: ${(props) => props.theme.palette.bg.primary};
	font-weight: inherit;
`;
const StyledAppbar = styled(AppBar)`
	border-bottom: 1px solid ${(props) => props.theme.palette.divider};
	background: ${(props) => props.theme.palette.bg.primary};
	display: flex;
	justify-content: space-between;
`;
const SideBar = styled.div`
	background: ${(props) => props.theme.palette.bg.primary};
	color: ${(props) => props.theme.palette.contrast.primary};
	* {
		//	font-weight: 200;
	}
`;

const Content = styled.main`
	background: ${(props) => props.theme.palette.bg.primary};
	color: ${(props) => props.theme.palette.contrast.primary};
	width: 100%;
	border: none;
	padding: 0px;
`;
