import React, { Component } from 'react';
import InputRef from "./InputRef";

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        console.log("Component Ref", this.componentRef);
    }

    clickHandler() {
        this.componentRef.current.focusInput();
    }

    render() {
        return(
            <div>
                <InputRef ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput;
