import React from "react";
import Menu from "../components/header";
import Search from "../components/search";
import Footer from "../components/footer";
import Tendencias from "../components/tendencia";

const Home = () => {
    return(
        <div className="contenido">
            <Menu />
            <Search />
            <Tendencias />
            <Footer />
        </div>
    )

    }

export default Home;