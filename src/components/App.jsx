import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Favourites from './Favourites';
import SignInPage from './Auth/SingInPage';
import SignUpPage from './Auth/SingUpPage';
import Main from './Main';
import Cart from './Cart/Cart';

export default function App(user) {
  const [currentUser, setCurrentUser] = useState(user.user || null);
  console.log(user.user);
  return (
    <div className="container">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/signin" element={<SignInPage />} />
      </Routes>

    </div>
  );
}
