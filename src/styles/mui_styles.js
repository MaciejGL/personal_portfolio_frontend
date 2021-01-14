import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	footer_typography: {
		color: theme.palette.contrast.main,
	},
	footer_container: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: '60px',
	},
	btn_scroll_top: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));
