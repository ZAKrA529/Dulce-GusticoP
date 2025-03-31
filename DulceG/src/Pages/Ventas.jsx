import React from 'react'
import Grafico from '../Components/Admin/Grafico/Grafico'
import PgVentas from "../Components/Admin/VentasPg/PgVentas"
import NavVentas from '../Components/Admin/VentasPg/NavVentas'
import Footer from '../Components/Landing/FooterL/Footer'
function Ventas() {
  return (
    <div>
      <NavVentas></NavVentas>
      <PgVentas></PgVentas>
      <Grafico></Grafico>
      <Footer></Footer>
    </div>
  )
}

export default Ventas
