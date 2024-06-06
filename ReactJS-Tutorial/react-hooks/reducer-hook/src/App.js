import "./App.css";

import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import CounterFour from "./components/CounterFour";
import DataFetchningOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";

function App() {
    return (
        <div className="App">
            {/* <CounterOne /> */}
            {/* <CounterTwo /> */}
            {/* <CounterThree /> */}
            {/* <CounterFour /> */}
            <DataFetchningOne />
            <DataFetchingTwo />
        </div>
    );
}

export default App;
