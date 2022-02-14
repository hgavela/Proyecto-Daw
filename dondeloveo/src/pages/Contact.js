import React from "react";
import Menu from "../components/header";
import Footer from "../components/footer";
import FormContact from "../components/FormContact";

const Login = () => {
    return(
        <div className="contenido"> 
            <Menu />
            <FormContact />
            <Footer />
        </div>
    )

    }

export default Login;