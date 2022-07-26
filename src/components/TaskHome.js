import React, { useMemo } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import TaskForm from './TaskForm'
import TaskLists from './TaskList'

function TaskHome() {
  const initialState = useMemo(() => JSON.parse(localStorage.getItem('taskLists')) || [], [])
  const [taskInput, setTaskInput] = useState('')
  const [taskLists, setTaskLists] = useState(initialState)
  const [editTask, setEditTask] = useState('')

  const { boardListId } = useParams()
  const thisTask =  useMemo(() => taskLists.filter((item) => item.boardListId === boardListId), [taskLists, boardListId])

  const handleEdit = ({ id }) => {
    setEditTask(taskLists.find((taskList) => taskList.id === id))
  }

  const handleComplete = (taskList) => {
    setTaskLists(
      taskLists.map((item) => {
        if (item.id === taskList.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const handleDelete = ({ id }) => {
    setTaskLists(taskLists.filter((taskList) => taskList.id !== id))
  }

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
            taskLists={thisTask}
            setTaskLists={setTaskLists}
            setEditTask={setEditTask}
            onDelete={handleDelete}
            onComplete={handleComplete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskHome