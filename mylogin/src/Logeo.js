import React from 'react'
import {app} from "./credenciales";

const Logeo = (props) => {
    const [isRegistrando, setIsRegistrando] = React.useState(false);
    const crearUsuario =(correo, pass) =>{
        app
            .auth()
            .createUserWithEmailAndPassword(correo,pass)
            .then((usuarioFirebase)=> {
                console.log("usuario creado", usuarioFirebase);
                props.setUsuario(usuarioFirebase);
            });
    };

    const iniciarSesion =(correo, pass) =>{
        app
            // .auth()
            // .signInWithEmailAndPassword(correo,pass)
            // .then((usuarioFirebase)=> {
            //     console.log("Sesion iniciada con:", usuarioFirebase.user);
            //     props.setUsuario(usuarioFirebase);
            // });
            .auth()
            .signInWithEmailAndPassword(correo,pass)
            .catch((err) =>{
                switch (err.code){
                    case "auth/invalide-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        alert(err.message);
                        break;
                    case "auth/wrong-password":
                        // setPasswordError(err.message);
                        break;
                }
            })
    };


    const submitHandler = (e) =>{
        e.preventDefault();
        const correo = e.target.emailField.value;
        const pass = e.target.passwordField.value;

        // if (isRegistrando){
        //     crearUsuario(correo,pass);
        // }

        // if (!isRegistrando){
        //     iniciarSesion(correo,pass);
        // }
        iniciarSesion(correo,pass);

    };



    return (
        <div>
           <h1>{isRegistrando ? "Registrate": "Iniciar Sesión"}</h1> 
           <form onSubmit={submitHandler}>
               <label htmlFor="emailField">Correo</label>
               <input type="email" id="emailField" />
               <label htmlFor="passwordField">Contraseña</label>               
               <input type="password" id="passwordField" />
               <button type="submit">
                   {" "}
                   {isRegistrando ? "Registrate": "Inicia Sesión"}{" "}
                </button>
           </form>
           <button onClick = {()=>setIsRegistrando(!isRegistrando)}>
                    {isRegistrando
                        ? "¿Ya tienes cuenta? ¡Inicia sesión!"
                        : "¿No tienes cuenta? ¡Registrate gratis!"}
            </button>
        </div>
    )
}

export default Logeo