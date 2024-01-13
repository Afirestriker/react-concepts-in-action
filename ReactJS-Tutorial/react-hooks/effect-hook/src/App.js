import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterTwo from "./components/HookCounterTwo";
import ClassMouse from "./components/ClassMouse";

function App() {
    return <div className="App">
        Effect-Hook
        <ClassMouse />
        {/* <HookCounterTwo /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}
    </div>;
}

export default App;
