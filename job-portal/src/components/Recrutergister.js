import React from 'react';
import { useEffect,useState } from 'react';
import Input from './Input';



function RecrutLogin(){

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
                <p>Already Registered? <a onClick={backtologin}>Click here</a> to login</p>
    </>
    ); 
}

export default RecrutLogin;