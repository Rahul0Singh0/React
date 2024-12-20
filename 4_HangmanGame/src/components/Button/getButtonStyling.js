function getButtonStyling(styleType) {
    if(styleType === "primary") {
        return "bg-blue";
    } else if(styleType === "secondary") {
        return "bg-gray";
    } else if(styleType === "error") {
        return "bg-red";
    } else if(styleType === "success") {   
        return "bg-green";
    } else if(styleType === "warning") {
        return "bg-yellow";
    }
}

export default getButtonStyling;