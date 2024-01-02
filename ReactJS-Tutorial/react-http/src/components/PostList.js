import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            errorMsg: ''
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(responseData => {
                console.log(responseData);
                this.setState({posts: responseData.data});
            })
            .catch(error => {
                console.log(error);
                this.setState({errorMsg: "Error Encounter"});
            })
    }

    render() {
        const { posts, errorMsg } = this.state;

        return(
            <>
                <div>Post List</div>
                {
                    posts.length
                      ? posts.map(post => <div key={post.id}>{post.title}</div>)
                      : null
                }
                {
                    errorMsg.length
                      ? <div>{errorMsg}</div>
                      : null
                }
            </>
        );
    }
}

export default PostList;
