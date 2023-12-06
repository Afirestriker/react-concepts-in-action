import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Kate"
        };

        this.intervalId = null;
    }

    componentDidMount() {
        this.setState({
            name: "Kate"
        });

        // this.intervalId = setInterval(() => {
        //     this.setState({
        //         name: "Kate"
        //     });
        // }, 2000);
    }

    render() {
        console.log("*************************Parent Component Re-Render******************************")
        return(
            <div>
                Parent Component
                <PureComp name={this.state.name} />
                <RegularComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;
