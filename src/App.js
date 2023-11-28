import React from 'react'
import Landingpage from './Pages/Landingpage'
import Loginpage from './Pages/Loginpage'
import Home from './Component/Home'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App