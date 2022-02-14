import React from "react";
import '../css/form.css'
function FormRegister() {
  return (
    <div className="formulario">
        <div className="formulario_contenedor">
        <h2>Registro</h2>
        <form>
            <input type="text" id="nombre" placeholder="Nombre Completo" />
            <br />
            <input type="email" id="email" placeholder="Correo electrónico" />
            <br />
            <textarea id="mensaje" placeholder="Mensaje"></textarea>
            <button className="btnLogin">Iniciar sesión</button>
            <br />
            <p>¿No tienes cuenta? Registrate</p>
        </form>
        </div>
    </div>
  );
}

export default FormRegister;