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

    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate");
        // return false;
        return true; // if returns false - the component will not update and the update lifecycle will stop.
    }

    render() {
        console.log("LifecycleB render");
        return (<div>LifecycleB - Hello Mike</div>);
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate");
    }
}

export default LifecycleB;
