import React from "react";

function Menu(){
    return (
        <header>
            <nav className="menu">
                <ul>
                    <li>
                        <a href="/"><img src={require('./img/logo.png')}alt="logo" width="38"/></a>
                    </li>
                    <li>
                        <a href="/contacto">Contacto</a>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Menu;