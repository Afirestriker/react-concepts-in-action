import React, { useContext } from "react";
import { CountContext } from "./CounterFour";

const CounterFourB = () => {
    const { countValue, countDispatch } = useContext(CountContext);

    return (
        <>
            <div>
                CounterFourB - {countValue}
            </div>
            <div>
                <button onClick={() => countDispatch('increment')}>FourB Increment</button>
                <button onClick={() => countDispatch('decrement')}>FourB Decrement</button>
                <button onClick={() => countDispatch('reset')}>FourB Reset</button>
            </div>
        </>
    );
}

export default CounterFourB;
