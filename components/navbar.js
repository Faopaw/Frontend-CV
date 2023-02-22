import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './navbar.module.css';

function NavbarComponent() {

  const style = {
    backdropFilter: "blur(20px)",
    backgroundColor: "rgb(199 199 216 / 22%)",
    
    // position: "absolute",
    // mixBlendMode: "difference",
    width: "100vw",
    borderBottom: "solid 2px transparent",
    backgroundClip: "padding-box",
    boxShadow : "10px 10px 10px rgba(46, 54, 68, 0.03)",
    "--bs-navbar-color" : "#212f3b",
    "--bs-navbar-brand-color" : "#212f3b",
    "--bs-nav-link-hover-color": "#535454",
    fontWeight: "500"
    // rgb(146 146 146 / 20%)
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