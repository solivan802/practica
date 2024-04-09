import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Components/Login/Login'
import App from '../App'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
   </Routes>
  )
}

export default AppRoutes