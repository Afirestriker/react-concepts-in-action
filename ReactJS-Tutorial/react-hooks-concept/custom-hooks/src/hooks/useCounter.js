import {useState} from 'react';

const useCounter = (initialCount = 0, value = 1) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(prevState => prevState + value);
    const decrement = () => setCount(prevState => prevState - value);
    const reset = () => setCount(initialCount);

    return [count, increment, decrement, reset];
}

export default useCounter;
