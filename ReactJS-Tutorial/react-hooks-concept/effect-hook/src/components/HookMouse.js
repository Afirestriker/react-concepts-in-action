import React, { useState, useEffect } from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("Mouse event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousePosition)

        return () => { // clean up code handler that will be called on component unmount. Mimicing componentWillUnmount.
            console.log("Component unmounting code");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []); // pass second argument as an empty array to mimic componentDidMount. I.e, run the useEffect only once.

    return (
        <div>
            Hook X: {x} Y: {y}
        </div>
    );
}

export default HookMouse;
