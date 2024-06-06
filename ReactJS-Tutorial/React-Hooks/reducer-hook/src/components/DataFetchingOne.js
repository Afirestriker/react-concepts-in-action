import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchningOne = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (response.status === 200) setData(response.data);
                else setIsError('Unknown Error. Please try again...!');
            })
            .catch(error => {
                setIsError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }, []);

    return (
        <div>
            Data Fetching Using useState
            <div style={{color: '#410c7a', fontWeight: '500'}} >
                {isLoading && " Loading..."}
                {isError}
                {data.body ?? ''}
            </div>
        </div>
    );
}

export default DataFetchningOne;
