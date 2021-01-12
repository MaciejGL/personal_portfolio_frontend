import React from 'react';

import '../styles/index.scss';

//ThemeProvider
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../styles/theme';

const App = ({ element }) => {
	const isDarkMode = false;
	return <ThemeProvider theme={theme(isDarkMode)}>{element}</ThemeProvider>;
};

export default App;
