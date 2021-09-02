import React,{ useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCalendarAlt } from 'react-icons/fa'

const Task = ({ task, deleteTask, changeStatus,status }) => {
    const [details, setDetails] = useState(true)
    const toggleDetails = () => {
        setDetails(!details)
    }
    return (
            <div className='task'>
                <h3 onClick={toggleDetails}>{task.text}</h3>
                {details && <p className='details'>{task.details}</p>}
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
    )
}

export default Task
