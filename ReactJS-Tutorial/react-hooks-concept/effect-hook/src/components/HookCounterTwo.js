import React, { useState, useEffect } from 'react';

const HookCounterTwo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect - updating document title');
        document.title = `Click ${count} times`;
    }, [count]); // passed second parameter to conditionaly run useEffect

    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={(e) => {setCount(prevState => prevState + 1)}}>Click {count}</button>
        </div>
    );
}

export default HookCounterTwo;
