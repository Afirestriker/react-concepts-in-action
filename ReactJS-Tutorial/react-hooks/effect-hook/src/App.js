import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterTwo from "./components/HookCounterTwo";

function App() {
    return <div className="App">
        Effect-Hook
        <HookCounterTwo />
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}
    </div>;
}

export default App;
