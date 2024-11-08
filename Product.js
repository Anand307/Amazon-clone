import React from "react";
import './Product.css';
import { useStateValue } from "./StateProvider";
function Product({id, title,image,price,rating}){
    const [{basket},dispatch] = useStateValue();
    console.log("This is basket");
    {/*AddToBasket function */}
    const AddToBasket = () =>{
        // dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    return(
        <div className="product">
            <div className="product_Info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    { /*create an array of rating */}
                    {Array(rating).fill().map((_,i)=>(<p className="star">★</p>))}
                </div> 
            </div>
            <img src={image}/>
            <button onClick={AddToBasket}>Add to Basket</button>
        </div>
    );
}
export default Product;
