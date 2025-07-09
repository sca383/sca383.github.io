import { useState } from "react";
import styles from './card.module.css';

function CardFlip({frontContent, backContent, color}){
    const [flip, setFlip] = useState(false);

    const handleFlip=()=>{
        setFlip(!flip);
    };
    
    return(
        <div className={styles.cardIndiv} onClick={handleFlip}>
            <div className={`${styles.cardInner} ${flip ? styles.flipped : ''}`}>
                <div className={styles.front} style={{ backgroundColor: color }}>{frontContent}</div>
                <div className={styles.back} style={{ backgroundColor: color }}>{backContent}</div>
            </div>
        </div>
    );
}

export default CardFlip;