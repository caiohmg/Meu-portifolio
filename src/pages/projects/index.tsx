import Card from "react-bootstrap/Card";
import fotoBlog from "../../assets/fotoBlog.svg";
import fotoCronometro from "../../assets/cronometro.svg";
import coffeDelivery from "../../assets/coffe.svg";
import { ProjectsContainer } from "./styles";
import calendarioCopa from "../../assets/calendarioCopa.svg";
import appFinancas from "../../assets/Dt.svg";
import { Button, Container } from "react-bootstrap";


export function Projects() {
  return (
      <Container>
     <ProjectsContainer>
    
    <Card>
      <Card.Img src={fotoCronometro} />
      <Card.Body>
        <h1>Cronômetro de Tarefas</h1>
        <p>
          {" "}
          Um cronômetro de tarefas é uma ferramenta muito útil para aumentar a
          produtividade e manter o foco nas atividades do dia a dia.
        </p>
      </Card.Body>
      <Button
        variant="outline-warning"
        href="https://temporizadorignite.netlify.app/"
        target="_blank"
      >
        Visitar
      </Button>
    </Card>

    <Card>
      <Card.Img src={fotoBlog} />
      <Card.Body>
        <h1>Blog</h1>
        <p>
          {" "}
          O Blog Ignite é uma plataforma para compartilhamento de projetos
          desenvolvida em React.
        </p>
      </Card.Body>
      <Button
        variant="outline-warning"
        href="https://blogignite.netlify.app/"
        target="_blank"
      >
        Visitar
      </Button>
    </Card>

    <Card>
      <Card.Img src={coffeDelivery} />
      <Card.Body>
        <h1>Coffe Delivery</h1>
        <p>
          {" "}
          O projeto "coofe delivery" é uma plataforma online que tem como
          objetivo facilitar a vida de quem deseja receber café de qualidade
          diretamente em casa.
        </p>
      </Card.Body>
      <Button
        variant="outline-warning"
        href="https://prismatic-sawine-dbf9d4.netlify.app/"
        target="_blank"
      >
        Visitar
      </Button>
    </Card>
    <Card>
      <Card.Img src={calendarioCopa} />
      <Card.Body>
        <h1>Calendario da copa</h1>
        <p>
          
          Durante a Copa do Mundo de 2022, foi desenvolvido um calendário
          interativo utilizando HTML e CSS.
        </p>
      </Card.Body>
      <Button
          variant="outline-warning"
          href="https://effulgent-gelato-945b73.netlify.app/"
          target="_blank"
        >
          Visitar
        </Button>
    </Card>
    <Card>
      <Card.Img src={appFinancas} />
      <Card.Body>
        <h1>Aplicativo de finanças</h1>
        <p> Aplicativo para controle finaceiro desenvolvido em React</p>
      </Card.Body>
      <Button
        variant="outline-warning"
        href="https://financasignite.netlify.app/"
        target="_blank"
      >
        Visitar
      </Button>
    </Card>
  </ProjectsContainer>
  </Container>
   
  );
}
