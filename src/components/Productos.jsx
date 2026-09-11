import { useEffect, useState } from "react"
const API_URL = import.meta.env.PUBLIC_API_URL;

function Productos() {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(function() {
        async function cargarProductos() {
            const response = await fetch(`${API_URL}/productos`)
            const datos = await response.json()

            setProductos(datos)
            setCargando(false)
        }
        cargarProductos()
    }, [])

    if (cargando) return <p>Cargando...</p>

  return (
    <section>
      {productos.map(function(producto) {
        return (
            <div>
                <h2>$ {producto.nombre}</h2>
                <small>$ {producto.precio}</small>
            </div>
        )
      })}
    </section>
  )
}

export default Productos
