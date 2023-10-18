import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';

const TopMenu = () => (
  <>
    <Navbar expand="lg" bg="white" className="bg-gradient main-nav">
      <Container className="p-3">
        <Nav>
          <span />
        </Nav>
        <Nav>
          <Navbar.Brand href="#home"><Image src="images/logo.png" className="ms-5" width={389} /></Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link className="text-black nav-link mx-5 fs-5" href="#">ORDER ONLINE</Nav.Link>
          <Nav.Link className="text-black nav-link mx-5 fs-5" href="#">MENU</Nav.Link>
          <Nav.Link className="text-black nav-link mx-5 fs-5" href="#">VIDEOS</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <div className="mb-5 pb-5">
      <Image src="images/top-img.jpg" className="background-image" fluid />
    </div>

    <div className="fs-5" id="cta">
      <h2>HOURS</h2>
      <h2>TUES-FRI: 10AM-7:30PM</h2>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="mt-5">SEE MENU</a>
    </div>
  </>
);

export default TopMenu;
