import { makeStyles } from '@material-ui/core/styles';

export const useStyles_Navigation = makeStyles((theme) => ({
	DrawerRoot: {
		'&.MuiDrawer-paper': {
			width: '66%',
			maxWidth: '300px',
			height: '100%',
			justifyContent: 'space-between',
		},
	},
}));

export const useStyles_Footer = makeStyles((theme) => ({
	footer_typography: {
		color: theme.palette.accent.main,
	},
	btn_scroll_top: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export const useStyles_Homepage = makeStyles((theme) => ({
	// Welcome
	h3: {
		margin: '10px 0',
		fontWeight: 400,
	},

	// About_me
	paragraph: {
		margin: '25px 0',
		color: 'white',
	},

	// Badge
	display_big: {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '95%',
		maxWidth: 1100,
		margin: '50px auto',
	},
	display_sm: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		margin: '3rem 0',
	},
	containerSM: {
		display: 'flex',
		flexWrap: 'wrap',
		maxWidth: '325px',
		margin: '1rem',
	},

	// Badge_column
	badge_column_technologies: {
		margin: '2rem 0 0',
	},
	badge_column_text_center: {
		margin: '10px 0 ',
		textAlign: 'center',
	},
}));

export const useStyles_Project_card = makeStyles((theme) => ({
	details: {
		margin: '20px 0 0',
	},
	project_card_title: {
		margin: '20px 0',
	},
	project_card_short_description: {
		paddingBottom: '20px',
		maxHeight: '170px',
		overflowY: 'scroll',
	},
}));

export const useStyles_InTouch = makeStyles((theme) => ({
	text: {
		margin: '2rem 0',
		maxWidth: '500px',
	},
	email: {
		textDecoration: 'underline',
		fontWeight: 500,
		color: theme.palette.primary.main,
	},
}));
export const useStyles_Project = makeStyles((theme) => ({
	project_title: {
		fontWeight: 500,
	},
	project_title_sm: {
		fontSize: '3rem',
		fontWeight: 500,
	},
	project_full_description: {
		margin: '30px 0',
	},
	tech_margin: {
		fontWeight: 600,
		color: 'black',
		margin: '10px 0',
	},
	project_stack_color: {
		color: '#000',
		fontWeight: 300,
	},
	project_link: {
		color: theme.palette.primary.main,
		transition: '0.2s',
		'&:hover': {
			color: theme.palette.accent.main,
		},
	},
	description_paragraph: {
		margin: '10px 0',
		maxWidth: '700px',
	},
}));
