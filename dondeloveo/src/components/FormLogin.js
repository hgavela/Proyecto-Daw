import React from "react";
import { Link } from "react-router-dom";
import '../css/form.css'
function FormLogin() {
  return (
    <div className="formulario">
        <div className="formulario_contenedor">
        <h2>Login</h2>
        <form>
            <input type="text" id="Usuario" placeholder="Usuario" />
            <br />
            <input type="password" id="Contraseña" placeholder="Contraseña" />
            <br />
            <button className="btnLogin">Iniciar sesión</button>
            <br />
            <p>¿No tienes cuenta? <Link to="/registro">Registrate</Link></p>
        </form>
        </div>
    </div>
  );
}

export default FormLogin;