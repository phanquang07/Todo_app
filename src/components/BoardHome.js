import React, { useEffect } from 'react'
import { useState } from 'react'
import BoardForm from './BoardForm'
import BoardList from './BoardLists'
import TaskLists from './TaskList'

function BoardHome() {
  // Lấy dữ liệu ra từ datastore
  const initialState = JSON.parse(localStorage.getItem('boardLists')) || []
  const [boardInput, setBoardInput] = useState('')
  const [boardLists, setBoardLists] = useState(initialState)
  const [editBoard, setEditBoard] = useState(null)

  useEffect(() => {
    localStorage.setItem('boardLists', JSON.stringify(boardLists))
  }, [boardLists])

  return (
    <div className='todo-home board-home'>
      <div className='container'>
        <div className='board-home-contents'>
          <BoardForm
            boardInput={boardInput}
            setBoardInput={setBoardInput}
            boardLists={boardLists}
            setBoardLists={setBoardLists}
            editBoard={editBoard}
            setEditBoard={setEditBoard}
          />
          <BoardList
            boardLists={boardLists}
            setBoardLists={setBoardLists}
            setEditBoard={setEditBoard}
          />
        </div>
      </div>
    </div>
  )
}

export default BoardHome