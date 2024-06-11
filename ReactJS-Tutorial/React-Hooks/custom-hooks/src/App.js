import "./App.css";
import React from 'react';
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

function App() {
    return <div className="App App-header">
        Custom Hooks
        {/* <DocTitleOne /> */}
        {/* <DocTitleTwo /> */}
        <CounterOne />
        <CounterTwo />
    </div>;
}

export default App;
