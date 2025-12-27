import React from 'react'

function Hero() {
    return ( 
        <div className='container mb-2 mt-5'>

            <div className='row mb-5 mt-5'>
              
               <h1 className='fs-4 text-center p-5 mt-5' style={{color:"#424242", lineHeight:'2rem'}}>
                 We pioneered the discount broking model in India.
                  <br></br>
                 Now, we are breaking ground with our technology.
               </h1>

            </div>

            <div className='row border-top p-5 mt-5' style={{lineHeight:"1.9rem"}}>
              
               <div className='col-6 p-4'>

                  <p className=' fw-semibold'>
                    We kick-started operations on the 15th of August, 2010 with the goal of breaking
                    all barriers that traders and investors face in India in terms of cost, support,
                    and technology. We named the company Zerodha, a combination of Zero and "Rodha",
                    the Sanskrit word for barrier. 
                 </p>
                 <p className='fs-6 fw-semibold'>
                    Today, our disruptive pricing models and in-house technology have made us the
                    biggest stock broker in India.
                 </p>
                 <p className='fs-6 fw-semibold'>
                    Over 1.6+ crore clients place billions of orders every year through our powerful
                    ecosystem of investment platforms, contributing over 15% of all Indian retail
                    trading volumes.
                  </p>

               </div>
               <div className='col-6 p-4'>

                  <p className='fs-6 fw-semibold'>
                    In addition, we run a number of popular open online educational and community
                    initiatives to empower retail traders and investors.
                  </p>
                  <p className='fs-6 fw-semibold'>
                    <span className='span'>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech
                    startups with the goal of growing the Indian capital markets.
                  </p>
                  <p className='fs-6 fw-semibold'>
                    And yet, we are always up to something new every day. Catch up on the latest
                    updates on our <span className='span'>blog</span> or see what the media is 
                    <span className='span'> saying about us</span> or learn more
                    about our business and product <span className='span'>philosophies.</span>
                  </p>

               </div>

            </div>

        </div>
     );
}

export default Hero;