import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";

function App() {
    return <div className="App">
        Effect-Hook
        <HookCounterOne />
        {/* <ClassCounterOne /> */}
    </div>;
}

export default App;
