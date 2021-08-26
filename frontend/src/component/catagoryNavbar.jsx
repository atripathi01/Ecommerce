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
                    <li>  <button onClick={() => filterItem("Shoe")}>All</button></li>
                    <li>  <button onClick={() => filterItem("Shoe")}>Shirt</button></li>
                    <li>  <button onClick={() => filterItem("Shoe")}>Pant</button></li>
                    <li>  <button onClick={() => filterItem("Shoe")}>Shoes</button></li>
                    <li> <button onClick={() => filterItem("Shoe")}>Accessories</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default catagoryNavbar
