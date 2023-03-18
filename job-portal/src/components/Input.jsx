import React from "react";
import { isUserRegistered } from "../App";

function Input(props) {
    return (
        <input 
            type={props.type} 
            placeholder= {props.placeholder}
        />
        // { isUserRegistered ? <input type="password" placeholder="confirm password"}
        
    )
}

export default Input;