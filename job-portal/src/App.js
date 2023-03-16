import './App.css';
import { useEffect, useState } from 'react';
const API_BASE = "http://localhost:3001";



function App() {

  const[users, setUsers] = useState([]);

  useEffect(() => {
    GetUsers();

    console.log(users);

  }, []);

  const GetUsers = async () => {
    fetch(API_BASE + "/auth")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("errors : " , err));
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <input type="text" placeholder='YOUR USERNAME'/>
      <br/>
      <br/>
      <input type="text" placeholder='YOUR PASSWORD' />
      <br/><br/>
      <button id='submit' >LOGIN</button>
    </div>
      
  );
}

export default App;
