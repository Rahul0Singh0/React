import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {

    // let inputType = "password"; // local variable could not track globally proper
    const [ inputType, setInputType ] = useState("password"); // you can give initial value

    function handleFormSubmit(event) {
        // Form default behavior is to refresh the page. To prevent this
        event.preventDefault();
        console.log("Form submitted");
    }

    function handleTextInputChange(event) {
        console.log("Text input changed");
        console.log(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/Hide button clicked");
        if(inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
        // console.log(inputType);
    }

    return ( 
        <TextInputForm 
           inputType={inputType}
           handleFormSubmit={handleFormSubmit}
           handleTextInputChange={handleTextInputChange}
           handleShowHideClick={handleShowHideClick}
        />
    );
}

export default TextInputFormContainer;