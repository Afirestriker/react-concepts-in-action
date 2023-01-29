function Hello(props) {
    return (
        <div>Hello {props.name}!</div>
    );
}

function App() {
    return (
        <div>
            <br />
            <h3>React example #3 (using props)</h3>
            <Hello name="Kate"  />
            <Hello name="Jake"  />
            <Hello name="Tom"   />
            <Hello name="Jerry" />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#app3'));