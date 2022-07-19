import React from 'react'
import { Link } from 'react-router-dom'
import TaskHome from './TaskHome'
import TaskLists from './TaskList'

function BoardLists({ boardLists, setBoardLists, setEditBoard }) {

  const handleDelete = ({ id }) => {
    setBoardLists(boardLists.filter((boardList) => boardList.id !== id))
  }

  const handleEdit = ({ id }) => {
    setEditBoard(boardLists.find((boardList) => boardList.id === id))
  }

  // const boardLists = useSele
  const sortBoard = [...boardLists]
  sortBoard.sort((a, b) => new Date(b.time) - new Date(a.time))

  return (
    <ol className='todo-list board-list'>
      {sortBoard && sortBoard.length > 0 ? boardLists.map((boardList) => (
        <li key={boardList.id} className='todo-item board-item'>
          <Link to={`/board/${boardList.id}`} className='todo-link board-link todo-text' onChange={(e) => e.preventDefault()}>
            {boardList.title}
          </Link>
          <div className='btn-board-action'>
            <button type='submit' className='btn btn-link btn-todo-item btn-edit' onClick={() => handleEdit(boardList)}>
              Edit
            </button>
            <button type='submit' className='btn btn-link btn-todo-item btn-delete' onClick={() => handleDelete(boardList)}>
              Delete
            </button>
          </div>
        </li>
      )) : 'No board'}
    </ol >
  )
}

export default BoardLists