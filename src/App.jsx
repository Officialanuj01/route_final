import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import './App.css'
import Navvar from './commponet/Navvar'
import Home from './commponet/Home'
import Contacts from './commponet/Contacts'
import About from './commponet/About'

function App() {
  

  return (
    <>
      <Navvar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Contact'element={<Contacts/>}/>
        <Route path='/About' element={<About/>}/>

      </Routes>
    </>
  )
}

export default App
