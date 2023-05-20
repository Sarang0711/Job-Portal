import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "./GlobalContext";

const API_BASE = "http://localhost:3001";

let login = false;
function Login(props) {
  const [password, setPassword] = useState("");
  const { isloggedin, changeisLoggedIN, applied, handleApplied } =
    useContext(LoginContext);

    const [state, setState] = useState({
        name: "",
        username: "",
    })

  function handleChange(event) {
    if (event.target.name === "username") {
      var tempusername = event.target.value;
      props.setUsernames(tempusername);
    } else if (event.target.name === "password") {
      var temppassword = event.target.value;
      setPassword(temppassword);
    } else if (event.target.name === "name") {
      var tempname = event.target.value;
      props.setNames(tempname);
    }
  }

  const addUsers = async () => {
    var inusername = document.getElementById("1").value;
    var userpass = document.getElementById("2").value;
    var confirmepass = document.getElementById("3").value;
    var inname = document.getElementById("4").value;
    console.log(inusername + " - " + userpass);

    if (userpass === confirmepass) {
      props.setUsernames(inusername);
      setPassword(userpass);
      props.setNames(inname);
    } else {
      alert("Wrong passwords");
      return;
    }
    console.log(props.username + "-" + password);

    let data = await fetch(API_BASE + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: props.username,
        password: password,
        name: props.name,
      }),
    });
    data = await data.json();
    console.log(data);
    console.log(data.code);

    if (data.code === 0) {
      alert("Please Enter all details");
    } else if (data.code === 2) {
      alert("Please Enter a different Username");
    } else if (data.code === 4) {
      alert("Username not found");
    } else {
      alert("Successfully Registered in");
      props.setIsLoggedIns();
      props.setNames(inname);
      // console.log(props.name);
      props.setisUserRegistered(1);
      const userData = {
        name: inname,
        username: props.username,
      };
      // Store the object into storage
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("Storing user Data In JSON file");
    }

    console.log(data);
  };

  const func = async (e) => {
    if (props.isUserRegistered) {
      var inusername = document.getElementById("1").value;
      var userpass = document.getElementById("2").value;
      console.log(" frontend : " + inusername + " - " + userpass);

      e.preventDefault();
      let result = await fetch(API_BASE + "/auth", {
        method: "post",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inusername,
          password: userpass,
        }),
      });
      result = await result.json();
      console.log(result);
      console.log(result.name);

      if (result.code === 1) {
        console.log(props.isLoggedIn);
        // props.setIsLoggedIns(true);
        changeisLoggedIN();
        props.setNames(result.name);
        console.log("login after successful", isloggedin);
        console.log(props.name);
        console.log(result.isRec);
        var userData = {
          name: result.name,
          username: props.username,
        };
        console.log(JSON.stringify(userData));
        // Store the object into storage
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("Storing user Data In JSON file");
        alert("Successfully Logged in");
        handleApplied({
            name: result.name,
            username: props.username,
        });

        if (result.isRec === 1) {
          // window.open("http://localhost:3000/login/recdash");
          // <Link to="/dashboard">Click here</Link>
        } else {
            // setState({
            //     name: 'vaihini',
            // username: "vaibhav",
            // });
          // window.open("http://localhost:3000/dashboard");
          // <Link to="/dashboard">Click here</Link>
          window.location.replace("http://localhost:3000/dashboard", {applied});
        }
      } else if (result.code === 0) {
        alert("Username or password does not match");
      } else if (result.code === 4) {
        alert("Username not found");
      }
    } else {
      console.log("registering");
      addUsers();
    }
  };

  return (
    <div className="logincontainer">
      {props.isLoggedIn ? (
        <>
          <h2>Successfully Logged In</h2>
          <h1>Hello {props.name}</h1>

          <button
            onClick={() => {
              props.setisLoggedIn(false);
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <div>
          <>
            {props.isUserRegistered ? <h1>Login</h1> : <h1>Register</h1>}
            <form className="form">
              {!props.isUserRegistered && (
                <input
                  type="text"
                  placeholder="Your Full Name"
                  id="4"
                  name="name"
                  onChange={handleChange}
                ></input>
              )}
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                id="1"
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                id="2"
              ></input>

              {!props.isUserRegistered && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="3"
                ></input>
              )}
            </form>
            <button type="submit" onClick={func}>
              {props.isUserRegistered ? (
                <Link to={{ pathname: "/dashboard"}}>Login</Link>
              ) : (
                "Register Me"
              )}
            </button>
            {props.isUserRegistered ? (
              <p>
                Don't have an account?{" "}
                <a
                  href="#."
                  onClick={() => {
                    props.setisUserRegistered(false);
                  }}
                >
                  click here
                </a>{" "}
                to register
              </p>
            ) : (
              <p>
                Already registered?{" "}
                <a
                  href="#."
                  onClick={() => {
                    props.setisUserRegistered(true);
                  }}
                >
                  click here
                </a>{" "}
                to login
              </p>
            )}
            {props.isUserRegistered ? (
              <p></p>
            ) : (
              <p>
                <Link to="/regirecruiter">Click here</Link>
                to Register as Recruter
              </p>
            )}
          </>
        </div>
      )}
    </div>
  );
}
export { login };
export default Login;
