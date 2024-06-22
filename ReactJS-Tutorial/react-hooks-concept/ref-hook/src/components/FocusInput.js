import React, { useEffect, useRef } from 'react';

const FocusInput = props => {
    const inputRef = useRef(null);

    useEffect(() => {
        // focus the input element
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef} placeholder='Enter Some Text' />
        </div>
    )
}

export default FocusInput;
