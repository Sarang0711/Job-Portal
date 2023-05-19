import React from "react";
import "./assets/recdashcss.css";
import { FaSearch } from "react-icons/fa";
import {AiOutlineMenu } from "react-icons/ai";
import Newjobpop from "./Newjobpop" ;
import { useState,useEffect } from "react";
const API_BASE = "http://localhost:3001";



function RecDash(props) {
  const[poped, setPoped] = useState(false);
  const [companyname, setcompanyname] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [jobdesc, setJobdesc] = useState("");
  const [isitInternship, setIsitIntership] = useState(false);
  const [displayName, setDisplayName] = useState("User")
  const [NewUsersCount, setNewUsersCount] = useState('#')
  const [recruter, setRecruter] = useState("User");
  const [OpportunitiesPostedCount,setOpportunitiesPostedCount] = useState('#')
  // UNCOMMENT BELOW USEEFFECT TO UNLOCK COUNTING FEATURE
  useEffect(()=>{
    getNewUsers().then(data=>{
        setNewUsersCount(data)
    })
    .catch(err=>{
        console.log(err);
    })
    getNumberOfJobsPosted().then(data=>{
      setOpportunitiesPostedCount(data)
    })
    .catch(err=>{
        console.log(err);
    })
  // Retrieve the object from the storage
  const storeData = localStorage.getItem("userData");
  // console.log("data: ", JSON.parse(storeData));
  setDisplayName(JSON.parse(storeData).name);
  setRecruter(JSON.parse(storeData).username);

  } ,[]);




  const getNewUsers = async () => {
    const res=await fetch(API_BASE + "/newUsersCounts")
    // console.log(response);
    const response = await res.json();    
    return response.count;
  }

  const getNumberOfJobsPosted = async () => {
    const res=await fetch(API_BASE + "/getJobPostedCounts")
    // console.log(response);
    const response = await res.json();    
    return response.count;
  }



function apply(){
    console.log(props.isloggedin)
    if (props.isloggedin){
        console.log('loggedinn')
    }
}


  const handleOnSubmit = async (e) => {
    // e.preventDefault();
    console.log(JSON.stringify({companyname,jobtitle,jobdesc,recruter }));
    let result;
    if(isitInternship){
      result = await fetch(
        (API_BASE+'/auth/postaintenship'), {
            method: "post",
            body: JSON.stringify({companyname,jobtitle,jobdesc,recruter }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
    }else{
      result = await fetch(
        (API_BASE+'/auth/postajob'), {
            method: "post",
            body: JSON.stringify({companyname,jobtitle,jobdesc,recruter }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
    }
    result = await result.json();
    console.warn(result);
    console.log(result.code);
    

    if(result.code === 0){
        alert("Please enter the details");
    }else{
        if (result) {
          if(isitInternship){
            alert("Posted a new Internship");
          }else{
            alert("Posted a New Job");
          }
            setJobTitle("");
            setJobdesc("");
            setcompanyname("");
        }
    }
}

  function postajob(){
    if(poped){
      console.log("Posting a job");
      handleOnSubmit(isitInternship);
      setPoped(false);
      getNumberOfJobsPosted().then(data=>{
        setOpportunitiesPostedCount(data)
      })
      .catch(err=>{
          console.log(err);
      })
    }else{
      setPoped(true);
    }
  }



    return (

      <div className="container-rec">

        {poped ? 
          <div className="popupconatiner">
            <Newjobpop isitInternship={isitInternship} postjob={postajob} companyname={companyname} jobtitle={jobtitle} jobdesc={jobdesc} setcompanyname={setcompanyname} setJobTitle={setJobTitle} setJobdesc={setJobdesc}/>
          </div>   
        :
        <></>
      } 

        <div className="recnav" >
            <div className="recnav-nav">
                <p><strong>Job Portal</strong></p>

                <div className="search-bar">
                  <FaSearch className="icons searchicons"/>
                  <input type="text" placeholder="Search Your employees"></input>
                </div>
                <div className="userDisplayName">
                  Hello {displayName}
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
                    <button onClick={()=>{postajob();setIsitIntership(true)}}>Internship</button>
                    <button onClick={() => {postajob();setIsitIntership(false)}}>Job</button>
                    <button>View Applicants</button>
                  </div>
                </div>
              </div>


        </div>
        <p className="urdash">Your</p>
        <p className="urdash">Dashboard</p>

        <div className="dashcontainer" >
            <div className="appliedcontainer widget">
                <p className="heading">Number of Applicants</p>
                <p className="number">55</p>
            </div>
            <div className="opporcont widget">
              <p className="heading">Posted</p>
              <p className="number">{OpportunitiesPostedCount}</p>
              <p className="slash">\</p>
              <p className="headinglow ">Hired</p>  
              <p className="number2">8</p>
            </div>
            <div className="newcadcont widget">
                <p className="heading">New Applicants</p>
                <p className="number">{NewUsersCount}</p>
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
  