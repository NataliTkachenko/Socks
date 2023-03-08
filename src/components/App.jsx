import React from 'react';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import Favourites from '../components/Favourites';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/Main';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
         <Route path="/" element={<Main  />} />
        <Route path="/favourites" element={<Favourites  />} />
        <Route path="/cart" element={<Cart  />} />
        {/* <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/signin" element={<SignInPage />} /> */}
      </Routes>

      
    </div>
  )
}
