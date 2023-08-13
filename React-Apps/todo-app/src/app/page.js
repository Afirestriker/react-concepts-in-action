"use client";

import React, { useState } from "react";
import style from "./style.module.css";

const todoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    return (
        <div className={style.container}>
            <h1 className={style.h1}>ToDo List App</h1>
            <input type="text" className={style.input} placeholder="Enter Next Task" value={newTask} onChange={(eve) => {setNewTask(eve.target.value);}}/>
            <button className={style.button} onClick={addTask}>Add Task</button>
            <ul className={style.ul}>
                {tasks.map((taskName, index) => {
                    return <li key={index} className={style.li}>{taskName}</li>;
                })}
            </ul>
        </div>
    );
};

export default todoApp;