import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    increaseCount() {
        // this.setState(
        //     {
        //         count: this.state.count + 1,
        //     },
        //     () => console.log("Callback Value", this.state.count)
        // );

        this.setState(
            (prevState, props) =>  ({
                count: prevState.count + 1
            }),
            () => console.log("Callback value", this.state.count)
        );

        console.log(this.state.count);
    }

    increaseByFive() {
        console.log("Called to increaseByFive");
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <button onClick={() => this.increaseByFive()}>
                    Increment Count
                </button>
            </div>
        );
    }
}

export default Counter;
