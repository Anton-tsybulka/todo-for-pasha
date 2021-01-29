import React, { Component } from 'react'

import Task from '../Task/Task'
import TaskInput from '../TaskInput/TaskInput'

import './App.css'

export default class App extends Component {
  
  ind = 100

  state = {
    tasks: [
      this.addItem('Create App'),
      this.addItem('Add App'),
      this.addItem('Done App')
    ]
  }

  addItem(text) {
    return {
      id: this.ind++,
      text,
      done: false
    }
  }

  addTask = text => {
    this.setState(({tasks}) => {
      return{tasks: [...tasks, this.addItem(text)]}
    })
  }

  doneTask = id => {
    const indEl = this.state.tasks.findIndex(item => item.id === id)
    this.setState((state) => {
      let tasks = this.state.tasks
      tasks[indEl].done = !tasks[indEl].done

      return tasks
    })
  }

  deleteTask = id => {
    this.setState(({tasks}) => {
      return{tasks: [...tasks.filter(item => item.id !== id)]}
    })
  }

  render() {
    const {tasks} = this.state,
           activeTasks = tasks.filter(({done}) => !done),
           doneTasks = tasks.filter(({done}) => done),
           task = [...activeTasks, ...doneTasks].map(({id, text, done}) => {
             return(
               <Task key={id}
                     text={text}
                     done={done}
                     doneTask={() => this.doneTask(id)}
                     deleteTask={() => this.deleteTask(id)} />
             )
           })
           
    return(
      <div className='App'>
        <h1 className='top'>Todo List {tasks.length}</h1>
        {task}
        <TaskInput addTask={this.addTask}/>
      </div>
    )
  }
}