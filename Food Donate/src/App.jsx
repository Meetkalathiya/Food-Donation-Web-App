// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import DonationScreen from './DonationButton'
import DonationButton from './DonationButton'


function App() {
  

  return (
    <BrowserRouter> 
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/donate' element={<DonationButton/>}></Route>
      <Route path='/donation' element={<DonationScreen/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App