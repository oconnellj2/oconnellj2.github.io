import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import PageTemplate from './components/PageTemplate';
import Home from './routes/Home';
import MTC from './routes/MTC';
import SportsAPI from './routes/SportsAPI';

const App = () => (
	<BrowserRouter>
		<PageTemplate>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mtc" element={<MTC />} />
				<Route path="/sports-api" element={<SportsAPI />} />
			</Routes>
		</PageTemplate>
	</BrowserRouter>
);

export default App;
