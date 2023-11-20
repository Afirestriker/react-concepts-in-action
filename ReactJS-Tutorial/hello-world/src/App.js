//import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from './components/ParentComponent';

function App() {
    return (
        <div className="App">

            <ParentComponent />

            {/* //* 📌Binding Event Handlers */}
            {/* <EventBind /> */}

            {/* //* 📌Event Handling */}
            {/* <FunctionClick /> */}
            {/* <ClassClick /> */}

            {/* //* 📌setState with prevState and callback */}
            {/* <Counter /> */}

            {/* // * 📌State and setState */}
            {/* <Message /> */}

            {/* // * 📌Functional Components */}
            {/* <Greet name="Mike" heroName="Superman"> <p>This is children props</p> </Greet> */}
            {/* <Greet name="Kate" heroName="Batman"> <button>Action</button> </Greet> */}
            {/* <Greet name="Diana" heroName="Wonder Woman"/> */}

            {/* // * 📌Class Components */}
            {/* <Welcome name="Mike" heroName="Superman" /> */}
            {/* <Welcome name="Kate" heroName="Batman" /> */}
            {/* <Welcome name="Diana" heroName="Wonder Woman"/> */}

            {/* <Hello /> */}
        </div>
    );
}

export default App;
