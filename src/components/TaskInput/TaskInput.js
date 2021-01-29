import React, { Component } from 'react'

import './TaskInput.css'

export default class TaskInput extends Component {

  state = {
    text: ''
  }

  addTask = () =>{
    const {text} = this.state

    if (text) {
      this.props.addTask(text)
      this.setState({text: ''})      
    }
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onKeyPress = e => {
    if (e.key === 'Enter') this.addTask()
  }

  render() {
    return(
      <div className='task-input'>
        <input onChange={this.onChange} 
               onKeyPress={this.onKeyPress}
               value={this.state.text}
               placeholder='New task' />
        <button onClick={this.addTask} >Add</button>
      </div>
    )
  }
}