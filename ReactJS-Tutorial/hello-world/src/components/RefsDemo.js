import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        // approach 1: React.createRef
        this.inputRef = React.createRef();

        // approach 2: using callback ref
        // this.cbRef = null;
        // this.setCbRef = element => {
        //     this.cbRef = element;
        // }

        this.clickHanlder = this.clickHanlder.bind(this);
    }

    componentDidMount() {
        // console.log(this.cbRef);
        // if (this.cbRef) {
        //     this.cbRef.focus();
        // }

        console.log(this.inputRef);
        this.inputRef.current.focus();
    }

    clickHanlder() {
        alert(this.inputRef.current.value);
    }

    render() {
        return(
            <div>
                <label htmlFor='reactRef'>React.createRef </label>
                <input type="text" ref={this.inputRef}/>

                {/* <label htmlFor='callbackRef'>Callback Ref </label> */}
                {/* <input type="text" ref={this.setCbRef} /> */}

                <button onClick={this.clickHanlder}>Click</button>
            </div>
        )
    }
}

export default RefsDemo;
