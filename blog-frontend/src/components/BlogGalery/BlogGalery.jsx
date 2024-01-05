import React from "react";


const BlogGalery = () => {
  return (
    <div className="BG--component">
      <div className="BG--section-1">
        <p className="BG-date">JULHO 31, 2023</p>
        <img src="./images/galery-1.jpg" alt="galeria" className="BG-img-1" />
        <h1 className="BG-title">
          Os 5 “Melhores” Animes de Apocalipse Zombie
        </h1>
        <p className="BG-subtitle">
          Esse é um IntoxiList, uma coluna de curiosidades com humor sarcástico
          do Intoxianime. Diferente de Tops de melhores animes, isso..
        </p>
      </div>
      <div className="BG--section-2">
        <div className="itens-flex">
          <div>
            <p className="BG-date">JULHO 21, 2023</p>
            <img src="./images/galery-2.jpg" alt="galeria" className="BG-img" />
          </div>
          <div>
            <h1 className="BG-title">5 Animes de Super Heróis</h1>
            <p className="BG-subtitle">
              Super Heróis entraram na moda em 2015, então finalmente deu pra
              fazer uma lista de animes focados no gênero. Esse...
            </p>
          </div>
        </div>
        <div className="itens-flex">
          <div>
            {" "}
            <p className="BG-date">JULHO 21, 2022</p>
            <img src="./images/galery-4.jpg" alt="galeria" className="BG-img" />
          </div>
          <div>
            <h1 className="BG-title">Os 20 animes mais vendidos do século</h1>
            <p className="BG-subtitle">
              Super Heróis entraram na moda em 2015, então finalmente deu pra
              fazer uma lista de animes focados no gênero. Esse...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGalery;
