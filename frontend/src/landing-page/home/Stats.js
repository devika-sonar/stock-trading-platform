import React from 'react';
function Stats() {
    return ( 
        
        <div className='container'>
            <div className='row p-4'>
                <div className='col-6 p-5'>
                    <h1>Trust with confidence</h1>
                    <h1>Customer-first always</h1>
                    <p className='fs-5 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h1>No spam or gimmicks</h1>
                    <p className='fs-5 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h1>The Zerodha universe</h1>
                    <p className='fs-5 text-muted            '>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h1>Do better with money</h1>
                    <p className='fs-5 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money</p>
                    
                </div>
                <div className='col-6'>
                    <img src='images/ecosystem.png' alt='Ecosystem' style={{width:"130%"}}/>
                    <div className='text-center'>
                        <a href='' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' className='mx-5 ' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>   
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;