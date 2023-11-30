import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import AddScholarship from './components/AddScholarship'
import DeleteScholarship from './components/DeleteScholarship'
import UpdateScholarship from './components/UpdateScholarship'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/addScholarship' element={<AddScholarship />} />
        <Route path='/admin/deleteScholarship' element={<DeleteScholarship />} />
        <Route path='/admin/updateScholarship' element={<UpdateScholarship />} />
      </Routes>
    </div>
  )
}

export default App
