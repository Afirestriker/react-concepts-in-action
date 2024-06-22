import React, { Component } from 'react';

class ClassCounterOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ''
        };
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count === this.state.count) return;

        console.log("Updaing document title");
        document.title = `Clicked ${this.state.count} times`;
    }

    render() {
        const {count} = this.state;

        return(
            <div>
                <input type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
                <button onClick={() => {this.setState(prevState => ({count: prevState.count + 1}))}}> Click {count}</button>
            </div>
        );
    }
}

export default ClassCounterOne;
