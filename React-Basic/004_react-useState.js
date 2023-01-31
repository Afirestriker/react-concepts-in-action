/* Destructing useState from react, to be able to directly use useSate() instead of React.useState() each time. */
const { useState } = React;

function updateCounter() {
    setCounter(counter+1);
}

function AppUseState() {
    const [text, etText] = useState('Hello useState');
    const [counter, setCounter] = useState(1);
    return (
        <div>
            <h3>React example #4 {text}</h3>
            <div>Counter value: {counter}</div>
            {/* <button onClick={updateCounter()}>UpdateCoutner</button> */}
        </div>
    );
}

ReactDOM.render(<AppUseState />, document.querySelector('#appUseState'));
