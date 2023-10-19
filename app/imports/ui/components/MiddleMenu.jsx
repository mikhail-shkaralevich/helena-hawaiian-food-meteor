import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MiddleMenu = () => (
  <Container className="pt-5 mb-5 pb-5">
    <Row className="justify-content-center gap-5" id="welcome">
      <Col className="col-7 text-center">
        <h2 className="mb-3 fs-1 font-weight-light">Welcome to Helenas</h2>
        <p className="mb-5">Serving traditional, local Hawaiian food since 1946 this family-owned business has impacted locals and tourist alike around the world. Come dine with us and experience the spirit of aloha with our ohana!</p>
      </Col>
    </Row>
    <hr className="mt-5" />
    <Row className="mb-5 justify-content-center gap-5" id="row1">
      <Col className="col-4">
        <Image src="images/Helena.jpg" fluid />
      </Col>
      <Col className="col-4">
        <p>In 1946, Helen Chock opened the doors to Helenas Hawaiian Food, a humble eatery on North King St. in Honolulu, Hawaii.</p>
        {/* eslint-disable-next-line max-len */}
        <p>Over the past 64 years Helenas Hawaiian Food has been serving the local community quality Hawaiian cuisine. In 2000, the James Beard Foundation awarded Helenas Hawaiian Food the Regional Classic Award. Helenas is one of a handful of restaurants in Hawaii to receive this distinctive award. After nearly 55 years, the restaurant was relocated to its current location on 1240 N. School Street.
        </p>
        <p>Helenas remains the simple and unpretentious eatery it was over 6 decades ago. The restaurant is now run by Helens grandson, Craig Katsuyoshi.</p>
      </Col>
    </Row>
    <Row className="row" id="fake-row">
      <Col className="col">
        <span className="my-5" id="fake-span" />
      </Col>
    </Row>
    <Row className="row mt-5 justify-content-center" id="row2">
      <Col className="col-4">
        {/* eslint-disable-next-line max-len */}
        <p>Helenas Hawaiian Food started off as a business just like many. Over the years, the founder raised and taught her children the value of hard work, perseverance and passion. This business not only became a legacy of her own, but one for her entire family. At the same time, it became a fixture in the local culture and a place that helped to cement together the community that it served.</p>
        <p>Countless families have gathered to share time together with food from this restaurant on their plates and celebrate this style of cuisine that is less and less common.</p>
        <p>We are happy to have each and every customer and look forward to many momre years of business.</p>
      </Col>
      <Col className="col-4">
        <Image src="images/img_4.jpg" alt="img" fluid />
      </Col>
    </Row>
  </Container>
);

export default MiddleMenu;
