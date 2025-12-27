import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row mt-5'>

                <div className='col-6'>
                   <img src='media/images/education.svg' style={{ width: "70%"}} />
                </div>

                <div className='col-6 p-3'>
                     <h1 className='fs-3 mb-4'>Free and open market education</h1>
                     <p>
                         Varsity, the largest online stock market education book
                         in the world covering everything from the basics to advanced
                          trading.
                     </p>
                     <a href=''className='fw-semibold span'>
                       Varsity <i className="fa-solid fa-arrow-right"></i>
                     </a>

                     <p className='mt-5'>
                        TradingQ&A, the most active trading and investment community
                         in India for all your market related queries.
                     </p>
                     <a href='' className='fw-semibold span'>
                       TradingQ&A  <i className="fa-solid fa-arrow-right"></i>
                     </a>
                </div>
            </div>
        </div>
     );
}

export default Education;