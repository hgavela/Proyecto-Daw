import { isInteger } from "formik";
import React from "react";
import { useState } from "react";
import "../css/perfil.css";
import FormPerfil from "./FormPerfil";



function PerfilUsuario() {
  const [perfil, setPerfil] = useState(null);

  //Si no esta la sesion del usuario redirige a index
  window.addEventListener("load", () => {
    const usuario = sessionStorage.getItem("usuario");
    if(!isInteger(usuario)){
      window.location.href = "/";
    }
  });


  

  const getPerfil = async () => {
    const id_usuario = JSON.parse(sessionStorage.getItem("usuario"));
    /*
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=tlhnjm4if2o7p85ma110akckgu");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://localhost:3100/backend/usuario.php?id_usuario=" + id_usuario,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then((result) => setPerfil(result))
      .catch((error) => console.log("error", error));

      console.log(perfil);
    //setPerfil(true);
    */
    const api = await fetch(
      "http://localhost:3100/backend/usuario.php?id_usuario=" + id_usuario
    );
    const perfilApi = await api.json();
    setPerfil(perfilApi);

    //setPerfil(perfilApi.results);
  };

  const delPerfil = () => {
    setPerfil(null);
  };

  const logout = () => {
    sessionStorage.removeItem("usuario");
    window.location.href = "/";
  };
  return (
    <section className="perfil">
      <h1>Bienvenido</h1>
      <div className="perfil_contenedor">
        {perfil ? (
          <>
            <div className="opciones">
              <span onClick={delPerfil}>Volver</span>
            </div>
            <FormPerfil usuario={perfil} />
          </>
        ) : (
          <>
            <div className="opciones">
              <span onClick={getPerfil}>Modificar datos</span>
              <span onClick={logout}>Logout</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default PerfilUsuario;
