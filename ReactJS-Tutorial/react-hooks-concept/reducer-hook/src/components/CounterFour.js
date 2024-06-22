import React, { useReducer, createContext } from 'react';
import CounterFourA from './CounterFourA';

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return initialState;
        case 'default': return state;
    }
}

export const CountContext = createContext();

const CounterFour = (props) => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={ {countValue: count, countDispatch: dispatch} }>
            <div>
                Count - {count}
                <CounterFourA />
            </div>
        </CountContext.Provider>
    );
}

export default CounterFour;
