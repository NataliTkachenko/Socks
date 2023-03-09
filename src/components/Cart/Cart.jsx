import React from 'react'
import CartPage from "./CartPage"
import { Route, Routes } from 'react-router-dom'

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
					<Routes>
						< Route path = "/cartpage"  element = {<CartPage/>} />
						</Routes>
					
				</div>
			</div>
    </section>

  )
}
