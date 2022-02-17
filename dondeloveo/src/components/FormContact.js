import React from "react";
import '../css/form.css'
function FormContact() {
  return (
    <div className="formulario">
        <div className="formulario_contenedor">
        <h2>Contacto</h2>
        <form>
            <input type="text" id="nombre" placeholder="Nombre Completo" />
            <br />
            <input type="email" id="email" placeholder="Correo electrónico" />
            <br />
            <textarea id="mensaje" placeholder="Mensaje"></textarea>
            <button className="btnLogin">Enviar</button>
            <br />
        </form>
        </div>
    </div>
  );
}

export default FormContact;