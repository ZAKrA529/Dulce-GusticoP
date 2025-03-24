import React from 'react'
import AdminC from '../Components/Admin/AdminC/AdminC'
import NavAdmin from '../Components/Admin/SideNvAdmin/NavAdmin'
import Grafica from '../Components/Admin/Grafica/Grafica'


function Admin() {
  return (
    <div>
        <NavAdmin></NavAdmin>
        <AdminC></AdminC>
        <Grafica></Grafica>
    </div>
  )
}

export default Admin
