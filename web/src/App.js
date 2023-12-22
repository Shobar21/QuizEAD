import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Alloffers from './Components/Alloffers'
import Welcome from './Components/Welcome'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Welcome />}></Route>
          <Route path='/Alloffers' element={<Alloffers />}></Route>
          <Route path='/Aboutus' element={<Aboutus />}></Route>
          <Route path='/contactus' element={<Contactus />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
