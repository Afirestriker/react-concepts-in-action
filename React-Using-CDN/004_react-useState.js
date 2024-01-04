/**
 * useState() is a function in React, from whcih we destruct two things
 * 1) A {variable}
 * 2) A function for modifying {variable} value
 */

function AppUseState() {
    const [counter, setCounter] = React.useState(0);

    /*Updating counter value using setCounter()*/
    const updateCounter = () => {
        setCounter(counter+1);
    }

    return (
        <div>
            <h4>React example #4 (useState)</h4>
            <h1>Counter: {counter}</h1>
            <button onClick={updateCounter}>Update</button>
        </div>
    );
}

ReactDOM.render(<AppUseState />, document.querySelector('#appUseState'));
