import {useState, useEffect } from "react";

function Typewriter({ text="", speed = 100 }){
    const [displayedText, setDisplayedText] = useState("");
    useEffect(()=>{
        let i = 0;
        setDisplayedText("");
        const interval = setInterval(()=>{
            if (i<text.length){
                setDisplayedText((prev)=>prev+text.charAt(i));
                console.log("i is:",i)
                console.log("char is:",text[i])
                i++;
            }
            else{
                clearInterval(interval);
            }
        }, speed);

        return ()=>{
            clearInterval(interval);
        };
    },[text, speed]);

    return (
        <h1 className="text-4xl font-bold text-white">
            {displayedText}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </h1>
    );
} 


export default Typewriter;