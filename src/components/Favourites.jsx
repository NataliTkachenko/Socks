import React, { useEffect, useState } from 'react';
import btnStyles, {
  Card, Button, Modal, Row, Container, Col,
} from 'react-bootstrap';

export default function Favorites() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [socks, setSocks] = useState([]);


   useEffect(() => {
    const sockData = localStorage.getItem('fav');
    if (sockData) {
      setSocks(JSON.parse(sockData));
    }
  }, []);

    const handleDeleteSock = (color) => {
    const updatedSocks = socks.filter(sock => sock.color !== color);
    setSocks(updatedSocks);
    localStorage.setItem('fav', JSON.stringify(updatedSocks));
  }
    const handleAddToBasket = () => {
  const existingCart = localStorage.getItem('fav');
  const newCart = existingCart ? JSON.parse(existingCart) : [];
  newCart.push(sock);
  localStorage.setItem('fav', JSON.stringify(newCart));
  window.location = '/cart';
  };
  return (
    <>
      <Container>
        <Row md={4} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          {socks.map((sock) => (
            <Card key={sock.color} className="m-2">
              <Card.Img variant="top" />
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', backgroundColor: `${sock.color}` }} className="color" />
                <img style={{ position: 'absolute' }} className="pattern" src={`${sock.pattern}`} alt="" />
                <img style={{ position: 'absolute' }} className="pic" src={`${sock.image}`} alt="" />
                <img style={{ position: 'absolute' }} className="sock" src="/Img/sock.png" alt="" />
              </div>
              <div className="inFavorite">
                <Card.Body>
                  <Card.Title>Носки</Card.Title>
                  <Card.Text>990 рублей</Card.Text>
                  <Button className="m-2" variant="primary">Добавить в корзину</Button>
                  <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={handleShow}>Поделиться</Button>
                </Card.Body>
              </div>
            </Card>
          ))}
        </Row>
      </Container>
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
