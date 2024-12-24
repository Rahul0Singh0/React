import { Routes, Route } from "react-router-dom";
import './App.css';
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";
import Home from "./pages/Home";
import { WordContext } from "./context/WordContext"
import { useState } from "react";

function App() {

  // const [ wordList, setWordList ] = useState([]);
  const [ word, setWord ] = useState('');
  const [ hint, setHint ] = useState('');

  return (
    // WordContext available to all components hierarchy
    <WordContext.Provider value={{ word, setWord, hint, setHint }}>
        <Routes>
          <Route path="/start" element={<StartGame />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </WordContext.Provider>
  );
}

export default App
