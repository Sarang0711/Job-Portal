import './App.css';
import { useEffect, useState } from 'react';
// import Login from './components/Login';
import Login from './components/Login'
const API_BASE = "http://localhost:3001";




function App() {



  return (
    <div className="container">
      <h1>Welcome</h1>
      {/* <input type="text" placeholder='YOUR USERNAME'/>
      <br/>
      <br/>
      <input type="text" placeholder='YOUR PASSWORD' />
      <br/><br/>
      <button id='submit' >LOGIN</button> */}
      <Login />

    </div>
      
  );
}

export default App;
