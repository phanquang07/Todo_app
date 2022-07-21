import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import TaskForm from './TaskForm'
import TaskLists from './TaskList'
// import { useParams } from "react-router-dom"

function TaskHome() {

  // Lấy dữ liệu ra từ datastore
  const initialState = JSON.parse(localStorage.getItem('taskLists')) || []
  const [taskInput, setTaskInput] = useState('')
  const [taskLists, setTaskLists] = useState(initialState)
  const [editTask, setEditTask] = useState(null)

  useEffect(() => {
    localStorage.setItem('taskLists', JSON.stringify(taskLists))
  }, [taskLists])

  // useEffect(() => fetchData() ,[] )

  // const { boardListId } = useParams()
  // const thisTask = TaskHome.find(item => prod.id === boardListId)

  return (
    <div className='todo-home task-home'>
      <NavBar />
      <div className='container'>
        <div className='todo-content'>
          <TaskForm
            taskInput={taskInput}
            setTaskInput={setTaskInput}
            taskLists={taskLists}
            setTaskLists={setTaskLists}
            editTask={editTask}
            setEditTask={setEditTask}
          />
          <TaskLists
            taskLists={taskLists}
            setTaskLists={setTaskLists}
            setEditTask={setEditTask}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskHome