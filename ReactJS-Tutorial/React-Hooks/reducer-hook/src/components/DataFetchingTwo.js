import React, { useReducer, useEffect } from "react";
import axios from 'axios';

const initialState = {
    loading: true,
    post: null,
    error: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS': {
            return {
                loading: false,
                error: null,
                post: action.data
            }
        }
        case 'FETCH_ERROR': {
            return {
                loading: false,
                post: {},
                error: action.errorMessage
            }
        }
        case 'default': {
            return state;
        }
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => dispatch({type: 'FETCH_SUCCESS', data: response.data}))
            .catch(error => dispatch({type: 'FETCH_ERROR', errorMessage: error.message}))
    }, []);

    return (
        <>
            <div>Data Fetching using useEffect with useReducer</div>
            <div style={{color: '#410c7a', fontWeight: '500'}}>
                {state.loading && "Loading..."}
                {state.error && state.error}
                {state.post && state.post.body}
            </div>
        </>
    );
}

export default DataFetchingTwo;
