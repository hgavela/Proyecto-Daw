import React from "react";
import './/css/header.css';
import logo from './img/logo.png';


function Menu(){
    return (
        
        <nav className="nav-menu">
            <img src={logo} alt="logo" className="logo" width="38"/>
            <div className="menu">
                <label htmlFor="click" className="menu_label"><i className="fas fa-bars"></i></label>
                <input type="checkbox" id="click" className="menu_click" />
                    <ul>
                        <li>Contacto</li>
                        <li>Login</li>
                    </ul>
            </div>
        </nav>

    );

}

export default Menu;