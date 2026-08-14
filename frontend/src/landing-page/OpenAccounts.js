import React from 'react';
import { Link } from "react-router-dom";
function OpenAccounts() {
    return (  
         <div className='container p-5'>
            <div className='row text-center mt-4'>
            
            
            <h1 className='mt-5'>Open a Zerodha account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
             <Link
          to="/Signup"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "25%", margin: "0 auto" }}
        >
          Sign up now
        </Link>
            </div>
        </div>
    );
}

export default OpenAccounts;