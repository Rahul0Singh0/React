import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";

function Home() {

    const [ word, setWord ] = useState('');
    const [ hint, setHint ] = useState('');

    async function fetchWords() {
        // fetch promise based function provided by browser to call network
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json(); // custom object converted to json
        // console.log(data);

        const randomIndex = Math.floor(Math.random() * data.length);
        // console.log(data[randomIndex].wordHint);
        // console.log(data[randomIndex].wordValue);
        setWord(data[randomIndex].wordValue);
        setHint(data[randomIndex].wordHint);
    }

    useEffect(() => { // only mounting
        fetchWords();
    }, []);

    return (
        <>
            <Link to={"/play"} state={{ wordSelected: word, hintSelected: hint }}>
                <Button 
                    text={"Single Player Game"}
                />
            </Link>
            <br />
            <Link to={"/start"}>
                <div className="mt-4">
                    <Button
                        styleType={"secondary"} 
                        text={"Multiplayer Game"}
                    />
                </div>
            </Link>
        </>
    );
}

export default Home;