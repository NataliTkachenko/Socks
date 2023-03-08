import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Navbar from './Navbar';
import Favourites from './Favourites';
import SignInPage from './Auth/SingInPage';
import SignUpPage from './Auth/SingUpPage';
import Main from './Main';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
         <Route path="/" element={<Main  />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/signin" element={<SignInPage />} />
      </Routes>

    </div>
  );
}
