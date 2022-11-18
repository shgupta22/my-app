import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
    // console.log('upper case clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLcClick = ()=> { 
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleInverseClick = ()=> {
    let newText = "";
    for(var i = 0; i<text.length; i++){
        if(text[i] === text[i].toLowerCase()){
            newText += text[i].toUpperCase();
        }else {
            newText += text[i].toLowerCase();
        }
    }
    setText(newText);
  }

  const handleAltClick = ()=> {
    let newText = text.toLowerCase().split("");
    for (let i = 0; i < newText.length; i += 2) {
      newText[i] = newText[i].toUpperCase();
    }
    setText(newText.join(""));
  }

  const handleCapClick = ()=> {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
  }

  const handleClearClick = ()=> {
    setText('');
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLcClick}>Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capatalized Case</button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Inverse Case</button>
        <button className="btn btn-primary mx-1" onClick={handleAltClick}>aLtErNaTe Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
