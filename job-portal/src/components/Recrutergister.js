import React from 'react';
import { useEffect,useState } from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';  
import RecDash from './RecDash';
const API_BASE = "http://localhost:3001";




function Registerrecruit(){


    // useEffect(() => {
    //     GetUsers();  
    //   }, []);
  
    // const GetUsers = async () => {
    // fetch(API_BASE + "/auth")
    //     .then(res => res.json())
    //     .then(data => {console.log(data)})
    //     .catch(err => console.error("errors : " , err)); 
    // }



    const addRecruter = async () => {
        console.log("adding recruter");
        var recname = document.getElementById("0").value;
        var reccompany = document.getElementById('1').value;
        var recroll = document.getElementById('2').value;
        var recusername = document.getElementById('3').value;
        var recpass = document.getElementById('4').value;

        const data = await fetch(API_BASE + "/auth/recregister",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                username: recusername,
                password: recpass,
                name : recname,
                companyname : reccompany,
                roll : recroll
            })
        }).then(res => res.json());

        console.log(data)
    }
    
    return(
    <div className="logincontainer">
    <div>
        <h2>Register as Recruter</h2>
        <form className="form">
                <input type="text" placeholder="Your Name" name='recnamee'  id="0" value={name}
                 onChange={(e) => setName(e.target.value)}></input>
                <input type="text" placeholder="Company Name" name='recnamee'  id="0" value={companyname}
                onChange={(e) => setComapanyname(e.target.value)}></input>
                <input type="text" placeholder="Your Roll at Company" name='recnamee'  id="0" value={roll}
                onChange={(e) => setRoll(e.target.value)}></input>

                <input type="text" placeholder="Select a Username" name='username'  id="1" value={username}
                onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" placeholder="Password" name= 'password'  id="2" value={password}
                onChange={(e) => setPassword(e.target.value)}></input>

                <input type="password" placeholder="Confirm your Password" name= 'password'  id="2" value={confirmpass}
                onChange={(e) => setConfirmpass(e.target.value)}></input>
            </form>
            <button type="submit"   onClick={handleOnSubmit}
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