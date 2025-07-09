import {useState, useEffect } from "react";

function Typewriter({ text="", speed = 100, onDone }){
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
                if (onDone){
                    onDone()
                }
            }
        }, speed);

        return ()=>{
            clearInterval(interval);
        };
    },[text, speed, onDone]);

    return (
        <h1 className="text-4xl font-bold text-white">
            {displayedText}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </h1>
    );
} 

function TypewriterOverlay({ text="", speed = 100, onDone }){
    useEffect(() => {
        // Disable background scroll
        document.body.style.overflow = 'hidden';
        document.body.style.overflow = "hidden";
        
        return () => {
            // Re-enable scroll on cleanup/unmount
            document.body.style.overflow = "";
            document.documentElement.style.overflow = '';

        };
    }, []);

    return(
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.95)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
            >
            <h1 style={{ color: 'white' }}>Testing Overlay</h1>

            {/* <Typewriter text={text} speed={speed} onDone={onDone} /> */}
        </div>

    );
}


export default Typewriter; TypewriterOverlay;