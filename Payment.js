import React from "react";
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";

function Payment() {
  const [{ basket, user, address }] = useStateValue();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if user is logged in
    if (!user) {
      alert("Please sign in to proceed with the payment.");
      navigate('/login', { state: { from: "/payment" } });  // Redirect to the login page
      return; // Exit the function
    }

    // Implement payment processing logic (e.g., call your payment API, handle Stripe integration)
    console.log("Processing payment...");
    // Example: navigate to success page after payment
    navigate('/Payment_successful');
  }

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>CheckOut (<Link to="/checkout">{basket?.length} items</Link>)</h1>

        {/* Payment section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>{user?.name}</p> {/* Display username if available */}
            {address && (
              <>
                <p>{address.name}</p>
                <p>{address.address}</p>
                <p>{address.city}</p>
                <p>{address.postalCode}</p>
              </>
            )}
          </div>
        </div>

        {/* Payment section - review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {/* Render basket items */}
            {basket.map(item => (
              <CheckOutProduct
                key={item.id || item.title}  // Always add a key when mapping through lists
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - payment methods */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stripe or other payment gateway integration */}
            <form onSubmit={handleSubmit}>
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Total order Amount: {value}</h3>
                  )}
                  decimalScale={0}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs "}
                />
                <button type="submit" className="payment_button">
                  Place Your Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
