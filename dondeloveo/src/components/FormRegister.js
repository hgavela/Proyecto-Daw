import React from "react";
import "../css/form.css";
import { Formik, isInteger } from "formik";

async function setRegister(username, password, email) {
  //Enviamos al servicio de login por metodo post
  /*
  const api = await fetch('http://localhost:3100/backend/usuario.php?username='+username+'&password='+password+'&email='+email,{mode: 'no-cors',method: 'POST'});
  const data = await api.json();
  if(data.response === "true"){
    alert("Usuario registrado exitosamente");
  }else{
    alert("El usuario ya existe");
  }
  //const data = await api.json();
  //console.log(data);*/

  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=tlhnjm4if2o7p85ma110akckgu");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    'http://localhost:3100/backend/usuario.php?username='+username+'&password='+password+'&email='+email,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => isInteger(result)) ? window.location.href = "/login" : alert("El usuario ya existe")
    .catch((error) => console.log("error", error));
}

function FormRegister() {
  return (
    <div className="formulario">
      <div className="formulario_contenedor">
        <Formik
          initialValues={{
            username: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            let errors = {};
            if (!values.username) {
              errors.username = "El nombre de usuario es requerido";
            }
            if (!values.email) {
              errors.email = "El email es requerido";
            } else if (
              !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(
                values.email
              )
            ) {
              errors.email = "El email no es valido";
            }

            if (!values.confirmEmail) {
              errors.confirmEmail = "La confirmacion de email es requerida";
            } else if (values.email !== values.confirmEmail) {
              errors.confirmEmail = "Los emails no coinciden";
            }
            if (!values.password) {
              errors.password = "La contraseña es requerida";
            } else if (!/[/A-Za-z0-9!?-]{8,12}/.test(values.password)) {
              errors.password = "La contraseña no es valida";
            }
            if (!values.confirmPassword) {
              errors.confirmPassword =
                "La confirmación de contraseña es requerida";
            }
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Las contraseñas no coinciden";
            }
            if (values.email !== values.confirmEmail) {
              errors.confirmEmail = "Los emails no coinciden";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              setRegister(values.username, values.password, values.email);
            }, 2000);
          }}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <input
                  name="username"
                  type="text"
                  placeholder="Nombre de usuario"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.username && touched.username && "error"}
                />
                {errors.username && touched.username && (
                  <div id="usernameError" className="input-feedback">
                    {errors.username}
                  </div>
                )}
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div id="emailError" className="input-feedback">
                    {errors.email}
                  </div>
                )}
                <input
                  name="confirmEmail"
                  type="email"
                  placeholder="Confirmar email"
                  value={values.confirmEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmEmail && touched.confirmEmail && "error"
                  }
                />
                {errors.confirmEmail && touched.confirmEmail && (
                  <div id="confirmEmailError" className="input-feedback">
                    {errors.confirmEmail}
                  </div>
                )}
                <input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                  <div id="passwordError" className="input-feedback">
                    {errors.password}
                  </div>
                )}
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword && "error"
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div id="confirmPasswordError" className="input-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
                <button
                  type="submit"
                  className="btnLogin"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? `Cargando` : `Enviar`}
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormRegister;
