import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingTwo = () => {
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => setPost(response.data))
            .catch(error => console.log("Error in fetching data"));
    }, [postId]);

    return (
        <div>
            <input type="number" value={postId} onChange={ e => setPostId(e.target.value) } />
            <div key={post.id}>{post.title}</div>
        </div>
    )
}

export default DataFetchingTwo;
