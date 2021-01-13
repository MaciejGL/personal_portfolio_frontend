import { createMuiTheme } from '@material-ui/core/styles';

export const theme = (isDarkMode) =>
	createMuiTheme({
		palette: {
			primary: { main: '#292826' },
			secondary: { main: '#998B6C' },
			error: { main: '#710000' },
			contrast: { main: '#A9A393' },
			text_primary: { main: '#292826' },
			text_secondary: { main: '#5F5747' },
			type: isDarkMode ? 'dark' : 'light',
			background: {
				default: isDarkMode ? '#292826' : '#FFF3D1',
				paper: isDarkMode ? '#292826' : '#FFF3D1',
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
		},
		zIndex: {
			appBar: 1251,
			modal: 1250,
		},
	});
