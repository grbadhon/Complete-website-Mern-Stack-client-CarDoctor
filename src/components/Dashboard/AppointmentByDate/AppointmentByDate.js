import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({ appointments }) => {
 
    return (
        <div>
            
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                    <div class="row d-flex justify-content-center align-items-center mt-5 pt-5">
                        <div class="spinner-border m-5 p-5" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default AppointmentByDate; 