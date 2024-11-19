import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Share() {
  const navigate = useNavigate();
  const [sharedCode, setSharedCode] = useState("");

  const handleShare = () => {
    if (sharedCode.trim()) {
      navigate(`/editor/${sharedCode}`);
    } else {
      alert("Please enter a valid code");
    }
  };

  return (
    <div className="share-container">
      <h1>Share Your Document</h1>
      <input
        type="text"
        placeholder="Enter code to share"
        value={sharedCode}
        onChange={(e) => setSharedCode(e.target.value)}
      />
      <button onClick={handleShare}>Open Document</button>
    </div>
  );
}

export default Share;
