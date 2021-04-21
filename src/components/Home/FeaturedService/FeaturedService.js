import React from 'react';
import featured from '../../../images/vehicle-repair.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 pt-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-6 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h1 className="text-center">VEHICLES SERVICED</h1>
                        <p className="text-secondary text-center">
                            We provide top notch maintenance service for all types of vehicles.<br></br>
                            We are certified to service and repair the following makes:
                        </p>
                        <div className="row text ms-3">
                            <div className="col-4">
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> General Motors
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Land Rover
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Lexus
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Lincoln
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Mazda
                                </small>
                            </div>
                            <div className="col-4">
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Mercedes – Benz
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Mercury
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Mitsubishi
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Nissan
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Renault
                                </small>

                            </div>
                            <div className="col-4">
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Plymouth
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Pontiac Porsche
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Rover
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Saab
                                </small><br></br>
                                <small>
                                    <FontAwesomeIcon icon={faCheck} /> Saleen
                                </small>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;