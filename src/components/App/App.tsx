import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import About from '../About/About'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/sign-in' element={<Login/>}/>
        <Route path='/sign-up' element={<Register/>}/>
        <Route path='/about-me' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
