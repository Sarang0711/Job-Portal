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
              <p className="heading">Posted</p>
              <p className="number">5</p>
              <p className="slash">\</p>
              <p className="headinglow ">Hired</p>
              <p className="number2">8</p>
            </div>
            <div className="newcadcont widget">
                <p className="heading">New Applicants</p>
                <p className="number">38</p>
            </div>
            <div className="somecont widget">
                <div className="filter">
                    <p>Some Text here</p>
                    <svg fill='#11034deb' xmlns="http://www.w3.org/2000/svg" height="48"  viewBox="0 96 960 960" width="48"><path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"/></svg>
                </div>
            </div>

        </div>

        
      </div>
        
    );
  }
  
  export default RecDash;
  