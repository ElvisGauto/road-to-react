import { useState } from "react";

export const useCounter = ( initialCounter ) => {
    const [counter, setCounter] = useState(initialCounter);
 
    const increment = () => {
        setCounter(counter + 1);
    }

    const reset = () => {
        setCounter(initialCounter);
    } 

    const decrement = () => {
        setCounter(counter - 1);
    } 

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
