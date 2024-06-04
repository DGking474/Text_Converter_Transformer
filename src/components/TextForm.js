import React, { useState, useRef } from "react";

export default function TextForm(props) {
  const UpperCaseButton = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const LowerCaseButton = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };

  const ClearUpButton = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Clered","success");
  };

  const undoButton = () => {
    if (index.current > 0) {
      index.current = index.current - 1;
      setText(inputArray[index.current]);
      props.showAlert("Undo","success");
    }
  };

  const redoButton = () => {
    if (index.current < inputArray.length - 1) {
      index.current = index.current + 1;
      setText(inputArray[index.current]);
      props.showAlert("Redo","success");
    }
  };

  const copyButton = () => {
    console.log("i am copy")
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied","success");
  };

  const removeExtraSpacesButton = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed","success");
  };

  // const translateButton = () => {};

  const handleOnChange = (event) => {
    // console.log("On chnage");
    setText(event.target.value);
    index.current = index.current + 1;
    setInputArray([...inputArray.slice(0, index.current), event.target.value]);
  };

  const [text, setText] = useState("");
  const [inputArray, setInputArray] = useState([text]);
  const index = useRef(0);

  return (
    <>
      <div className="container">
        <h1 className='mb-4' style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={UpperCaseButton}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={LowerCaseButton}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClearUpButton}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={undoButton}>
          Undo
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={redoButton}>
          Redo
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyButton}>
          Copy Text
        </button>
        <button
          disabled={text.length===0} className="btn btn-primary mx-1"
          onClick={removeExtraSpacesButton}
        >
          Remove Extra Space
        </button>
        {/* <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={translateButton}>
          Translate
        </button> */}
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
