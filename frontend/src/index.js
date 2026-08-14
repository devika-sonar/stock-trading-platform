import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './landing-page/home/Homepage';
import Signup from './landing-page/signup/Signup';
import Aboutpage from './landing-page/about/Aboutpage';
import Productspage from './landing-page/products/Productspage';
import Pricingpage from './landing-page/pricing/Pricingpage';
import Supportpage from './landing-page/support/Supportpage';
import Navbar from './landing-page/Navbar';
import Footer from "./landing-page/Footer";
import Notfound from './landing-page/notfound';
import Login from './landing-page/login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route  path="/" element={<Homepage/>}/>
    <Route  path="/Signup" element={<Signup/>}/>
    <Route  path="/about" element={<Aboutpage/>}/>
    <Route  path="/products" element={<Productspage/>}/>
    <Route  path="/pricing" element={<Pricingpage/>}/>
    <Route  path="/support" element={<Supportpage/>}/>
    <Route  path="*" element={<Notfound/>}/>
    <Route path="/login" element={<Login />} />
    

  </Routes>
   <Footer/> 
  </BrowserRouter>
);



