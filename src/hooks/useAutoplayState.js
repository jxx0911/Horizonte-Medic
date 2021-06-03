import { useState } from 'react'

export const useAutoplayState = ( ) => {

    const [autoplay, setAutoplay] = useState(true);

    /* const autoPlayOff = () => {
        setAutoplay(false);
        console.log("dentro del hook: " + autoplay);
    }
    
    const autoPlayOn = () => {
        setAutoplay(true);
        console.log("dentro del hook: " + autoplay);
    } */
    
    console.log("dentro del hook" + autoplay);

    return {
        autoplay,
        setAutoplay 
        /* autoPlayOn,
        autoPlayOff */
    };
        
    
}
