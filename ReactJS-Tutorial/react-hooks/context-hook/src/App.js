import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";

export const userContext = React.createContext();
export const userTwoContext = React.createContext();

function App() {
    return <div className="App">
        <userContext.Provider value={"Kate"}>
            <userTwoContext.Provider value={"Jack"}>
                <ComponentA />
            </userTwoContext.Provider>
        </userContext.Provider>
    </div>;
}

export default App;
