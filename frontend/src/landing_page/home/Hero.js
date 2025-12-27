import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5'>

            <div className='row text-center p-4'>

                <img src='media/images/homeHero.png' alt='Hero Image' className='p-5'/>
                <h1 className=' fs-3'>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto",fontWeight:"600"}} >Sign up for free</button>
           
            </div>

        </div>
     );
}

export default Hero;