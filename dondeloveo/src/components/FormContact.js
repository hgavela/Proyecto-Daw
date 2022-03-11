import React from "react";
import '../css/form.css';
import { Formik } from "formik";

async function enviar(mail,nombre,mensaje){
  console.log(mail,nombre,mensaje);
  const api = await fetch('http://localhost:3100/backend/contacto.php?nombre='+nombre+'&email='+mail+'&mensaje='+mensaje,{mode: 'no-cors'});
  //const api = await fetch('http://localhost:3100/backend/contacto.php?nombre=Hugo&email=hugogavela@estudiante.edib.es&mensaje=Test',{mode: 'no-cors'});
  //const data = await api.json();
  const data = await api.text();
  console.log(data);
}

function FormContact() {
  return (
    <div className="formulario">
    <div className="formulario_contenedor">
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          texto: ""
        }}
        validate={(values) => {
          let errors = {};
          if (!values.nombre) {
            errors.nombre = "El nombre es requerido";
          }
          if (!values.email) {
            errors.email = "El email es requerida";
          } else if (!/[/A-Za-z0-9!?-]{8,12}/.test(values.password)) {
            errors.email = "La email no es valida";
          }
          if (!values.texto) {
            errors.texto = "El texto es requerido";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
                name="nombre"
                type="text"
                placeholder="Nombre completo"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.nombre && touched.nombre && "error"}
              />
              {errors.nombre && touched.nombre && (
                <div id="usernameError" className="input-feedback">
                  {errors.nombre}
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
                <div id="passwordError" className="input-feedback">
                  {errors.email}
                </div>
              )}
              <textarea
                name="texto"
                type="text"
                placeholder="Escribe tu mensaje"
                value={values.texto}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.texto && touched.texto && "error"}
              />
              {errors.texto && touched.texto && (
                <div id="textoError" className="input-feedback">
                  {errors.texto}
                </div>
              )}
              <button
                type="submit"
                className="btnLogin"
                onClick={() =>enviar(values.email,values.nombre,values.texto)}
                disabled={isSubmitting}
              >
                {isSubmitting ? `Loading` : `Enviar`}
              </button>
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
  
  */
export default FormContact;