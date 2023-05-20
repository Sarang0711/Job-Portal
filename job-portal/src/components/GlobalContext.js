import React from 'react';
import { useState, createContext } from 'react';

const LoginContext = createContext();

export const GlobalContext = ({children}) => {

  const[isloggedin, setIsLoggedIn] = useState(false);
  const [applied, setApplied] = useState([{
    name: "",
    username: "",
  }]);  

  function changeisLoggedIN(){
    setIsLoggedIn(true);
  }
  function handleApplied(newApply) {
    setApplied([...applied, newApply]);
  }
  return (
    <LoginContext.Provider
      value = {{
        isloggedin,
        changeisLoggedIN,
        applied,
        handleApplied,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext;