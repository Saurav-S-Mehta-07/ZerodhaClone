import React from 'react'

function Pricing() {
    return ( 
        <div className='container mt-5 mb-5'>
               
            <div className='row'>

               <div className='col-4'>
                    <h1 className='mb-3 fs-3'>Unbeatable pricing</h1>
                    <p className='text-muted fw-semibold'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='' className='fw-semibold span' >
                       See pricing <i className="fa-solid fa-arrow-right"></i>
                     </a>
               </div>


               <div className='col-8 mt-4'>

                   <div className='row'>

                         <div className='col-4' style={{display:"flex"}}>
                                    <img src='media/images/pricing-eq.svg' alt='zero rupees' style={{height:"90%",width:"70%"}}></img>
                                    <span className='text-muted mt-5' style={{fontSize:"0.6rem"}}> Free account opening</span>
                         </div>

                         <div className='col-4' style={{display:"flex"}}>

                            <img src='media/images/pricing-eq.svg' alt='zero rupees'style={{height:"90%",width:"70%"}}></img>
                            <span className='text-muted mt-5' style={{fontSize:"0.6rem"}}> Free equity delivery and direct mutual funds</span>
                             
                         </div>

                         <div className='col-4' style={{display:"flex"}}>
                            
                            <img src='media/images/other-trades.svg' alt='twenty rupees' style={{height:"90%",width:"70%"}}/>
                            <span className='text-muted mt-5' style={{fontSize:"0.6rem"}}> Intraday and F&O</span>

                         </div>

                   </div>

               </div>

            </div>

        </div>
     );
}

export default Pricing;