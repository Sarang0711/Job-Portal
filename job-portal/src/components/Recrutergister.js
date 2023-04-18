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

    // function backtologin(){
    //     alert("u")
    // }


    
        const [name, setName] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [companyname, setComapanyname] = useState("");
        const [roll, setRoll] = useState("");
        const [confirmpass, setConfirmpass] = useState("");


        const handleOnSubmit = async (e) => {
            e.preventDefault();
            let result = await fetch(
            (API_BASE+'/auth/recregister'), {
                method: "post",
                body: JSON.stringify({ name, username,password,companyname,roll }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.warn(result);
            if (result) {
                alert("Data saved succesfully");
                setComapanyname("");
                setName("");
                setPassword("");
                setRoll("");
                setUsername("");
                setConfirmpass("");
            }
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