import { useState } from "react"
import { FaPen } from 'react-icons/fa'
import { BsFillCaretRightFill } from 'react-icons/bs'
const AddTask = ({ addTask, hideForm }) => {

    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [details, setDetails] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('please add a task')
        }
        else if (!time) {
            alert('please add a time')
        }
        else {
            hideForm()
            addTask(text, details, time)
            setText('')
            setTime('')
            setDetails('')
        }
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div>
                <FaPen size={15} color={'rgb(40,40,40)'}/>
                <input type='text' placeholder='New Task' value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div>
                <FaPen size={15} color={'rgb(40,40,40)'}/>
                <input type='text' placeholder='Details' value={details} onChange={e => setDetails(e.target.value)} />
            </div>
            <div>
                <FaPen size={15} color={'rgb(40,40,40)'}/>
                <input type='text' placeholder='Time' value={time} onChange={e => setTime(e.target.value)} />
            </div>
            <button type='submit'>CREATE <BsFillCaretRightFill /></button>
        </form>
    )
}

export default AddTask
