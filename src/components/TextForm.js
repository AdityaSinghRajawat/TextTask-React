import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success")
    }

    const extraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    }

    const titleCase = () => {
        const arr = text.split(" ");

        //loop through each element of the array and capitalize the first letter.

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        //Join all the elements of the array back into a string 
        //using a blankspace as a separator 
        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Converted to Titlecase", "success")
    }

    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter-text-here')
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={titleCase}>Titlecase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={extraSpaces}>Remove ExtraSpaces</button>
                <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Reading time: {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter somethig to preview'}</p>
            </div>
        </>
    )
}

