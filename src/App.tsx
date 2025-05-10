import './App.css';

import {Route, Routes} from 'react-router-dom';

import BasketPage from './pages/BasketPage';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='/summary' element={<SummaryPage />} />
			</Routes>
		</div>
	);
}

export default App;
