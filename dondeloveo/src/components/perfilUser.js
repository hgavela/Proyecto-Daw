import React from "react";
import { useState } from "react";
import "../css/perfil.css";
import FormPerfil from "./FormPerfil";

function PerfilUsuario() {
  const [perfil, setPerfil] = useState(null);

  const getPerfil = () => {
    setPerfil(true);
  };

  const delPerfil = () =>{
      setPerfil(null);
  }
  return (
    <section className="perfil">
      <h1>Bienvenido Nombre</h1>
      <div className="perfil_contenedor">
        {perfil ? (
          <>
            <FormPerfil />
            <div className="opciones">
            <span onClick={delPerfil}>Volver</span>
              <span>Actualizar</span>
            </div>
            
          </>
        ) : (
          <>
            <div className="opciones">
              <span onClick={getPerfil}>Actualizar datos</span>
              <span>Logout</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default PerfilUsuario;
