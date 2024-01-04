/* App is user defined react component, which return some html content */
function App() {
    return (
        /* Writing HTML inside JavaScript */
        <div>
            <h3>React example #1</h3>
            <div>Hello World!</div>
            <div>Hello React!</div>
        </div>
    );
}

/* Using ReactDOM library, we render react component on web page */
ReactDOM.render(<App />, document.querySelector('#app'));