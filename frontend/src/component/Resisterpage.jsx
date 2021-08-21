
import { Link } from 'react-router-dom';
import React from 'react';
import Foot from './foter'
import './style.css';

const Resister = () =>{ 
        
        return(
          <>
          <section className="section-resi">
            <div className="comp-resister">
            <div className="whole">
            <p className="res">Resister</p>
            <form>
             <div className="names">
             <label for="FName">Name</label><br></br>
             <input type="text" id="FName" maxLength="30" required></input>
             
            
             </div>
             <label for="e-mail">Email</label>
             <input type="email" id="e-mail" required></input>
             <label for="password">Password</label>
             <input type="password" id="password" minLength="6" maxLength="15" required></input>
            <small>your password must have 6 characters</small><br></br>
            <label for="password">Conform Password</label>
             <input type="password" id="password" minLength="6" maxLength="15" required></input>
              <input type="submit" value="Continue Resister"></input>
              </form>
              <p id="new-user" >Already Resister.Click on Login</p>
             <Link to="/login">  <input className="resis" type="submit" value="Login"></input></Link>
            </div>
            </div>
            </section>
            <Foot/>
            </>
        );
    
}

export default Resister
