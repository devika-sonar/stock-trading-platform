import React from 'react';
function Awards() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col-6 p-5'>
                    <img src='images/largestBroker.svg' alt='Largest Broker' className='mt-5'/>
                </div>
                <div className='col-6 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail equity trades volume in India daily by trading and investing in: </p>
                    <div className='row'>

                        <div className='col-6 '>
                             <ul>
                        <li>Futures and Options</li>
                        <li>Stocks</li>
                        <li>Mutual Funds</li>  
                          
                    </ul>
                        </div>
                         <div className='col-6 '>
                             <ul>
                        <li>Futures and Options</li>
                        <li>Stocks</li>
                        <li>Mutual Funds</li>  
                         
                    </ul>
                        </div>
                    </div>
                    <img src =' images/pressLogos.png 'alt='Press Logo' className='mt-5' style={{width:"80%"}}/>
                   
                </div>
            </div>
        </div>
     );
}

export default Awards ;