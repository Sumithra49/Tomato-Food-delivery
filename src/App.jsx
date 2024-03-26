import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { LoginPopup } from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Order from './pages/PlaceOrder/Order';

const App = () => {
  //display popup for login
  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path ="/order" element={<Order/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App