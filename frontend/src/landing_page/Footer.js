import React from 'react'

function Footer() {
    return ( 
      <footer className='footer border-top' style={{backgroundColor:"#fbfbfb"}}>
         <div className='container'>

            <div className='row mt-5' >

                <div className='col'>
                    <img src='media/images/logo.svg' style={{width:"80%"}}></img>
                    <p className='mt-2 mb-2 text-muted' style={{fontSize:"0.8rem", fontWeight:'500'}}>
                        &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
                    </p>
                    <div className='mt-3 mb-3'>
                        <a href='#'><i className="fs-5 fa-brands fa-x-twitter mx-2 text-muted"></i></a>
                        <a href='#'><i className="fs-5 footera-link fa-brands fa-square-facebook mx-2"></i></a>
                        <a href='#'><i className="fs-5 footera-link fa-brands fa-instagram mx-2" ></i></a>
                        <a href='#'><i className="fs-5 footera-link fa-brands fa-linkedin-in mx-2"></i></a>
                    </div>
                    <hr/>
                    <div>
                        <a href='#'><i className="mx-2 fs-5 text-muted fa-brands fa-youtube"></i></a>
                        <a href='#'><i className="mx-2 fs-5 text-muted fa-brands fa-whatsapp"></i></a>
                        <a href='#'><i className="mx-2 fs-5 footera-link fa-brands fa-telegram"></i></a>
                    </div>
                </div>

                <div className='col'>
                    <p className='fs-5'>Account</p>
                    <a href='#' className='footera-link' >Open demat account</a>   <br/>
                    <a href='#' className='footera-link'>Minor demat account</a> <br/>
                    <a href='#' className='footera-link'>NRI demat account</a> <br/>
                    <a href='#' className='footera-link'>Commodity</a> <br/>
                    <a href='#' className='footera-link'>Dematerialisation</a> <br/>
                    <a href='#' className='footera-link'>Fund transfer</a> <br/>
                    <a href='#' className='footera-link'>MTF</a> <br/>
                    <a href='#' className='footera-link'>Referral program</a> <br/>
                </div>

                <div className='col'>
                    <p className='fs-5'>Support</p>
                    <a href='#' className='footera-link'>Contact us</a> <br/>
                    <a href='#' className='footera-link'>Support portal</a> <br/>
                    <a href='#' className='footera-link'>How to file a complaint?</a><br/>
                    <a href='#' className='footera-link'>Status of your complaints</a><br/>
                    <a href='#' className='footera-link'>Bulletin</a><br/>
                    <a href='#' className='footera-link'>Circular</a><br/>
                    <a href='#' className='footera-link'>Z-Connect blog</a><br/>
                    <a href='#' className='footera-link'>Downloads</a><br/>

                </div>
                <div className='col'>
                    <p className='fs-5'>Company</p>
                    <a href='#' className='footera-link'>About</a><br/>
                    <a href='#' className='footera-link'>Philosophy</a><br/>
                    <a href='#' className='footera-link'>Press & media</a><br/>
                    <a href='#' className='footera-link'>Careers</a><br/>
                    <a href='#' className='footera-link'>Zerodha Cares (CSR)</a><br/>
                    <a href='#' className='footera-link'>Zerodha.tech</a><br/>
                    <a href='#' className='footera-link'>Open source</a><br/>

                </div>
                <div className='col'>
                    <p className='fs-5'>Quick links</p>
                    <a href='#' className='footera-link'>Upcoming IPOs</a><br/>
                    <a href='#' className='footera-link'>Brokerage charges</a><br/>
                    <a href='#' className='footera-link'>Market holidays</a><br/>
                    <a href='#' className='footera-link'>Economic calendar</a><br/>
                    <a href='#' className='footera-link'>Calculators</a><br/>
                    <a href='#' className='footera-link'>Markets</a><br/>
                    <a href='#' className='footera-link'>Sectors</a><br/>
                </div>

            </div>

            <div className='text-muted mt-5' style={{fontSize:"0.7rem"}}>

               <p>
                   Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.:
                   INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.
                   – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking
                   Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                   J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
                   pertaining to securities broking please write to <span className='span'>complaints@zerodha.com</span>,
                   for DP related to <span className='span'>dp@zerodha.com</span>. Please ensure you carefully read the Risk
                   Disclosure Document as prescribed by SEBI | ICF
               </p>
               <p>
                   Procedure to file a complaint on <span className='span'>SEBI SCORES</span>: Register on SCORES portal.
                    Mandatory details for filing complaints on SCORES: Name, PAN, Address,
                     Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
                      redressal of the grievances
               </p>
               <p> <span className='span'>Smart Online Dispute Resolution</span> | <span className='span'>Grievances Redressal Mechanism</span></p>
               <p>
                   Investments in securities market are subject to market risks; read all
                    the related documents carefully before investing.
               </p>
               <p>
                   Attention investors: 1. Stock brokers can accept securities 
                   as margins from clients only by way of pledge in the depository system w.e.f
                    September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository 
                    participant and receive OTP directly from depository on your e-mail and/or mobile number to create
                     pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued 
                     by NSDL/CDSL every month.
               </p>
               <p>India's largest broker based on networth as per NSE. <span className='span'>NSE broker factsheet</span></p>
               <p>
                   "Prevent unauthorised transactions in your account. Update your mobile numbers/email 
                   IDs with your stock brokers. Receive information of your transactions directly from Exchange 
                   on your mobile/email at the end of the day. Issued in the interest of investors. KYC
                    is one time exercise while dealing in securities markets - once KYC is done through 
                    a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo 
                    the same process again when you approach another intermediary." Dear Investor, if you
                    are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank 
                    account number and sign the IPO application form to authorize your bank to make payment
                    in case of allotment. In case of non allotment the funds will remain in your bank account.
                    As a business we don't give stock tips, and have not authorized anyone to trade on behalf
                    of others. If you find anyone claiming to be part of Zerodha and offering such services,
                   please <span className='span'>create a ticket here</span>.
                </p>
               <p>
                   *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private
                    Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have
                     access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration 
                     mechanism for such products.
               </p>
            </div>

            <div className='mb-3 mt-2 text-center'>
                <a href='#' className='mx-3  footerb-link'>NSE</a>
                <a href='#' className='mx-3  footerb-link '>BSE</a>
                <a href='#' className='mx-3  footerb-link'>MCX</a>
                <a href='#' className='mx-3  footerb-link'>Terms & conditions</a>
                <a href='#' className='mx-3  footerb-link'>Policies & procedures</a>
                <a href='#' className='mx-3  footerb-link'>Privacy policy</a>
                <a href='#' className='mx-3  footerb-link'>Disclosure</a>
                <a href='#' className='mx-3  footerb-link'>For investor's attention</a>
                <a href='#' className='mx-3  footerb-link'>Investor charter</a>
            </div>

         </div>
      </footer>
     );
}

export default Footer;