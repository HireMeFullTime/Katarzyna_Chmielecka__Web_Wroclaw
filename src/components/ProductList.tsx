import type {FC} from 'react';

import Button from './Button';
import type {ProductListProps} from '../types/types';

const ProductList: FC<ProductListProps> = ({products}) => {
	const addToCart = (id: number) => console.log('Produkt dodany, id:', id);
	return (
		<ul>
			{products.map(product => (
				<li key={product.id}>
					<span>{product.name}:</span>
					<span>
						{product.price.main}.{product.price.fractional}
					</span>
					<Button name='Dodaj do koszyka' onClick={() => addToCart(product.id)} />
				</li>
			))}
		</ul>
	);
};
export default ProductList;
