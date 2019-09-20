import React, {Component} from 'react'
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: '2019-09-20'
    };

    render() {
        return (
            <div className='form'>
                <input type='text' placeholder='add task' value={this.state.text}/>
                <input type='checkbox'  checked={this.state.checked}/>
                <br/>
                <label htmlFor='important'>Priority</label>
                <label htmlFor='date'>Until when to do</label>
                <input type='date' value={this.state.date} min='2019-01-01' max='2020-12-31'/>
                <br/>
                <button>Add task</button>
            </div>
        )
    }
}

export default AddTask;