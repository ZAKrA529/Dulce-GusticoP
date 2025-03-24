import React from 'react'
import Landing from '../Components/Landing/LandingP/Landing'
import Navbar from '../Components/Landing/NavbarL/Navbar'
import Footer from '../Components/Landing/FooterL/Footer'
import CardLanding from '../Components/Landing/CardLanding/CardLanding'



function Interfaz() {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>

      
      <CardLanding></CardLanding>
      <Footer></Footer>
    </div>
  )
}

export default Interfaz
