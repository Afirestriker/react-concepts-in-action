const app = document.getElementById("app");

/**
 * The same way like html element has attributes.
 * We can pass data to component.
 * And collect them via 'props'
 */
function Title(props) {
    return (
        <div>
            <h1> {props.title} </h1>
            {/* using curly braces we can write javascript inside jsx */}
        </div>
    );
}

/**
 * Uses object destructring to directly use the parameter
 * instead of using props.param
 */
function Header({ context }) {
    /**
     * The empty element <> here call fragment,
     * Help to render UI in the same div instead of adding another div.
     */
    return (
        <>
            <h2> {context} </h2>
        </>
    );
}

// Iterating through lists
function Names({ nameList = [] }) {
    return (
        <ul>
            {nameList.map((name) => {
                return (
                    <li id={name} key={name}>
                        {name}
                    </li>
                );
            })}
        </ul>
    );
}

// Interactivity with State and event handlers in react
function CounterButton() {
	const [visibility, setVisibility] = React.useState("initial");

    function updateCounter() {
		setVisibility(visibility === "initial" ? "none" : "initial");
    }

	return (
        <>
            <button onClick={updateCounter}>Toggle</button> : <span style={{display: visibility}}>Text To Toggle</span>
        </>
    );
}

function App() {
    /**
     * If you inspect,
     * The <Title /> is render inside an nested <div>
     * while the <Header /> is render inside the main #app div, bcoz of fragment <>.
     */
	return (
        <>
            <Title title="React Practise" />
            <Header context="Run..Build..Deploy..." />
            <Names
                nameList={["Kate", "Mike", "Jake", "Harry", "Hermione", "Ron"]}
            />
            <CounterButton />
        </>
    );
}

ReactDOM.render(<App />, app);