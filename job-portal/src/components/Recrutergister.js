import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';  
const API_BASE = "http://localhost:3001";




function Registerrecruit(){
        const [name, setName] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [companyname, setComapanyname] = useState("");
        const [roll, setRoll] = useState("");
        const [email, setEmail] = useState("");
        const [confirmpass, setConfirmpass] = useState("");


        const handleOnSubmit = async (e) => {
            e.preventDefault();
            let result = await fetch(
            (API_BASE+'/auth/recregister'), {
                method: "post",
                body: JSON.stringify({ name, username,password,companyname,roll,email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.warn(result);
            console.log(result.error);
            

            if(result.error === "Please enter the details"){
                alert("Please enter the details");
            }else if(result.error === "Email alredy exist"){
                alert("Email alredy exist");
            }else if(result.error === "Username taken"){
                alert("Username taken, Please Choose a different Username");
            }else{
                if (result) {
                    alert("Registered Successfully, Please Login");
                    setComapanyname("");
                    setName("");
                    setPassword("");
                    setRoll("");
                    setUsername("");
                    setConfirmpass("");
                    setEmail("");
                    window.open("http://localhost:3000/login");
                }
            }
        }
    
    return(
    <div className="logincontainer">
    <div>
        <h2>Register as Recruter</h2>
        <form className="form">
                <input type="text" required placeholder="Your Name" name='recnamee'  id="0" value={name}
                 onChange={(e) => setName(e.target.value)}></input>
                <input type="text" required placeholder="Company Name" name='recnamee'  id="0" value={companyname}
                onChange={(e) => setComapanyname(e.target.value)}></input>
                <input type="text" required placeholder="Your Roll at Company" name='recnamee'  id="0" value={roll}
                onChange={(e) => setRoll(e.target.value)}></input>
                <input type="text" required placeholder="Your Email" name='recnamee'  id="0" value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
                <input type="text" required placeholder="Select a Username" name='username'  id="1" value={username}
                onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" required placeholder="Password" name= 'password'  id="2" value={password}
                onChange={(e) => setPassword(e.target.value)}></input>

                <input type="password" required placeholder="Confirm your Password" name= 'password'  id="2" value={confirmpass}
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