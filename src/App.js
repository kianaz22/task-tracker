import { useState } from 'react'
import { useEffect } from 'react'
import OpenTasks from './components/OpenTasks'
import RunningTasks from './components/RunningTasks'
import FinishedTasks from './components/FinishedTasks'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('storedTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, details, time) => {
    console.log('appAddTask',text)
    const id = Math.floor(Math.random() * 5000)
    const newTask = { id, text, details, time, status: 'open' }
    setTasks(tasks => [...tasks, newTask])
  }
  const deleteTask = (id) => {
    console.log('deleteTask',id)
    setTasks(tasks.filter(task => task.id !== id))
  }
  const selectTask = (id) => {
    console.log('selectTask',id)
    setTasks(tasks.map(task => {
      if (task.id === id)
        task.status = 'running';
      return task;
    }))
  }
  const stoppedTask = (id) => {
    console.log('stoppedTask',id)
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        task.status = 'open';
      return task;
    }))
  }
  const finishedTask = (id) => {
    console.log('finishedTask',id)
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        task.status = 'finished';
      return task;
    }))
  }

  return (
    <div className="app">
      
      <div className='categories'>
        <OpenTasks tasks={tasks} addTask={addTask} selectTask={selectTask} deleteTask={deleteTask} />
        <RunningTasks tasks={tasks} finishedTask={finishedTask} stoppedTask={stoppedTask}/>
        <FinishedTasks tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
