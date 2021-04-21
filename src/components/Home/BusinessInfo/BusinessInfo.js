import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faStreetView, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24/7',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Microsoft, Washington',
        icon: faStreetView,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faMobileAlt,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row business-info">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;