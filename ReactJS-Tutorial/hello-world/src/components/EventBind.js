import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "Hello",
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    /* clickHandler() {
        this.setState({
            message: "Goodbye!"
        });

        console.log(this);
    } */

    clickHandler = () => {
        const updatedMessage = (this.state.message === 'Hello') ? 'Goodbye!' : 'Hello';
        this.setState({
            message: updatedMessage
        })
    }

    render() {
        return(
            <>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}  {/* Approach 1 - Binding in render method (Performance implecation) */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}     {/* Approach 2 - Using arrow function in render method (Performance implecation, but good when need to pass parenthesis) */}
                {/* <button onClick={this.clickHandler}>Click</button> */}             {/* Approach 3 - Binding in Class constructor. From React Doc (Go to approach) */}
                <button onClick={this.clickHandler}>Click</button>                     {/* Approach 4 - Declare handler function as arrow function. From React Doc (Go to approach) */}
            </>
        )
    }
}

export default EventBind;