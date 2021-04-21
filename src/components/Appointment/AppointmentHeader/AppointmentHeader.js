import React, { useState } from 'react';
import serviceBike from '../../../images/serviceBike.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css'

const AppointmentHeader = ({ handleDateChange }) => {
    const [value, onChange] = useState(new Date());



    return (
        <main className="row d-flex align-items-center justify-content-center mb-5 p-5  appointment-header">
            
            <div className="col-md-3 text-white">
                <h2 >Appointment</h2>
                <h4>Pick Your Service Date:</h4>
            </div>
            <div className="col-md-3  ">
                <Calendar
                    onChange={handleDateChange}
                    value={value}
                />
            </div>
            
        </main>
    );
};

export default AppointmentHeader;