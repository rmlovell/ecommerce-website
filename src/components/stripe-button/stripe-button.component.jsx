import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KakMdG5mPWNhioYJZXcXL9NTQQltM62JEqXGYpQ1GKWMLc5IJWu5UXTwMpWGKsfmASiSqr8KxIgBnp1TWHfnWh300UFldyrc2';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return (
        <StripeCheckout
            label = 'Pay Now'
            name = "CRWN Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}    
        />
    )
}

export default StripeCheckoutButton;