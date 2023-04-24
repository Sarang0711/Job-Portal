import './App.css';
// import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ApplicantDashboard from './components/ApplicantDashboard';
import Registerrecruit from './components/Recrutergister';
import RecDash from './components/RecDash';
import Homepage from './components/Homepage';
import { useState } from 'react';





function App() {
  const[isloggedin, setIsLoggedIn] = useState(false);
  const[isUserRegistered, setisUserRegistered] = useState(true);
  const[username, setUsername] = useState('');
  const[name, setName] = useState('');

  function changeisLoggedIN(){
    setIsLoggedIn(true);
  }

  function changeIsUserRegistered(value){
    setisUserRegistered(value);
  }

  function changeUserName(value){
    setUsername(value);
  }

  function changeName(value){
    setName(value);
    console.log("changed to :" + name);
  }



  return (
    <div className="container">
     


      <Router>
      <Routes>
        <Route path="/login"  element={ <Login name={name} setNames={changeName} username={username} setUsernames={changeUserName} isloggedin={isloggedin} setIsLoggedIns={changeisLoggedIN} isUserRegistered={isUserRegistered} setisUserRegistered={changeIsUserRegistered} /> }/>
        <Route path="/dashboard" element={ <ApplicantDashboard name={name}/> }/>
        <Route path="/regirecruiter" element={<Registerrecruit />} />
        <Route path="/login/recdash" element={<RecDash />} />
        <Route exact path="/" element={<Homepage />} />


      </Routes>
    </Router>
    </div>
      
  );
}

export default App;
