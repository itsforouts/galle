import { useState } from 'react'
import './App.css'
import Main from './Pages/Main'
import { ToastContainer } from 'react-toastify'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

function App() {

  return (
    <>
      <ToastContainer />
      <Main />
      {/* <Login /> */}
      {/* <Register/> */}
    </>
  )
}

export default App
