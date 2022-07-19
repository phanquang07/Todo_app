// import { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css'
import Home from './components/Home';
import TaskHome from './components/TaskHome';
import { Routes, Route, Link } from "react-router-dom";
import BoardHome from './components/BoardHome';
// import BoardList from './components/BoardList';
// import TaskForm from './components/TaskForm'
// import TaskList from './components/TaskList'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/board/:boardListID' element={TaskHome} />
      </Routes>
      {/* <TaskHome /> */}
    </div>
  )
}


export default App;
