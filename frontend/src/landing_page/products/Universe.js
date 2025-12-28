import React from "react";

function Universe() {
  return (
    <div className="container mb-5">
      <div className="row text-center mt-5 mb-5">
        <div className="row">
          <p className="fs-5">
            Want to know more about our technology stack? Check out the
            <span className="span"> Zerodha.tech </span>blog.
          </p>
        </div>

        <div className="row text-center">
          <h1 className="mt-5 mb-4 fs-3">The Zerodha Universe</h1>
          <p className="mb-5 fs-5">
            SExtend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row p-5">
          <div className="col-4 text-center">
            <img
              src="media/images/zerodhaFundhouse.png"
              className="universeLogo"
            ></img>
            <p className="universePara">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/sensibullLogo.svg"
              className="universeLogo"
            ></img>
            <p className="universePara">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4">
            <img src="media/images/tijori.svg" className="universeLogo"></img>
            <p className="universePara">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img
              src="media/images/streakLogo.png"
              className="universeLogo"
            ></img>
            <p className="universePara">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/smallcaseLogo.png"
              className="universeLogo"
            ></img>
            <p className="universePara">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/dittoLogo.png"
              className="universeLogo"
            ></img>
            <p className="universePara">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-4 mt-3"
          style={{ width: "20%", margin: "0 auto", fontWeight: "600" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
