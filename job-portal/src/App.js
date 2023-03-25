import './App.css';
import { useEffect, useState } from 'react';
// import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registerrecruit from './components/Recrutergister';




const API_BASE = "http://localhost:3001";




function App() {



  return (
    <div className="container">
     
      {/* <input type="text" placeholder='YOUR USERNAME'/>
      <br/>
      <br/>
      <input type="text" placeholder='YOUR PASSWORD' />
      <br/><br/>
      <button id='submit' >LOGIN</button> */}

      <Router>
      <Routes>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/dashboard" element={ <Dashboard /> }/>
        <Route path="/regirecruiter" element={<Registerrecruit />} />
      </Routes>
    </Router>
    </div>
      
  );
}

export default App;
