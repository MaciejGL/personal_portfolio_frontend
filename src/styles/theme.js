import { createMuiTheme } from '@material-ui/core/styles';

export const theme = (isDarkMode) =>
	createMuiTheme({
		palette: {
			primary: { main: '#0d1321' },
			secondary: { main: '#c16200' },
			error: { main: '#710000' },
			// warning: { main: PALETTE.warning },
			// success: { main: PALETTE.success },
			text_primary: { main: ' #0d1321' },
			text_secondary: { main: '#161925' },
			// text_disabled: { main: PALETTE.text_disabled },
			// focus: { main: '#d38e0f', dense: '#E79800' },
			type: isDarkMode ? 'dark' : 'light',
			background: {
				default: isDarkMode ? '#121212' : '#fdfffc',
				paper: isDarkMode ? '#121212' : '#fdfffc',
			},
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
			h2: {
				margin: '1rem 0',
				fontSize: '2.5rem',
			},
			h3: {
				margin: '1rem 0',
				fontSize: '2rem',
				fontWeight: 300,
			},
		},
		zIndex: {
			appBar: 1251,
			modal: 1250,
		},
	});
