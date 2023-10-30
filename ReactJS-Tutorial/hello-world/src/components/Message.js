import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor - Jack",
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing - Jack",
        });
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </>
        );
    }
}

export default Message;