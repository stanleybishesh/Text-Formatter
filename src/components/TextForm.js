// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function textToUppercase() {
    setText(text.toUpperCase());
  }
  function textToLowercase() {
    setText(text.toLowerCase());
  }
  function textToCapitalize() {
    setText(
      text
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    );
  }
  function handleCopy() {
    var text = document.getElementById("floatingTextarea2");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  function handleExtraSpaces(){
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  function clearText() {
    setText("");
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container mt-4">
        <h2>{props.heading} </h2>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={text}
            id="floatingTextarea2"
            style={{ height: "200px", marginBottom: "20px" }}
            onChange={handleOnChange}
          ></textarea>
          <label htmlFor="floatingTextarea2">Text</label>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <button className="btn btn-primary" onClick={textToUppercase}>
            UpperCase
          </button>
          <button className="btn btn-primary" onClick={textToLowercase}>
            Lowercase
          </button>
          <button className="btn btn-primary" onClick={textToCapitalize}>
            Capitalize
          </button>
          <button className="btn btn-primary" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-secondary" onClick={clearText}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters and{" "}
          {text.split(".").length - 1} sentences.
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
