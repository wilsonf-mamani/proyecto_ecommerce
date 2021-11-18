import React, {useEffect} from "react";
import {app} from "./credenciales";
import Home from "./Home";
import Logueo from "./Logeo";


function App() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase)=>{
      console.log ("ya hay sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, [])


  return <>{usuario ? <Home/> : <Logueo setUsuario={setUsuario}/>}     </>;
}

export default App;
