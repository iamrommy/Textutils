import React, {useState} from 'react' //UseState here is a hook
                                    // Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component
                                    //We are using hooks here to change the state of form
                                    //State of a component is the current condition of everything in a component
// import {CopyToClipboard} from 'react-copy-to-clipboard'; //copytoclipboard hook imported from 'npm install --save react-copy-to-clipboard' package

export default function Textform(props) {

    // const [count, setCount] = useState(0); Original syntax
    const [text, setText] = useState(""); //By using useState hook we are setting the value of text variable or changing it's state. 
                                        //if we want to change the value of text we can use setText() as a function but not setText=.

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase(); //converting text to uppercase
        setText(newText); //setting new value of text
    }
    const handleLowClick = ()=>{
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase(); //converting text to lowercase
        setText(newText); 
    }

    const handleClearClick = ()=>{
        
        if(text.length === 0){
            props.showAlert("Text area is empty, Nothing to clear", "fail");
        }
        let newText = ""; //clearing text
        setText(newText); 
    }

    const handleCopy = ()=>{ //We can also use the package 'react-copy-to-clipboard' to copy the text on clipboard but currently we are using
        if(text.length === 0){
            props.showAlert("Text area is empty", "warning");
        }
        else{
            props.showAlert("Text Copied to clipboard", "success");
        }
        // let Text = document.getElementById("message");
        // Text.select(); //This function will select the text withing Text element
        // navigator.clipboard.writeText(Text); //handleCopy function by simply adding an attribute 'onClick={handleCopy}'
        // document.getSelection().removeAllRanges(); //This function will remove the selected text

        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleFirstLetter = ()=>{
        let NewText = text.split(/[ ]/); //To handle words after a space
        let newText = NewText.map((value) => {
            return value.charAt(0).toUpperCase() + value.slice(1);
        });
        let finalText = newText.join(" ");
        
        NewText = finalText.split(/[\n]/); //To handle 1st word of every new line
        newText = NewText.map((value) => {
            return value.charAt(0).toUpperCase() + value.slice(1);
        });
        setText(newText.join("\n"));
    }
    
    const handleOnChange = (event)=>{ 
        // console.log("onChange");
        setText(event.target.value); //React doesn't track the state of a component on it's own so in order to keep changing the value of variable 
                                    //text everytime we change something in textarea, we will set text to event.target.value
        
    }
    //onChange is necessary(which we have used in textarea) in react whenever we are using event listener
    
    /*here to calc no. of words first we are seperating text by spaces or newlines then leaving those element whose length is zero(if first word of a 
    line is space only) then calculating it's length*/
    let noOfwords = text.split(/[ \n]+/).filter((element)=>{return element.length!==0}).length; //we can also write split(/\s+/)
    let noOfchar = text.length;
    let time = Math.ceil(0.48 * noOfwords);
    let seconds = time % 60;
    let minutes = Math.floor(time/60) % 60;
    let hours = Math.floor(time/3600) % 24;
    
    return (
        <div id="textform" className="p-15" style={{color: props.mode==="light"?"black":"white"}}>
            <div className="py-10">
                <div className="w-[80%] my-5 mx-auto p-8 border border-gray-300 shadow-sm rounded-md" style={{backgroundColor: props.mode==="light"?"#bfdbfe": "#1f2937"}}>
                    <h2 className="text-[4.5vw] sm:text-2xl font-semibold mb-6">{props.heading}</h2>
                    <form action="#" method="POST">
                        <div className="mb-6">
                        <textarea id="message" name="message" className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' style={{backgroundColor: props.mode==="light"?"white": "#1f2937", color: props.mode==="light"?"black":"white"}} placeholder='Enter Text here' value={text} onChange={handleOnChange} rows="12" required>
                        </textarea>
                        </div>
                    </form>
                    <div className='flex flex-wrap justify-center text-[2.5vw] sm:text-[100%]'>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 sm:px-4 mx-1 sm:mx-2 my-1 rounded-md active:bg-blue-800" onClick={handleUpClick} disabled={text.length===0}>To Uppercase</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 sm:px-4 mx-1 sm:mx-2 my-1 rounded-md active:bg-blue-800" onClick={handleLowClick} disabled={text.length===0}>To Lowercase</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 sm:px-4 mx-1 sm:mx-2 my-1 rounded-md active:bg-blue-800" onClick={handleExtraSpaces} disabled={text.length===0}> Remove Extra Spaces</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 sm:px-4 mx-1 sm:mx-2 my-1 rounded-md active:bg-blue-800" onClick={handleFirstLetter} disabled={text.length===0}> Capitalize 1st Letters</button>
                        {/* <CopyToClipboard text={text}> */}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 sm:px-4 mx-1 sm:mx-2 my-1 rounded-md active:bg-blue-800" onClick={handleCopy}>Copy To Clipboard</button>
                        {/* </CopyToClipboard> */}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 sm:px-4 mx-1 sm:mx-2 my-1 rounded-md active:bg-blue-800" onClick={handleClearClick}>Clear Text</button>
                    </div>
                    <hr className='my-5'/>
                    <div>
                        <h3 className="font-semibold text-xl sm:text-2xl">Your text summary</h3>
                        <ul className="list-disc text-base sm:text-lg">
                            <li>{noOfwords} words, {noOfchar} characters</li>
                            <li>{hours} Hours, {minutes} minutes, {seconds} seconds to read</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
