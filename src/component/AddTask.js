import React, {Component} from 'react'
import './AddTask.css'

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.minDate
    };

    handleDate = e => {
        this.setState({
            date: e.target.value
        })
    };

    render() {
        let maxDate = Number(this.minDate.slice(0, 4)) + 1;
        maxDate = maxDate + '-12-31';

        return (
            <div className='form'>
                <input type='text' placeholder='add task' value={this.state.text}/>
                <input type='checkbox' checked={this.state.checked}/>
                <label htmlFor='important'>Priority</label>
                <br/>
                <label htmlFor='date'>Until when to do</label>
                <input type='date' value={this.state.date} min={this.minDate} max={maxDate}
                       onChange={this.handleDate}/>
                <br/>
                <button>Add task</button>
            </div>
        )
    }
}

export default AddTask;