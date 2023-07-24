import React from "react";
import "./Home.scss";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";

const Home = () => {
    return (
        <div className="home--component">
            <div className="home--text">
                <h1>Últimos Artigos</h1>   
                <p>Acompanhe aqui os últimos artigos lançados em nosso blog e divirta-se!</p>     
            </div>
            <div className="home--blogs">
                < HomeBlogs/>
            </div>
        </div>
    )
}

export default Home;