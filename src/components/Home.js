import React from 'react'
import TaskHome from './TaskHome'
import BoardHome from './BoardHome'
import NavBar from './NavBar'

function Home() {
  // Lấy dữ liệu ra từ datastore
  // const initialState = JSON.parse(localStorage.getItem('taskList')) || []
  // const [taskInput, setTaskInput] = useState('')
  // const [taskList, setTaskLists] = useState(initialState)
  // const [editTask, setEditTask] = useState(null)

  // useEffect(() => {
  //   localStorage.setItem('taskList', JSON.stringify(taskList))
  // }, [taskList])
  return (
    <div>
      <NavBar />
      <BoardHome />
      {/* <TaskHome /> */}
    </div>
  )
}

export default Home