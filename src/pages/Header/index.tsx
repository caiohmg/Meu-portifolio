import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Button variant="outline-warning" href="/">
          Home
        </Button>
        <Button variant="outline-warning" href="../Biography">
          Sobre mim
        </Button>
       
        <DropdownButton
          as={ButtonGroup}
          title="Contato"
          variant="outline-warning"
        >
          <Dropdown.Item
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/caio-henrique-moraes-gonçalves-5b4a74199/",
                "_blank"
              )
            }
          >
            Linkedin
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => window.open("mailto:caiohmg@gmail.com", "_blank")}
          >
            Email
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => window.open("https://wa.me/5511982813448", "_blank")}
          >
            WhatsApp
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => window.open("https://github.com/caiohmg", "_blank")}
          >
            GitHub
          </Dropdown.Item>
        </DropdownButton>
      </Nav>
    </HeaderContainer>
  );
}
