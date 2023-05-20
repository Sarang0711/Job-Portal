import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/assets/AppDash.css";
import { NavLink } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavDropdown } from 'react-bootstrap';
import {useState,useEffect} from 'react'

const API_BASE = "http://localhost:3001";

function ApplicantDashboard(props) {
  const [jobs, setJobs] = useState([]);

  const Getjobs = async() => {
    console.log('inn getjob')
    const res=await fetch(API_BASE + "/jobs")
    // console.log(response);
    const response = await res.json();
    console.log(response)
    
    return response;
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

  function tester(){
    console.log(props);
  }
    

  

  return (
    <>
      {/* <Router> */}
      <Navbar bg="light" className='custom-nav' >
        <Navbar.Brand href="/">Job Portal</Navbar.Brand>
        <p onClick={tester}>Welcome {props.name} </p>

        {/* <NavbarToggle aria-controls='basic-navbar-nav'/> */}
        <NavbarCollapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <NavLink exact="true" path="/dashboard" className="nav-link" >New Jobs</NavLink>
            <NavLink path="/applied" className="nav-link" >Applied</NavLink>
            <NavLink path="/referfriend" className="nav-link" >Refer a Friend</NavLink>
            <NavLink path="/messages" className="nav-link" >Messages</NavLink>
            <div className="profile">
              <NavDropdown title="" id='profile-dropdown'>
                <NavDropdown.Item>Edit Resume</NavDropdown.Item>
                <NavDropdown.Item>Bootmarked</NavDropdown.Item>
                <NavDropdown.Item>Help</NavDropdown.Item>
                <NavDropdown.Item>Log Out</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </NavbarCollapse>
      </Navbar>

      <div className='jobcards'>
        
        
            {jobs.map((job)=>(
                <div key={job.id} className="card">
                    <h3 key={job.id}>{job.companyname} </h3>
                    <h2 key={job.id}>{job.jobtitle}</h2>
                    <h4 key={job.id}>{job.jobdesc} 
                    <button >Apply</button>
                    </h4>
                    
                </div>
            ))} 
      </div>    

      {/* </Router> */}
    </>
  )
}

export default ApplicantDashboard;

