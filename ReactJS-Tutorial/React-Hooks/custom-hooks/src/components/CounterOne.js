import React, { useState } from "react";
import useCounter from '../hooks/useCounter';

const buttonStyle = {
    padding: '5px',
    marginRight: '5px',
    width: '5rem'
}

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(5, 2); // Arg1: initial value and Arg2: update value

    return (
        <div>
            CounterOne = {count}
            <div>
                <button style={buttonStyle} onClick={increment}>Increment</button>
                <button style={buttonStyle} onClick={decrement}>Decrement</button>
                <button style={buttonStyle} onClick={reset}>Rest</button>
            </div>
        </div>
    );
}

export default CounterOne;
