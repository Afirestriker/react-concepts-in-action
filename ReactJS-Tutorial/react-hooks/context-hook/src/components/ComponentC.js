import React, { Component } from "react";
import { userContext, userTwoContext } from "../App";

class ComponentC extends Component {
    render() {
        return (
            <div>
                <userContext.Consumer>
                    {user => {
                        return (
                            <userTwoContext.Consumer>
                                {userTwo => {
                                    return <div>User context: {user}, UserTwo context: {userTwo} </div>
                                }}
                            </userTwoContext.Consumer>
                        )
                    }}
                </userContext.Consumer>
            </div>
        );
    }
}

export default ComponentC;
