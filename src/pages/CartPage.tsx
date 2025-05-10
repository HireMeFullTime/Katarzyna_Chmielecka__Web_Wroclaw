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
		<div>
			<h1>Koszyk</h1>
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
							</tr>
						</thead>
						<tbody>
							{cart.map(item => (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>
										{item.price.main}.{item.price.fractional} zł
									</td>
									<td>
										<Button
											name='-'
											onClick={() => dispatch(decreaseQuantity(item.id))}
											disabled={item.quantity <= 1}
										/>
										{item.quantity}
										<button onClick={() => dispatch(addToCart(item))}>+</button>
									</td>
									<td>{((item.price.main + item.price.fractional / 100) * item.quantity).toFixed(2)} zł</td>
									<td>
										<button onClick={() => dispatch(removeFromCart(item.id))}>Usuń</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<h2>Do zapłaty: {total.toFixed(2)} zł</h2>

					<Link to={'/summary'}>Podsumowanie zamówienia</Link>
				</>
			)}
			<Link to={'/'}>Strona główna</Link>
		</div>
	);
};
export default CartPage;
