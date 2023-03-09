import React, { useState } from 'react';
import btnStyles, { Card, Button, Modal } from 'react-bootstrap';

export default function Favorites() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(localStorage)
  const sock = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('favourites'))
  
   

  return (
    <>
      <div className="container mt-5">
        <Card>
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
            <Button variant="primary">Добавить в корзину</Button>
            <Button variant="primary" onClick={handleShow}>Поделиться</Button>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Поделиться</Modal.Title>
        </Modal.Header>
        <div style={{ display: 'flex' }}>
          <Modal.Body><a href="https://mail.ru/" target="_blank" rel="noreferrer"><img src="./Img/icons/mail.png" width="50px" height="50px" alt="mail" /></a></Modal.Body>
          <Modal.Body><a href="https://www.google.com/intl/ru/gmail/about/" target="_blank" rel="noreferrer"><img src="./Img/icons/gmail.png" width="50px" height="50px" alt="mail" /></a></Modal.Body>
          <Modal.Body><a href="https://ok.ru/" target="_blank" rel="noreferrer"><img src="./Img/icons/odnoklass.png" width="50px" height="50px" alt="mail" /></a></Modal.Body>
          <Modal.Body><a href="https://vk.com/" target="_blank" rel="noreferrer"><img src="./Img/icons/vk.png" width="50px" height="50px" alt="mail" /></a></Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
