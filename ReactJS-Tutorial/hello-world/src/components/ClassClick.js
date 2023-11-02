import React, { Component } from "react";

class ClassClick extends Component {

    clickHandler() {
        console.log("Class component - Button Clicked");
    }

    render() {
        return(
            <>
                <button onClick={this.clickHandler}>Class Componenet - click</button>
            </>
        )
    }
}

export default ClassClick;
