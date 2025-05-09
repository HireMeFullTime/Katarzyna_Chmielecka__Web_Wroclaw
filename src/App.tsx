import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import BasketPage from './pages/BasketPage';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';

function App() {
	return (
		<div className='App'>
      <BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='/summary' element={<SummaryPage />} />
			</Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
