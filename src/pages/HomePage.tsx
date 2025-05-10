import {Link} from 'react-router-dom';

import ProductList from '../components/ProductList';
import products from '../products.json';

function HomePage() {
	return (
		<>
			<ul>
				<ProductList products={products} />
			</ul>
			<Link to={'/cart'}>Koszyk</Link>
		</>
	);
}
export default HomePage;
