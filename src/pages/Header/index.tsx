import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HeaderContainer } from "./styles";


export function Header() {
  return (
    <HeaderContainer>
      <>
        {["xl"].map((expand) => (
          <Navbar expand={expand}>
            <Container fluid>
              <Navbar.Toggle 
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas 
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end" 
              >
                <Offcanvas.Header className="custom-header" closeButton>
                  <Offcanvas.Title id=
                  
                  {`offcanvasNavbarLabel-expand-${expand}`}>
                  </Offcanvas.Title>
                </Offcanvas.Header >
                <Offcanvas.Body >
                  <Nav className="justify-content-end">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projetos</Nav.Link>
                    <Nav.Link href="/Biography">Sobre mim</Nav.Link>
                    <NavDropdown
                      
                      title="Contato"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="https://wa.me/5511982813448" target="_blank">
                        Whatsapp
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.linkedin.com/in/caio-henrique-moraes-gon%C3%A7alves-5b4a74199/" target="_blank">
                        Linkedin
                      </NavDropdown.Item>
                      <NavDropdown.Item href="mailto:caiohmg@gmail.com" target="_blank">
                        E-mail
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://github.com/caiohmg" target="_blank">
                        Github
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </HeaderContainer>
  );
}



