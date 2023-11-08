'use client';

import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton( { amount }) 
{
    const initialOptions = {
        "client-id": "AeFmgVlURtEiQ6lEPUstXXkdolG1LB1jpqoUhHn5HRMIKc7H8eV2VC57Wet-6dIsOVy_OfO9Bs2nvh9k",
        currency: "MXN",
        intent: "capture",
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons style={{ layout: "vertical" }} 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount.toString(),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PayPalButton
