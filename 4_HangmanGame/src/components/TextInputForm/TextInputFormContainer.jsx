import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    // let inputType = "password"; // local variable could not track globally proper
    const [ inputType, setInputType ] = useState("password"); // you can give initial value
    const [ value, setValue ] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function and help to condination rendering

    function handleFormSubmit(event) {
        // Form default behavior is to refresh the page. To prevent this
        event.preventDefault();
        // console.log("Form submitted", value);
        if(value) {
            // If we have something in value then we want to go to the play page
            // navigate(`/play?text=${value}`);
            // navigate(`/play/${value}`);
            // setTimeout( () => {
            //     navigate("/play");
            // }, 3000);
            navigate(`/play`, { state: { wordSelected: value } });
        }
    }

    function handleTextInputChange(event) {
        // console.log("Text input changed");
        // console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        // console.log("Show/Hide button clicked");
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