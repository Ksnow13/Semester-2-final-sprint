// Author: Kyle Snow, Tyler Power, Ken Chafe
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Feedpage from "./components/Feedpage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Feedpage" element={<Feedpage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
