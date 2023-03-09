import React from 'react';
import axios from 'axios';

// Компонент с формой входа в учётную запись
export default function SignIn() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    axios.post('/user/signin', data)
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
    </form>
  );
}
