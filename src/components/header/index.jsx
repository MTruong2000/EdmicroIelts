import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./style.scss";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img src="https://techydevs.com/demos/themes/html/aduca-demo/aduca/images/logo.png" alt="logo"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Homepage</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div className="btn__signin_signup">
              <Button variant="outline-success" className="btn_main_primary">Sign in</Button>
              <Button variant="outline-success" className="btn_main_primary">Sign up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
