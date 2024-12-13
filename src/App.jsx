import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Login from './pages/Login'
import Header from './Components/Header'
import Footer from './Components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Help />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
