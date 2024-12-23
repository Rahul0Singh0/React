import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import Button from "../components/Button/Button";

function PlayGame() {

    // const [ searchParams ] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const { text } = useParams();

    const { state } = useLocation();

    const [ guessedLetters, setGuessedLetters ] = useState([]);

    const [ step, setStep ] = useState(0);

    function handleLetterClick(letter) {
        if(state?.wordSelected?.toUpperCase().includes(letter)) {
            console.log("correct");
        } else {
            console.log("wrong");
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <>
            <h1>PlayGame</h1>

            { state?.wordSelected && (
                <>
                    <h1 className="mt-2 mb-2 text-blue-800 font-bold">{state.hintSelected}</h1>
                    <MaskedText text={ state.wordSelected } guessedLetters={guessedLetters}  />
                    <div>
                    <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
                    </div>
                    <div>
                        <HangMan step={step} />
                    </div>
                </>
            )}
            <Link to={'/'}><Button text={"Home"} styleType="error" /></Link>
            <Link to={'/start'} className="ml-5"><Button text={"Start Game Link"} styleType="secondary"/></Link>
        </> 
    );   
}

export default PlayGame;