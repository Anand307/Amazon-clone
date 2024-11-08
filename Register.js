import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Register.css';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    // Helper functions for validation
    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!name) {
            formIsValid = false;
            errors["name"] = "Name is required.";
        }

        if (!email) {
            formIsValid = false;
            errors["email"] = "Email is required.";
        }

        if (!address) {
            formIsValid = false;
            errors["address"] = "Address is required.";
        }

        if (!password) {
            formIsValid = false;
            errors["password"] = "Password is required.";
        } else if (password.length < 6) {
            formIsValid = false;
            errors["password"] = "Password should be at least 6 characters long.";
        }

        if (password !== confirmPassword) {
            formIsValid = false;
            errors["confirmPassword"] = "Passwords do not match.";
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        try {
            // Create a new user with Firebase authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered successfully:", userCredential.user);
            navigate('/'); // Navigate to the home page after successful registration
        } catch (error) {
            console.error("Registration error:", error.message);
            setErrors({ email: error.message });
        }
    };

    return (
        <div className="register">
            <h1>Create Account</h1>
            <form onSubmit={handleRegister}>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <label>Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                />
                {errors.address && <p className="error">{errors.address}</p>}

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                {errors.password && <p className="error">{errors.password}</p>}

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default Register;
