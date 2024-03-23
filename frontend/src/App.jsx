import { useState } from 'react'
import './App.css'
import Main from './Pages/Main'
import { ToastContainer } from 'react-toastify'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Route, Routes } from 'react-router-dom'
import UserStack from './Pages/UserStack/UserStack'
import AdminStac from './Pages/AdminStack/AdminStac'
import NotFound from './Pages/NotFound/NotFound'
import NotAuthorized from './Pages/NotAuthorized/NotAuthorized'
import Products from './Pages/UserStack/Home/Products'
import Checkout from './Pages/UserStack/Checkout/Checkout'
import Notification from './Pages/UserStack/Notification/Notification'

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/main' element={<Main />} >
          <Route index element={ <UserStack />} />
          <Route path='user' element={<UserStack />} >
            <Route index element={<Products/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='product/:id' element={<Checkout/>}/>
            <Route path='notification' element={<Notification/>}/>
          </Route>
          <Route path='admin' element={<AdminStac />} >

          </Route>
        </Route>
        <Route path='/notallowed' element={<NotAuthorized />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
