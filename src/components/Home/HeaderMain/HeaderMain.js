import React from 'react';
import slidebg from '../../../images/patrick-bWSiIlfFr-8-unsplash.jpg';
import engine from '../../../images/ENGINE DIAGNOSTICS.jpg'
import lube from '../../../images/LUBE, OIL AND FILTERS.jpg'
import hose from '../../../images/BELTS AND HOSES.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center slider-section">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div>
                            <img src={slidebg} className="d-block" alt="..."></img>
                        </div>
                        <div className="row carousel-caption d-flex text-start">
                            <div className="col-md-4 offset-md-1 ">
                                <h1 style={{ color: 'white' }}>ENGINE DIAGNOSTICS</h1>
                                <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                                <button className="btn btn-warning">GET APPOINTMENT</button>
                            </div>
                            <div className="col-md-6">
                                <img style={{ border: '2px solid white' }} src={engine} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div>
                            <img  src={slidebg} className="d-block" alt="..."></img>
                        </div>
                        <div className="row carousel-caption d-flex text-start">
                            <div className="col-md-4 offset-md-1 ">
                                <h1 style={{ color: 'white' }}>LUBE, OIL AND FILTERS</h1>
                                <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                                <button className="btn btn-warning">GET APPOINTMENT</button>
                            </div>
                            <div className="col-md-6">
                                <img style={{ border: '2px solid white' }} src={lube} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div>
                            <img src={slidebg} className="d-block" alt="..."></img>
                        </div>
                        <div className="row carousel-caption d-flex text-start">
                            <div className="col-md-4 offset-md-1 ">
                                <h1 style={{ color: 'white' }}>BELTS AND HOSES</h1>
                                <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                                <button className="btn btn-warning">GET APPOINTMENT</button>
                            </div>
                            <div className="col-md-6">
                                <img style={{ border: '2px solid white' }} src={hose} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-warning">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div> */}
        </main>
    );
};

export default HeaderMain;