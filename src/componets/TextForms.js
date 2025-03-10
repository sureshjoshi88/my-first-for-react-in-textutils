 import React,{useState} from 'react'
 export default function TextForms(props) {
  const handleUPClick = ()=>{
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success");
    
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked"+text);
    let newTexts = text.toLowerCase();
    setText(newTexts)
    props.showAlert("converted to lowercase","success");

    
  }
  const handleClearClick = ()=>{
    let newTexts = "";
    setText(newTexts)
    props.showAlert("clear all text","success");

    
  }
  const handleCopy= ()=>{
    let text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("selected all text","success");
  }
  const handleExtraspace=()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("removed extra space","success");

  }
  const handleOnChange = (event)=>{
    // console.log("On changes");
    setText(event.target.value)
  }
   const [text, setText] = useState('');
  //  setText("new text");
   return (
    <>
     <div className='container my-3' style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h2>{props.heading} </h2>
       <div className="mb-3">
    <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"#042743"}} id="mybox" rows="8" placeholder='enter your text'></textarea>
    </div>
      <div className='d-flex gap-3 flex-wrap'>
      <button className="btn btn-primary" onClick={handleUPClick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lovercase</button>
      <button className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary" onClick={handleExtraspace}>Remove space</button>
      </div>
     </div>
     <div className="container"  style={{color: props.mode==="dark"?"white":"#042743"}}>
    <h3>Your Text Summary</h3>
    <p className='fs-4 fw-semibold'> {text.split(" ").length} word and {text.length} charaters</p>
    <p className='fs-4 fw-semibold'> {0.008*text.split(" ").length} Minutes read</p>
    <h4>Prievew</h4>
    <p className='fs-4 fw-normal'>{text.length?text:"please something in the textbox above to privew it here"}</p>
     </div>
     </>
   )
 }
 