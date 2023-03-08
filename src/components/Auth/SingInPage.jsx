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
    </form>
  );
}
