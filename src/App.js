import React from 'react'
import Landingpage from './Pages/Landingpage'
import Loginpage from './Pages/Loginpage'
import Registerpage from './Pages/Registerpage'
import HomePage from './Pages/HomePage'
import CreateAuctionPage from './Pages/CreateAuctionPage'
import { BuyItemPage } from './Pages/BuyItemPage'
import { OnBuyItemPage } from './Pages/OnBuyItemPage'
import { BuyFinishedPage } from './Pages/BuyFinishedPage'
import { InvoicePage } from './Pages/InvoicePage'
import UserProfilePage from './Pages/UserProfilePage'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile" element={<UserProfilePage/>}/>
        <Route path="/create" element={<CreateAuctionPage/>}/>
        <Route path="/buyitem/:id" element={<BuyItemPage/>}/>
        <Route path="/onbuyitem" element={<OnBuyItemPage/>}/>
        <Route path="/BuyFinished" element={<BuyFinishedPage/>}/>
        <Route path="/invoice" element={<InvoicePage/>}/>
      </Routes>
    </Router>
  )
}

export default App