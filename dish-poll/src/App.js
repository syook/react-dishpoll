import React, { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./components/Home";
import Polling from './components/Polling';
import Result from './components/Result'



import axios from 'axios'
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {



  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("pollData", JSON.stringify(res.data))
      })
      }, []);



  return (
    <div className="App">
      <div className="header">
        <h1>BEST DISH CONTEST</h1>
      </div>

      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home  />} />
          <Route path="/polling" element={<Polling />} />
          
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/result" element={<Result />} />

      </Routes>
    </div>
  );
}

export default App;
