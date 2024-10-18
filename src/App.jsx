import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
