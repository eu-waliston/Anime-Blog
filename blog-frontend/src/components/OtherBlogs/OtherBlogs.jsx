import React from "react";
import "./OtherBlogs.scss";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Rate from "../Rate/Rate";

const OtherBlogs = () => {
  return (
    <div className="other__blogs__section">
      <div className="other">
        <p className="date-cp" >FEVEREIRO 22, 2023</p>
        <img src="./images/outros-1.jpg" alt="recomendações de mangas" />
        <div className="names">
          <h1>
            Kumo desu ga, nani ka? – A Divertida obra de Reencarnação como
            Aranha em Fantasia
          </h1>
        </div>
        <div className="about">
          <p>
            {" "}
            Esse mangá – adaptado de uma novel de mesmo nome – tem uma das
            propostas mais estranhas que eu...
          </p>
        </div>
        <div className="more">
          <Rate />
          <Link className="more__btn">
            Ler Mais <BsArrowRight className="arrow-icon"/>{" "}
          </Link>
        </div>
      </div>

      <div className="other">
        <p className="date-cp">DEZEMBRO 8, 2022</p>
        <img src="./images/outros-2.jpg" alt="recomendações de mangas" />
        <div className="names">
          <h1>Horimiya – Uma Comédia Romântica Sem Clichês | Impressões</h1>
        </div>
        <div className="about">
          <p>
            {" "}
            Uma comédia romântica sem clichês que vai alegrar o seu dia….
            Horimiya começa com um estudante que tem um...
          </p>
        </div>
        <div className="more">
          <Rate />
          <Link className="more__btn">
            Ler Mais <BsArrowRight className="arrow-icon"/>{" "}
          </Link>
        </div>
      </div>

      <div className="other">
        <p className="date-cp">DEZEMBRO 5, 2022</p>
        <img src="./images/outros-3.jpg" alt="recomendações de mangas" />
        <div className="names">
          <h1>
            Sword Art Online Progressive – SAO focado em Kirito e Asuna como
            “quase todos” queriam
          </h1>
        </div>
        <div className="about">
          <p>
            {" "}
            Eu podia falar da Novel, mas achei mais viável e acessível falar do
            mangá. Nesse post vou comentar um pouco...
          </p>
        </div>
        <div className="more">
          <Rate />
          <Link className="more__btn">
            Ler Mais <BsArrowRight className="arrow-icon"/>{" "}
          </Link>
        </div>
      </div>

      <div className="other">
        <p className="date-cp">MARÇO 15, 2023</p>
        <img src="./images/outros-4.jpg" alt="recomendações de mangas" />
        <div className="names">
          <h1>
            Taiyou no Ie: House of the Sun – Um romance sobre o valor da
            família, amadurecimento e o tabu da diferença de idade
          </h1>
        </div>
        <div className="about">
          <p>
            {" "}
            Uma bonita comédia romântica sobre família e crescimento. Autor:
            Taamo Volumes: 13 (Finalizado).Gênero: Romance, Comédia, Slice of
            life, Escolar, Shoujo....
          </p>
        </div>
        <div className="more">
          <Rate />
          <Link className="more__btn">
            Ler Mais <BsArrowRight className="arrow-icon"/>{" "}
          </Link>
        </div>
      </div>

      <div className="other">
        <p className="date-cp">FEVEREIRO 8, 2023</p>
        <img src="./images/outros-5.jpg" alt="recomendações de mangas" />
        <div className="names">
          <h1>Top 5 Melhores Animes – Seinens de Ação/Aventura</h1>
        </div>
        <div className="about">
          <p>
            {" "}
            Um top com animes de tramas mais densas e personagens mais velhos.
            Embora “Seinen” seja apenas uma palavra referente a...
          </p>
        </div>
        <div className="more">
          <Rate />
          <Link className="more__btn">
            Ler Mais <BsArrowRight className="arrow-icon"/>{" "}
          </Link>
        </div>
      </div>

      <div className="other">
        <p className="date-cp">JANEIRO 3, 2023</p>
        <img src="./images/outros-6.jpg" alt="recomendações de mangas" />
        <div className="names">
          <h1>Top 5 Melhores Animes – Comédia com Ação</h1>
        </div>
        <div className="about">
          <p>
            {" "}
            Animes que são primariamente comédias, mas que tem uma quantidade
            razoável de ação e até se levam a sério de...
          </p>
        </div>
        <div className="more">
          <Rate />
          <Link className="more__btn">
            Ler Mais <BsArrowRight className="arrow-icon"/>{" "}
          </Link>
        </div>
      </div>

      <div className="other">
        <p className="date-cp">DEZEMBRO 26, 2022</p>
        <img src="./images/outros-7.jpg" alt="recomendações de mangas" />
        <div className="names">
          <h1>
            Mahou Tsukai no Yome: The Ancient Magus Bride – Uma fantasia moderna
            com um casal bem diferente
          </h1>
        </div>
        <div className="about">
          <p>
            {" "}
            Essa obra tem vários aspectos legais, mas eu estaria mentindo se não
            dissesse que o que mais chama atenção a...
          </p>
        </div>
        <div className="more">
          <Rate />
          <Link className="more__btn">
            Ler Mais <BsArrowRight className="arrow-icon"/>{" "}
          </Link>
        </div>
      </div>

      <div className="other">
        <p className="date-cp">FEVEREIRO 21, 2023</p>
        <img src="./images/outros-8.jpg" alt="recomendações de mangas" />
        <div className="names">
          <h1>Iris Zero – Enxergue além do que os olhos podem ver</h1>
        </div>
        <div className="about">
          <p>
            {" "}
            Em um mundo aonde 99,9% dos jovens tem o poder especial chamado
            “Iris”, Toru que nasceu um Iriz Zero (sem...
          </p>
        </div>
        <div className="more">
          <Rate />
          <Link className="more__btn">
            Ler Mais <BsArrowRight className="arrow-icon"/>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
