import React from "react";
import Menu from "../components/header";
import Footer from "../components/footer";
import PerfilUsuario from "../components/perfilUser";

const Perfil = () => {
    return(
        <div className="contenido"> 
            <Menu />
            <PerfilUsuario />
            <Footer />
        </div>
    )

    }

export default Perfil;