import React, {useState, useEffect} from 'react';

const HookCounterOne = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    });

    return(
        <div>
            <button onClick={() => setCount(prevState => prevState + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounterOne;
