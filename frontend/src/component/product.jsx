import React from 'react'
import { useParams } from 'react-router';
import data from './Shoesdata';

function GetId(props) {
    let {id}=useParams();
    const product=data.products.find(x=>x._id==id);
   
    return (
    <>
        <h1>productpage</h1>
        <h1>{product.name}</h1>
         <div>{product.brand}</div>
         <img src={product.image} />
        <div>{product.price}</div>
    
      
     </>
        
    )
}
export default GetId
