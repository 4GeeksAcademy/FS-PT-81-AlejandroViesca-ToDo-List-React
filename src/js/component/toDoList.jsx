import React, { useState } from "react";

const List = () => {

    const [tasks, setTasks] = useState('');
    const [tasksList, setTasksList] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setTasksList([...tasksList, tasks]);
        setTasks('');
    };

    const handleChange = e => { setTasks(e.target.value) };

    const handleDelete = (index) => {
        setTasksList(tasksList.filter((el, i) => i != index))
    }

    return (
        <div className="toDoList__container">

            <label className="toDoList__label fs-5">ToDo List</label>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="TYPE HERE"
                    className="toDoList__input"
                    type="tasks"
                    value={tasks}
                    onChange={handleChange}
                />

                <input
                    type="submit"
                    value="Add"
                    className="toDoList__input toDoList__input--button"
                />
            </form>

            <div className="toDoList__label toDoList__label--list p-3 pb-1 ps-4">
                <label className="mb-3">TASKS LIST:</label>
                <ul className="p-0 me-2">
                    {tasksList.length > 0
                        ? tasksList.map((tasks, i) =>
                            <li className="my-2 d-flex justify-content-between" key={i}>
                                <span className="toDoList__label--white">{tasks}</span>
                                <span className="toDoList__deleteIcon ms-4" onClick={() => handleDelete(i)}>
                                    <i className="fa-regular fa-trash-can"></i>
                                </span>
                            </li>)
                        : <li className="toDoList__label--white">Add some tasks</li>
                    }
                </ul>                
                <hr />
                <p className="m-0">{tasksList.length} tasks</p>
            </div>

        </div>
    );
};

export default List;