import React from "react";

function Universe() {
  return (
    <div >
      <h1 className="text-center mt-5">The Zerodha Universe</h1>

      <p className="text-center mt-3">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

<div className="container "   style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="row mt-5  p-3 mx-3">

        <div className="col-4 p-3 "  style={{ width: "33.333%" }}>
          <img
            src="images/fundhouse.png"
            style={{ width: "90%", height: "auto" }}
            alt="Fundhouse"
          />
          <p className="text-muted mt-3">
            Our asset management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3"  style={{ width: "33.333%" }}>
          <img
            src="images/streakLogo.png"
            style={{ width: "80%", height: "auto" }}
            alt="Streak"
          />
          <p className="text-muted mt-3">
            Systematic trading platform that allows you to create and
            backtest strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3"  style={{ width: "33.333%" }}>
          <img
            src="images/sensibullLogo.svg"
            style={{ width: "90%", height: "auto" }}
            alt="Sensibull"
          />
          <p className="text-muted mt-3">
            Options trading platform that lets you create strategies,
            analyze positions, and examine data points like open interest,
            FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3"  style={{ width: "33.333%" }}  >
          <img
            src="images/smallcaseLogo.png"
            style={{ width: "90%", height: "auto" }}
            alt="Smallcase"
          />
          <p className="text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks or ETFs.
          </p>
        </div>

        <div className="col-4 p-3"  style={{ width: "33.333%" }}  >
          <img
            src="images/tijori.svg"
            style={{ width: "80%", height: "auto" }}
            alt="Tijori"
          />
          <p className="text-muted mt-3">
            Our asset management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3"  style={{ width: "33.333%" }}  >
          <img
            src="images/dittoLogo.png"
            style={{ width: "65%", height: "auto" }}
            alt="Ditto"
          />
          <p className="text-muted mt-3 ">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

      </div>
       <button className='p-2 btn btn-primary fs-5 mb-5 mt-5 ' style={{width:"25%",margin:"0 auto"}}>Sign up for free</button>
      </div>

      
    </div>
  );
}

export default Universe;