import React from "react";
import "./HomeBlogs.scss";

// import Swiper core and required modules
import { A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { AiOutlineArrowRight } from "react-icons/ai";

const HomeBlogs = () => {
  return (
    <div className="homeblogs--component">
      <Swiper
        // install Swiper modules
        modules={[A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="styles">
          <div className="HB-info-1">
            <p>MAIO 19, 2023</p>
            <img src="./images/tmb-1.jpg" alt="animes" className="HB-img" />
          </div  >
          <div className="HB-info-2">
            <h2>
              Mangás e Novels a metade do preço! – Dicas de compra IntoxiAnime
            </h2>
            <p>
              Lista de mangás BR na Amazon com descontos muito bons da
              BookFriday! As ofertas estão variando de 30 a 70%...
            </p>
            <button className="HB-btn">
              Ler Artigo <AiOutlineArrowRight className="HB-icon"/>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="styles">
          <div className="HB-info-1">
            <p>MAIO 29, 2023</p>
            <img src="./images/tmb-2.jpg" alt="animes" className="HB-img" />
          </div>
          <div className="HB-info-2">
            <h2>Guia de Novos Animes de Julho 2023</h2>
            <p>
              Um guia com os novos animes da temporada de Julho (Versão/Summer)
              2023 comentados. Mais informações, novos animes e número de...
            </p>
            <button className="HB-btn">
              Ler Artigo <AiOutlineArrowRight className="HB-icon"/>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="styles">
          <div className="HB-info-1">
            <p>JULHO 23, 2023</p>
            <img src="./images/tmb-3.jpg" alt="animes" className="HB-img" />
          </div>
          <div className="HB-info-2">
            <h2>Re:Zero – 3º temporada ganha novo visual</h2>
            <p>
              Durante o evento da editora MF Bunko, foi liberado um novo visual
              para a 3º temporada de Re:Zero. A imagem...
            </p>
            <button className="HB-btn">
              Ler Artigo <AiOutlineArrowRight className="HB-icon"/>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBlogs;
