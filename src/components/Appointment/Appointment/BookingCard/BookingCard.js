import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
 
const BookingCard = ({ booking, date }) => {
 
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
 
    function closeModal() {
        setIsOpen(false);
    }
 
 
 
    return (
 
 
        <div className="col-md-4 mb-5">
            <div className="card p-3 service-card">
                <div className="card-body text-center ">
                    <h5 style={{ height: '40px'}} className="card-title text-brand">{booking.serviceTitle}</h5>
                    <h6 style={{ height: '130px'}}>{booking.serviceDescription}</h6>
                    <h6>{booking.serviceTime}</h6>
                    <p>{booking.availableSpace} SPACES AVAILABLE</p>
                    <p>Price: {booking.servicePrice}</p>
                    <button onClick={openModal} className="btn btn-outline-primary text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.serviceTitle} closeModal={closeModal} date={date} bookingPrice={booking.servicePrice}></AppointmentForm>
 
                </div>
                
            </div>
        </div>
 
 
    );
};
 
export default BookingCard;
 
 
