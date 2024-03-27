import React from 'react';

import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import PageTemplate from './components/PageTemplate';
import Home from './routes/Home';
import MTC from './routes/MTC';
import QRWifi from './routes/QRWifi';
import SportsAPI from './routes/SportsAPI';

const App = () => (
	<Router>
		<PageTemplate>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mtc" element={<MTC />} />
				<Route path="/qr-fi" element={<QRWifi />} />
				<Route path="/sports-api" element={<SportsAPI />} />
			</Routes>
		</PageTemplate>
	</Router>
);

export default App;
