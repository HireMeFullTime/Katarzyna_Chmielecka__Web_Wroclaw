import './index.css';

import {HashRouter} from 'react-router-dom';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>
);
