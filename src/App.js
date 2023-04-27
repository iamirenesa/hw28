import './App.css';
import Form from "./components/Form";
import List from "./components/List";
import {useState} from 'react';

function App() {
    const[tasks, setTasks] = useState([]);
    function addTask(newTask){
        setTasks([...tasks, newTask]);
    }
    return (
        <div className="App">
            <List todo={tasks}></List>
            <Form onAddTask={addTask}></Form>
        </div>
    );
}

export default App;
