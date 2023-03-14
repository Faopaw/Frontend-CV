import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './navbar.module.css';

function NavbarComponent() {

  const style = {
    backgroundColor: "var(--secondaryColour)",

    // width: "100vw",
    backgroundClip: "padding-box",
    "--bs-navbar-color" : "rgba(220, 220, 220, 1)",
    "--bs-navbar-brand-color" : "rgba(220, 220, 220, 1)",
    
    "--bs-navbar-hover-color" :"rgba(155, 154, 154, 1)",
    "--bs-navbar-brand-hover-color" : "rgba(155, 154, 154, 1)",
    fontWeight: "500"
  }
  return (
    <Navbar style={style} className= "navbar" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Idiris Omer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;