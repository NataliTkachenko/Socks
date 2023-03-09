import React from 'react'
import CartPage from "./CartPage"

export default function Cart() {
  return (
 	<section className="section-cart">
			<header className="section-cart__header">
				<div className="container">
					<h1 className='title-1'>Корзина товаров</h1>
				</div>
			</header>
			<div className="section-cart__body">
				<div className="container">
					< CartPage/>
				</div>
			</div>
    </section>

  )
}
