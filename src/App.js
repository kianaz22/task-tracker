import { useState, useEffect } from 'react'
import { HiLightBulb } from 'react-icons/hi'
import { BsFillGearFill } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'

import Tabs from "./components/Tabs"
import Tab from "./components/Tab"
import Header from './components/Header'
import TabHeader from './components/TabHeader'
import Category from './components/Category'
const defaultTasks = [
{id: 1, text: 'Site configuration', details: 'Configure the site on the internal clients production environment',time: 'Jan 4th', status: 'open'}, 
{ id: 2, text: 'New feature', details: 'Add the pop-up promotion feature', time: 'Jan 15th', status: 'open' },
{ id: 3, text: 'release the beta version ', details: 'to selected internal users', time: 'Jan 1st', status: 'open' },
{ id: 4, text: 'Verification', details: 'Verify the expected response times', time: 'Feb 2nd', status: 'running' },
{ id: 5, text: 'Verification', details: 'Verify the quote for the next story', time: 'Dec 28th', status: 'finished' },
{ id: 6, text: 'Structure set up', details: 'Set up the initial structure of the sites first page', time: 'Dec 20th', status: 'finished' },
{ id: 7, text: 'Approval', details: 'Receive the internal clients approval for the structure', time: 'Feb 11th', status: 'running' },
{ id: 8, text: 'Report', details: 'Code the reports generated by the site related transactions', time: 'Dec 15th', status: 'finished' }
]

function App() {
  const [tasks, setTasks] = useState(defaultTasks)

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('storedTasks')) || [];

    if (storedTasks.length>0) {
      setTasks(storedTasks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('storedTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, details, time) => {
    const id = Math.floor(Math.random() * 5000)
    const newTask = { id, text, details, time, status: 'open' }
    setTasks(tasks => [...tasks, newTask])
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const changeStatus = (id,newStatus) => {
    setTasks(tasks.map(task => {
      if (task.id === id)
        task.status = newStatus;
      return task;
    }))
  }

  const getLength = (category) => {
    return tasks.filter(task => task.status === category).length
  }
  return (
    <div>
      <div className="large-visible">
        <div>
          <Header category='open' getLength={getLength} icon={<HiLightBulb size={18} />} />
          <Category category='open' tasks={tasks} addTask={addTask} changeStatus={changeStatus} deleteTask={deleteTask} />
        </div>
        <div>
          <Header category='running' getLength={getLength} icon={<BsFillGearFill size={16} />} />
          <Category category='running' tasks={tasks} changeStatus={changeStatus} />
        </div>
        <div>
          <Header category='finished' getLength={getLength} icon={<AiFillCheckCircle size={18} />} />
          <Category category='finished' tasks={tasks} deleteTask={deleteTask} changeStatus={changeStatus} />
        </div>
      </div>

      <div className='small-visible'>
        <Tabs>
          <Tab value="1" header={<TabHeader icon={<HiLightBulb />} category='open' getLength={getLength} />}>
          <Category category='open' tasks={tasks} addTask={addTask} changeStatus={changeStatus} deleteTask={deleteTask} />
          </Tab>
          <Tab value="2" header={<TabHeader icon={<BsFillGearFill />} category='running' getLength={getLength} />}>
          <Category category='running' tasks={tasks} changeStatus={changeStatus} />
          </Tab>
          <Tab value="3" header={<TabHeader icon={<AiFillCheckCircle size={18} />} category='finished' getLength={getLength} />}>
          <Category category='finished' tasks={tasks} deleteTask={deleteTask} />
          </Tab>
        </Tabs>
      </div>

    </div>


  );
}

export default App;
