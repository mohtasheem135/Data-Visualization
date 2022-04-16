

import React from 'react'
import { Route, Routes } from "react-router";
import AdminHome from './components/Admin Home/AdminHome';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/LoginSignup/Login';
import Register from './components/LoginSignup/Register/Register';
import View from "./components/View/View"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/error' element={<Error />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </div>
  )
}

export default App
