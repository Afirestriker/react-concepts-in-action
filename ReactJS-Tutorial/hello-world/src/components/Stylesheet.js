import React from 'react';
import './myStyles.css';

const Stylesheet = (props) => {
    const isPrimary = props.primary ? 'primary' : '';

    return (
        <>
            <h1 className={`${isPrimary} font-xl`}>Styling using CSS Stylesheet</h1>
        </>
    )
}

export default Stylesheet
