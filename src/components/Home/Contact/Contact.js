import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section id="contact">
            <div class="section-content">
                <h1 class="section-header">Get in <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
            </div>
            <div class="contact-section">
                <div class="container">
                    <form>
                        <div className="row d-flex">
                        <div class="col-md-6 form-line">
                            <div class="form-group">
                                <label for="exampleInputUsername">Your name</label>
                                <input type="text" class="form-control" id="" placeholder=" Enter Name"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id"></input>
                            </div>
                            <div class="form-group">
                                <label for="telephone">Mobile No.</label>
                                <input type="tel" class="form-control" id="telephone" placeholder=" Enter 10-digit mobile no."></input>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="description"> Message</label>
                                <textarea class="form-control" id="description" placeholder="Enter Your Message"></textarea>
                            </div>
                            <div>

                                <button type="button" class="btn btn-default btn-outline-dark text-white"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
                            </div>

                        </div>
                        </div>
                    </form>
                </div>
                </div>
                </section>
    );
};

export default Contact;