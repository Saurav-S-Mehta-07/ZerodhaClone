import React from 'react'

function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-5 p-3'>
                    <h1 className='fs-3 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-5 text-muted'>Customer-first always</h2>
                    <p className='text-muted fw-semibold'>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                         crores of equity investments, making us India’s largest broker;
                          contributing to 15% of daily retail exchange volumes in India.
                    </p>
                    <h2 className="fs-5 text-muted">No spam or gimmicks</h2>
                    <p className="text-muted fw-semibold">
                      No gimmicks, spam, "gamification", or annoying push notifications.
                       High quality apps that you use at your pace, the way you like.
                       <span style={{color:"blue"}}>Our philosophies.</span> 
                    </p>
                    <h2 className="fs-5 text-muted">The Zerodha universe</h2>
                    <p className="text-muted fw-semibold">
                        Not just an app, but a whole ecosystem. Our investments in 30+
                         fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h2 className="fs-5 text-muted">Do better with money</h2>
                    <p className="text-muted fw-semibold">
                      With initiatives like <span style={{color:"blue"}}>Nudge</span> and <span style={{color:"blue"}}> Kill Switch</span>, we don't just
                      facilitate transactions, but actively help you do better with your
                      money.
                    </p>
                </div>

                <div className='col-7 p-5'>
                   <img src='media/images/ecosystem.png' style={{ width: "100%" }} />
                 
                   <div className='text-center'>
                     <a href='' className='mx-5' style={{textDecoration:"none"}}>
                       Explore our products <i className="fa-solid fa-arrow-right"></i>
                     </a>
                 
                     <a href='' style={{textDecoration:"none"}}>
                       Try Kite demo <i className="fa-solid fa-arrow-right"></i>
                     </a>
                   </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;