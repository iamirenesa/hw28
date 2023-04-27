import './css/List.css';
import {useState} from 'react';

const List = (props) => {

    const [isTaskInactive, setIsTaskInactive] = useState(props.todo.map(() => false));

    function changeStatus(index) {
        setIsTaskInactive((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    }

    return (
        <ul className="list">
            {props.todo.length === 0 && <p className="alert">No tasks yet.</p>}
            {props.todo.length > 0 && props.todo.map((task, index) => (
                    <li
                        className={isTaskInactive[index] ? "inactive" : "list_item"}
                        onClick={() => changeStatus(index)}
                        key={Math.random()}
                    >
                        {task}
                    </li>
                ))}
        </ul>
    );
};

export default List;