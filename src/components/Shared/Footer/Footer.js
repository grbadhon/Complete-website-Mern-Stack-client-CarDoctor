import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png'
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   
    return (
        <div class="footer-container pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div class="row my-5 justify-content-center py-5">
                    <div class="col-11">
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto ">
                                <img style={{ height: '60px', border: '1px solid white', backgroundColor: 'white'}} src={logo} alt="..."></img>
                                <div className="row d-flex p-2">
                                    <div className="col-1"><p className="icons"className="icons"><FontAwesomeIcon  icon={faFacebookF}/> </p></div>
                                    <div className="col-1"><p className="icons"className="icons"> <FontAwesomeIcon  icon={faInstagram}/> </p></div>
                                    <div className="col-1"><p className="icons"className="icons"> <FontAwesomeIcon  icon={faGooglePlusG}/></p></div>
                                    
                                </div>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 bold-text text-white "><b>MENU</b></h6>
                                <ul class="list-unstyled">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Portfolio</li>
                                </ul>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                <p class="mb-1">One Microsoft Way Redmond</p>
                                <p>	Washington 98052-6399 USA</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"> Copyright<span>&#174;</span> {(new Date()).getFullYear()} All Rights Reserved.</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 class="mt-55 mt-2 text-muted bold-text"><b>G.R Badhon</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> rrafibadhon@gmail.com</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 class="text-muted bold-text"><b>Bill Gates</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> bill.gates@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;