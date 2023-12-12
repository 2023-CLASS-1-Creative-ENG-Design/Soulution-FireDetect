import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo119 from "../assets/logo.png";

function Navigation() {
  const navbarStyle = {
    color: 'black', // Set the desired font color here
  };

  return (
    <Navbar bg="white" expand="lg" style={navbarStyle}>
      <Navbar.Brand href="/">Fire Soulution</Navbar.Brand>
      <div className="Headlogo">
        <div className="Headmonitor">
          <img src={logo119} alt='logo' width={80} height={40} />
        </div>
      </div>
      <Container fluid>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Cam" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Cam1">Cam1</NavDropdown.Item>
            <NavDropdown.Item href="/Cam2">Cam2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;