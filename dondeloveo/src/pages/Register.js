import React from "react";
import Menu from "../components/header";
import Footer from "../components/footer";
import FormRegister from "../components/FormRegister";
const Login = () => {
    return(
        <div className="contenido"> 
            <Menu />
            <FormRegister />
            <Footer />
        </div>
    )

    }

export default Login;