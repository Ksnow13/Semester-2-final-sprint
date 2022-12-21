// Author: Ken Chafe
// December 21 2022
// Software Development Semster 2
// Keyin College

// main component for accepting people to the feedpage that already have a account created

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/login.css";

import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();

  // setting up a useState to gather the info from the person currently logging in.

  const [currentlogin, setLogin] = useState([]);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const dataFromServer = await fetchData();
      setLogin(dataFromServer);
    };
    fetchUsers();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();

    return data;
  };

  // function to validate username and password

  const validateUser = (name, pass, info) => {
    var match = false;

    info.forEach((x) => {
      switch (true) {
        case x.username === userName && x.password === password:
          match = true;
          break;
      }
      return match;
    });

    return match;
  };

  // function to add user to the "currentloggin" in the json server

  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/currentlogin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const newUsers = await res.json();

    setLogin([...currentlogin, newUsers]);
  };

  // the return of the component

  return (
    <div>
      <div className="container-login">
        <div className="wrapper-login">
          <form
            onSubmit={() =>
              validateUser(userName, password, currentlogin)
                ? addUser({ userName, password }) && navigate("/feedpage")
                : alert("Invaild username or password")
            }
          >
            {" "}
            <h1 className="login">Log In</h1>
            <div id="username">
              <input
                className="otherField"
                type="text"
                placeholder="Username"
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="password">
              <input
                className="otherField"
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="button-login">Login</button>
            <br />
            <p className="account">Don't have an account?</p>
            <a id="sign-up-link" href="http://localhost:3000/SignUp">
              <button className="signup" onClick={() => navigate("/")}>
                Sign Up
              </button>
            </a>
          </form>

          <br />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
