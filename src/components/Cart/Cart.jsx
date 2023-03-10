import React, { useState, useEffect } from 'react';
import { Card, Button, Form , Modal} from 'react-bootstrap';



export default function Cart() {
  const [socks, setSocks] = useState([]);
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const sockData = localStorage.getItem('cart');
    if (sockData) {
      setSocks(JSON.parse(sockData));
    }
  }, []);

  const handleDeleteSock = (color) => {
    const updatedSocks = socks.filter(sock => sock.color !== color);
    setSocks(updatedSocks);
    localStorage.setItem('cart', JSON.stringify(updatedSocks));
  }

  const handleQtyChange = (color, e) => {
    const [show, setShow] = useState(false);

 
    const qty = parseInt(e.target.value);
    const updatedSocks = socks.map(sock => {
      if (sock.color === color) {
        return {
          ...sock,
          qty
        }
      }
      return sock;
    });
    setSocks(updatedSocks);
    localStorage.setItem('cart', JSON.stringify(updatedSocks));
  }
 const signUP = () =>{
 window.location = '/user/signup';
 }
  const signIn = () =>{
 window.location = '/user/signin';
 }
  // const handleCreateOrder = () => {
  //   console.log('Order created!');
  // }

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
                    <Card.Text>990 рублей</Card.Text>
                    <div className="d-flex">
                      <Form.Control type="number" className='afterConstructor' min={1} max={10} defaultValue={sock.qty||1} onChange={(e) => handleQtyChange(sock.color, e)} />
                      <Button variant="danger" onClick={() => handleDeleteSock(sock.color)}>Удалить</Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
               <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={handleShow}>Оформить заказ</Button>

     <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Оформить заказ</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div style={{ display: 'flex' }}>
      <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={signUP}>Зарегистрироваться</Button>
      <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={signIn}>Войти</Button>
      {/* <button onClick={signUP}>Зарегистрироваться</button>
        <button onClick={signIn}>Войти</button> */}
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleClose}>
      Закрыть
    </Button>
  </Modal.Footer>
  
</Modal>


      </div>
      </div>
           
          </div>
      </section>
    </>
  )
}

