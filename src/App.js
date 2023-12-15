// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
import LogementDetail from './LogementDetail/LogementDetail'
import About from './About/About'
import NotFound from './NotFound/NotFound'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/logement/:id' element={<LogementDetail />} />
          <Route path='/about' Component={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
