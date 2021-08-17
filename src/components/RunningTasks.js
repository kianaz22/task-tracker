import React from 'react'
import Task from './Task'
const RunningTasks = ({ tasks, finishedTask, stoppedTask }) => {

  return (
    <div className='category runningTasks'>
      <div className='header'>
        <h1>Running Tasks</h1>
        <div className='number'>{tasks.filter(task=>task.status==='running').length}</div>
      </div>
      {tasks.length > 0 ? tasks.filter(task => task.status === 'running').map(task =>
        <Task task={task} finishedTask={finishedTask} stoppedTask={stoppedTask} />) : 'no running tasks'}
    </div>
  )
}
export default RunningTasks
