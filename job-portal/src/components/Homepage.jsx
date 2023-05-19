import React from 'react';
import '../components/assets/homepage.css';
import { useState,useEffect } from "react";
// import axios from "axios";

const API_BASE = "http://localhost:3001";
// import { Link } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Homepage(props) {
    const [jobs, setJobs] = useState([]);

    // const Getjobs=axios({
  
    //     // Endpoint to send files
    //     url: "http://localhost:3001/jobs",
    //     method: "POST",
    //     headers: {
    
    //       // Add any auth token here
    //       authorization: "your token comes here",
    //     }
    
        
    //   })
    
        // Handle the response from backend here
        // .then((res) => {console.log(res) })
  
        
        const Getjobs = async() => {
            console.log('inn getjob')
            const res=await fetch(API_BASE + "/jobs")
            // console.log(response);
            const response = await res.json();
            console.log(response)
            
            return response;
            // .then(res =>console.log(res.json()))
            // .then(data => {
            //     console.log(data);
            //    return data;
                
            //     })
            // .catch(err => console.log("errors : " , err)); 
        }

       
        useEffect(()=>{
            Getjobs().then(data=>{
                // console.log(data);
                setJobs(data)
                
            })
            .catch(err=>{
                console.log(err);
            })
        },[]);

        function apply(){
            console.log(props.isloggedin)
            if (props.isloggedin){
                console.log('loggedinn')
            }
        }

        // function set(){
        //     console.log(jobs);
        //     jobs.forEach((job)=>{
        //         console.log(job.companyname);
        //     })
        // }
    
    
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
        
        
            {jobs.map((job)=>(
                <div key={job.id} className="card">
                    <h3 key={job.id}>{job.companyname} </h3>
                    <h2 key={job.id}>{job.jobtitle}</h2>
                    <h4 key={job.id}>{job.jobdesc} 
                    <button onClick={apply}>Apply</button>
                    </h4>
                    
                </div>
            ))} 
            
            

        {/* <div className="card">
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
        </div> */}

    </div>
    <br></br>
    <div className='newthings'>
        <h2>Something New Is Coming Right There!!</h2>
    </div>

    
</div>

<div className="footer">
        <h2>Footer</h2>
        
</div>

</div>
</div>
)
}

export default Homepage;