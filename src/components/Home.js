import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const createNewDocument = () => {
    const uniqueId = Math.random().toString(36).substr(2, 4);
    navigate(`/editor/${uniqueId}`);
  };

  const joinDocument = () => {
    if (code.trim()) {
      navigate(`/editor/${code}`);
    } else {
      alert("Please enter a valid code");
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to TextHive</h1>
      <button onClick={createNewDocument}>Create New Document</button>
      <div>
        <input
          type="text"
          placeholder="Enter code to join"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={joinDocument}>Join Document</button>
      </div>
    </div>
  );
}

export default Home;
