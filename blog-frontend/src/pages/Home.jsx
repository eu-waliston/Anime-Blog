import React from "react";
import "./Home.scss";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";
import Trending from "../components/Trending/Trending";

const Home = () => {
  return (
    <div className="home">
      <div className="home--section" id="home">
        <div className="home--text">
          <h1>Últimos Artigos</h1>
          <p>
            Acompanhe aqui os últimos artigos lançados em nosso blog e
            divirta-se!
          </p>
        </div>
        <div className="home--blogs">
          <HomeBlogs />
        </div>
      </div>
      <div className="trending-section" id="top">
        <div className="trending--text">
          <h1>Os Mais Vistos</h1>
          <p>
            Acompanhe aqui os artigos mais votados do nosso blog!
          </p>
        </div>
        < Trending/>
      </div>
      <div className="library-section" id="articles"></div>
      <div className="other-blogs-section"></div>
      <div className="footer-section"></div>
    </div>
  );
};

export default Home;
