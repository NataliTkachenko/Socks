import axios from 'axios';
import React from 'react';


export default function Navbar({ currentUser, setCurrentUser }) {
  const btnStyles = {
    backgroundColor: 'turquoise',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };
  const clickHandler = async () => {
    const res = await axios('/user/logout');
    if (res.status === 200) {
      setCurrentUser(null);
      window.location = '/';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-beige">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <img className="logo" alt="Brand" src="/Img/logo.png" />
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/favourites">Избранное</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">Корзина</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            {currentUser ? (
              <li className="nav-item">
                {' '}
                Hello
                {' '}
                {currentUser.name}
                , my brother!
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={clickHandler}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a href="/user/signup"><button className="nav-link btn" style={btnStyles}>Зарегистрироваться</button></a>
                </li>
                <li className="nav-item">
                  <a href="/user/signin">
                    {' '}
                    <button className="nav-link btn" style={btnStyles}>Войти</button> 
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
