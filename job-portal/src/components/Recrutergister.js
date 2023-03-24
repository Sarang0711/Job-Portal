import React from 'react';
import { useEffect,useState } from 'react';
import Input from './Input';



function RecrutLogin(){


    return(
    <>
        <form className="form">
                <input type="text" placeholder="Username" name='username'  id="1"></input>
                <input type="password" placeholder="Password" name= 'password'  id="2"></input>
            </form>
            <button type="submit"
                    
                >
                   Register as Recruter
        
                    
                </button>  
    </>
    ); 
}

export default RecrutLogin;