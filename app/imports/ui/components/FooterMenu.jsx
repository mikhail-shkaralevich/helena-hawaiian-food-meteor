import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const FooterMenu = () => (
  <Container className="footer" fluid>
    <Row className="justify-content-center">
      <Col className="col-4 col-md-offset-2" id="contact">
        CONTACT US
        <div className="mt-3">P 808.845.8044</div>
        <div>© 2023 All Rights</div>
        <div>Reserved | site by</div>
        <div style={{ color: '#888888' }}>inception designs</div>
      </Col>
      <Col className="col-4">
        ADDRESS
        <div className="mt-3">Helenas Hawaiian Food</div>
        <div>1240 N. School St.</div>
      </Col>
      <Col className="col-4">
        MEDIA
        <Row className="no-gutters">
          <Col className="col-3">
            <Image src="images/yelp.png" className="media-icon" fluid alt="img" />
          </Col>
          <Col className="col-3">
            <Image src="images/square-instagram.png" className="media-icon" fluid alt="img" />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default FooterMenu;
