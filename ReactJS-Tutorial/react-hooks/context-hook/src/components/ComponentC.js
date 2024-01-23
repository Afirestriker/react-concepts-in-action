import React, { Component } from "react";
import { userContext } from "../App";

class ComponentC extends Component {
    render() {
        return (
            <userContext.Consumer>
                {
                    user => <div>Component-C. User context value: {user} </div>
                }
            </userContext.Consumer>
        );
    }
}

export default ComponentC;
