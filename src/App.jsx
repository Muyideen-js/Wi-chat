import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Index"
import Room from "./components/Room/Index"
import Done from './components/Done'
import LandingPage from './LandingPage'
import Index from './components/Home/Index'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='index' element={<Index />} />
        <Route path='/room/:roomId' element={<Room />} />\
        <Route path='/Done' element={<Done />}/>
      </Routes>
    </div>
  )
}

export default App