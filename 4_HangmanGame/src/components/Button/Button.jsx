import getButtonStyling from "./getButtonStyling";

function Button({ text, onClickHandler, styleType = "primary", type="button" }) {

    // console.log(props); // object
    
    return (
        <button
        type={type}
        onClick={onClickHandler}
        className={`px-4 py-2 ${getButtonStyling(styleType)}-500
         text-white rounded`}
        >
        {text}
        </button>
    );
}


export default Button;