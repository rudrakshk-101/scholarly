import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import AddScholarship from './components/AddScholarship'
import DeleteScholarship from './components/DeleteScholarship'
import UpdateScholarship from './components/UpdateScholarship'
import MasterHome from './components/MasterHome'
import InternationalView from './components/InternationView'
import MeritView from './components/MeritView'
import MeansView from './components/MeansView'


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<MasterHome />} />
      <Route path='/means' element={<MeansView />} />
      <Route path='/merit' element={<MeritView />} />
      <Route path='/international' element={<InternationalView />} />
        <Route path='/viewAll' element={<Home />} />
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
