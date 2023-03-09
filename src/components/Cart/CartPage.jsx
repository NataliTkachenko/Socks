import React from 'react'

export default function CartPage() {
    const Cart = () => {
	const [cart, setCart] = useState(data);
	const [total, setTotal] = useState({
			price: cart.reduce((prev, curr)=> prev + curr.priceTotal, 0),
			count: cart.reduce((prev, curr)=> prev + curr.count, 0)
	})

	useEffect(() => {
		setTotal({
			price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
			count: cart.reduce((prev, curr) => prev + curr.count , 0),
		});
	}, [cart])

	const deleteProduct = (id) => {
		setCart((cart) => cart.filter((product)=> id !== product.id));
	}

	const increase = (id) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: product.count + 1,
						priceTotal: (product.count + 1) * product.price,
					};
				}
				return product
			})
		})
	}

	const decrease = (id) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {

					const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

					return {
						...product,
						count: newCount,
						priceTotal: newCount * product.price,
					};
				}
				return product
			})
		})
	}

	const changeValue = (id, value) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: value,
						priceTotal: value * product.price
					}
				}
				return product
			})
		})
	}

	const products = cart.map((product) => {
		return (
			<Product
				product={product}
				key={product.id}
				deleteProduct={deleteProduct}
				increase={increase}
				decrease={decrease}
				changeValue={changeValue}
			/>
		);
	})
}
    return (
		<section className='cart'>
				<header className='cart-header'>
			<div className='cart-header__title'>наименование</div>
			<div className='cart-header__count'>количество</div>
			<div className='cart-header__cost'>стоимость</div>
		</header>
			{products}
				<footer className='cart-footer'>
			<div className='cart-footer__count'>{count} ед.</div>
			<div className='cart-footer__price'>
				{formatPrice(price)} руб.
			</div>
		</footer> 
        {/* total={total} /> */}
		</section>
	);
  
}
