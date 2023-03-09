import axios from 'axios';
import React from "react";
import { Card} from "react-bootstrap";

 export default function Favorites() {

  return (
    <div className="container mt-5">
    
      <Card>
        <Card.Img variant="top" /> //image socks  =  localStorage.getItem
        <Card.Body>
          <Card.Title>Носки</Card.Title>
          <Card.Text>990 рублей</Card.Text>
           <a href = "/cart"><button  type="submit">Добавить в корзину</button></a>
         <a href = "/share"><button  type="submit">Поделиться</button></a>
        </Card.Body>
      </Card>

    </div>

  );
}


