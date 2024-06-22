import React, {useState} from 'react';

const HookCounterTwo = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    const incrementByFive = () => {
        // for (let i = 0; i < 5; i++) setCount(count + 1);
        for (let i = 0; i < 5; i++) setCount(prevState => prevState + 1);
    }

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={() => setCount(initialValue)}>Reset</button> &nbsp;
                <button onClick={() => setCount(count + 1)}>Increment</button> &nbsp;
                <button onClick={() => setCount(count - 1)}>Decrement</button> &nbsp;
                <button onClick={incrementByFive}>Increment By 5</button>

            </div>
        </div>
    )
}

export default HookCounterTwo;