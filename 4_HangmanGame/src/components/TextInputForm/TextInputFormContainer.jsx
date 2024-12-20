import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
    function handleFormSubmit(event) {
        // Form default behavior is to refresh the page. To prevent this
        event.preventDefault();
        console.log("Form submitted");
    }

    function handleTextInputChange(event) {
        console.log("Text input changed");
        console.log(event.target.value);
    }

    return ( 
        <TextInputForm 
           handleFormSubmit={handleFormSubmit}
           handleTextInputChange={handleTextInputChange}
        />
    );
}

export default TextInputFormContainer;