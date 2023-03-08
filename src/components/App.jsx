import React from 'react';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import Favourites from '../components/Favourites';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/favourites" element={<Favourites  />} />
        <Route path="/cart" element={<Cart  />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/signin" element={<SignInPage />} />
      </Routes>

      
    </div>
  )
}
