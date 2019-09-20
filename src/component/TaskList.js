import React from 'react'
import Task from "./Task";

const TaskList = props => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    const activeTasks = active.map(task => <Task key={task.id}
                                                task={task}
                                                delete={props.delete}
                                                change={props.change}/>);
    const doneTasks = done.map(task => <Task key={task.id}
                                                task={task}
                                                delete={props.delete}
                                                change={props.change}/>);

    return (
        <>
            <div className='active'>
                <h1>Task to be done</h1>
                {activeTasks.length > 0 ? activeTasks : <p>You have nothing to do</p>}
            </div>

            < hr/>
            <div className='done'>
                <h3>Task done <em>({doneTasks.length})</em></h3>
                {doneTasks.length > 5 && <span style={{fontSize: 10}}>Only the last 5 tasks are displayed</span>}
                {doneTasks.slice(0,5)}
            </div>

        </>
    )
};

export default TaskList;