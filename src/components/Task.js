import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

const Task = ({ task, deleteTask, selectTask, stoppedTask, finishedTask }) => {
    return (
        <div>
            <div className='task' key={task.id}>
                <h3>{task.text}</h3>
                <p className='details'>{task.details}</p>
                <div className='time'>
                    <FaCalendarAlt /> 
                    <p>{task.time}</p>
                </div>
                <div className='task-footer'>
                    {deleteTask && <button className='delete-btn' onClick={() => deleteTask(task.id)}>delete</button>}
                    {selectTask && <button className='select-btn' onClick={() => selectTask(task.id)}>select</button>}
                    {stoppedTask && <button className='stopped-btn' onClick={() => stoppedTask(task.id)}>stopped</button>}
                    {finishedTask && <button className='finished-btn' onClick={() => finishedTask(task.id)}>finished</button>}
                </div>
            </div>
        </div>
    )
}

export default Task
