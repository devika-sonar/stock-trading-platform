import React from 'react';
import { Link } from "react-router-dom";
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
            <img src='images/homeHero.png' alt='Hero Image' className='mb-5'/>
            
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <Link
          to="/Signup"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "25%", margin: "0 auto" }}
        >
          Sign up for free
        </Link>
            </div>
        </div>
    
     );
}

export default Hero;