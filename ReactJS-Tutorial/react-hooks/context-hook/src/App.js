import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";

export const userContext = React.createContext();

function App() {
    return <div className="App">
        <userContext.Provider value={"Kate"}>
            <ComponentA />
        </userContext.Provider>
    </div>;
}

export default App;
