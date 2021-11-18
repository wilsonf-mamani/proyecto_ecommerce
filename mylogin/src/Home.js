import React from 'react'
import { app } from './credenciales'

const Home = () => {
    const cerrarSesion = () =>{
        app.auth().signOut();
    }
    return (
        <div>
            <h1>Bienvenido, sesión iniciada</h1>
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
    )
}

export default Home

