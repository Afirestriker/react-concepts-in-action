import "./App.css";
import React from 'react';
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";

function App() {
    return <div className="App App-header">
        {/* <FocusInput /> */}
        <ClassTimer />
        <HookTimer />
    </div>;
}

export default App;
