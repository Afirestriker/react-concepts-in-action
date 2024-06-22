import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingTwo = () => {
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1);
    const [updatedPostId, setUpdatedPostId] = useState(postId);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => setPost(response.data))
            .catch(error => console.log("Error in fetching data"));
    }, [updatedPostId]);

    return (
        <div>
            <input type="number" value={postId} onChange={ e => setPostId(e.target.value) } />
            <button type="button" onClick={() => setUpdatedPostId(postId)}>Fetch Data</button>
            <div key={post.id}>{post.title}</div>
        </div>
    )
}

export default DataFetchingTwo;
