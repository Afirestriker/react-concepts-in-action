function Hello(props) {
    return (
        <div>Hello {props.name}!</div>
    );
}

function App() {
    return (
        <div>
            <h3>React example #3 (using props)</h3>
            <Hello name="Kate"/>
            <Hello name="Henry"/>
            <Hello name="Ron"/>
            <Hello name="Hermione"/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#appProps'));