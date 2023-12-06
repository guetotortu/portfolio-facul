import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Barra() {
  const style={color: 'inherit', textDecoration: 'inherit'};

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link style={style} to={'/'} >Tiago de Souza Gueto</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto2">
            <Nav.Link className='navbar_link_item'>
              <Link style={style} to={'/'} >Home</Link>
            </Nav.Link>
            <Nav.Link className='navbar_link_item'>
              <Link style={style} to={'/about'} >Sobre mim</Link>
            </Nav.Link>
            <Nav.Link className='navbar_link_item'>
              <Link style={style} to={'/'} >Formações</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;