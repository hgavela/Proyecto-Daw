import React from "react";
import "../css/header.css";
import "../css/resultado.css";
import netflix from "../img/netflix.svg";


function Resultado (props) {
    console.log(props);

  return (
    <section className="resultado">
      <h1>{props.name}</h1>
      <div className="banner">
        <img src={props.picture} alt={props.name} />
      </div>
      <h1>Plataformas</h1>
      <div className="plataformas">
        <img src={netflix} alt="netflix" />
        <img src={netflix} alt="netflix" />
        <img src={netflix} alt="netflix" />
      </div>
      <div className="informacion">
        <h1>Informacion</h1>
        <p>
          <span>Director:</span>
          <span>Juan Carlos</span>
        </p>
        <p>
          <span>Genero:</span>
          <span>Accion</span>
        </p>
        <p>
          <span>Duracion:</span>
          <span>2 horas</span>
        </p>
        <p>
          <span>Sinopsis:</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisi vel tincidunt ornare, nisl nisl aliquet nunc, eu
            aliquam eros nisl quis nunc. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Nullam
            euismod, nisi vel tincidunt ornare, nisl nisl aliquet nunc, eu
            aliquam eros nisl quis nunc. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Nullam
            euismod, nisi vel tincidunt ornare, nisl nisl aliquet nunc, eu
            aliquam eros nisl quis nunc. Pellentesque habitant morbi tristique
            senectus et netus et
          </span>
        </p>
      </div>
    </section>
  );
}

export default Resultado;
