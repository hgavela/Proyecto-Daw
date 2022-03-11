import React, { useEffect, useState } from "react";
import Menu from "../components/header";
import Footer from "../components/footer";
import Resultado from "../components/resultado";
import { useParams } from "react-router-dom";
import { getData} from "../services/api";

function Result() {
  
  const { id } = useParams();
  const [collection, setCollection] = useState(getData(id));

  useEffect(function(){
    async function fetchData() {
      const data = await getData(id);
      console.log(data);
      setCollection(data);
    }
    fetchData();
  }, [id]);

    return (
      <div>
        <Menu />
        <Resultado 
          id={collection.id}
          name={collection.name} 
          picture={collection.picture}
          />
        <Footer />
      </div>
    );

}


export default Result;
