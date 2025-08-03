import { use, useEffect } from "react";
import { useState } from "react";
import { getWordDisplay, isGameLost, isGameWon, getRandomWord } from "./hangmanLogic";
import { db, auth } from "../../../firebase/config";
import { doc, getDocs, getDoc, setDoc, collection, query, orderBy, limit} from "firebase/firestore";

function Hangman(){
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [numGuessesLeft, setNumGuessesLeft] = useState(6);
    const [score, setScore] = useState(0);
    const [uid, setUid] = useState(null);
    const [highestScore, setHighestScore] = useState(null);

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    
    //game winning and losing vars
    const won = isGameWon(word, guessedLetters);
    const lost = isGameLost(word, guessedLetters);
    const fetchHighestScore = async()=>{
        const scoresRef = collection(db, "hangmanScores");
        const topScoreQuery = query(scoresRef, orderBy("score", "desc"), limit(1));

        const snapshot = await getDocs(topScoreQuery);
        if (!snapshot.empty){
            const topDoc = snapshot.docs[0];
            setHighestScore(topDoc.data().score);
        }
    }

    //generating new random word 
    useEffect(()=>{
        const newWord = getRandomWord()
        setWord(newWord);
    }, []);

    useEffect(()=>{
        fetchHighestScore();
    }, [won, lost]);

    //firebase logic for fetching user id for the score
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(async (user) =>{
            if (user){
                setUid(user.uid);
                const userDoc = doc(db, "hangmanScores", user.uid);
                const snapshot = await getDoc(userDoc); //for retrieving single document
                if (snapshot.exists()){
                    setScore(snapshot.data().score || 0);
                }
            }
        });
        return ()=>unsubscribe();
    }, []);

    useEffect(()=>{
        if (won && uid){
            const newScore = score + 1;
            setScore(newScore);

            const userDoc = doc(db, "hangmanScores", uid);
            setDoc(userDoc, {score: newScore}, {merge: true});
        }
    }, [won]);

    const handleReset = ()=>{
        setWord(getRandomWord());
        setGuessedLetters([]);
        setNumGuessesLeft(6);
    }

    const hangmanImgPath = `/assets/HangmanAssets/hangman_${numGuessesLeft}.png`;
    return(
        <div onClick={e=>e.stopPropagation()}>
            <h2>Hangman Game</h2>
            {highestScore !== null && (
                <h3 className="font-semibold text-green-700">Highest score: {highestScore}</h3>
            )}
            <h3 className="font-semibold">Your score: {score}</h3>
            <p>Number of guesses: {numGuessesLeft}</p>
            <p>{getWordDisplay(word, guessedLetters)}</p>
            <br/><br/>
            <div id="hangmanImg">
                <img 
                    src={hangmanImgPath} 
                    alt={`Hangman stage ${numGuessesLeft}`}
                    style={{width: "200px", height: "200px"}}/>
            </div>
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
            {lost && <p className="text-red-600 font-bold">You lost! The word was {word}</p>}

            {(won || lost) && (
                <button
                    onClick={e => {
                        e.stopPropagation();
                        handleReset();
                    }}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                    Restart Game
            </button>
            )}

        </div>
    );

}

export default Hangman;
