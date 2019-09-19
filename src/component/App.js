import React, {Component} from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
    render() {
        return (
            <div className="App">
                TODO APP
                <AddTask/>
                <TaskList/>
            </div>
        );
    }
}

export default App;
