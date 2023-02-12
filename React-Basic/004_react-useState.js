/* Destructing useState from react, to directly use useSate() instead of React.useState() each time. */
const { useState } = React;

function AppUseState() {
    const [text, etText] = useState('useState');
    const [counter, setCounter] = useState(0);

    /*Updating counter value usin setCounter()*/
    const updateCounter = () => setCounter(counter+1);

    return (
        <div>
            <h4>React example #4 {text}</h4>
            <h1>Counter: {counter}</h1>
            <button onClick={updateCounter}>Update</button>
        </div>
    );
}

ReactDOM.render(<AppUseState />, document.querySelector('#appUseState'));
