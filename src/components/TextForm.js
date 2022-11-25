import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
    // console.log('upper case clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLcClick = ()=> { 
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
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
    props.showAlert("Converted to inverse case!", "success");
  }

  const handleAltClick = ()=> {
    let newText = text.toLowerCase().split("");
    for (let i = 0; i < newText.length; i += 2) {
      newText[i] = newText[i].toUpperCase();
    }
    setText(newText.join(""));
    props.showAlert("Converted to alternate case!", "success");
  }

  const handleCapClick = ()=> {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
    props.showAlert("Converted to capitalized case!", "success");
  }

  const handleCopyClick = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpaceClick = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  }

  const handleClearClick = ()=> {
    setText('');
    props.showAlert("Text cleared!", "success");
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLcClick}>Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalized Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleInverseClick}>Inverse Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleAltClick}>aLtErNaTe Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className='container my-3' style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Enter some text to preview"}</p>
      </div>
    </>
  )
}
