import React from "react";
import '../css/search.css'
import search from '../img/search.png'


function Search(){
    return (
        
        <section className="search">
            <h1>Encuentra donde ver tus series y peliculas</h1>
            <input type="text" placeholder="Busca tu pelicula o serie favorita" className="buscador" />
        </section>
    );
}

export default Search;