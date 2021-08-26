import React from 'react'
import Task from './Task'
const RunningTasks = ({ tasks, finishedTask, stoppedTask }) => {

  return (
    <div className='category running'>
      
      {tasks.filter(task => task.status === 'running').map(task =>
        <Task task={task} finishedTask={finishedTask} stoppedTask={stoppedTask} key={task.id}/>)}
    </div>
  )
}
export default RunningTasks
