// useReducer complex state and action

import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0
};

const reducer = (state /* current state */, action /* action to perform */) => {
    switch(action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + (action.value??1) };
        case 'decrement':
            return { firstCounter: state.firstCounter - (action.value??1) };
        case 'reset':
            return initialState;
        case 'default':
            return state;
    }
};

const CounterTwo = (props) => {
    const [count, dispatch] = useReducer(reducer /* reducer function */, initialState /* initial state value */);

    return (
        <div>
            <div>{count.firstCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default CounterTwo;
