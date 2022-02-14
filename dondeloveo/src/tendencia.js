import React from "react";
import ".//css/tendencias.css";

function Tendencias(){
    return (
        //Section de series y peliculas en tendencia
        <section className="tendencias">
            <h1>Series y peliculas en tendencia</h1>
            <div className="tendencias-container">
                <div className="tendencias-item">
                    <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                    <div className="tendencias-item-info">
                        <h2>The 100</h2>
                        <p>The 100 es una serie de televisión de drama, creada por David Benioff y David Lloyd, que se estrenó en la temporada 1 de 2017. La serie narra la historia de una pareja de amigos que viajan a la isla de Pandora, donde se encuentran con una serie de personajes que se llaman The 100.</p>
                    </div>
                </div>
                <div className="tendencias-item">
                    <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                    <div className="tendencias-item-info">
                        <h2>The 100</h2>
                        <p>The 100 es una serie de televisión de drama, creada por David Benioff y David Lloyd, que se estrenó en la temporada 1 de 2017. La serie narra la historia de una pareja de amigos que viajan a la isla de Pandora, donde se encuentran con una serie de personajes que se llaman The 100.</p>
                    </div>
                </div>
                <div className="tendencias-item">
                    <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                    <div className="tendencias-item-info">
                        <h2>The 100</h2>
                        <p>The 100 es una serie de televisión de drama, creada por David Benioff y David Lloyd, que se estrenó en la temporada 1 de 2017. La serie narra la historia de una pareja de amigos que viajan a la isla de Pandora, donde se encuentran con una serie de personajes que se llaman The 100.</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Tendencias;