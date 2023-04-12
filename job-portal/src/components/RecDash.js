import React from "react";
import "./assets/recdashcss.css";
import Input from "./Input";
import {Link} from 'react';
import { FaSearch } from "react-icons/fa";
import {AiOutlineMenu } from "react-icons/ai";
import Ladyback from "./assets/ladywalk.png"





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

            <div className="quick-container">
                <div className="innerholder">
                  <p>Post a</p>
                  <div className="postbtn">
                    <button>Internship</button>
                    <button>Job</button>
                    <button>View Applicants</button>
                  </div>
                </div>
              </div>


        </div>
        <p className="urdash">Your</p>
        <p className="urdash">Dashboard</p>

        <div className="dashcontainer">
            <div className="appliedcontainer widget">
                <p className="heading">Number of Applicants</p>
                <p className="number">55</p>
            </div>
            <div className="opporcont widget">
                  
            </div>
            <div className="newcadcont widget">

            </div>
            <div className="somecont widget">

            </div>

        </div>

        
      </div>
        
    );
  }
  
  export default RecDash;
  