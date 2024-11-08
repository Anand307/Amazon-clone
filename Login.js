import React, { useState } from 'react';
import './Login.css';
import { Link,useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "./StateProvider";
function Login() {
    const navigate = useNavigate();
    const [{}, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    
    const location = useLocation();
    // Grab the 'from' location passed as state, default to '/' (home) if not present
    const { from } = location.state || { from: '/' };
    // Helper function to validate email format
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Helper function to validate password length
    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        if (!validateEmail(email)) {
            formIsValid = false;
            errors["email"] = "Please enter a valid email address.";
        }

        if (!validatePassword(password)) {
            formIsValid = false;
            errors["password"] = "Password should be at least 6 characters long.";
        }

        setErrors(errors);
        return formIsValid;
    };

    const signIn = e => {
        e.preventDefault();
        if (!handleValidation()) return;

        // Implement Firebase sign-in here
        signInWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Dispatch action to set user email and name in global state
                dispatch({
                    type: 'SET_USER',
                    user: {
                        email: user.email,
                        name: user.displayName || user.email.split('@')[0]  // Default to part of email if displayName isn't available
                    }
                });
                console.log("Signed in successfully:", userCredential);
                navigate(from, { replace: true });// Redirect to home page after successful sign_In
            })
            .catch(error => {
                console.error("Sign-in error:", error.code, error.message);
                let errorMessage = '';
                switch (error.code) {
                    case 'auth/wrong-password':
                        errorMessage = "The password you entered is incorrect.";
                        break;
                    case 'auth/user-not-found':
                        errorMessage = "No account found with this email.";
                        break;
                    case 'auth/invalid-email':
                        errorMessage = "The email address is not valid.";
                        break;
                    case 'auth/invalid-credential':
                        errorMessage = "The supplied credentials are invalid. Please check your email and password.";
                        break;
                    default:
                        errorMessage = "An unexpected error occurred. Please try again.";
                }
                setErrors({ email: errorMessage, password: '' }); // Update error state
            });
    };
    const navigateToRegister = () => {
        navigate('/register'); // Navigate to the Register page
    };
    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login_logo" 
                    src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png" 
                    alt="Amazon logo"
                />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    {/*Tracking Email and Password*/}
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email" 
                        required 
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password" 
                        required 
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    {/* sign_In Button */}
                    <button type="submit" onClick={signIn} className='login_signInButton'>Sign In</button>
                    <p>
                        By continuing, you agree to Amazon Fake Clone Conditions of 
                        Use and Privacy Notice.
                    </p>
                    {/*register Button */}
                    <button type="button" onClick={navigateToRegister} className='login_registerButton'>
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
