import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row mb-5 text-center p-5" style={{width:"100%"}}>
          <div className="col">
            <h1 className="fs-3 mt-5 mb-3">Pricing</h1>
            <p className="fs-4" style={{ opacity: 0.7 }}>
              Free equity investments and flat &#x20B9; 20 traday and F&O trades
            </p>
          </div>
      </div>

      <div className="row mt-5 p-5 text-center mb-5 border-top" style={{width:'100%'}}>
        <div className="col-4 p-4">
          <img src="media/images/pricing-eq.svg" style={{width:"80%"}}></img>
          <h1 className="fs-3 mb-4">Free equity delivery</h1>
          <p className="f2-semibold text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/other-trades.svg" style={{width:"80%"}}></img>
          <h1 className="fs-3 mb-4">Intraday and F&O trades</h1>
          <p className="fw-semibold text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricing-eq.svg" style={{width:"80%"}}></img>
          <h1 className="fs-3 mb-4">Free direct MF</h1>
          <p className="fw-semibold text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
