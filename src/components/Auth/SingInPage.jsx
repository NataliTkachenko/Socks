<<<<<<< HEAD
import axios from "axios";
import React from "react";

export default function SignInPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "/api/auth/signin",
      Object.fromEntries(new FormData(e.target))
    );
    if (res.status === 200) {
      window.location = "/";
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Адрес электронной почты
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите адрес"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          Пароль
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Войти
      </button>
=======
import React from 'react';
import axios from 'axios';

// Компонент с формой входа в учётную запись
export default function SignIn() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    axios.post('/api/auth/signin', data)
      .then(() => {
        window.location = '/';
      });
  };
  return (
    <form className="row" style={{ width: '600px', marginLeft: '600px', marginTop: '120px' }} onSubmit={submitHandler}>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Электронный адрес</label>
          <input name="email" type="email" className="form-control" placeholder="Введите адрес" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" placeholder="Введите пароль" id="exampleInputPassword1" />
        </div>
        <div className="form-group mt-3">
          <button
            type="submit"
            className="btn"
            style={{
              borderRadius: '13px', height: '40px', width: '100px', backgroundColor: '#554AF9', color: 'white', fontWeight: 'bold',
            }}
          >
            Войти
          </button>
        </div>
      </div>
>>>>>>> origin/main
    </form>
  );
}
