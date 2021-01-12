import { createMuiTheme } from '@material-ui/core/styles';

export const theme = (isDarkMode) =>
	createMuiTheme({
		palette: {
			// primary: { main: PALETTE.primary },
			// secondary: { main: PALETTE.secondary },
			// error: { main: PALETTE.error },
			// warning: { main: PALETTE.warning },
			// success: { main: PALETTE.success },
			// text_primary: { main: PALETTE.text_primary },
			// text_secondary: { main: PALETTE.text_secondary },
			// text_disabled: { main: PALETTE.text_disabled },
			// focus: { main: '#d38e0f', dense: '#E79800' },
			type: isDarkMode ? 'dark' : 'light',
			// background: {
			// 	default: isDarkMode ? BACKGROUND.dark : BACKGROUND.light,
			// 	paper: isDarkMode ? BACKGROUND.dark : BACKGROUND.light,
			// },
		},
		typography: {
			fontFamily: [
				'Lato',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
			h1: {
				margin: '1rem 0',
				fontSize: '3rem',
				textAlign: 'center',
			},
		},
		zIndex: {
			appBar: 1251,
			modal: 1250,
		},
	});
