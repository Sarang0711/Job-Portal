import './App.css';
// import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ApplicantDashboard from './components/ApplicantDashboard';
import Registerrecruit from './components/Recrutergister';
import RecDash from './components/RecDash';
import Homepage from './components/Homepage';





function App() {



  return (
    <div className="container">
     


      <Router>
      <Routes>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/dashboard" element={ <ApplicantDashboard /> }/>
        <Route path="/regirecruiter" element={<Registerrecruit />} />
        <Route path="/login/recdash" element={<RecDash />} />
        <Route exact path="/" element={<Homepage />} />


      </Routes>
    </Router>
    </div>
      
  );
}

export default App;
