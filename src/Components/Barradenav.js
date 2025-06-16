import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataNB from '../Data/Datau.js';
import Logo from   '../Assets/Imagenes/Logo.png'

function MNavbar() {
  const [expanded, setExpanded] = useState(false); 
    const handleToggle = () => {
        setExpanded(!expanded); 
    };
    const handleLinkClick = () => {
        setExpanded(false); 
    };
  return (
    <Navbar expand="lg" variant="light" className=" position-absolute w-100 mx auto"  data-bs-theme="light" /*para las letras*/> {/* bg=dark es para el color de la barra y data-bd-theme para las letras */} 
      <Container>
        <Navbar.Brand as={Link} to="/Inicio" className="img-fluid">
              <img src={Logo}
              alt="Cargando logo"
              width={120}
              height={120} 
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto text-uppercase fs-4 text-white" variant="underline" bg="secondary" >  {/* mx=centra los titulos */} 
              {DataNB.map((link, idx) => (
              <Nav.Link className="font-weight-bold text-white"
                as={Link}
                to={link.path}
                key={idx} onClick={handleLinkClick} >              
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MNavbar;
