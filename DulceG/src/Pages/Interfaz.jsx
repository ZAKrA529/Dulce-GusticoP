import React from 'react'
import Landing from '../Components/Landing/LandingP/Landing'
import Navbar from '../Components/Landing/NavbarL/Navbar'
import Footer from '../Components/Landing/FooterL/Footer'
import CardLanding from '../Components/Landing/CardLanding/CardLanding'
import ChatBot from '../Components/Chat/ChatBot/ChatBot'


function Interfaz() {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>
      <ChatBot></ChatBot>
      <CardLanding></CardLanding>
      <Footer></Footer>
    </div>
  )
}

export default Interfaz
