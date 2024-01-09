import React from "react";
import "./Trending.css";

// import Swiper core and required modules
import { A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { AiOutlineArrowRight} from "react-icons/ai";
import Rate from "../Rate/Rate";



const Trending = () => {
  return (
    <div className="trending--section">
      <Swiper
        modules={[A11y]}
        spaceBetween={1}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        effect={"fade"}
        id="swiper-trend"
      >
        <SwiperSlide className="tranding">
          <p className="date">OUTUBRO 20, 2018</p>
          <img src="./images/top-1.jpg" alt="tranding" />
          <h1 className="main-text">
            7 Animes que deixam qualquer um embasbacado com seu visual
          </h1>
          <p className="sub-text">
            {" "}
            E vamos a uma lista meio diferente, dessa vez focando em animes com
            cenários lindos de morrer, que...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p className="date">OUTUBRO 13, 2018</p>
          <img src="./images/top-2.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes com protagonistas absurdos de forte
          </h1>
          <p className="sub-text">
            {" "}
            E completando essa lista (porque fora esses só se vier animes novos
            com protagonistas apelões)...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p className="date"> SETEMBRO 29, 2018</p>
          <img src="./images/top-3.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes que Adoramos e os Japas Odiaram | (Curiosidades)
          </h1>
          <p className="sub-text">
            {" "}
            Uma das coisas que sempre chamaram minha atenção é como algumas
            obras podem ficar absurdamente populares no resto...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p className="date">SETEMBRO 22, 2018</p>
          <img src="./images/top-4.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes com protagonistas fracos que ficam fortes muito rápido |
            (Curiosidades)
          </h1>
          <p className="sub-text">
            Embora não seja algo que eu ligue muito em um anime, me pedem uma
            lista com esse tema...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p className="date">AGOSTO 7, 2018</p>
          <img src="./images/top-5.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes para mulheres que homens adoram{" "}
          </h1>
          <p className="sub-text">
            {" "}
            Há tempos que as pessoas vem me pedindo uma lista de melhores animes
            shoujos, então segue uma juntando...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p className="date">JULHO 15, 2018</p>
          <img src="./images/top-6.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes com protagonistas que parecem vilões | (Curiosidades)
          </h1>
          <p className="sub-text">
            {" "}
            Desde a lista dos protagonistas geniais, que tinham vários
            protagonistas “meio dark”, estão me pedindo uma lista de...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p className="date">JULHO 2, 2018</p>
          <img src="./images/top-7.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes com Psicopatas Apaixonadas (Yanderes)
          </h1>
          <p className="sub-text">
            Animes com Yanderes (Psicopatas apaixonadas) sempre me chamaram
            atenção. Então embora essa lista acabe repetindo um pouco animes...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p className="date">JUNHO 21, 2018</p>
          <img src="./images/top-8.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes com heroínas absurdas de forte | (Curiosidades)
          </h1>
          <p className="sub-text">
            Cansado de donzelas indefesas? Essa lista só tem animes com heroínas
            muito fortes (ou apelonas), algumas até salvam...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p className="date">JUNHO 7, 2018</p>
          <img src="./images/top-9.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes com protagonistas apelões em inteligência | (Curiosidades)
          </h1>
          <p className="sub-text">
            {" "}
            Outra lista de protagonistas apelões, mas dessa vez em termos de
            inteligencia, não força física ou poderes. Os...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>

        <SwiperSlide className="tranding">
          <p>NOVEMBRO 23, 2017</p>
          <img src="./images/top-10.jpg" alt="tranding" />
          <h1 className="main-text">
            10 Animes mais bonitos já feitos #2 | (Curiosidades)
          </h1>
          <p className="sub-text">
            Mais uma lista juntando animes que tem uma parte visual
            deslumbrante. Claro que o visual não é obviamente...
          </p>
          <Rate />
          <button className="btn-ml">
            Ler Mais
            <AiOutlineArrowRight className="btn-ml-link"/>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trending;
