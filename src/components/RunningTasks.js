import React from 'react'
import Task from './Task'
const RunningTasks = ({ tasks, changeStatus }) => {

  return (
    <div className='category running'>
      
      {tasks.filter(task => task.status === 'running').map(task =>
        <Task task={task} status='running' changeStatus={changeStatus} key={task.id}/>)}
    </div>
  )
}
export default RunningTasks
