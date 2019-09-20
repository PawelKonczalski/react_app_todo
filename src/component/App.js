import React, {Component} from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
    state = {
        tasks: [
            {
                id: 1,
                text: "make a good deed",
                date: '2020-11-12',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 2,
                text: "paint the house after new year's eve",
                date: '2019-09-11',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 3,
                text: "lose weight 30 kilograms",
                date: '2019-05-20',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 4,
                text: "sell beer bottles (20 boxes)",
                date: '2020-11-12',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 5,
                text: "paint the house again",
                date: '2019-09-11',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 6,
                text: "hairdresser!!!",
                date: '2019-05-20',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 7,
                text: "do not receive a registered bailiff",
                date: '2020-11-12',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 8,
                text: "buy 2 liter bottles",
                date: '2019-09-11',
                important: false,
                active: true,
                finishDate: null
            },
        ]
    };

    deleteTask = id => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);
        this.setState({
            tasks
        })

    };

    changeTaskStatus = id => {
        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime()
            }
        });
        this.setState({
            tasks,
        });
    };

    render() {
        return (
            <div className="App">
                TODO APP
                <AddTask/>
                <TaskList tasks={this.state.tasks} delete={this.deleteTask}
                          change={this.changeTaskStatus}/>
            </div>
        );
    }
}

export default App;
