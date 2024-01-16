import logo from "./logo.svg";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterTwo from "./components/HookCounterTwo";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import DataFetchingTwo from "./components/DataFetchingTwo";

function App() {
    return <div className="App">
        Effect-Hook
        <DataFetchingTwo />
        {/* <DataFetching /> */}
        {/* <IntervalHookCounter /> */}
        {/* <IntervalClassCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}
    </div>;
}

export default App;
