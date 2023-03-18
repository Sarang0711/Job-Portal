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

    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
    }
    function func(){
        console.log(users)
       var inusername = document.getElementById('1').value;
        var userpass = document.getElementById('2').value;
        console.log(inusername + " - " + userpass);
       if(users.some(item => (item.username === inusername) && (item.password === userpass))){
        setUsername(inusername);
        setPassword(userpass);
        console.log('hogay are')
       setisLoggedIn(true)
    }


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
        <input type="text" placeholder="Username" id="1"></input>
        <input type="text" placeholder="Password" id="2"></input>

        { !isUserRegistered && < Input type="text" placeholder="Confirm Password" />}
        
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
    </div>
     }
        
        </>
        
    )
}
export default Login