import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

 export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

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

  function renderCartItem(item) {
    return (
      <Card key={item.id}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
          <Form>
            <Form.Group controlId={`quantity_${item.id}`}>
              <Form.Label>Quantity:</Form.Label>
              <div className="d-flex align-items-center">
                <Button variant="outline-primary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <Form.Control type="number" value={item.quantity} onChange={e => updateQuantity(item.id, e.target.value)} />
                <Button variant="outline-primary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
              </div>
            </Form.Group>
          </Form>
          <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
        </Card.Body>
      </Card>
    );
  }

return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(renderCartItem)}
          <Button variant="success" className="mt-3">Checkout</Button>
          <Button variant="warning" className="mt-3 ml-3" onClick={() => setCartItems([])}>Clear Cart</Button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
	  }