import React from "react";
import "./assets/recdashcss.css";
import Input from "./Input";
import {Link} from 'react';
import { FaSearch } from "react-icons/fa";
import {AiOutlineMenu } from "react-icons/ai";







function RecDash() {



    return (
      <div className="container-rec">
        <div className="recnav">
            <div className="recnav-nav">
                <p><strong>Job Portal</strong></p>

                <div className="search-bar">
                  <FaSearch className="icons searchicons"/>
                  <input type="text" placeholder="Search Your employees"></input>
                </div>
                <div className="profile-menu">
                  <AiOutlineMenu className="icons menuicon"/>
                  <div className="profile"></div>
                </div>
                
                    
                
                
            </div>
        </div>
        
      </div>
        
    );
  }
  
  export default RecDash;
  