import React from 'react';

import '@mantine/core/styles.css';
import {MantineProvider, createTheme} from '@mantine/core';
import ReactDOM from 'react-dom/client';

import App from './App';

const theme = createTheme({
	fontFamily: 'pill-gothic, sans-serif',
	headings: {fontFamily: 'pill-gothic-header, sans-serif'},
	colors: {dark: ['', '', '', '', '', '', '', '#000000']}
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MantineProvider theme={theme}>
			<App />
		</MantineProvider>
	</React.StrictMode>
);
