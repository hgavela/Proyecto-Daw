import React from "react";

function FormLogin(){
    return (
        <div className="form-login">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Ingresar</button>
                <a href="#">Crear cuenta</a>
            </form>
        </div>
    );
}