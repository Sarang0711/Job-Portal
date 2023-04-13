import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/assets/AppDash.css";
import { NavLink } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavDropdown } from 'react-bootstrap';
function ApplicantDashboard() {
  return (
    <>
      {/* <Router> */}
      <Navbar bg="light" className='custom-nav' >
        <Navbar.Brand href="/">Job Portal</Navbar.Brand>
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
      {/* </Router> */}
    </>
  )
}

export default ApplicantDashboard;


{/* <div className="applicant-dash">
      <div className="app-nav">
        <div className="logo">
          <p><strong>Job Portal</strong></p>
        </div>
        <div className="nav-items">
          <p>New Internship</p>
          <p>Applied</p>
          <p>Refer a Friend</p>
          <p>Messages</p>
        </div>
      </div>
    </div> */}