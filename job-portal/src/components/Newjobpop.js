import React from 'react';
import "./assets/Newjoppop.css";




function Newjobpop(prop){



    
    return(

    <div class="modal">
            <div class="banner"></div>
            <label class="title">Get New Employees faster</label>
            <p class="description">Grow your Team with our platform, Enter the below form to post a job and start your hiring journey </p>
            
            <form class="form">
    
                 <div class="flex">
                    <label>
                        <input class="input" type="text" placeholder="" required="" />
                        <span>first name</span>
                    </label>

                    <label>
                        <input class="input" type="text" placeholder="" required=""/>
                        <span>last name</span>
                    </label>
                </div>  
                        
                <label>
                    <input class="input" type="email" placeholder="" required=""/>
                    <span>email</span>
                </label> 
                    
                <label>
                    <input class="input" placeholder="" type="tel" required=""/>
                    <span>contact number</span>
                </label>
                <label>
                    <textarea class="input01" placeholder="" rows="3" required=""></textarea>
                    <span>message</span>
                </label>
            </form>

            <div class="benefits">
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
                <span>Use E-mail automations to promote your products.</span>
                </li>
            </ul>
            </div>

            <div class="modal--footer">
            <label class="price"><sup></sup>Enter Job Details<sub></sub></label>
            <button class="upgrade-btn" onClick={prop.postjob}>Post</button>
            </div>
    </div>
    ); 
}

export default Newjobpop;