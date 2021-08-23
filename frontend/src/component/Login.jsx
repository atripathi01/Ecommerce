
import { Link } from 'react-router-dom'
import React from 'react';
import Foot from './foter'
import './style.css';

const Login = () => {

    return (
        <>
            <section className="section-login">
                <div className="comp-login">
                    <div className="whole">
                        <p className="tit-1">Log-In</p>
                        <label for="e-mail">Email<br></br>
                            <input type="email" id="e-mail" required ></input><br></br>
                        </label>

                        <label for="password">Password<br></br>
                            <input type="password" id="password" required></input>
                            <br></br></label>
                        <input type="submit" value="Continue Login"></input>
                        <p id="new-user" >New User?</p>
                        <Link to="/resister">  <input className="resis" type="submit" value="GET STARTED"></input></Link>

                    </div>


                </div>

            </section>
            <Foot />
        </>
    );

}

export default Login
