import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitleTwo() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>
            DocTitleTwo Count - {count}
            <button style={{marginLeft: '3px', padding: '8px'}} onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
    );
}

export default DocTitleTwo;
