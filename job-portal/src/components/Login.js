import React from "react";
import Input from "./Input";
import attributes from "./InputAttributes";
import { useState,useEffect } from "react";
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
    const[users, setUsers] = useState([]);
    const[isLoggedIn, setisLoggedIn] = useState(false);
    const[isUserRegistered, setisUserRegistered] = useState(true);
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    let isuserLogin = false;

    useEffect(() => {
      GetUsers();  
    }, []);
  
    const GetUsers = async () => {
       fetch(API_BASE + "/auth")
        .then(res => res.json())
        .then(data => setUsers(data))
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

    }

    const addUsers = async () => {
        var inusername = document.getElementById('1').value;
        var userpass = document.getElementById('2').value;
        var confirmepass = document.getElementById('3').value;
        console.log(inusername + ' -=== ' + userpass )
        if(users.some(item => (item.username === inusername))){
            alert("User Already registered, Please Login");
           }

        if(userpass == confirmepass){
             setUsername(inusername);
             setPassword(userpass);   
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
                password : password
            })
        }).then(res => res.json());

        console.log(data)
    }

    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
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

function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

    
    return (
        <>

{isLoggedIn ? <>
    <h1>Hello : {username}</h1>
    <button
            style = {{backgroundColor: isMouseOver ? "Black" : "White"}}
            onClick={() => {setisLoggedIn(false)}}
        >Logout
        </button>
</> :
    <div>

    <form className="form">

        {/* {attributes.map(createInputElement)} */}
        <input type="text" placeholder="Username" name='username' onChange={handleChange} id="1"></input>
        <input type="text" placeholder="Password" name= 'password' onChange= {handleChange} id="2"></input>

        { !isUserRegistered && <input type="text" placeholder="Confirm Password" id="3"></input>}
        
    </form>
    <button type="submit"
            style = {{backgroundColor: isMouseOver ? "Black" : "White"}}
            // onMouseOver = { handleMouseOver }
            // onMouseOut = { handleMouseOut }
            onClick={func}
        >
            { isUserRegistered ? "Login" : "SignIn" }{/* Note here in js quotes are given for SignIn and Login */}
            {/* {isuserLogin ? console.log('loggind'): null} */}

            
        </button>  
        {isUserRegistered ? <p>Don't have an account? <a onClick={() => { setisUserRegistered(false)}}>click here</a> to register</p> : <p>Already registered? <a onClick={()=> {setisUserRegistered(true)}}>click here</a> to login</p> }
      
    </div>
     }
        
        
     </>
    )
}
export default Login