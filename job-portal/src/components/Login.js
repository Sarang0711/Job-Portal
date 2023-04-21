import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:3001";


function Login(){
    const[users, setUsers] = useState([]); //stores data returned from database
    const[isLoggedIn, setisLoggedIn] = useState(false);
    const[isUserRegistered, setisUserRegistered] = useState(true);
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');




    function handleChange(event) {
        if(event.target.name === "username") {
            var tempusername = event.target.value;
            setUsername(tempusername);
        }
        else if (event.target.name === 'password') {
            var temppassword = event.target.value;
            setPassword(temppassword);
        }
        else if(event.target.name === 'name'){
            var tempname = event.target.value;
            setName(tempname);
        }

    }

    const addUsers = async () => {
        var inusername = document.getElementById('1').value;
        var userpass = document.getElementById('2').value;
        var confirmepass = document.getElementById('3').value;
        var inname = document.getElementById("4").value;
        console.log(inusername + ' - ' + userpass )
        

        if(userpass === confirmepass){

             setUsername(inusername);
             setPassword(userpass);   
             setName(inname);
            
            //  if(users.some(item => (item.username === inusername))){
            //     alert("User Already registered, Please Login");
            //     return;
            // }
        }else{
            alert("Wrong passwords");
            return;
        }
        console.log(username+"-"+password);
        const data = await fetch(API_BASE + "/auth/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                username : username,
                password : password,
                name : name
            })
        }).then(res => res.json());

        console.log(data)
    }

    const func = async (e) => {

        if(isUserRegistered){
            var inusername = document.getElementById('1').value;
            var userpass = document.getElementById('2').value;
            console.log(" frontend : " + inusername + " - " + userpass);
            
               e.preventDefault();
               let result = await fetch(
               (API_BASE+'/auth'), {
                   method: "post",
                   body: JSON.stringify({ username : inusername,password : userpass }),
                   headers: {
                       'Content-Type': 'application/json'
                   }
               })
               result = await result.json();
               console.log(result.code);

               if(result.code === 1){
                    alert("Successfully Logged in");
                    window.open("http://localhost:3000/dashboard");
               }
            
        }else{
           addUsers();  

        }
        
    }

    
    return (
        <div className="logincontainer">

            {isLoggedIn ? <>
                <h2>Successfully Logged In</h2>
                <h1>Hello {name}</h1>
                
                <button
                        
                        onClick={() => {setisLoggedIn(false)}}
                    >Logout
                </button>
                
            </> :
                <div>
                        <>{ isUserRegistered ? <h1>Login</h1> : <h1>Register</h1> }
                        <form className="form">
                            { !isUserRegistered && <input type="text" placeholder="Your Full Name" id="4" name='name' onChange= {handleChange}></input>}
                            <input type="text" placeholder="Username" name='username' onChange={handleChange} id="1"></input>
                            <input type="password" placeholder="Password" name= 'password' onChange= {handleChange} id="2"></input>
                    
                            { !isUserRegistered && <input type="password" placeholder="Confirm Password" id="3"></input>}
                            
                        </form>
                        <button type="submit"
                                onClick={func}
                            >
                                { isUserRegistered ? "Login" : "Register Me" }
                            </button>  
                            {isUserRegistered ? <p>Don't have an account? <a href="#." onClick={() => { setisUserRegistered(false)}}>click here</a> to register</p> : <p>Already registered? <a href="#." onClick={()=> {setisUserRegistered(true)}}>click here</a> to login</p> }
                            {isUserRegistered ? <p></p> : <p>
                            <Link to="/regirecruiter">Click here</Link>
                             to Register as Recruter</p> }
                        </>
                    
                    
                
                </div>
                }
        
        
     </div>
    )
}
export default Login;