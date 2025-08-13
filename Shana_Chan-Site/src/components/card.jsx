import { useState, useRef, useEffect } from "react";
import styles from './card.module.css';

function CardFlip({frontContent, backContent, color}){
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState(700); // default base height

    const frontRef = useRef(null);
    const backRef = useRef(null);

    useEffect(()=>{
        function updateHeight(){
            const frontHeight = frontRef.current?.scrollHeight ||0;
            const backHeight = backRef.current?.scrollHeight ||0;
            setHeight(Math.max(frontHeight, backHeight));
        }
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return()=> window.removeEventListener("resize", updateHeight);
    }, [frontContent, backContent]);

    const handleFlip=()=>{
        setFlip(!flip);
    };
    
    return(
        <div className={styles.cardIndiv} onClick={handleFlip} style={{height}}>
            <div className={`${styles.cardInner} ${flip ? styles.flipped : ''}`} style={{height}}>
                <div ref={frontRef} className={styles.front} style={{ backgroundColor: color }}>{frontContent}</div>
                <div ref={backRef} className={styles.back} style={{ backgroundColor: color }}>{backContent}</div>
            </div>
        </div>
    );
}

export default CardFlip;


