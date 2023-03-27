import React from 'react';
import { useEffect,useState } from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';  
import RecDash from './RecDash';
const API_BASE = "http://localhost:3001";




function Registerrecruit(){


    useEffect(() => {
        GetUsers();  
      }, []);
  
    const GetUsers = async () => {
    fetch(API_BASE + "/auth")
        .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(err => console.error("errors : " , err)); 
    }

    function backtologin(){
        alert("u")
    }
    
    return(
    <div className="logincontainer">
    <div>
        <h2>Register as Recruter</h2>
        <form className="form">
                <input type="text" placeholder="Your Name" name='recnamee'  id="0"></input>
                <input type="text" placeholder="Company Name" name='recnamee'  id="0"></input>
                <input type="text" placeholder="Your Roll at Company" name='recnamee'  id="0"></input>

                <input type="text" placeholder="Select a Username" name='username'  id="1"></input>
                <input type="password" placeholder="Password" name= 'password'  id="2"></input>

                <input type="password" placeholder="Confirm your Password" name= 'password'  id="2"></input>
            </form>
            <button type="submit"   
                >
                   Register as Recruter 
                </button>  

                <p>
                    <Link to="/login">Click here </Link>
                    to go back to Login
                </p>
                <p>
                    <Link to="/login/recdash">Click here </Link>
                    to goto recdash
                </p>

    </div>
    </div>
    ); 
}

export default Registerrecruit;