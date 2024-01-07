import React from "react";

//Swipper
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

//Icons
import { AiOutlineArrowRight } from "react-icons/ai";

import "./HomeBlogs.css";

const HomeBlogs = () => {
  return (
    <div className="homeblogs--component">
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
      >
        <SwiperSlide className="styles">
          <div className="HB-info-1">
            <p>MAIO 19, 2023</p>
            <img src="./images/tmb-1.jpg" alt="animes" className="HB-img" />
          </div>
          <div className="HB-info-2">
            <h2>Mangás e Novels a metade do preço! – Dicas de compra</h2>
            <p>
              Lista de mangás BR na Amazon com descontos muito bons da
              BookFriday! As ofertas estão variando de 30 a 70%...
            </p>
            <button className="HB-btn">
              Ler Artigo <AiOutlineArrowRight className="HB-icon" />
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
              Ler Artigo <AiOutlineArrowRight className="HB-icon" />
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
              Ler Artigo <AiOutlineArrowRight className="HB-icon" />
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="styles">
          <div className="HB-info-1">
            <p>JULHO 23, 2023</p>
            <img src="./images/tmb-4.jpg" alt="animes" className="HB-img" />
          </div>
          <div className="HB-info-2">
            <h2>
              Seiken Gakuin – Anime sobre Maou virando estudante de escola de
              magia ganha trailer, estúdio e previsão de estreia
            </h2>
            <p>
              O twitter oficial da adaptação em anime de Seiken Gakuin no Maken
              Tsukai (The Demon Sword Master of Excalibur Academy)...
            </p>
            <button className="HB-btn">
              Ler Artigo <AiOutlineArrowRight className="HB-icon" />
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="styles">
          <div className="HB-info-1">
            <p>JULHO 23, 2023</p>
            <img src="./images/tmb-5.webp" alt="animes" className="HB-img" />
          </div>
          <div className="HB-info-2">
            <h2>
              NieR: Automata – Anime tem anuncio de 2º parte com resto da
              história
            </h2>
            <p>
              Como o lançamento dos últimos episódios da 1º temporada de NieR:
              Automata, foi anunciado que a obra receberá uma 2º...
            </p>
            <button className="HB-btn">
              Ler Artigo <AiOutlineArrowRight className="HB-icon" />
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="styles">
          <div className="HB-info-1">
            <p>JULHO 23, 2023</p>
            <img src="./images/tmb-6.jpg" alt="animes" className="HB-img" />
          </div>
          <div className="HB-info-2">
            <h2>
              Lazarus – Anime original com diretor de Cowboy Bebop ganha trailer
            </h2>
            <p>
              Como havia sido prometido, durante a San Diego Comic-Con, foi
              liberado um trailer para o novo anime original Lazarus. O...
            </p>
            <button className="HB-btn">
              Ler Artigo <AiOutlineArrowRight className="HB-icon" />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBlogs;
