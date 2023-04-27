import './css/Form.css';
import {useState} from 'react';

const Form = (props) => {

    const [task, setTask] = useState('');

    function inputChange(e){
        setTask(e.target.value);
    }

    function taskSubmit(e){
        e.preventDefault();

        if(task.trim() === ''){
            alert('No task entered');
            return;
        }

        const newTask = task;
        props.onAddTask(newTask);
        setTask('');
    }

    return(
        <form className="form" onSubmit={taskSubmit}>
            <input onChange={inputChange} value={task} type="text" placeholder="Add new task"/>
            <button>Submit</button>
        </form>
    )
}

export default Form;