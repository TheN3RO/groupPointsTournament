import './App.css'
import { Routes, Route } from 'react-router-dom'
import GroupPage from './pages/groupPage'
import Home from './pages/homePage'
import { useState } from 'react';

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path="/groupPage" element={<GroupPage />} />
    </Routes> 
  )
}

export default App
