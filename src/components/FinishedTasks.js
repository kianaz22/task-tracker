import React from 'react'
import Task from './Task'
const FinishedTasks = ({ tasks, deleteTask }) => {

  return (
    <div className='category finishedTasks'>
      <div className='header'>
        <h1>Finished Tasks</h1>
        <div className='number'>{tasks.filter(task=>task.status==='finished').length}</div>
      </div>
      {tasks.length > 0 ? tasks.filter(task => task.status === 'finished').map(task =>
        <Task task={task} deleteTask={deleteTask} />) : 'no finished tasks'}
    </div>
  )
}
export default FinishedTasks
