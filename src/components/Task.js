import React from 'react'
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa'

const Task = ({ task, deleteTask, selectTask, stoppedTask, finishedTask }) => {
    return (
        <div>
            <div className='task'>
                <h3>{task.text}</h3>
                <p className='details'>{task.details}</p>
                <div className='time'>
                    <FaCalendarAlt /> 
                    <p>{task.time}</p>
                </div>
                <div className='task-footer'>
                    {deleteTask && <button className='delete-btn' onClick={() => deleteTask(task.id)}>delete</button>}
                    {selectTask && <button className='select-btn' onClick={() => selectTask(task.id)}>select&nbsp;<FaArrowRight /></button>}
                    {stoppedTask && <button className='stopped-btn' onClick={() => stoppedTask(task.id)}><FaArrowLeft />&nbsp;stopped</button>}
                    {finishedTask && <button className='finished-btn' onClick={() => finishedTask(task.id)}>finished&nbsp;<FaArrowRight /></button>}
                </div>
            </div>
        </div>
    )
}

export default Task
