import React from 'react'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import AddTask from './AddTask'
import Task from './Task'

const Category = ({ category,tasks, addTask, changeStatus, deleteTask }) => {
    const [showForm, setShowForm] = useState(false)
    const toggleForm = () => {
      setShowForm(!showForm)
    }
    return (
      <div className={`category ${category}`}>
        {tasks.filter(task => task.status === category).map(task =>
          <Task task={task} status={category} deleteTask={deleteTask} changeStatus={changeStatus} key={task.id}/>)}
  
        {category==='open' && <button onClick={toggleForm} className='round'><span className='center'><FaPlus size={20} /></span></button>}
        {category==='open' && showForm && <AddTask addTask={addTask} hideForm={toggleForm} />}
        
      </div>
    )
}

export default Category
