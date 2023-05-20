import React from "react";
import "./assets/recdashcss.css";
import './assets/viewapplicants.css';
import { FaSearch } from "react-icons/fa";
import {AiOutlineMenu } from "react-icons/ai";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const API_BASE = "http://localhost:3001";


function ViewApplicants(){
    const [applicants, setApplicants] = useState([]);

    const getApplicants = async() => {
        const res=await fetch(API_BASE + "/getApplicants")
        const response = await res.json();        
        return response;
    }


    useEffect(()=>{
        getApplicants().then(data=>{
            // console.log(data);
            setApplicants(data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);
    
    return(
    <div className="viewApplicantContainer">
        <div className="recnav2" >
            <div className="recnav-nav2">
                <p><strong>Job Portal</strong></p>

                <div className="search-bar">
                  <FaSearch className="icons searchicons"/>
                  <input type="text" placeholder="Search Your employees"></input>
                </div>
                <div className="logout">
                  <Link to="/login">LogOut </Link>
                </div>
                <div className="logout">
                  <Link to="/login/recdash">Go Back </Link>
                </div>
                <div className="profile-menu">
                  <AiOutlineMenu className="icons menuicon"/>
                  <div className="profile"></div>
                </div>
                
            </div>
        </div>
        <p className="urdash">New</p>
        <p className="urdash">Applicants</p>
        <div className="applicantsContainer">
            <div className="filter">
                {applicants.map((aplicant)=>(
                        <div key={aplicant.id} className="applicantCard">
                            <div className="applicantName">
                                <p key={aplicant.id}>Name : {aplicant.name} </p>
                            <p key={aplicant.id}>Username : {aplicant.username}</p>
                            </div>
                            <button>Contact</button>
                        </div>
                    ))} 
            </div>
        </div>
    </div>
    ); 
}

export default ViewApplicants;