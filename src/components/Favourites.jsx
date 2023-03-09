
import React from "react";
import { Card, Button } from "react-bootstrap";
import btnStyles from "react-bootstrap";
 export default function Favorites() {
  return (
    <div className="container mt-5">
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>Description of the product.</Card.Text>
          <Button variant="primary">Добавить в корзину</Button>
         <a href = "/share"><button  type="submit">Поделиться</button></a>
           
        </Card.Body>
      </Card>
    </div>
  );
}


