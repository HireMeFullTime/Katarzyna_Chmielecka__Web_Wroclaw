import type {FC} from 'react';
import {useDispatch} from 'react-redux';

import Button from './Button';
import type {ProductListProps} from '../types/types';
import {addToCart} from '../store/slices/cartSlice';

const ProductList: FC<ProductListProps> = ({products}) => {
	const dispatch = useDispatch();
	return (
		<>
			{products.map(product => (
				<li key={product.id} className='home-page__product-list-item'>
					<span>{product.name}:</span>
					<span className='home-page__product-list-item-price'>{product.price.main + product.price.fractional / 100} zł</span>
					<Button name='Dodaj do koszyka' onClick={() => dispatch(addToCart(product))} />
				</li>
			))}
		</>
	);
};
export default ProductList;
