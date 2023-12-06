import React, { Component } from 'react';
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
     constructor(props) {
        console.log("LifecycleA constructor");

        super(props);

        // the declaration of this.state is mandatory while we are manually writting the getDerivedStateFromProps()
        //   else it returns a console error.
        this.state = {
            name: "Kate"
        }

        this.updateName = this.updateName.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        // return {name: "Jack"};
        return null;
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        // return false;
        return true; // if returns false - the component will not update and the update lifecycle will stop.
    }

    updateName = _ => {
        this.setState({
            name: "Jack"
        });
    }

    render() {
        console.log("LifecycleA render");
        return(
            <>
                <div>Open console to check compoent lifecycle method call sequence &amp; log message</div>
                <div>LifecycleA - Hello {this.state.name}</div>
                <button onClick={this.updateName}>Update state name from "Kate" To "Jack" - Open console for update lifecycle method call log</button>
                <LifecycleB />
            </>
        )
    }

    compoentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate");

        // console.log("Previous state", prevState)
        // console.log("Current state", this.state)
        // console.log("Previous Props", prevProps)
        // console.log("Current Props", this.props)

        return null; // passed as a third parameter to the compoentDidUpdate() method 👇.
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleA componentDidUpdate");
        // console.log("Snpashot:", snapshot);
    }
}

export default LifecycleA;
