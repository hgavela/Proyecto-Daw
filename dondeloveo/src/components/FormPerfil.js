import React from "react";
import "../css/perfil.css";

function actualizar() {
  
  let username = document.querySelector('input[name="username"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let password = document.querySelector('input[name="password"]').value;
  let id_usuario = sessionStorage.getItem('usuario');



  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=tlhnjm4if2o7p85ma110akckgu");

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "http://localhost:3100/backend/usuario.php?id_usuario="+id_usuario+"&username="+username+"&password="+password+"&email="+email,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => alert("Usuario actualizado"))
    .catch((error) => alert("error", error));
}

function FormPerfil(props) {
  console.log(props);
  return (
    <>
      <div className="datos" key={props.usuario.id_usuario}>
        <fieldset>
          <legend>Usuario</legend>
          <input
            type="text"
            placeholder=""
            defaultValue={props.usuario.username}
            name="username"
          />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input
            type="email"
            placeholder=""
            defaultValue={props.usuario.email}
            name="email"
          />
        </fieldset>
        <fieldset>
          <legend>Contraseña</legend>
          <input
            type="password"
            placeholder=""
            defaultValue={props.usuario.username}
            name="password"
          />
        </fieldset>
      </div>
      <div className="opciones">
        <span onClick={actualizar}>Actualizar </span>
      </div>
    </>
  );
}

export default FormPerfil;
