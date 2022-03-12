import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css';
import logo from '../img/logo.png';
import menu from '../img/menu.png';


function Menu(props){
    return (
        
        <nav className="nav-menu">
            <Link to="/">
                <img src={logo} alt="logo" className="logo" width="38"/>
            </Link>
            <div className="menu">
                <label htmlFor="click" className="menu_label"><i className="fas fa-bars"><img src={menu} alt="menu" width="38"/></i></label>
                <input type="checkbox" id="click" className="menu_click" />
                    <ul>
                        <Link to="/contacto">
                        <li>Contacto</li>
                        </Link>
                        {sessionStorage.getItem('usuario') ?(
                            <>
                            <Link to="/perfil">
                                <li>Perfil</li>
                            </Link>
                            </>
                        ):(
                            <>
                            <Link to="/login">
                                <li>Login</li>
                            </Link>
                            </>
                        )}
                        
                    </ul>
            </div>
        </nav>
        

    );

}

export default Menu;