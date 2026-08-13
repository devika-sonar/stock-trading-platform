import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-5'>Unbeatable pricing</h1>
                    <p className='fs-5 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href='' style={{textDecoration:"none"}}>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='container'>
                        <div className='row text-center '>
                            <div className='col  border'>
                                <h1><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "30px" }}></i>0</h1>
                                <p > Free equity delivery
and <br></br> direct mutual funds</p>
                            </div>
                             <div className='col  border p-2'><h1><i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "30px" }}></i>20</h1>
                                <p > Intraday and F&O</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;