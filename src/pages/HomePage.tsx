import {Link} from 'react-router-dom';

import ProductList from '../components/ProductList';
import cart from '../../public/shop_icon.png';
import products from '../products.json';

function HomePage() {
	return (
		<div className='home-page'>
			<h1 className='home-page__title'>Zapraszamy na zakupy</h1>
			<ul className='home-page__product-list'>
				<ProductList products={products} />
			</ul>
			<Link to={'/cart'} className='home-page__link'>
				<img src={cart} alt='cart' />
				Koszyk
			</Link>
		</div>
	);
}
export default HomePage;
