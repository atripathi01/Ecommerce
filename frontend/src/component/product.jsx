import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import data from './Shoesdata';

function GetId(props) {
    let {id}=useParams();
    const product=data.products.find(x=>x._id==id);
    console.log(product.image);
    // const path=`http://localhost:3000/image/${id}.png`;
    return (
    // <>https://youtu.be/EHTWMpD6S_0
    <>
    <Link to="/product"><button className="backButton">Go Back</button></Link>
    <section className="proddetail">
    <div className="detailImage"> <img src={product.image} /></div>
    <div><div className="productName">   <h1>{product.name}</h1>
         <div className="brandName">{product.brand}</div>
        <div className="shoesPrice">{product.price}</div></div>
        <div className="aboutProduct">{product.description}</div>
     </div>
        
    </section>
    
    
      
     </>
        
    )
}
export default GetId
