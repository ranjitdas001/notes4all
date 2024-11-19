import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Share from "./components/Share";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:id" element={<Editor />} />
          <Route path="/share" element={<Share />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
