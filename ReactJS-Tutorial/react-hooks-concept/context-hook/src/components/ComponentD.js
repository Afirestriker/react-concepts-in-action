import React, { useContext } from "react";
import { userContext, userTwoContext } from "../App";

function ComponentD() {
    const userContextVal = useContext(userContext);
    const userTwoContextVal = useContext(userTwoContext);

    return (
        <div>
            <h4>useContext in React Functional Component</h4>
            User Context: <h5>{userContextVal}</h5>
            User Two Context: <h5>{userTwoContextVal}</h5>
        </div>
    );
}

export default ComponentD;
