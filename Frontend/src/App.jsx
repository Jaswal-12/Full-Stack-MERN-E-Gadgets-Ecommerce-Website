import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Review from "./pages/review";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Products from './pages/Products'
import Cart from "./pages/Cart";
import Login from './pages/Login';
import Signup from './pages/Signup';
const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Review />} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
     
    </Routes>
    <Footer/>
     </div>
  );
};

export default App;