import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
    return ( 
         <div className='container p-5 mt-2'>

            <div className='row text-center'>

                <h1 className='mt-5 mb-2 fs-3' style={{color:"#b88b37ff"}}>404 Not Found</h1>
                <h2 className="mt-2 mb-2 fs-2" style={{color:"#E97F4A"}} >couldn’t find that page</h2>
                <p className='mb-2 mt-3'>
                    We couldn’t find the page you were looking for.<br></br>
                    <Link to="/" className='span' style={{fontWeight:"bold"}}> Visit Zerodha’s home page</Link>
                </p>
           
            </div>

        </div>
     );
}

export default NotFound;