import axios from 'axios';
import React, { useState, useEffect } from 'react';
import btnStyles, {  Form, Card, Button, Modal, Row, Container, Col,} from 'react-bootstrap';
import SignIn from '../Basket/SingInPage';
import SignUp from '../Basket/SingUpPage';


export default function Cart() {
  const [socks, setSocks] = useState([]);
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [signin, setSignin] = useState(false);
 const [signup, setSignup] = useState(false);
  //  const signInClose = () => setShow(false);
  // const signInShow = () => setShow(true);
  //   const signUpClose = () => setShow(false);
  // const signUpShow = () => setShow(true);

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


  return (
    <> 
     <div style={{ textAlign: 'center' }}>
  <h1 className='title-1'>Корзина</h1>
</div>
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
                    
                      <Form.Control type="number" min={1} max={10} defaultValue={sock.qty||1} onChange={(e) => handleQtyChange(sock.color, e)} />
                      <Button className="m-2" variant="warning" style={{ marginLeft: '10px' }}onClick={() => handleDeleteSock(sock.color)}>Удалить</Button>
          
                  </Card.Body>
                  </div>
                </Card>
              ))}
                      </Row>
      </Container>
             <div style={{ textAlign: 'center' }}>
  <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={handleShow}>Оформить заказ</Button>

</div>

     <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Оформить заказ</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div style={{ display: 'flex' }}>
      <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={()=>setSignup(true)}>Зарегистрироваться</Button>
      <Button className="m-2" variant="primary" style={{ marginLeft: '10px' }} onClick={()=>setSignin(true)}>Войти</Button>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleClose}>
      Закрыть
    </Button>
  </Modal.Footer>
  
</Modal>


    <Modal show={signin} onHide={()=>setSignin(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Войти</Modal.Title>
  </Modal.Header>
  <Modal.Body>
      <div style={{ display: 'center' }}>
    <SignIn/>
   </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={()=>setSignin(false)}>
      Закрыть
    </Button>
  </Modal.Footer>
  
</Modal>


    <Modal show={signup} onHide={()=>setSignup(false)}>
  <Modal.Header closeButton>
    <Modal.Title> Зарегистрироваться</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div style={{ display: 'left' }}>
   <SignUp/>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={()=>setSignup(false)}>
      Закрыть
    </Button>
  </Modal.Footer>
  
</Modal>

     
    </>
  )
}

