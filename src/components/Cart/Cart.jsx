import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap';

export default function Cart(item) {
	//  const [cartItems, setCartItems] = useState([localStorage.get()]);
   
  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(itemId) {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  }

  function updateQuantity(itemId, newQuantity) {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  }

  return (
 	<section className="section-cart">
			<header className="section-cart__header">
				<div className="container">
					<h1 className='title-1'>Корзина товаров</h1>
				</div>
			</header>
			<div className="section-cart__body">
				<div className="container">
					<Card key={item.id}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>Носки</Card.Title>
          <Card.Text> 990 рублей</Card.Text>
          <Form>
            <Form.Group >
              <Form.Label>Кол-во:</Form.Label>
              <div className="d-flex align-items-center">
                {/* <Button variant="outline-primary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button> */}
                <Form.Control type="number" value={item.quantity} onChange={e => updateQuantity(item.id, e.target.value)} />
                {/* <Button variant="outline-primary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button> */}
              </div>
            </Form.Group>
          </Form>
          <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
        </Card.Body>
      </Card>
				</div>
			</div>
    </section>

  )
}
