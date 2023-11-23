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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from "./components/PersonList";
import Stylesheet from "./components/Stylesheet";
import InlineStyling from "./components/InlineStyling";
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
    return (
        <div className="App">


            {/* //* 📌Styling in CSS */}
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
            {/* <Stylesheet primary={true} /> */}
            {/* <InlineStyling /> */}

            {/* //* 📌List Rendering */}
            {/* <PersonList /> */}
            {/* <NameList /> */}

            {/* //* 📌Conditional Rendering */}
            {/* <UserGreeting /> */}

            {/* //* 📌Pass Method as props */}
            {/* <ParentComponent /> */}

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
