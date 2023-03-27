import React from 'react';
import { useEffect,useState } from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';    
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
    <>
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
                {/* <p>Already Registered? <a onClick={backtologin}>Click here</a> to login</p> */}
                <p>
                    
                <Link to="/login">Click here</Link>
                </p>
    </>
    ); 
}

export default Registerrecruit;