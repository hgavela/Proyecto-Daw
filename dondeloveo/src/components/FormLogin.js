import React from "react";
import { Link } from "react-router-dom";
import "../css/form.css";
import { Formik } from "formik";


async function getUser(username, password) {

  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=nivhagoj0buig7hdfhkjgln4mh");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    'http://localhost:3100/backend/usuario.php?username='+username+'&password='+password,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => sessionStorage.setItem('usuario',result['id_usuario']))
    .catch((error) => console.log("error", error));


}

function FormLogin() {
  return (
    <div className="formulario">
      <div className="formulario_contenedor">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={(values) => {
            //Validacion del formulario
            let errors = {};
            if (!values.username) {
              errors.username = "El nombre de usuario es requerido";
            }

            if (!values.password) {
              errors.password = "La contraseña es requerida";
            } else if (!/[/A-Za-z0-9!?-]{8,12}/.test(values.password)) {
              errors.password = "La contraseña no es valida";
            }

            return errors;
          }}
          await
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              getUser(values.username, values.password);
              
              if(sessionStorage.getItem('usuario')){
                setTimeout(() => {
                  window.location.href = "/perfil";
                }, 1000);
              }else{
                alert("Usuario o contraseña incorrectos");
              }

              setSubmitting(false);
            }, 1000);
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
                <button
                  type="submit"
                  className="btnLogin"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? `Cargando` : `Enviar`}
                </button>
                <p>
                  ¿No tienes cuenta? <Link to="/registro">Registrate</Link>
                </p>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormLogin;
