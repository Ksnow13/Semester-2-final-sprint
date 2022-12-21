// Author: Tyler Power
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "../styles/signin.css";

import Footer from "./Footer";

export function SignUp(props) {
  const navigate = useNavigate();

  // setting up useStates to gather and save new user info to append to the "users" in json server

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersfromserver = await fetchUser();
      setUsers(usersfromserver);
    };
    getUsers();
  }, []);
  const fetchUser = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return data;
  };

  // function to add the user to the json file using post methed

  const addUser = async (user) => {
    console.log(user);
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    setUsers([...users, data]);
  };

  // on submit function that calls the adduser function

  const handleSubmit = (e) => {
    if (!username || !password || !firstname || !lastname) {
      alert("Cannot be left blank");
      return;
    }
    addUser({ firstname, lastname, username, password });
    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
    navigate("/Login");
    alert(
      "Remember your username & password and enter them on the next screen."
    );

    e.preventDefault();
  };

  const [display, setDisplay] = useState(false);
  return (
    <div>
      <div className="container-signup">
        <div>
          <div className={!display ? "signin_padding" : "main_button"}>
            <h1 className="signup-title">TyKyEn</h1>
            <button className="sign" onClick={() => setDisplay(true)}>
              Sign Up
            </button>
            <button className="sign" onClick={() => navigate("/Login")}>
              Sign In
            </button>
          </div>
          {display ? (
            <div>
              <h1 className="title-signup">Sign Up</h1>
              <div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="field_container">
                    <input
                      placeholder="First Name"
                      className="name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      placeholder="Last Name"
                      className="name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="field_container">
                    <input
                      placeholder="User Name"
                      className="otherField"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="field_container">
                    <input
                      placeholder="Password"
                      className="otherField"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    className="login-signup"
                    value="Sign Up"
                  />
                </form>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
