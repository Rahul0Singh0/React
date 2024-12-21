import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    return (
        // You can't return multiple parent element. You can return only one single parent element.
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer />
            {/* <a href="/play" className="text-blue-400">PlayGame</a> */}
            <Link to={'/play'} className="text-blue-400">Play Game Link</Link>
        </>
    );
}

export default StartGame;