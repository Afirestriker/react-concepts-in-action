import React, {useState} from 'react';

const HookCounterFour = () => {
    const [lists, setList] = useState([]);

    const pushItem = () => {
        setList([...lists, lists.length]);
    }

    return(
        <div>
            <h2>useState with Array:</h2>
            <button onClick={pushItem}>Add Item</button>
            <ul>
                { lists.map((item, indx) => <li key={indx}>{item}</li>) }
            </ul>
        </div>
    )
}

export default HookCounterFour;
