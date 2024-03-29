import React from "react";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import Trending from "../Trending/Trending";
import BlogGalery from "../BlogGalery/BlogGalery";
import OtherBlogs from "../OtherBlogs/OtherBlogs";
import Footer from "../Footer/Footer";
import "./Home.css";

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

        </div>
        <BlogGalery />
      </div>
      <div className="other-blogs-section" id="others">
        <div className="other-blogs--text">
          <h1>Outros Artigos</h1>
          <p>
            Aqui estão outros topicos muito interessantes que foram publicados
            em nosso blog.
          </p>
        </div>
        <OtherBlogs />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
