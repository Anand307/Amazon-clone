import React from "react";
import {useEffect} from 'react';
import "./App.css"; 
import Header from "./Header"; // Import Header component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CheckOut from './CheckOut';
import Login from './Login';
import Payment from './Payment';
import Payment_details from "./Payment_details";
import Payment_successful from './Payment_successful';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Register from './Register';
function App() { 
  
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    // will only run once when the app component loads..
    // If statement in React.js
    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS >>>",authUser);
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        });
      }
      else{
        // the user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    });
  },[])
  return (
    <Router>
      <div className="App"> 
        <Routes>
        <Route path="/login" 
            element={
              <> 
              <Login/>{/* login page */}
              </>
            } 
          />
          <Route path="/register"
            element = {
              <>
              <Register/>{/* Register Page */}
              </>
            }
          />
          <Route path="/checkout" 
            element={
              <> 
                <Header/> {/* Common Header*/}
                <CheckOut/>  {/* checkout page */}
              </>
            } 
          />
          
          <Route path="/payment_details" element={
            <>
              <Payment_details/> {/* Pass setAddress to Payment_details */}
            </>
          } />
          <Route path="/Payment_successful" element={
            <>
              <Header/>
              <Payment_successful/> {/* Pass setAddress to Payment_details */}
            </>
          } />
           <Route path="/payment" 
            element={
              <> 
                <Header/> {/* Common Header*/} 
                <Payment/>  {/* payment page */}  
              </>
            } 
          />
          <Route path="/" element={
            <>  
            <Header/> {/* Common Header*/}
            <Home/>  {/* Home page */}
            </>
          } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
