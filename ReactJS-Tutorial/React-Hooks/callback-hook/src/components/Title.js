import React from "react";

const Title = ({title = ''}) => {
    console.log("Title component");

    return <div>{title}</div>;
}

export default React.memo(Title);
