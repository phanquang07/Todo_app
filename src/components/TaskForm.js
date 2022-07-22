import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ boardListId, taskInput, setTaskInput, taskLists, setTaskLists, editTask, setEditTask }) {

  const updateTask = (title, id, completed, boardListId) => {
    const newTask = taskLists.map((task) =>
      task.id === id ? { title, id, completed, boardListId } : task
    )
    setTaskLists(newTask)
    setEditTask('')
  }

  useEffect(() => {
    if (editTask) {
      setTaskInput(editTask.title)
    } else {
      setTaskInput('')
    }
  }, [setTaskInput, editTask])

  const addTask = (e) => {
    e.preventDefault()
    if (!editTask) {
      setTaskLists([{ id: uuidv4(), title: taskInput, completed: false, boardListId}, ...taskLists])
      setTaskInput('')
    } else {
      updateTask(taskInput, editTask.id, editTask.completed, editTask.boardListId)
    }
  }

  return (
    <form className='todo-form task-form'>
      <input
        type='text'
        placeholder='Add task...'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        required
      />
      <button
        className='btn-primary'
        type='submit'
        onClick={addTask}
      >
        {editTask ? 'Update' : 'Add'}
      </button>
    </form>
  )
}

export default TaskForm