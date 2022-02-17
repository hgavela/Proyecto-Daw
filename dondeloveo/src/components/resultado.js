import React from "react";
import "../css/header.css";
import "../css/resultado.css";
import netflix from "../img/netflix.svg";
import banner from "../img/banner.svg";
import { useParams } from "react-router-dom";


let name, picture;

var axios = require("axios").default;


async function getData(id) {
    var options = {
        method: "GET",
        url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup",
        params: { source_id: id, source: "imdb", country: "es" },
        headers: {
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": "271b1c27e1msh55702f2ddad1a71p10ec12jsn8bd2cf85a04e",
        },
      };
  try {
    const response = await axios(options);
    name = response.data.collection.name;
    picture = response.data.collection.picture;
  } catch (error) {
    console.log(error);
  }
}


function Resultado(props) {
    const id = useParams().id;
 getData(id);

  /*
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      name = response.data.collection.name;
      picture = response.data.collection.picture;
      console.log(response.data.collection.locations[0].display_name);
    })
    .catch(function (error) {
      console.error(error);
    });*/

    // esperar a que termine la funcion get data


  return(
    <section className="resultado">
      <h1>{name}</h1>
      <div className="banner">
        <img src={picture} alt={name} />
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
