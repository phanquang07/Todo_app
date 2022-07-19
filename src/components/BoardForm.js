import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function BoardForm({ boardInput, setBoardInput, boardLists, setBoardLists, editBoard, setEditBoard }) {

  const updateBoard = (title, id) => {
    const newBoard = boardLists.map((boardList) =>
      boardList.id === id ? { title, id } : boardList
    )
    setBoardLists(newBoard)
    setEditBoard('')
  }

  useEffect(() => {
    if (editBoard) {
      setBoardInput(editBoard.title)
    } else {
      setBoardInput('')
    }
  }, [setBoardInput, editBoard])

  const addBoard = (e) => {
    e.preventDefault()
    if (!editBoard) {
      setBoardLists([...boardLists, { id: uuidv4(), title: boardInput }])
      setBoardInput('')
    } else {
      updateBoard(boardInput, editBoard.id)
    }
  }

  return (
    <form className='todo-form board-form'>
      <input
        type='text'
        placeholder='Add board...'
        value={boardInput}
        onChange={(e) => setBoardInput(e.target.value)}
        required
      />
      <button type='submit'
        onClick={addBoard}
        className='btn-primary'>
        {editBoard ? 'Update' : 'Add'}
      </button>
    </form>
  )
}

export default BoardForm