import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../components/Button';
import type {RootState} from '../store/store';
import {addToCart, decreaseQuantity, removeFromCart} from '../store/slices/cartSlice';

const CartPage = () => {
	const cart = useSelector((state: RootState) => state.cart.cart);
	const dispatch = useDispatch();
	const total = cart.reduce((sum, item) => sum + (item.price.main + item.price.fractional / 100) * item.quantity, 0);
	return (
		<div className='cart-page'>
			<h1 className='cart-page__title'>Koszyk</h1>
			{cart.length === 0 ? (
				<p>Koszyk jest pusty 😥</p>
			) : (
				<>
					<table>
						<thead>
							<tr>
								<th>Produkt</th>
								<th>Cena</th>
								<th>Ilość</th>
								<th>Podsuma</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{cart.map(item => (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>
										{item.price.main}.{item.price.fractional} zł
									</td>
									<td className='cart-page__button-container'>
										<Button
											name='-'
											onClick={() => dispatch(decreaseQuantity(item.id))}
											disabled={item.quantity <= 1}
										/>
										{item.quantity}
										<Button name='+' onClick={() => dispatch(addToCart(item))} />
									</td>
									<td>{((item.price.main + item.price.fractional / 100) * item.quantity).toFixed(2)} zł</td>
									<td>
										<Button name='Usuń' onClick={() => dispatch(removeFromCart(item.id))} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<h2 className='cart-page__price'>Do zapłaty: {total.toFixed(2)} zł</h2>

					<Link to={'/summary'}>Podsumowanie zamówienia</Link>
				</>
			)}
			<Link to={'/'} className='cart-page__link--home'>
				Kontynuuj zakupy
			</Link>
		</div>
	);
};
export default CartPage;
