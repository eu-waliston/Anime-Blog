import React from "react";
import "./Home.scss";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";

const Home = () => {
  return (
    <div className="home">
      <div className="home--section" >
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
      <div className="trendind-section"></div>
      <div className="library-section"></div>
      <div className="other-blogs-section"></div>
      <div className="footer-section"></div>
    </div>
  );
};

export default Home;
