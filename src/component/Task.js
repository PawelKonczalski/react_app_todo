import React from 'react'

const Task = props => {

    const style = {
        color: 'red'
    };
    const {text, date, id, active, important, finishDate} = props.task;

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> -
                    to <span>{date} </span>
                    <button onClick={() => props.change(id)}>It was done</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    } else {

        const finish = new Date(finishDate).toLocaleTimeString();

        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> <em>(perform
                    to: {date})</em>
                    <br/>- confirmation of performance <span>{finish}</span>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
};

export default Task;