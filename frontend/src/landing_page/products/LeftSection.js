import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo="",
  learnMore="",
  coin="",
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5 p-2">
        <div className="col-7 p-5" >
          
          {
            productName==='Varsity mobile'
            ?
             <img src={imageUrl} style={{ width: "90%",height:"300px"}}/>
            :
             <img src={imageUrl} style={{ width: "90%"}} />

          }

        </div>
        <div className="col-5 p-4">
          <h1 className="fs-3 mb-4">{productName}</h1>
          <p className="text-muted fw-semibold" style={{lineHeight:'2rem'}}>
            {productDescription}
          </p>

          {
            productName!=='Varsity mobile'
            &&
            <div className="mb-3 mt-3">
             {
                coin === 'coin'
                ?
                <a href="" className="span fs-5">
                   {coin} <i className="fa-solid fa-arrow-right"></i>
                </a>
                :
                <>
                   <a href="" className="span fs-5">
                   {tryDemo} <i className="fa-solid fa-arrow-right"></i>
                   </a>
                   <a href="" className="span  mx-5 fs-5">
                       {learnMore} <i className="fa-solid fa-arrow-right"></i>
                   </a>
                </>
                
            }
            
           </div>
          }

          <div>
             <a href=''>
                  <img src="media/images/googlePlayBadge.svg"></img>
             </a>

             <a href='' className="mx-5">
                <img src="media/images/appstoreBadge.svg"></img>
             </a>

          </div>

          
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
