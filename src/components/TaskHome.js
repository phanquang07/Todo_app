import React from 'react'
import { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import TaskForm from './TaskForm'
import TaskLists from './TaskList'


function TaskHome() {
   // Lấy dữ liệu ra từ datastore
  const initialState = JSON.parse(localStorage.getItem('taskLists')) || []
  const [taskInput, setTaskInput] = useState('')
  const [taskLists, setTaskLists] = useState(initialState)
  const [editTask, setEditTask] = useState(null)

  useEffect(() => {
    localStorage.setItem('taskLists', JSON.stringify(taskLists))
  }, [taskLists])

  // async function fetchData() {
  //   let url = "http://localhost:3000/board/"+ this.$route.boarList.id
  //   try {
  //     const result = await axios.get(url)
  //     console.log(result.data);
  //     console.log('abcs');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  return (
    <div className='todo-home task-home'>
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