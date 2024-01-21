import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import React from 'react'
import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import About from '../About/About'
import { useSelector } from 'react-redux'


interface StateAuth {
  isAuthenticated: boolean
}


function App() {
  const authenticated  = useSelector((state: { auth: StateAuth }) => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={authenticated ? <Profile /> : <Navigate to='/sign-in' replace />} />
        <Route path='/sign-in' element={authenticated ? <Navigate to='/' replace /> : <Login />} />
        <Route path='/sign-up' element={authenticated ? <Navigate to='/' replace /> : <Register />} />
        <Route path='/about-me' element={<About />} />
      </Routes>
    </>
  )
}

export default App
