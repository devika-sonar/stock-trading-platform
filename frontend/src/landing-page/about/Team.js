import React from 'react';
function Team() {
    return ( 
         <div>
      
      <div className="row p-5 mt-5 mx-4 "  >
        <h2 className="text-center">People</h2>
        <div className="col-5 p-5">
         <img src='images/nithinKamath.jpg' alt="Nithin Kamath" style={{width:'100%' , borderRadius: '100%'}} />
         <h3 className="text-center mt-5" style={{fontWeight: '500', color: '#555353'}}>Nithin Kamath</h3>
         <p className="text-center text-muted">Founder,CEO</p>
           
        </div>
        <div className="col-7 p-5 " style={{ lineHeight: "1.8" , fontSize: "1.2em" , color: "#464242" }} >
            
          <p className="mt-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC)..
          </p>
          <p>
            
           Playing basketball is his zen.
          </p>
          <p>Connect on<a href="" style={{ textDecoration: 'none' }}> Homepage </a> / <a href="" style={{ textDecoration: 'none' }}>TradingQnA </a>/ <a href="" style={{ textDecoration: 'none' }}>Twitter</a></p>
        </div>
      </div>
    </div>
     );
}

export default Team;