// import { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import TaskHome from './components/TaskHome';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/board/:boardListId' element={<TaskHome />} />
      </Routes>
    </div>
  )
}


export default App;
