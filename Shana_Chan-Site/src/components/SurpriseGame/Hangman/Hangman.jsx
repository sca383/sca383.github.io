import { useEffect } from "react";
import { useState } from "react";
import { getWordDisplay, isGameLost, isGameWon, getRandomWord } from "./hangmanLogic";

function Hangman(){
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [numGuessesLeft, setNumGuessesLeft] = useState(6);

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    //generating new random word 
    useEffect(()=>{
        const newWord = getRandomWord()
        setWord(newWord);
    }, []);

    //game winning and losing vars
    const won = isGameWon(word, guessedLetters);
    const lost = isGameLost(word, guessedLetters);
    return(
        <div>
            <h2>Hangman Game</h2>
            <p>Number of guesses: {numGuessesLeft}</p>
            <p>{getWordDisplay(word, guessedLetters)}</p>
            <br/><br/>
            <div className="flex flex-wrap gap-2 my-4">
                {alphabet.map(letter =>(
                    <button
                        key={letter}
                        onClick={(e)=>{
                            e.stopPropagation();
                            if(!guessedLetters.includes(letter)){
                                setGuessedLetters([...guessedLetters,letter]);
                                if (!word.includes(letter)){
                                    setNumGuessesLeft(numGuessesLeft -1);
                                }
                            }
                        }}
                        disabled ={guessedLetters.includes(letter) || won ||lost}
                        className="px-2 py-1 border rounded disabled:opacity-50"
                    >
                        {letter.toUpperCase()}
                    </button>
                ))}
            </div>
            {won && <p className="text-green-600 font-bold">You won!</p>}
            {lost && <p className="text-red-600 font-bold">You lost!</p>}
        </div>
    );

}

export default Hangman;






//button click of all letters, must map each button to a letter.
//handleGuess, onBTN press, set guessed letters (add to the array of guessed letters)

