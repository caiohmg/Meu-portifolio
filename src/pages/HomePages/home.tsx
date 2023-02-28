import { Button } from "react-bootstrap";
import { HomeContainer } from "./styles";
import fotoPerfil from "../../assets/fotoPerfil.png.png";

import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export function Home() {
  return (
    <HomeContainer>
      <h1>
        <TypeAnimation
          sequence={[
            "Bem vindo ao meu Portfólio!",
            "Front-End Developer!",
            "Caio Henrique Moraes!",
          ]}
          speed={10}
          
        ></TypeAnimation>
      </h1>
      <p>
        Olá! Meu nome é Caio Henrique e sou um desenvolvedor front-end junior
        com habilidades em HTML, CSS, Bootstrap, JavaScript, TypeScript e React.
        Este é meu portfólio, onde você pode ver meu trabalho e avaliar minhas
        competências em desenvolvimento de aplicações web. Estou ansioso para
        contribuir com minhas habilidades e aprender mais no mundo do
        desenvolvimento front-end.
        <img src={fotoPerfil} />
        <div className="icons">
          <div className="icons">
            <a href="mailto:caiohmg@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
              <span></span>
            </a>
            <a
              href="https://www.linkedin.com/in/caio-henrique-moraes-gon%C3%A7alves-5b4a74199/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span></span>
            </a>
            <a href="https://wa.me/5511982813448" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span></span>
            </a>
            <a href="https://github.com/caiohmg" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              <span></span>
            </a>
          </div>
        </div>
      </p>
      <div>
        <a href="/projects/">
          <Button variant="outline-warning">Projetos</Button>
        </a>
        <a href="/Biography">
          <Button variant="outline-warning">Sobre mim</Button>
        </a>
      </div>
    </HomeContainer>
  );
}
