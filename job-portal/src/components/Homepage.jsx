import React from 'react';
import '../components/assets/homepage.css';
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:3001";
// import { Link } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Homepage() {
    const[jobs, setJobs] = useState([]);
  
        
        const Getjobs = async () => {
            fetch(API_BASE + "/jobs")
            .then(res => res.json())
            .then(data => {
                // return data;
                console.log(data);
                setJobs(data);
                
                //  setUsername(users.username)
                console.log(jobs)
                })
            .catch(err => console.error("errors : " , err)); 
        }
        // useEffect(()=>{
        //     setJobs(Getjobs());
        //     console.log(jobs);
            // Getjobs().then(res=>{
            //     console.log(res);
            //     setJobs(res);
            //     console.log(jobs)
            // })
            // .catch(err=>{
            //     console.log('errors: ',err)
            // })
        // },[])
    
    
return (
<div className='homebody'>
<div className='main'>
<nav className='navbar'>
<ul id='list1'>
<li><a href='/regirecruiter'>Post Job</a></li>
<li><a href='/login'>JobSeeker</a></li>
<li><a href='/'>AboutUs</a></li>
<li><a href='/'>ContactUs</a></li>
</ul>
<ul id='list2'>
<li><a href='/'>MyAccount</a></li>
</ul>
</nav>
<div className='body'>
    <br></br>
    <h2 className='jobshead'>Top Jobs </h2><br></br>
    <div className='jobcards'>
        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

        <div className="card">
            <h3>CompanyName </h3>
            <h2>Job Title</h2>
            <h4>Job Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium a iusto consequuntur vitae, nesciunt dolorem corrupti, aliquid maiores aliquam, deleniti veniam. Aut modi molestias perspiciatis, voluptatum saepe magnam autem nulla!</h4>
        </div>

    </div>
    <br></br>
    <div className='newthings'>
        <h2>Something New Is Coming Right There!!</h2>
    </div>

    
</div>

<div className="footer">
        <h2>Footer</h2>
        <button onClick={Getjobs}>get</button>
</div>

</div>
</div>
)
}

export default Homepage;