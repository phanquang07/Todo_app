import React from 'react'

function TaskLists({ taskLists, onDelete, onComplete, onEdit }) {

  return (
    <ul className='todo-list task-list'>
      {taskLists.length > 0 ? taskLists.map((taskList) => (
        <li key={taskList.id} className='todo-item task-item'>
          <div className='todo-input-wrap task-input'>
            <input
              className={`list ${taskList.completed ? 'task-complete' : 'todo-text'}`}
              value={taskList.title}
              onChange={(e) => e.preventDefault()}
            />
          </div>
          <div className='btn-task-action'>
            <button className='btn-todo-item btn-complete' onClick={() => onComplete(taskList)}>
              <i className="fa-regular fa-circle-check"></i>
            </button>
            <button className='btn-todo-item btn-edit' onClick={() => onEdit(taskList)}>
              <i className="fa-regular fa-edit"></i>
            </button>
            <button className='btn-todo-item btn-delete' onClick={() => onDelete(taskList)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </li>
      )) : 'No Task...'}
    </ul>
  )
}

export default TaskLists

// *daily tìm hiểu useMemo, fix