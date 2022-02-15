import React from "react";
import '../css/form.css'
function FormRegister() {
  return (
    <div className="formulario">
        <div className="formulario_contenedor">
        <h2>Registro</h2>
        <form>
            <input type="text" id="username" placeholder="Nombre de Usuario" />
            <br />
            <input type="email" id="email" placeholder="Email" />
            <br />
            <input type="email" id="email2" placeholder="Confirmar email" />
            <br />
            <input type="password" id="password" placeholder="Contraseña" />
            <br />
            <input type="password" id="password2" placeholder="Confirmar contraseña" />
            <br />
            <button className="btnLogin">Registrate</button>
            <br />
        </form>
        </div>
    </div>
  );
}

export default FormRegister;