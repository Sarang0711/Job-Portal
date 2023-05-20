import React from 'react';
import { useState, createContext } from 'react';

const LoginContext = createContext();

export const GlobalContext = ({children}) => {

  const[isloggedin, setIsLoggedIn] = useState(false);
  

  function changeisLoggedIN(){
    setIsLoggedIn(true);
  }
  return (
    <LoginContext.Provider
      value = {{
        isloggedin,
        changeisLoggedIN,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext;