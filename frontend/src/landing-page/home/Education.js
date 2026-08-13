import React from 'react';
function Education() {
    return (
        
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='images/education.svg' alt='education'  />
                </div>
                
                <div className='col-6'>
                    <div>
                         <p className='fs-5 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                     <a href='' style={{textDecoration:"none"}}>Varsity <i className="fa-solid fa-arrow-right-long"></i></a>
                      <p  className='fs-5 text-muted mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <a href='' style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                    </div>
                </div>
            </div>

       
       
     );
}



export default Education;