import React from 'react';

import '../styles/index.scss';

//ThemeProvider
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../styles/theme';

const App = ({ element }) => {
	const isDarkMode = false;
	console.log('Hello there general Kenobi!');
	return <ThemeProvider theme={theme(isDarkMode)}>{element}</ThemeProvider>;
};

export default App;
