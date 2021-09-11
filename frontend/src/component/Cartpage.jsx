
import data from "./Shoesdata";
import React, { useState } from 'react';
import Foot from './foter'
import './style.css';

const Cart = (props) => {
    
     

    return (
        <>
            <h1>Cartpage</h1> 
            {/* <div>
                {cartItem.length===0 && <div>Cart is Empty</div>}
            </div> */}
            <Foot />
        </>
    );

}

export default Cart
