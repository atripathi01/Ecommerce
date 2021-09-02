
import data from './Shoesdata';
import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Product = () => {
    const item = data.products;
    const [menuData, setMenuData] = useState(item)
    // console.log(menuData);
    const filterItem = (catagory) => {
        const update = item.filter((product) => {
            return product.category === catagory;
        });
        setMenuData(update);
    }

    return (
        <>
            <section className="onlineShopping">
                <div className="shoesImage"></div>
                <div className="happiness">Happiness is,<br></br>..Online Shopping</div>
            </section>
            <section className="centerNav">
                <nav className="categoryNavbar">
                    <ul className="categoryNavWrapper">
                        <li className="categoryItem">  <button className="category-btn" onClick={() => setMenuData(item)}>All</button></li>
                        <li className="categoryItem">  <button className="category-btn" onClick={() => filterItem("shirt")}>Shirt</button></li>
                        <li className="categoryItem">  <button className="category-btn" onClick={() => filterItem("pant")}>Pant</button></li>
                        <li className="categoryItem">  <button className="category-btn" onClick={() => filterItem("shoes")}>Shoes</button></li>
                        <li className="categoryItem"> <button className="category-btn" onClick={() => filterItem("ass")}>Accessories</button></li>
                    </ul>
                </nav>
            </section>

            <div className="cata">Collection</div>
            <section className="item_page">

                {
                    menuData.map(product => (

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            key={product._id} className="card" >
                            <Link to={/product/ + product._id}>
                                <div className="img-box">   <img src={product.image} className="card_image"
                                    alt={product.name}></img></div>

                                <div className="card_overlay">
                                    <div className="for-margin">
                                        <div className="product_naam">
                                            <h2>{product.name}</h2>

                                        </div>
                                        <div>

                                            $ {product.price}
                                        </div>
                                        <div>

                                            Rating: {product.rating}
                                        </div>


                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                    ))

                }

            </section>
        </>
    );

}

export default Product
