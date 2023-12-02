import React, { Component } from 'react';
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
     constructor(props) {
        console.log("LifecycleA constructor");

        super(props);

        this.state = {
            name: "Kate"
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        // return {name: "Jack"};
        return null;
    }

    render() {
        console.log("LifecycleA render");
        return(
            <>
                <div>Open console to check compoent lifecycle method call sequence &amp; log message</div>
                <div>LifecycleA - Hello {this.state.name}</div>
                <LifecycleB />
            </>
        )
    }

    compoentDidMount() {
        console.log("LifecycleA componentDidMount");
    }
}

export default LifecycleA;
