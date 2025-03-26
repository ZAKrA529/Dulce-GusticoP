import React from 'react'

function ReportesAdmin() {

    
  return (
    <div>
      <h1>Tienes algun reporte?</h1>
      <h3>Si tenes algun <strong>reporte o avería en el sistema</strong> no dudes en hacerme la consulta ya sea por este medio o directamente a mi número</h3>

      <h1>Formulario de reportes</h1>
      <label htmlFor="">¿Cuál es el tipo de reporte que tienes?</label><br />
      <select>
  <option disabled value="someOption">Escoge una opción</option>
  <option value="otherOption">Pagina principal</option>
  <option value="otherOption">Productos</option>
  <option value="otherOption">Administración</option>
  <option value="otherOption">Ventas</option>
  <option value="otherOption">Usuarios</option>
  <option value="otherOption">Contacto</option>
</select>
    </div>  
  )
}

export default ReportesAdmin