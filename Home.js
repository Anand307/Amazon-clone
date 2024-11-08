import React from "react";
import './Home.css'
import Product from "./Product";
function Home(){
    return(
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/LEO/Jup24/Phase3/FDFO_3B_PC_Header_1500x300_Ends_Tonight.gif" />
                <div className="home_row">
                    {/* product */}
                    <Product ida = '1'
                    title = "Acer Extensa 15 Lightweight Laptop Intel Core i3 11th Gen Processor - (8 GB/ 512 GB SSD/Windows 11 Home/ 1.7kg/ Black"
                    price = '29990'
                    image="https://m.media-amazon.com/images/I/51g12kaYslL.SL1125.jpg"
                   rating={4}
                    />
                    <Product id='2'
                    title="LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, 6 Motion DD, Smart Diagnosis, Fully-Automatic Front Load Washing Machine"
                    price = '28990'
                    image="https://m.media-amazon.com/images/I/71msFUl565L.SL1500.jpg"
                    rating={4}
                    />
                    <Product id='3'
                    title="Fire-Boltt Ninja Call Pro Max 51.05mm (2.01 inch) Display Smart Watch, Bluetooth Calling, 120+ Sports Modes, Health Suite, Voice Assistance (Black)"
                    price = '1299'
                    image="https://m.media-amazon.com/images/I/41MNpp00hmL.SX300_SY300_QL70_FMwebp.jpg"
                    rating={4}
                    />
                </div>
                <div className="home_row">
                    {/*product*/}
                    <Product id='4'
                    title = "Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)"
                    price = '79999'
                    image="https://m.media-amazon.com/images/I/71lD7eGdW-L.SX679.jpg"
                   rating={4}/>
                   <Product id='6'
                    title = "Apple iPhone 16 (128 GB) "
                    price = '79900'
                    image="https://m.media-amazon.com/images/I/31ewxqWri1L.SY445_SX342_QL70_FMwebp.jpg"
                   rating={4}/>
                    <Product id='5'
                    title = "Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones"
                    price = '1299'
                    image="https://m.media-amazon.com/images/I/31pAe23ncfL.SX300_SY300_QL70_FMwebp.jpg"
                   rating={4}/> 
                </div>
                <div className="home_row">
                    {/*product*/}
                    <Product id='7'
                    title="Samsung 108 cm (43 inches) D Series Crystal 4K Vivid Pro Ultra HD Smart LED TV UA43DUE77AKLXL (Black)" 
                    price = '30490'
                    image="https://m.media-amazon.com/images/I/51dRoa85BNL.SY300_SX300_QL70_FMwebp.jpg"
                   rating={4}/> 
                </div>
            </div>
        </div>
    );
}
export default Home;
