import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
    return (
        <div>
            <h1 className="mb-4 text-4xl font-medium leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Learn about redux toolkit
            </h1>
            <AddTodo />
            <Todos />
        </div>
    );
}

export default App;
