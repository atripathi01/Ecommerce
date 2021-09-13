

import React from 'react';
import { Link } from 'react-router-dom';
import Foot from './foter'
import './style.css';

const Home = () => {

  return (
    <>
      <section >
        <div  className="ecart-im">
          <img src="../../image/ecom.jpg" className="ecrt-im"></img>
        </div>
        <div className="head-1">
          <h1>Collections And Latest Items</h1>
        </div>
          <div className="shoe-con" >WoW!Shopping</div>
        <div className="clas-center">
        <section className="center-section">

          <div className="sh-box" >
            <img className="image-shoes" src="./image/fourthone.jpg"></img>
            <div className="sh-content"><p className="cont-write" >
              Brand is Here, If you want to purchase or see the 
              leatest product collection. Then click below.
            </p>
            <Link to="/product" ><button className="collection-sh">See collections</button></Link>
            </div>
          </div>
        </section>
        <section className="center-section1">

          {/* <div className="shoe-con" style={{ fontSize: "90px", fontWeight: "900", color: "#d3d3d3" }}>ShopLife</div> */}
          <div className="sh-box" >
            <div className="sh-content"><p className="cont-write" >
            Brand is Here, If you want to purchase or see the 
              leatest product collection. Then click below.
            </p>
            <Link to="/product" ><button className="collection-sh">See collections</button></Link>
            </div>
            <img className="image-shoes" src="./image/fiveone.png"></img>
            
           
          </div>
        </section>
        <section className="center-section2">

          {/* <div className="shoe-con" style={{ fontSize: "90px", fontWeight: "900", color: "#d3d3d3" }}>ShopLife</div> */}
          <div className="sh-box" >
            <img className="image-shoes" src="./image/fiveone.png"></img>
            <div className="sh-content"><p className="cont-write" >
            Brand is Here, If you want to purchase or see the 
              leatest product collection. Then click below.
            </p>
             <Link to="/product" ><button className="collection-sh">See collections</button></Link>

            </div>
            
           
          </div>
        </section>
        </div>
      </section>
      <section className="just-img">
        <div><img src="./image/just1.png"></img></div>
        <div className="thnx">Thanks For Visiting </div>
      
      </section>
      
      <Foot />
    </>
  );

}

export default Home
