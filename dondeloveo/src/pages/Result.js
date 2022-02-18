import React from "react";
import Menu from "../components/header";
import Footer from "../components/footer";
import Resultado from "../components/resultado";
import { useParams } from "react-router-dom";



class Result extends React.Component {
  
  constructor() {
    super();
    var resultado = this.getData();
    this.state = { data: resultado };
    
  }
  
  async componentWillMount() {
      /*
    console.log("hola");
    const response = await fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=tt2661044&source=imdb&country=es", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "271b1c27e1msh55702f2ddad1a71p10ec12jsn8bd2cf85a04e"
        }
    });
    const json = await response.json();
    this.setState({ data: json });
    */
}



  /*
  data = async (id) => {
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
      console.log(response.data);
      this.setState({ data: response.data });
    } catch (error) {
      console.log(error);
    }
  };*/
  /*
  componentDidMount() {
    console.log("hola");
    var options = {
      method: "GET",
      url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup",
      params: { source_id: "tt2661044", source: "imdb", country: "es" },
      headers: {
        "x-rapidapi-host":
          "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": "271b1c27e1msh55702f2ddad1a71p10ec12jsn8bd2cf85a04e",
      },
    };
    try {
      const response = axios(options);
      console.log(response.data);
      this.setState({ data: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  */

   getData = async () => {
    console.log("hola");
    const response = await fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=tt2661044&source=imdb&country=es", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "271b1c27e1msh55702f2ddad1a71p10ec12jsn8bd2cf85a04e"
        }
    });
    const json = await response.json();
    console.log(json);
    return json;
  }


  render() {
    return (
      <div>
        <Menu />
        <Resultado props={this.state.data} key={this.state.data.id} />
        <Footer />
      </div>
    );
  }
}


export default Result;
