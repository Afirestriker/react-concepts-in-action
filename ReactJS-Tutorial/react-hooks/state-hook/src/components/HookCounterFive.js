import React, {useState} from 'react';

const HookCounterFive = () => {
    const [items, setItems] = useState([]);

    const pushItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <h2>useState with Array of Object:</h2>
            <button onClick={pushItem}>Add Item</button>
            <ul>
                { items.map(item => <li key={item.id}>{item.value}</li>) }
            </ul>
        </div>
    )
}

export default HookCounterFive;
