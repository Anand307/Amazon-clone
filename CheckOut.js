import React from 'react'; 
import './CheckOut.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function CheckOut(){
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/homedecorsubcat/Home-decor-3000x700.gif"
                    alt=""
                />
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {/* CheckoutProduct Basket */}
                    {basket.map((item) => (
                        <CheckoutProduct 
                            key={item.id} // Add a unique key for each item
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
                <h2>The subtotal will goes here</h2>
            </div>
        </div>
    );
}

export default CheckOut;
