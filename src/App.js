import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import Registar from './pages/Registar'


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='Login' element={<Login/>}></Route>
                <Route path='Registar' element={<Registar/>}></Route>
                <Route path='*' element={<Notfound/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
