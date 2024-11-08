import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link,useNavigate} from "react-router-dom";  // components like BrowserRouter, Routes, Route, Link, etc.
import { useStateValue } from "./StateProvider";
import {auth} from './firebase.js';
function Header() { 
  const [{basket,user},dispatch] = useStateValue();
  const navigate = useNavigate();
     const handleAuthentication = () =>{
        if(user){
            auth.signOut();
            navigate('/');  // Redirect to home page after sign out
        }
     }  
  return (
    <div className="header">
      <Link to="/">{/* Go first Page */}
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
      </Link>

      <div className="header_search">
        <input placeholder="Search a Product" className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
            <Link to={!user && '/login'}> {/*No user only go login page*/}
            <div onClick={handleAuthentication} className="header_option">
                <span className="header_optionOne">Hello {!user ? "Guest" : user.email } </span>
                <span className="header_optionTwo">{user ?"Sign Out" : "Sign In"}</span>
            </div>
            </Link>
        
      <div className="header_option">
        <span className="header_optionOne">Returns</span>
        <span className="header_optionTwo">& Orders</span>
      </div>
      
      <div className="header_option">
        <span className="header_optionOne">Your</span>
        <span className="header_optionTwo">Prime</span>
      </div>

      <Link to="/checkout"> {/* Go Basket Page*/}
        <div className="header_basket">
          <ShoppingBasketIcon />  <span className="header_optionTwo header_basketCount">{basket?.length}</span>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Header;
