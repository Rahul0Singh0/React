import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {

    // const [ searchParams ] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const { text } = useParams();

    const { state } = useLocation();

    return (
        <>
            <h1>PlayGame { state.wordSelected }</h1>
            <MaskedText text={ state.wordSelected } guessedLetters={[]}  />
            <Link to={'/start'} className="text-blue-400">Start Game Link</Link>
        </> 
    );   
}

export default PlayGame;