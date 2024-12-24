import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import Button from "../components/Button/Button";
import { WordContext } from "../context/WordContext";

function PlayGame() {

    // const [ searchParams ] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const { text } = useParams();

    // const { state } = useLocation();

    const [ guessedLetters, setGuessedLetters ] = useState([]);

    const [ step, setStep ] = useState(0);

    const { word, hint } = useContext(WordContext);

    function handleLetterClick(letter) {
        if(word?.toUpperCase().includes(letter)) {
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
            {/* { wordList.map(( wordObject ) => <li key={ wordObject.id }>{ wordObject.wordValue }</li>) } */}

            { word && (
                <>
                    <h1 className="mt-2 mb-2 text-blue-800 font-bold">{ hint }</h1>
                    <MaskedText text={ word } guessedLetters={guessedLetters}  />
                    <div>
                    <LetterButtons text={ word } guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
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