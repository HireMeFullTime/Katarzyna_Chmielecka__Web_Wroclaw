import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Button from '../components/Button';
import type {RootState} from '../store/store';

const SummaryPage = () => {
	const cart = useSelector((state: RootState) => state.cart.cart);

	const total = cart.reduce((sum, item) => sum + (item.price.main + item.price.fractional / 100) * item.quantity, 0);

	const handleOrder = () => {
		localStorage.setItem('lastOrder', JSON.stringify(cart));

		localStorage.setItem('lastOrderTotal', total.toFixed(2));

		window.location.href = '/Katarzyna_Chmielecka__Web_Wroclaw/order-confirmation.html';
	};

	return (
		<div>
			<h1>Podsumowanie zamówienia</h1>
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
									<td>{item.quantity}</td>
									<td>{((item.price.main + item.price.fractional / 100) * item.quantity).toFixed(2)} zł</td>
									<td></td>
								</tr>
							))}
						</tbody>
					</table>
					<h2>Do zapłaty: {total.toFixed(2)} zł</h2>
					<Button name={'Złóż zamówienie'} onClick={handleOrder} />
				</>
			)}
			<Link to={'/cart'}>Wróć do koszyka</Link>
		</div>
	);
};
export default SummaryPage;
