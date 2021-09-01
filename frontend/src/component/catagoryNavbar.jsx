import React from 'react'
import data from './Shoesdata'

function catagoryNavbar() {
    const filterItem = (catagory) => {
        const update = data.filter((product) => {
            return product.catagory === catagory;
        });
    }
    return (
        <div>
            <nav>
                <ul>
                    <li>  <button onClick={() => filterItem("all")}>All</button></li>
                    <li>  <button onClick={() => filterItem("shirt")}>Shirt</button></li>
                    <li>  <button onClick={() => filterItem("pant")}>Pant</button></li>
                    <li>  <button onClick={() => filterItem("shoes")}>Shoes</button></li>
                    <li> <button onClick={() => filterItem("ass")}>Accessories</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default catagoryNavbar
