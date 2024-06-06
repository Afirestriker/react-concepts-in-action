import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchningOne = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (response.status === 200) setPost(response.data);
                else setError('Unknown Error. Please try again...!');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            });
    }, []);

    return (
        <div>
            Data Fetching Using useState
            <div style={{color: '#410c7a', fontWeight: '500'}} >
                {loading && " Loading..."}
                {error}
                {post.body ?? ''}
            </div>
        </div>
    );
}

export default DataFetchningOne;
