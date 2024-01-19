import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import PageTemplate from './components/PageTemplate';
import Arrakis from './routes/Arrakis';
import Home from './routes/Home';

const App = () => (
	<BrowserRouter>
		<PageTemplate>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/arrakis" element={<Arrakis />} />
			</Routes>
		</PageTemplate>
	</BrowserRouter>
);

export default App;
