import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-4" id="supportHero">
      <div className="p-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" className="mx-5">
          Track Tickets
        </a>
      </div>

      <div className="row px-5 mx-3">
        <div className="col-5 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O"
            className="mb-2 mt-2"
          />
          <br></br>
          <a href="">Track account opening &nbsp;|</a>
          <a href="">Track segment activation &nbsp; |</a>
          <a href="">Intraday margins &nbsp; |</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol style={{ lineHeight: "2rem" }}>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
