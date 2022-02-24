import axios from "axios";
import configData from "./../config.json";

axios.defaults.headers.common["x-rapidapi-host"] = "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com";
axios.defaults.headers.common["x-rapidapi-key"] =
    "271b1c27e1msh55702f2ddad1a71p10ec12jsn8bd2cf85a04e";

async function getData(id) {
    let apiURL = new URL(configData.BASE_URL);
    apiURL.pathname += configData.ID;
    apiURL.searchParams.append("source_id", id);
    apiURL.searchParams.append("source", "imdb");
    apiURL.searchParams.append("country", "es");
    console.log(apiURL);
    
    return await axios.get(apiURL)
        .then(response => {
            console.log(response.data);
            return response.data.collection;
        })

}

export {getData};