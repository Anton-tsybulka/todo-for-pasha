import React from 'react'

import './Task.css'

const Task = ({text, done, doneTask, deleteTask}) => {

  const InputButton = () => {
    const but = !done ? <i onClick={doneTask} className="fa fa-hourglass-start" aria-hidden="true"></i> 
                      : <i onClick={deleteTask} className="fa fa-hourglass" aria-hidden="true"></i>
    return(
      <div className='action-btn'>
        {but}
      </div>
    )
  }

  let className = 'task ' + (done ? 'task-done' : '')

  return(
    <div className={className}>
      <p>{text}</p>
      <InputButton />
    </div>
  )
}

export default Task