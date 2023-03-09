import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap';

export default function Cart() {
  const [socks, setSocks] = useState([]);

   useEffect(() => {
    const sockData = localStorage.getItem('cart');
    if (sockData) {
      setSocks(JSON.parse(sockData));
    }
  }, []);


  return (
    <>
  
 	<section className="section-cart">
			<header className="section-cart__header">
				<div className="container">
					<h1 className='title-1'>Корзина товаров</h1>
				</div>
			</header>
			<div className="section-cart__body">
				<div className="container">
          <div>
					{socks.map((sock) => (
        <Card key={sock.color}>
        <Card.Img variant="top" />
           <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', backgroundColor: `${sock.color}` }} className="color" />
          <img style={{ position: 'absolute' }} className="pattern" src={`${sock.pattern}`} alt="" />
          <img style={{ position: 'absolute' }} className="pic" src={`${sock.image}`} alt="" />
          <img style={{ position: 'absolute' }} className="sock" src="/Img/sock.png" alt="" />
        </div>
        <Card.Body>
          <Card.Title>Носки</Card.Title>
          <Card.Text> 990 рублей</Card.Text>
        </Card.Body>
      </Card>
         ))}
    </div>
				</div>
			</div>
    </section>
</>
  )
}
