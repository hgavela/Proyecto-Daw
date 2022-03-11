import React from "react";
import { Link } from "react-router-dom";
import '../css/form.css';
import { Formik } from "formik";

async function getUser(username,password){
  const api = await fetch('http://localhost:3100/backend/usuario.php?username='+username+'&password='+password,{mode: 'no-cors',method: 'GET'});
  const data = await api.text();
  console.log(data);
  return data;
  
}

function FormLogin() {
  return (
    <div className="formulario">
    <div className="formulario_contenedor">
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validate={(values) => {
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            if(getUser(values.username, values.password)=="true"){
              sessionStorage.setItem("username",values.username);
              window.location.href = "/";
            } else {
              alert("Usuario o contraseña incorrectos");
            }
            setSubmitting(false);
          }, 400);
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
                {isSubmitting ? `Loading` : `Enviar`}
              </button>
              <p>¿No tienes cuenta? <Link to="/registro">Registrate</Link></p>
            </form>
          );
        }}
      </Formik>
    </div>
  </div>

  );

}

/*

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

*/

export default FormLogin;