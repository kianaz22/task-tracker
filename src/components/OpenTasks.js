import React from 'react'
import { useState } from 'react'
import AddTask from './AddTask'
import Task from './Task'

const OpenTasks = ({ tasks, addTask, selectTask, deleteTask }) => {
  const [showForm, setShowForm] = useState(false)
  const toggleForm = () => {
    setShowForm(!showForm)
  }
  console.log(tasks)
  return (
    <div className='category openTasks'>
      <div className='header'>
        <h1>Open Tasks</h1>
        <div className='number'>{tasks.filter(task=>task.status==='open').length}</div>
      </div>
      {tasks.length > 0 ? tasks.filter(task => task.status === 'open').map(task =>
        <Task task={task} deleteTask={deleteTask} selectTask={selectTask} />) : 'no open tasks'}

      <button onClick={toggleForm} className='btn round'>+</button>
      {showForm && <AddTask addTask={addTask} hideForm={toggleForm} />}
    </div>
  )
}
export default OpenTasks

