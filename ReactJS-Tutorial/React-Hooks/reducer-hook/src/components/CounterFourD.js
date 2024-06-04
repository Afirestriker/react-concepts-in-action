import React, { useContext } from "react";
import { CountContext } from './CounterFour';

function CounterFourD() {
    const { countValue, countDispatch } = useContext(CountContext);

    return (
        <>
            <div>
                CounterFourD - {countValue}
            </div>
            <div>
                <button onClick={() => countDispatch('increment')}>FourD Increment</button>
                <button onClick={() => countDispatch('decrement')}>FourD Decrement</button>
                <button onClick={() => countDispatch('reset')}>FourD Reset</button>
            </div>
        </>
    );
}

export default CounterFourD;
