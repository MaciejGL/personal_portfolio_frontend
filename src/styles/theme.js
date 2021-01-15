import { createMuiTheme } from '@material-ui/core/styles';

export const theme = (isDarkMode) =>
	createMuiTheme({
		palette: {
			primary: { main: '#335AC0' },
			secondary: { main: '#3570CA' },
			contrast: { main: '#2AB987' },
			text_primary: { main: '#292826' },
			text_secondary: { main: '#696969' },
			type: isDarkMode ? 'dark' : 'light',
			background: {
				default: isDarkMode ? '#292826' : '#fff',
				paper: isDarkMode ? '#292826' : '#fff',
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
				fontSize: '4rem',
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
			h4: {
				fontSize: '1.8rem',
				fontWeight: 300,
			},
			body1: {
				color: '#696969',
				lineHeight: 1.8,
			},
		},
		zIndex: {
			appBar: 1251,
			modal: 1250,
		},
	});
