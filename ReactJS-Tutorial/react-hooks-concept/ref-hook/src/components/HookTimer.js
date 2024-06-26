import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return <div>
        HookTimer - {timer}
        <button style={{marginLeft: '10px', padding: '4px'}} onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>;
}

export default HookTimer;
