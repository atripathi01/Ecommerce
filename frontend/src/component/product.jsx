import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import data from './Shoesdata';
import {motion} from "framer-motion"

function GetId(props) {
   
    let { id } = useParams();
    const product = data.products.find(x => x._id == id);
    console.log(product.image);
   
   

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
                <div className="centerAlign"><div className="productName">   <h1>{product.name}</h1>
                    <div className="brandName">{product.brand}</div>
                    <div className="shoesPrice">{product.price}</div></div>
                    <div className="aboutProduct">{product.description}</div>
                    <div>

                <div className="qty">
                    Qty:<select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    </select>
                </div>
                <button type="button" >Add To Cart</button>
            </div>
                </div>

            </section>
           



        </>

    )
}
export default GetId
