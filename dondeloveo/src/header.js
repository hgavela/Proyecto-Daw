import React from "react";

function Menu(){
    return (
        <header>
            <nav className="menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Menu;