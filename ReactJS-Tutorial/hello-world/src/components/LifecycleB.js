import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
        super(props);
        console.log("LifecycleB constructor");

        this.state = {} // Mandatory to add this statement as we explicitly added getDerivedStateFromProps() method
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDrivedStateFromProps");
        return null; // must return null or object to set update state object
    }

    render() {
        console.log("LifecycleB render");
        return (<div>LifecycleB - Hello Mike</div>);
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }
}

export default LifecycleB;
