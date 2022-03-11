import React from "react";
import "../css/perfil.css";

function FormPerfil() {
  return (
    <div className="datos">
      <fieldset>
        <legend>Usuario</legend>
        <input type="text" placeholder="" />
      </fieldset>
      <fieldset>
        <legend>Email</legend>
        <input type="email" placeholder="" />
      </fieldset>
      <fieldset>
        <legend>Contraseña</legend>
        <input type="password" placeholder="" />
      </fieldset>
    </div>
  );
}

export default FormPerfil;
