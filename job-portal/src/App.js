import './App.css';
import { useEffect, useState } from 'react';
// import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ApplicantDashboard from './components/ApplicantDashboard';
import Registerrecruit from './components/Recrutergister';
import RecDash from './components/RecDash';




const API_BASE = "http://localhost:3001";




function App() {



  return (
    <div className="container">
     


      <Router>
      <Routes>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/dashboard" element={ <ApplicantDashboard /> }/>
        <Route path="/regirecruiter" element={<Registerrecruit />} />
        <Route path="/login/recdash" element={<RecDash />} />
        

      </Routes>
    </Router>
    </div>
      
  );
}

export default App;
