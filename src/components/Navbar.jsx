import axios from 'axios';
import React from 'react';

export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/favourites">Избранное</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">Корзина</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user/signup">Зарегистрироваться</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user/signin">Войти</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
