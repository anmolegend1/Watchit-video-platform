import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import React from "react"
import { Button } from "@chakra-ui/react"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Videos from "./components/Videos"
import Upload from "./components/Upload"
import Signup from "./components/Signup"
import Login from "./components/Login"

function App() {


  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<h1 >Page Not Found (Error 404 )</h1>} />



      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
