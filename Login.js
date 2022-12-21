// Author: Ken Chafe
// December 21 2022
// Software Development Semster 2
// Keyin College

import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "../Footer";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      const dataFromServer = await fetchData();
      setUsers(dataFromServer);
    };
    fetchUsers();
  }, []);
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    console.log(data);
    return data;
  };
  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const newUsers = await res.json();
    console.log(newUsers);
    setUsers([...users, newUsers]);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="wrapper">
          <form
            className="form-control"
            onSubmit={() => addUser({ userName, password })}
          >
            {" "}
            <p className="login">Log In</p>
            <div id="username">
              <input
                className="input-one"
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
                className="input-two"
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
              <div className="signup">Sign Up</div>
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
