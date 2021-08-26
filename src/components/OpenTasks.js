import React from 'react'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import AddTask from './AddTask'
import Task from './Task'

const OpenTasks = ({ tasks, addTask, selectTask, deleteTask }) => {
  const [showForm, setShowForm] = useState(false)
  const toggleForm = () => {
    setShowForm(!showForm)
  }
  return (
    <div className='category open'>
      {tasks.filter(task => task.status === 'open').map(task =>
        <Task task={task} deleteTask={deleteTask} selectTask={selectTask} key={task.id}/>)}

      <button onClick={toggleForm} className='round'><span className='center'><FaPlus size={20} /></span></button>
      {showForm && <AddTask addTask={addTask} hideForm={toggleForm} />}
    </div>
  )
}
export default OpenTasks

