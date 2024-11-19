import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Editor.css";

function Editor() {
  const { id } = useParams();
  const [text, setText] = useState(localStorage.getItem(id) || "");

  useEffect(() => {
    localStorage.setItem(id, text);
  }, [id, text]);

  return (
    <div className="editor-container">
      <h2>Editing Document: {id}</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing your text here..."
      />
    </div>
  );
}

export default Editor;
