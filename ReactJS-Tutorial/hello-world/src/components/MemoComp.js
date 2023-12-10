import React from 'react';

const MemoComp = ({ name }) => {
    console.log("Rendering Memo Component");

    return(
        <div>{ name }</div>
    )
}

export default React.memo(MemoComp);
