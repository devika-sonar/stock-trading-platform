import React from 'react';
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className=" mt-5 p-5 " id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="" style={{colour:'white'}} className="text-white">Track Tickets</a>
            </div>

             <div className="row p-5 m-5" >
                <div className="col-6 mt-5 mb-5 " >
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket.</h1>
                    <input placeholder="Eg. how do I activate F&O" className="mt-3 mb-3"/><br/>
                    <div >
                    <a href="" className="text-white"> Track account opening &nbsp; &nbsp; </a>
                    <a href="" className="text-white">Track segment activation &nbsp; &nbsp;</a>
                    <a href="" className="text-white">Intraday Margins &nbsp; &nbsp;</a>
                    <a href="" className="text-white">Kite user manual</a>
                    </div>
                </div>
                <div className="col-6 mt-5 mb-5 px-5" >
                    <h1  className="fs-3">Featured</h1>
                    <ol>
                        <li>
                             <a href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li><a className="">Latest Intraday Levarages - MTS & CO </a></li>
                    </ol>
                   
                    
                </div>
               
            </div>
        </section>
      );
}

export default Hero;