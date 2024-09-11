import React from 'react';
import { useState, useEffect } from "react"

const Timer = () => {
    const [count, setCount] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    useEffect(() => {
        let timer:any;
        if (isStarted) {
            timer = setInterval(() => {
                setCount((current) => current + 1);
            }, 1000)
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer)
    }, [isStarted])
    return (
        <div>
            <span>Seconds: {count}</span>
            <button onClick={() => setIsStarted(!isStarted)}>
                {isStarted ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}

export { Timer }

