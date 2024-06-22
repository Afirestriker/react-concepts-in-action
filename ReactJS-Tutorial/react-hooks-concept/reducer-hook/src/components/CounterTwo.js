// useReducer complex state and action

import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state /* current state */, action /* action to perform */) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + (action.value??1) };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - (action.value??1) };
        case 'incrementCounter2':
            return { ...state, secondCounter: state.secondCounter + (action.value??1) };
        case 'decrementCounter2':
            return { ...state, secondCounter: state.secondCounter - (action.value??1) };
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
            <div>First Counter: {count.firstCounter}</div>
            <div>Second Counter: {count.secondCounter}</div>

            <div>
                {/* Counter One Action */}
                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            </div>

            <div>
                {/* Counter Two Action */}
                <button onClick={() => dispatch({type: 'incrementCounter2', value: 1})}>Increment Counter Two</button>
                <button onClick={() => dispatch({type: 'decrementCounter2', value: 1})}>Decrement Counter Two</button>
                <button onClick={() => dispatch({type: 'incrementCounter2', value: 5})}>Increment Counter Two 5</button>
                <button onClick={() => dispatch({type: 'decrementCounter2', value: 5})}>Decrement Counter Two 5</button>
            </div>

            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default CounterTwo;
