import React from 'react';
import "./assets/Newjoppop.css";
import { useState } from 'react';




function Newjobpop(prop){



    
    return(

    <div className="modal">
            <label className="title">Get New Employees faster</label>
            <p className="description">Grow your Team with our platform, Enter the below form to post a job and start your hiring journey </p>
            
            <form className="form">
                <input type="text" required placeholder="Company Name" name='companyname'  id="0" value={prop.companyname}
                 onChange={(e) => prop.setcompanyname(e.target.value)}></input>
                <input type="text" required placeholder="Job Title" name='jobtitle'  id="0" value={prop.jobtitle}
                onChange={(e) => prop.setJobTitle(e.target.value)}></input>
                <input type="text" required placeholder="Job description" name='jobdesc'  id="0" value={prop.jobdesc}
                onChange={(e) => prop.setJobdesc(e.target.value)}></input>
            </form>

            <div className="benefits">
            <ul>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
                    <rect fill="black" rx="8" height="16" width="16"></rect>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
                </svg>
                <span>Grow your customer with our social network tools</span>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
                    <rect fill="black" rx="8" height="16" width="16"></rect>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
                </svg>
                </li>
            </ul>
            </div>

            <div className="modal--footer">
            <label className="price">Enter {prop.isitInternship ? <> Internship</> : <>Job</>} Details</label>
                <button className="upgrade-btn" onClick={prop.postjob}>Post</button>
            </div>
    </div>
    ); 
}

export default Newjobpop;