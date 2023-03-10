import axios from 'axios';
import React from 'react';

export default function Footer() {
  const glav = {
    marginTop: '10px',
    marginLeft: '30px',
  };

  const divStyle = {
    backgroundColor: '#FFEFD5',
    minWidht: '100vh',
    display: 'flex',
    textAlign: 'center',
    height: '100px',
    padding: '0',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-beige" style={divStyle}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={glav}>
              почта: info@enjoysocks.ru
            </li>
            <li className="nav-item" style={glav}>
              Адрес: г. Москва, Шоссе Энтузиастов 12 ст2
            </li>
            <li className="nav-item" style={glav}>
              Номер телефона +7 999 666 36 36
            </li>
          </ul>

        </div>

      </div>
    </nav>
  );
}
