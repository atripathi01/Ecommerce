
import data from './Shoesdata';
import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'

const Product = () =>{ 
    
        return(
            <>
            <div className="cata">Shoes</div>
            <section className="item_page">
            
            {
                data.products.map(product =>(
                    <Link to={/product/+product._id}>
                    <div key={product._id} className="card" >
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
                        </div>
                       
                    </Link>
                ))

            }
                        
            </section>
            </>
        );
    
}

export default Product
