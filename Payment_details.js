import React, { useState } from "react";
import './Payment_details.css';
import { useNavigate } from "react-router-dom"; 
import { useStateValue } from "./StateProvider";

function Payment_details() {
  // State for managing form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    additionalInfo: ""
  });

  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // Dispatch the form data as address
    dispatch({
      type: "SET_ADDRESS",
      address: formData,
    });

    // Navigate to the Payment page after form submission
    navigate('/Payment');
  };
  
  return (
    <div className="paymentDetails">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit} className="paymentDetailsForm">
        <div className="formGroup">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="formGroup">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="formGroup">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </div>

        <div className="formGroup">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
          />
        </div>

        <div className="formGroup">
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Enter your postal code"
            required
          />
        </div>

       

        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default Payment_details;
