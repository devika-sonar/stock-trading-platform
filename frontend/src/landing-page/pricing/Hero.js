import React from 'react';
function Hero() {
    return ( 
        <div>
            <h1 className="text-center fs-2 mt-5" style={{color: '#4e4c4c'}} >Charges</h1>
            <p className="text-muted fs-3  text-center" style={{ marginBottom: '130px' }}>List of all charges and taxes</p>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-4  text-center ">
                        <img src="images/pricing0.svg" style={{width: '65%', height: 'auto'}}/>
                        <h3 className="text-center fs-2" style={{color: '#4e4c4c'}} > Free equity delivery</h3>
                        <p className="text-muted fs-5.5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-4  text-center ">
                        <img src="images/intradayTrades.svg" style={{width: '65%', height: 'auto', justifyContent: 'center'}} ></img>
                        <h1 className="text-center fs-2" style={{color: '#4e4c4c'}} >Intraday and F&O trades</h1>
                        <p className="text-muted fs-5.5">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-4  text-center ">
                        <img src="images/pricing0.svg" style={{width: '65%', height: 'auto'}}/>
                        <h1 className="text-center fs-2" style={{color: '#4e4c4c'}} >Free direct MF</h1>
                        <p className="text-muted fs-5.5">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;