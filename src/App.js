import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import './App.css'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/addUser" element={<AddUser />} exact />
        <Route path="/editUser/:id" element={<EditUser />} exact />
      </Routes>
    </Router>
  )
}

export default App