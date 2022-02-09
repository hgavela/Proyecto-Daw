import React from "react";

function Menu(){
    return (
        <header>
        <nav className="menu-movil">
            <ul className="menu">
                <li>
                    <img src={require('./img/menu.png')} alt="Logo menu"  className="logo_menu" />
                </li>
                <li>
                    <a href="/index"><img src={require('./img/logo.png')} alt="logo"/></a>
                </li>
            </ul>
        </nav>
        <nav className="menu-escritorio">
            <ul className="menu">
                <li>
                <a href="/index"><img src={require('./img/logo.png')} alt="logo"/></a>
                </li>
                <li>
                    <a href="/contacto">CONTACTO</a>
                </li>
                <li>
                    <a href="/login">LOGIN</a>
                </li>
            </ul>
        </nav>
   </header>
    );

}

export default Menu;