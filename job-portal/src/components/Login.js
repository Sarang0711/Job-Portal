import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:3001";


function Login(props){
    const[password, setPassword] = useState('');




    function handleChange(event) {
        if(event.target.name === "username") {
            var tempusername = event.target.value;
            props.setUsernames(tempusername);
        }
        else if (event.target.name === 'password') {
            var temppassword = event.target.value;
            setPassword(temppassword);
        }
        else if(event.target.name === 'name'){
            var tempname = event.target.value;
            props.setName(tempname);
        }

    }

    const addUsers = async () => {
        var inusername = document.getElementById('1').value;
        var userpass = document.getElementById('2').value;
        var confirmepass = document.getElementById('3').value;
        var inname = document.getElementById("4").value;
        console.log(inusername + ' - ' + userpass )
        

        if(userpass === confirmepass){

            props.setUsernames(inusername);
             setPassword(userpass);   
             props.changeName(inname);

        }else{
            alert("Wrong passwords");
            return;
        }
        console.log(props.username+"-"+password);
        const data = await fetch(API_BASE + "/auth/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                username : props.username,
                password : password,
                name : props.name
            })
        }).then(res => res.json());

        console.log(data)
    }

    const func = async (e) => {

        if(props.isUserRegistered){
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
               console.log(result);
               console.log(result.code);

               if(result.code === 1){
                    alert("Successfully Logged in");
                    props.setIsLoggedIns();
                    props.setNames(result.name);
                    console.log(props.name);
                    window.open("http://localhost:3000/dashboard");
               }else if(result.code === 0){
                    alert("Username or password does not match");
               }
            
        }else{
           addUsers();  
        }
        
    }

    
    return (
        <div className="logincontainer">

            {props.isLoggedIn ? <>
                <h2>Successfully Logged In</h2>
                <h1>Hello {props.name}</h1>
                
                <button
                        
                        onClick={() => {props.setisLoggedIn(false)}}
                    >Logout
                </button>
                
            </> :
                <div>
                        <>{ props.isUserRegistered ? <h1>Login</h1> : <h1>Register</h1> }
                        <form className="form">
                            { !props.isUserRegistered && <input type="text" placeholder="Your Full Name" id="4" name='name' onChange= {handleChange}></input>}
                            <input type="text" placeholder="Username" name='username' onChange={handleChange} id="1"></input>
                            <input type="password" placeholder="Password" name= 'password' onChange= {handleChange} id="2"></input>
                    
                            { !props.isUserRegistered && <input type="password" placeholder="Confirm Password" id="3"></input>}
                            
                        </form>
                        <button type="submit"
                                onClick={func}
                            >
                                { props.isUserRegistered ? "Login" : "Register Me" }
                            </button>  
                            {props.isUserRegistered ? <p>Don't have an account? <a href="#." onClick={() => { props.setisUserRegistered(false)}}>click here</a> to register</p> : <p>Already registered? <a href="#." onClick={()=> {props.setisUserRegistered(true)}}>click here</a> to login</p> }
                            {props.isUserRegistered ? <p></p> : <p>
                            <Link to="/regirecruiter">Click here</Link>
                             to Register as Recruter</p> }
                        </>
                    
                    
                
                </div>
                }
        
        
     </div>
    )
}
export default Login;