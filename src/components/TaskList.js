import React from 'react'

function TaskLists({ taskLists, setTaskLists, setEditTask }) {

  const handleDelete = ({ id }) => {
    setTaskLists(taskLists.filter((task) => task.id !== id))
  }

  const handleComplete = (task) => {
    setTaskLists(
      taskLists.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const handleEdit = ({ id }) => {
    setEditTask(taskLists.find((task) => task.id === id))
  }

  return (
    <ul className='todo-list task-list'>
      {taskLists.map((task) => (
        <li key={task.id} className='todo-item task-item'>
          <div className='todo-input-wrap task-input'>
            <input
              className={`list ${task.completed ? 'task-complete' : 'todo-text'}`}
              value={task.title}
              onChange={(e) => e.preventDefault()}
            />
          </div>
          <div className='btn-task-action'>
            <button className='btn-todo-item btn-complete' onClick={() => handleComplete(task)}>
              <i className="fa-regular fa-circle-check"></i>
            </button>
            <button className='btn-todo-item btn-edit' onClick={() => handleEdit(task)}>
              <i className="fa-regular fa-edit"></i>
            </button>
            <button className='btn-todo-item btn-delete' onClick={() => handleDelete(task)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskLists