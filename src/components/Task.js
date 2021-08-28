import React from 'react'
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa'

const Task = ({ task, deleteTask, changeStatus,status }) => {
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
                    {status==='open' && <button className='select-btn' onClick={() => changeStatus(task.id,'running')}>select&nbsp;<FaArrowRight /></button>}
                    {status==='running' && <button className='stopped-btn' onClick={() => changeStatus(task.id,'open')}><FaArrowLeft />&nbsp;stopped</button>}
                    {status==='running' && <button className='finished-btn' onClick={() => changeStatus(task.id,'finished')}>finished&nbsp;<FaArrowRight /></button>}
                </div>
            </div>
        </div>
    )
}

export default Task
