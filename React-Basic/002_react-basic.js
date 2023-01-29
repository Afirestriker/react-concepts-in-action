function Hello() {
    return (
        <div>Hello World!</div>
    );
}

function App() {
    return (
        <div>
            <br />
            <h3>React example #2 (Reusable component)</h3>
            <Hello />
            <Hello />
            <Hello />
            <Hello />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#app2'));