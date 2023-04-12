import React from 'react';
import '../components/assets/homepage.css';
// import { Link } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Homepage() {
// const options = ['post job', 'jobseeker', 'AboutUs','ContactUs'];
// const listItems = options.map((myList) =>
// <li>{myList}</li> )
return (
<>
<div className='main'>
<nav className='navbar'>
<ul id='list1'>
<li><a href='/regirecruiter'>Post Job</a></li>
<li><a href='/login'>JobSeeker</a></li>
<li><a href='/dashboard'>AboutUs</a></li>
<li><a href='/dashboard'>ContactUs</a></li>
</ul>
<ul id='list2'>
<li><a href='/dashboard'>MyAccount</a></li>
</ul>
</nav>
<div className='body'>
<h3>Top Jobs</h3>
<div className='jobcards'>
<div className="card">
<h3>CompanyName</h3>
<h2>Job Title</h2>
<h4>Job Description</h4>
</div>
</div>
</div>
</div>
</>
)
}

export default Homepage;