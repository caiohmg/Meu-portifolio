import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
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
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="../projects">Projetos</Nav.Link>
                    <Nav.Link href="../Biography">Sobre mim</Nav.Link>
                    <NavDropdown
                      title="Contato"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Whatsapp
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Linkedin
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        E-mail
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



