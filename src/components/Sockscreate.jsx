import React, { useState } from 'react';

 export default function Sockscreate() {
  const [color, setColor] = useState('');
  const [pattern, setPattern] = useState('');
  const [image, setImage] = useState('');

  const handleColorClick = (event) => {
    setColor(event.target.dataset.value);
  };

  const handlePatternClick = (event) => {
    setPattern(event.target.dataset.value);
  };

  const handleImageClick = (event) => {
    setImage(event.target.dataset.value);
  };

  const handleAddToFavorites = () => {
    // Add code here to add the product to favorites
  };

  const handleAddToBasket = () => {
    // Add code here to add the product to basket
  };

  const colorCards = [
    { id: 1, value: 'Red', image: 'path/to/red-image.jpg' },
    { id: 2, value: 'Blue', image: 'path/to/blue-image.jpg' },
    { id: 3, value: 'Green', image: 'path/to/green-image.jpg' },
    { id: 4, value: 'Yellow', image: 'path/to/yellow-image.jpg' },
    { id: 5, value: 'Orange', image: 'path/to/orange-image.jpg' },
    { id: 6, value: 'Purple', image: 'path/to/purple-image.jpg' },
  ];

  const patternCards = [
    { id: 1, value: 'Dots', image: '/Img/dots.png' },
    { id: 2, value: 'Polka Dots', image: 'path/to/polka-dots-image.jpg' },
    { id: 3, value: 'Checkered', image: 'path/to/checkered-image.jpg' },
    { id: 4, value: 'Plaid', image: 'path/to/plaid-image.jpg' },
  ];

  const imageCards = [
    { id: 1, value: 'Image 1', image: '/Img/duck.png' },
    { id: 2, value: 'Image 2', image: 'path/to/image-2.jpg' },
    { id: 3, value: 'Image 3', image: 'path/to/image-3.jpg' },
    { id: 4, value: 'Image 4', image: 'path/to/image-4.jpg' },
  ];

  const renderColorCards = () => {
    return colorCards.map((card) => (
      <div
      key={card.id}
      onClick={handleColorClick}
      data-value={card.value}
      style={{ width: '50px', height: '50px' }}
    >
      <img src={card.image} alt={card.value} />
      <p>{card.value}</p>
    </div>
    ));
  };

  const renderPatternCards = () => {
    return patternCards.map((card) => (
      <div
      key={card.id}
      onClick={handlePatternClick}
      data-value={card.value}
      style={{ width: '10px', height: '10px' }}
    >
      <img src={card.image} alt={card.value} />
      <p>{card.value}</p>
    </div>
    ));
  };

  const renderImageCards = () => {
    return imageCards.map((card) => (
      <div
      key={card.id}
      onClick={handleImageClick}
      data-value={card.value}
      style={{ width: '10px', height: '10px' }}
    >
      <img src={card.image} alt={card.value} />
      <p>{card.value}</p>
    </div>
    ));
  };

  return (
  <div>
    <h1>Product Page</h1>
    <div>
      <h2>Color</h2>
      <div>{renderColorCards()}</div>
    </div>
    <div>
      <h2>Pattern</h2>
      <div>{renderPatternCards()}</div>
    </div>
    <div>
      <h2>Image</h2>
      <div>{renderImageCards()}</div>
    </div>
    <button onClick={handleAddToFavorites}>Add to Favorites</button>
    <button onClick={handleAddToBasket}>Add to Basket</button>
  </div>
);
}