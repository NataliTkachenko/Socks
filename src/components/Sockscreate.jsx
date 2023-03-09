import React, { useState } from 'react';

export default function Sockscreate() {
  // const [color, setColor] = useState('#FFFFFF');
  // const [pattern, setPattern] = useState('');
  // const [image, setImage] = useState('');
  const [sock, setSock] = useState({color: '#FFFFFF', pattern: '', image: '' });

  const handleColorClick = (event) => {
    setSock((prev) => ({ ...prev, color: event.target.dataset.value }));
    // setColor(event.target.dataset.value);
    // setSock(sock.color)
  };

  const handlePatternClick = (event) => {
    setSock((prev) => ({ ...prev, pattern: event.target.src }));
    // setPattern(event.target.dataset.value);
    // setSock(sock.pattern);
  };

  const handleImageClick = (event) => {
    setSock((prev) => ({ ...prev, image: event.target.src }));
    // setImage(event.target.dataset.value);
  };

  const handleAddToFavorites = () => {
    localStorage.setItem('favourites', `${JSON.stringify(sock)}`);
    // localStorage.setItem('color', `${sock.color}`);
    // localStorage.setItem('pattern', `${sock.pattern}`);
    // localStorage.setItem('image',`${sock.image}`);
    window.location = '/favourites'
  };

  const handleAddToBasket = () => {
    // Add code here to add the product to basket
  };

  const colorCards = [
    { id: 1, value: 'Red', image: '#FFFFFF' },
    { id: 2, value: 'Blue', image: '#FFFF00' },
    { id: 3, value: 'Green', image: '#800080' },
    { id: 4, value: 'Yellow', image: '#FF1493' },
    { id: 5, value: 'Orange', image: '#00FF7F' },
    { id: 6, value: 'Purple', image: '#00FFFF' },
  ];

  const patternCards = [
    { id: 1, value: 'Dots', image: '/Img/dots.png' },
    { id: 2, value: 'Figures', image: '/Img/figures.png' },
    { id: 3, value: 'Triangles', image: '/Img/tringles.png' },
    { id: 4, value: 'Stars', image: '/Img/stars.png' },
  ];

  const imageCards = [
    { id: 1, value: 'Image 1', image: '/Img/duck.png' },
    { id: 2, value: 'Image 2', image: '/Img/kaktus.png' },
    { id: 3, value: 'Image 3', image: '/Img/lama.png' },
    { id: 4, value: 'Image 4', image: '/Img/yodik.png' },
  ];

  const renderColorCards = () => colorCards.map((card) => (
    <div
      key={card.id}
      className="colorMini"
      onClick={handleColorClick}
      data-value={card.image}
      style={{ backgroundColor: `${card.image}` }}
    >
      <p>{card.value}</p>
    </div>
  ));

  const renderPatternCards = () => patternCards.map((card) => (
    <div
      className="inOptions"
      key={card.id}
      onClick={handlePatternClick}
      data-value={card.image}
    >
      <img className="patternMini" src={card.image} alt={card.value} />
      <p>{card.value}</p>
    </div>
  ));

  const renderImageCards = () => imageCards.map((card) => (
    <div
      key={card.id}
      onClick={handleImageClick}
      data-value={card.image}
    >
      <img className="picMini" src={card.image} alt={card.value} />
      <p>{card.value}</p>
    </div>
  ));

  return (
    <div>
      <h1>Твой дизайн:</h1>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', backgroundColor: `${sock.color}` }} className="color" />
        <img style={{ position: 'absolute' }} className="pattern" src={`${sock.pattern}`} alt="" />
        <img style={{ position: 'absolute' }} className="pic" src={`${sock.image}`} alt="" />
        <img style={{ position: 'absolute' }} className="sock" src="/Img/sock.png" alt="" />
      </div>
      <div>
        <h2>Color</h2>
        <div className="options">{renderColorCards()}</div>
      </div>
      <div>
        <h2>Pattern</h2>
        <div className="options">{renderPatternCards()}</div>
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
