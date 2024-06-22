import React, { useState, useMemo } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [countOne, setCountOne] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    const updateCountOne = () => {
        setCountOne(countOne + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i <= 2000000000) i++;

        return (count % 2 === 0) ? 'Even' : 'Odd'
    }, [count]);

    return (
        <div>
            <div>Counter - {count} <button onClick={() => updateCount()}>Increment</button> {isEven} Number</div>
            <div>Counter One - {countOne} <button onClick={() => updateCountOne()}> Increment</button> </div>
        </div>
    );
}

export default Counter;
