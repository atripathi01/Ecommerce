import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import data from './Shoesdata';
import {motion} from "framer-motion"

function GetId() {
   
    let { id } = useParams();
    const product = data.products.find(x => x._id == id);
    console.log(product.image);
    const [qty,setQty]=useState(1); 
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
        setCart([...cart,product]);
        
    }

    // const path=`http://localhost:3000/image/${id}.png`;
    return (
        // <>https://youtu.be/EHTWMpD6S_0
        <>
            <Link to="/product" className="back"><button className="backButton">Go Back</button></Link>
            <section className="proddetail">
                <motion.div className="detailImage"
                  initial={{x:"-100%", opacity:1}}
                  animate={{x:0 , opacity:1}}
                  transition={{duration:1.5}}
                > <img src={product.image} className="productImage" /></motion.div>
                <div className="centerAlign">
                    
                    <div className="productName">   <h1>{product.name}</h1></div>
                    <div className="RatingP">Rating: {product.rating}</div>
                    <div className="brandName">{product.brand}</div>
                    <div className="shoesPrice"> ${product.price}</div>
                    <div className="aboutProduct">{product.description}</div>
                    <div>

                <div className="qty">
                    Qty:  <select
                    className="qtyselect"
                    value={qty} onChange={(e)=>{
                        setQty(e.target.value)
                    }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    </select>
                </div>
                <div className="btncenter"></div>
               <button className="addcartt" type="button" onClick={()=>addToCart(product)}>Add To Cart</button>
               
            </div>  
                </div>

            </section>
           



        </>

    )
}
export default GetId
