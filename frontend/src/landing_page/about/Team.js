import React from "react";

function Team() {
  return (
    <div className="container mb-5">

      <div className="row text-center">
            <h1 className=" fs-4">People</h1>
      </div>

      <div className="row p-4 mb-4">

        <div className="col-5 py-4 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithin Kamath"
            style={{ borderRadius: "100%", height:"75%", width:"70%" }}
          ></img>
          <h1 className="fs-5 mt-4 mb-3">Nithin Kamath</h1>
          <p>Founder, CEO</p>
        </div>

        <div className="col-7">

            <div className="fs-6 py-5 fw-semibold" style={{lineHeight:"2rem"}}>
                <p>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
                    he faced during his decade long stint as a trader. Today, Zerodha has
                    changed the landscape of the Indian broking industry.
                </p>
                <p>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                    and the Market Data Advisory Committee (MDAC).
                </p>
                <p>Playing basketball is his zen.</p>
                <p>
                    Connect on
                  <span className="span"> Homepage </span>/
                  <span className="span"> TradingQnA </span>/
                  <span className="span"> Twitter </span>
                </p>
            </div>

        </div>

      </div>

      <div className="row">

        <div className="col-4 py-4 text-center mb-5">
            
          <img
            src="media/images/nikhilKamath.jpg"
            alt="nikhil Kamath"
            style={{ borderRadius: "100%", height:"65%", width:"70%" }}
          ></img>
          <h1 className="fs-5 mt-4 mb-3">Nikhil Kamath</h1>
          <p>Co-founder & CFO</p>
          <p className="mt-2 fw-semibold">Bio <i className="fa-solid fa-angle-down"></i></p>

        </div>
        <div className="col-4 py-4 text-center">
            
          <img
            src="media/images/Kailash.jpg"
            alt="Dr. Kailash Nadh"
            style={{ borderRadius: "100%", height:"60%", width:"70%" }}
          ></img>
          <h1 className="fs-5 mt-4 mb-3">Dr. Kailash Nadh</h1>
          <p>CTO</p>
          <p className="mt-2 fw-semibold">Bio <i className="fa-solid fa-angle-down"></i></p>

        </div>
        <div className="col-4 py-4 text-center">
            
          <img
            src="media/images/Venu.jpg"
            alt="Venu Madhav"
            style={{ borderRadius: "100%", height:"60%", width:"70%" }}
          ></img>
          <h1 className="fs-5 mt-4 mb-3">Venu Madhav</h1>
          <p>COO</p>
          <p className="mt-2 fw-semibold">Bio <i className="fa-solid fa-angle-down"></i></p>

        </div>

      </div>

      <div className="row" >

        <div className="col-4 py-4 text-center">
            
          <img
            src="media/images/Hanan.jpg"
            alt="Hanan Delvi"
            style={{ borderRadius: "100%", height:"65%", width:"70%" }}
          ></img>
          <h1 className="fs-5 mt-4 mb-3">Hanan Delvi</h1>
          <p>CCO</p>
          <p className="mt-2 fw-semibold">Bio <i className="fa-solid fa-angle-down"></i></p>

        </div>
        <div className="col-4 py-4 text-center">
            
          <img
            src="media/images/Seema.jpg"
            alt="Seema Patil"
            style={{ borderRadius: "100%", height:"65%", width:"70%" }}
          ></img>
          <h1 className="fs-5 mt-4 mb-3">Seema Patil</h1>
          <p>Director</p>
          <p className="mt-2 fw-semibold">Bio <i className="fa-solid fa-angle-down"></i></p>

        </div>
        <div className="col-4 py-4 text-center">
            
          <img
            src="media/images/Karthik.jpg"
            alt="Karthik Rangappa"
            style={{ borderRadius: "100%", height:"65%", width:"70%" }}
          ></img>
          <h1 className="fs-5 mt-4 mb-3">Karthik Rangappa</h1>
          <p>Chief of Education</p>
          <p className="mt-2 fw-semibold">Bio <i className="fa-solid fa-angle-down"></i></p>

        </div>

      </div>

      <div className="row">

        <div className="col-4 py-4 text-center">
            
          <img
            src="media/images/Austin.jpg"
            alt="Austin Prakesh"
            style={{ borderRadius: "100%", height:"65%", width:"70%" }}
          ></img>
          <h1 className="fs-5 mt-4 mb-3">Austin Prakesh</h1>
          <p>Director Strategy</p>
          <p className="mt-2 fw-semibold">Bio <i className="fa-solid fa-angle-down"></i></p>

        </div>
      </div>

    </div>
  );
}

export default Team;
