import React, { Component } from 'react';

class ClassMouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = (e) => {
        console.log("Log mouse pointer position");
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    componentDidMount() {
        console.log("Add event listener");
        window.addEventListener('mousemove', this.logMousePosition);
    }

    componentWillUnmount() {
        console.log("Remove event listener on compoent unmount");
        window.removeEventListener('mousemove', this.logMousePosition);
    }

    render() {
        return (
            <div>
                ClassMouse X: {this.state.x} Y: {this.state.y}
            </div>
        );
    }
}

export default ClassMouse;
