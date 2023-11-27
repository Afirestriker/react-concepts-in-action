import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            comments: "",
            topic: "react"
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handleCommentsChange = this.handleCommentsChange.bind(this);
        // this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    /* handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        });
    } */

    /* handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        });
    } */

    /* handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        });
    } */

    // common form change handler for all form elements using prevState
    handleFormChange = event => {
        this.setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    handleFormSubmit = event => {
        console.log(`
            ${this.state.username} | ${this.state.comments} | ${this.state.topic}
        `);

        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleFormChange}
                        placeholder="Enter username"
                    />
                </div>
                <div>
                    <label htmlFor="comments">Comments</label>
                    <textarea
                        name="comments"
                        value={this.state.comments}
                        onChange={this.handleFormChange}
                        placeholder="Enter comments">
                    </textarea>
                </div>
                <div>
                    <label htmlFor="topic">Topic</label>
                    <select name="topic" value={this.state.topic} onChange={this.handleFormChange}>
                        <option value="react">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div>
                    {/* <input type="submit" /> */}
                    <button type="submit">Submit Form</button>
                </div>
            </form>
        )
    }
}

export default Form;
