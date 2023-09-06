import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpChange = () => {
    // console.log('upper click was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("the text has been converted into UpperCase","Success");
  };
  const handleLoChange = () => {
    // console.log('upper click was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("the text has been converted into LowerCase","Success");
  };
  const handleClearChange = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("the text has been cleared","Success");
  }
   

  const handleOnChange = (event) => {
    //console.log('On change function');
    setText(event.target.value);
  };
  
  const [text, setText] = useState("Enter your text Here");
  return (<>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Text Box
        </label>
        <textarea 
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light'?'dark':'light'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      
      <button className="btn btn-primary mx-2" onClick={handleUpChange}>
        Convert to upperCase
      </button>
      
      <button className="btn btn-primary mx-2" onClick={handleLoChange}>Convert to LowerCase</button>
      
      <button className="btn btn-primary mx-2" onClick={handleClearChange}>Clear</button>
    </div>
    <div className="container my-3">
      <h1>Text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length } Minutes read</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  );
}
