import React from 'react';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import PageTemplate from './components/PageTemplate';
import Home from './routes/Home';
import PassGen from './routes/PassGen';
import QRFI from './routes/QRFI';
import SGOMS from './routes/SGOMS';
import ZipCodes from './routes/ZipCodes';

const App = () => (
	<Router>
		<PageTemplate>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pass-gen" element={<PassGen />} />
				<Route path="/qr-fi" element={<QRFI />} />
				<Route path="/sgoms" element={<SGOMS />} />
				<Route path="/zip-viz" element={<ZipCodes />} />
			</Routes>
		</PageTemplate>
	</Router>
);

export default App;
