import React from 'react';

import '../styles/index.scss';

//ThemeProvider
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../styles/theme';

const App = ({ element }) => {
	console.log('Hello there general Kenobi!');
	return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export default App;
