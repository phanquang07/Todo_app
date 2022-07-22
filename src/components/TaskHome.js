import React, {  useMemo } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import TaskForm from './TaskForm'
import TaskLists from './TaskList'

function TaskHome(boardLists) {

  const initialState = useMemo(()=> JSON.parse(localStorage.getItem('taskLists')) || [],[])
  const [taskInput, setTaskInput] = useState('')
  const [taskLists, setTaskLists] = useState(initialState)
  const [editTask, setEditTask] = useState(null)

  const {boardListId} = useParams()
  const thisTask = taskLists.filter(item=>item.boardListId===boardListId)

  useEffect(() => {
    localStorage.setItem('taskLists', JSON.stringify(taskLists))
  }, [taskLists])

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
            boardListId={boardListId}
          />
          <TaskLists
            taskLists={boardListId && thisTask}
            setTaskLists={setTaskLists}
            setEditTask={setEditTask}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskHome