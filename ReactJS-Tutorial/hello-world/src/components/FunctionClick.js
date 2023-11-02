import React from "react";

function FunctionClick() {

    function clickHandler() {
        console.log("Functional Component Button Clicked");
    }

    return (
        <>
            <button onClick={clickHandler}>Functional Component - Click</button>
        </>
    )
}

export default FunctionClick;
