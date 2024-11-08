import React from 'react';
import './Payment_successful.css'; // Import the CSS file

function Payment_successful() {
  return (
    <div className="payment-successful"> {/* Apply the CSS class */}
        <h3>Thank you, your order has been placed.</h3>
        <p>Please check your email for order confirmation.</p>
        <p>and detailed delivery info.</p>
        <p>Visit the Message Center to review your notifications.</p>
    </div>
  )
}

export default Payment_successful;
