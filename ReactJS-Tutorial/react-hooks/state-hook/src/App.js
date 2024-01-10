import logo from "./logo.svg";
import "./App.css";
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from './components/HookCounterFour';
import HookCounterFive from "./components/HookCounterFive";

function App() {
    return (
        <div className="App">
            <HookCounterFive />
            {/* <HookCounterFour /> */}
            {/* <HookCounterThree /> */}
            {/* <HookCounterTwo /> */}
            {/* <HookCounter /> */}
            {/* <ClassCounter /> */}
        </div>
    );
}

export default App;
