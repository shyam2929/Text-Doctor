import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleButtonClick = () => {
        console.log("Sentence case was clicked" + text);
        if (text) {
          let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
          setText(newText);
          
        }
        props.showAlert("Converted to Sentence case!", "success");
      };
      

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }

    const handleCopy = () => {
        console.log("text was copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces Removed!", "success");
    }

    const [text, setText] = useState('');
    // setText("new text")
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label for="myBox" className="form-label">Your input</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleButtonClick}>Sentence case</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2> Your text summary</h2>
            <p>{text.trim() === '' ? 0 : text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to Preview it here"}</p>
        </div>
    </>
        
        )
}
