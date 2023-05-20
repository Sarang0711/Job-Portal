import './App.css';
// import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ApplicantDashboard from './components/ApplicantDashboard';
import Registerrecruit from './components/Recrutergister';
import RecDash from './components/RecDash';
import Homepage from './components/Homepage';
import ViewApplicants from './components/ViewApplicants';
import { useState, useContext } from 'react';
import LoginContext from './components/GlobalContext';
// import { GlobalContext } from './components/GlobalContext';



function App() {
  // const[isloggedin, setIsLoggedIn] = useState(false);
  const[isUserRegistered, setisUserRegistered] = useState(true);
  const[username, setUsername] = useState('');
  const[name, setName] = useState('User');

  const {isloggedin, changeisLoggedIN} = useContext(LoginContext);
  console.log("Login status", isloggedin);


  // function changeisLoggedIN(){
  //   setIsLoggedIn(true);
  // }

  function changeIsUserRegistered(value){
    setisUserRegistered(value);
  }

  function changeUserName(value){
    setUsername(value);
  }

  function changeName(value){
    console.log("value : " + value);
    setName(value);
    setName("Pratham");
    console.log("changed to :" + name);
  }



  return (
    <div className="container">
     


      <Router>
      <Routes>
        <Route path="/login"  element={ <Login name={name} setNames={changeName} username={username} setUsernames={changeUserName} isloggedin={isloggedin} setIsLoggedIns={changeisLoggedIN} isUserRegistered={isUserRegistered} setisUserRegistered={changeIsUserRegistered} /> }/>
        <Route path="/dashboard" element={ <ApplicantDashboard name={name}/> }/>
        <Route path="/regirecruiter" element={<Registerrecruit />} />
        <Route path="/login/recdash" element={<RecDash name={name} username={username} />} />
        <Route path="/login/recdash/viewapplicants" element={<ViewApplicants />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </Router>
    
    </div>
      
  );
}

export default App;
