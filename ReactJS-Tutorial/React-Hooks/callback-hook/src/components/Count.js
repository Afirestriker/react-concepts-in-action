import React from "react";

const Count = ({title = '', count = 0}) => {
    console.log(`${title} Count Component`);

    return <div>{title} - {count}</div>;
};

export default React.memo(Count);
