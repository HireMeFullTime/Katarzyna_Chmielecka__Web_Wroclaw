import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import BasketPage from './pages/BasketPage';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';

function App() {
	return (
		<div className='App'>
      <BrowserRouter basename='/Katarzyna_Chmielecka__Web_Wroclaw'>
			<Routes>
				<Route path='/Katarzyna_Chmielecka__Web_Wroclaw' element={<HomePage />} />
				<Route path='/Katarzyna_Chmielecka__Web_Wroclaw/basket' element={<BasketPage />} />
				<Route path='/Katarzyna_Chmielecka__Web_Wroclaw/summary' element={<SummaryPage />} />
			</Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
