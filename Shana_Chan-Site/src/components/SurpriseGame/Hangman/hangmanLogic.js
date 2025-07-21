import {generate, count} from "random-words"

export function getWordDisplay(word, guessedLetters){
    return word.split("").map((letter)=> (guessedLetters.includes(letter)?letter:'_')).join(' ');
}


export function isGameWon(word, guessedLetters){
    return word.split("").every((letter)=>guessedLetters.includes(letter));
}


export function isGameLost(word, guessedLetters,maxTries = 6){
    const numWrong = guessedLetters.filter((letter)=>!word.includes(letter)).length
    return numWrong >= maxTries;
}

export function getRandomWord(){
    return generate();
}