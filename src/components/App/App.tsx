import { Route, Routes, Navigate, useNavigation, useNavigate } from 'react-router-dom'
import './App.css'
import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import About from '../About/About'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { login } from '../feature/authSlice/authSlice'


interface StateAuth {
  isAuthenticated: boolean
}


function App() {
  const authenticated  = useSelector((state: { auth: StateAuth }) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const localToken = localStorage.getItem('token')
    const localForm = JSON.parse(localStorage.getItem('userInfo') as string)
    console.log(localForm)
    if(localToken){
      axios
      .patch('http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/users', {}, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token') as string)}`
        }
      })
      .then(() => {
          dispatch(login())
      })
      .catch((error) => {
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
        navigate('/sign-in', { replace: true })
        console.log(error)
      })
    }
  })

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
