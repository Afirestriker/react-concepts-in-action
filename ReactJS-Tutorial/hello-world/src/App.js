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
import Form from "./components/Form";
import LifeCycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundar";
import ClickCounter from './components/ClickCounter';
import HoverCounter from "./components/HoverCounter";

function App() {
    return (
        <div className="App">
            {/* //* 📌Hight Order Component */}
            <ClickCounter name="Jack" />
            <HoverCounter />

            {/* //* 📌Error Boundary */}
            {/* <ErrorBoundary>
                <Hero heroName='Batman' />
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName='Superman' />
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName='Jocker' />
            </ErrorBoundary> */}

            {/* //* 📌Portals */}
            {/* <PortalDemo /> */}

            {/* //* 📌Forwarding Refs */}
            {/* <FRParentInput /> */}

            {/* //* 📌Refs in React */}
            {/* <FocusInput /> */}
            {/* <RefsDemo /> */}

            {/* //* 📌PureComponent */}
            {/* <ParentComp /> */}
            {/* <PureComp /> */}

            {/* //* 📌Fragments */}
            {/* <Table /> */}
            {/* <FragmentDemo /> */}

            {/* //* 📌Component lifecycle methods */}
            {/* <LifeCycleA /> */}

            {/* //* 📌Basics of form handling */}
            {/* <Form /> */}

            {/* //* 📌Styling in CSS */}
            {/* <h1 className='error'>Error</h1> */}
            {/* <h1 className={styles.success}>Success</h1> */}
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

            <div desc="This div is in App component" style={{"marginTop": "20px", "color": "lightcoral"}}>
                NOTE: In console logs you might see each log messages appearing twice.
                This is because the <strong>&lt;App /&gt;</strong> component is wrapped by
                the <strong>&lt;React.StrictMode /&gt;</strong> compoent in the <strong>index.js</strong> file.
            </div>
        </div>
    );
}

export default App;
