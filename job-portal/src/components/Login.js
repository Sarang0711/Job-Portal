import React from "react";
import Input from "./Input";
import RecrutLogin from "./Recrutergister";
import attributes from "./InputAttributes";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./ApplicantDashboard";

const API_BASE = "http://localhost:3001";


function createInputElement(InputElement) {
    return (
        <Input 
            key = {InputElement.id}
            type = {InputElement.type}
            placeholder = { InputElement.placeholder}
        />
    );
}

function Login(){
    const[users, setUsers] = useState([]); //stores data returned from database
    const[isLoggedIn, setisLoggedIn] = useState(false);
    const[isUserRegistered, setisUserRegistered] = useState(true);
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[isrecruter, setRecruter] = useState(false);



    useEffect(() => {
      GetUsers();  
    }, []);
  
    const GetUsers = async () => {
       fetch(API_BASE + "/auth")
        .then(res => res.json())
        .then(data => {setUsers(data) 
            setUsername(users.username)
            console.log(users.username)})
        .catch(err => console.error("errors : " , err)); 
    }

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
        

        if(userpass == confirmepass){

             setUsername(inusername);
             setPassword(userpass);   
             setName(inname);
            
             if(users.some(item => (item.username === inusername))){
                alert("User Already registered, Please Login");
                return;
            }
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

    function func (){
        if(isUserRegistered){
            console.log(users)
            var inusername = document.getElementById('1').value;
             var userpass = document.getElementById('2').value;

             console.log(inusername + " - " + userpass);
            if(users.some(item => (item.username === inusername) && (item.password === userpass))){
                setUsername(inusername);
                setPassword(userpass);
                console.log('hogay are')
                setisLoggedIn(true)
            }else{
                alert("Username or Password Wrong");
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
                            {isUserRegistered ? <p>Don't have an account? <a onClick={() => { setisUserRegistered(false)}}>click here</a> to register</p> : <p>Already registered? <a onClick={()=> {setisUserRegistered(true)}}>click here</a> to login</p> }
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