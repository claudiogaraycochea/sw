import React, { Suspense } from 'react';
import '../ui/Fonts.css';
import '../ui/Normalize.css';
import '../ui/swUI.css';

import Router from '../routes/Router';

function App() {
	return (
		<Suspense fallback="loading">
			<div className='app'>
				<Router />
			</div>
		</Suspense>
	);
}

export default App;
