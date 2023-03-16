import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpclick=()=>
    {
        // console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleextraclick=()=>
    {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleclearclick=()=>
    {
        // console.log("Uppercase was clicked");
        let newtext = ""
        setText(newtext);
    }
    const handlecopyclick=()=>
    {
        // console.log("Uppercase was clicked");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleDownclick=()=>
    {
        // console.log("Lowercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnchange=(event)=>
    {
        console.log("Onchange");
        setText(event.target.value);
    }
    const[text, setText] = useState('Enter text here');
  return <>

    <div className="mb-3container">
        <h1>{props.heading}</h1>
    <label htmlFor="mybox" className="form-label">{props.area}</label>
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="3"></textarea>
    </div>
    <div className=" d-gridcol-3 mx-auto">
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to UpperCase</button>
    <button type="button" className="btn btn-primary  mx-1 my-1" onClick={handleDownclick}>Convert to LowerCase</button>
    <button type="button" className="btn btn-primary  mx-1 my-1" onClick={handlecopyclick}>Copy Text</button>
    <button type="button" className="btn btn-primary mx-1 my-4" onClick={handleextraclick}>Remove Extra Spaces</button>
    <button type="button" className="btn btn-primary mx-1 my-4" onClick={handleclearclick}>Clear Text</button>
    
    </div>
    <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>Number of Words: {text.split(" ").length}<br/>
            Number of characters: {text.length}<br/>
            It will take {text.split(" ").length*0.008} minutes for an average person to read the above text.
        </p>
    </div>
    </>
  
}
