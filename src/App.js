import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ConnectedPost from './components/Post';




const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/:postId" element={<ConnectedPost/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App;