import React from "react";
import "./App.css";
import logo from "./images/calogo.jpg";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PlayList from "./Components/PlayList";
import VideoPlayer from "./Components/VideoPlayer";
import ProgressBar from "./Components/common/ProgressBar";



function App() {


  return (
    <div className="App">
      <div className="nav-bar">
        <div className="nav-container">
          <Link to="/">
          <img alt="" src={logo} width="40" heigth="40" className="logo" />
          </Link>
          <button>1</button>
          <button>2</button>
        </div>
        <ProgressBar />

      </div>

      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/playlist/:id" element={<PlayList />}>
        </Route>
        <Route path="/video/:videoID" element={<VideoPlayer />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
