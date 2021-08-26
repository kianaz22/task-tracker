import React from 'react'
import Task from './Task'
const FinishedTasks = ({ tasks, deleteTask }) => {

  return (
    <div className='category finished'>
      
      {tasks.filter(task => task.status === 'finished').map(task =>
        <Task task={task} deleteTask={deleteTask} key={task.id}/>)}
    </div>
  )
}
export default FinishedTasks
