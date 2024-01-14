import React, { useState, useEffect } from 'react';

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);

    const tick = () => setCount(prevState => prevState + 1);

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3>Hook Count {count}</h3>
        </div>
    )
}

export default IntervalHookCounter;
