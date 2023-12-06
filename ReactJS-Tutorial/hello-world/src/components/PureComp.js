import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log("Pure Component Class")
        return(
            <div>
                Pure Component {this.props.name}

            </div>
        )
    }
}

export default PureComp;
