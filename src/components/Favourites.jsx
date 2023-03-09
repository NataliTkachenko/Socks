import React, { useState } from 'react';
import btnStyles, { Card, Button, Modal } from 'react-bootstrap';

export default function Favorites() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container mt-5">
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>Description of the product.</Card.Text>
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
