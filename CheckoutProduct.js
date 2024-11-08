import React from "react";
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";
//props
function CheckOutProduct({id,image,title,price,rating}){
    const [{basket},dispatch] = useStateValue();
    const RemoveFromBasket = () =>{
        // remove the item form basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return(
        <div className="checkoutproduct">
            <img className="checkoutproduct_image" src={image}/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    {Array(rating).fill().map((_,i)=>(<p className="star">★</p>))}
                </div>
                <button onClick={RemoveFromBasket}>Remvove from Basket</button>
            </div>
        </div>
    );
}

export default CheckOutProduct;
