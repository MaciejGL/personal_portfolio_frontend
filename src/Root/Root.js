import React from 'react';

import '../styles/index.scss';

//ThemeProvider
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../styles/theme';

const App = ({ element }) => {
	let hello = `%c Hi 👋! Welcome to my site!`;
	let styles_hello = ['font-size: 30px', 'font-family: monospace', 'background: white', 'display: inline-block', 'color: black', 'padding: 8px 19px'].join(';');
	console.log(hello, styles_hello);

	return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export default App;
