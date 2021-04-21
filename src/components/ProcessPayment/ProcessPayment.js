import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_ZP1s5odL6t6ZGWMoSgq2Dz8y');


const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>

            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;