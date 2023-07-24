import React from "react";
import "./Home.scss";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";
import Trending from "../components/Trending/Trending";
import BlogGalery from "../components/BlogGalery/BlogGalery";

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
          <p>Acompanhe aqui os artigos mais votados do nosso blog!</p>
        </div>
        <Trending />
      </div>
      <div className="galery-section" id="articles">
        <div className="galery--text">
          <h1>Galeria de Artigos</h1>
          <p>
            Os Artigos mais vontados, mais comentados e compartilhados estão
            organizados aqui na galeria
          </p>
          <button className="galery-btn">Ver todos</button>
        </div>
        <BlogGalery />
      </div>
      <div className="other-blogs-section" id="others">
      <div className="other-blogs--text">
          <h1>Outros Artigos</h1>
          <p>
            Aqui estão outros topicos muito interessantes que foram publicados em nosso blog.
          </p>
        </div>
      </div>
      <div className="footer-section"></div>
    </div>
  );
};

export default Home;
