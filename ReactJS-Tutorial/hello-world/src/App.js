//import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Counter />

            {/* <Message /> */}

            {/** Functional Component */}
            {/*
                <Greet name="Mike" heroName="Superman">
                    <p>This is children props</p>
                </Greet>
                <Greet name="Kate" heroName="Batman">
                    <button>Action</button>
                </Greet>
                <Greet name="Diana" heroName="Wonder Woman"/>
            */}

            {/** Class component */}
            {/*
                <Welcome name="Mike" heroName="Superman" />
                <Welcome name="Kate" heroName="Batman" />
                <Welcome name="Diana" heroName="Wonder Woman"/>
            */}

            {/* <Hello /> */}
        </div>
    );
}

export default App;
