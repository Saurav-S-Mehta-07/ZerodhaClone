import React from 'react'

function RightSection({imageUrl,productName,productDescription,addLink}) {
    return ( 
      <div className="container">
        <div className="row">

            <div className="col-5 mt-5">

              <h1 className="fs-3 mb-5 mt-5">{productName}</h1>
              <p className="text-muted fw-semibold" style={{lineHeight:'2rem'}}>
                {productDescription}
              </p>
              <a href="" className="span mb-5 fs-5">
                    {addLink} <i className="fa-solid fa-arrow-right"></i>
              </a>
    
            </div>
    
            <div className="col-7">
                <img src={imageUrl} style={{ width: "90%"}} />
            </div>

      </div>
    </div>
     );
}

export default RightSection;