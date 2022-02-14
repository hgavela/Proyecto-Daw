import React from "react";
import Menu from "../components/header";
import Footer from "../components/footer";
import FormLogin from "../components/FormLogin";

const Login = () => {
    return(
        <div className="contenido"> 
            <Menu />
            <FormLogin />
            <Footer />
        </div>
    )

    }

export default Login;