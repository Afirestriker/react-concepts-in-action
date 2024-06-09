import React from "react";

const Button = ({ title = "", updateHandler = null }) => {
    console.log(`${title} Button component`);

    return <button onClick={() => updateHandler()}> Update {title}</button>;
};

export default React.memo(Button);
