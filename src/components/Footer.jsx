import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Col, Row, Form } from "react-bootstrap";
import { device, theme } from "./Theme";
import { lighten, transparentize } from "polished";

import { Button } from "../components/Button";

import FooterBg from "../assets/Images/footer-bg.png";
import Runner from "../assets/Images/runner.gif";
import Cycler from "../assets/Images/cycler.gif";
import Walker from "../assets/Images/walker.gif";

const Running = keyframes`
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
`;

const FooterWrapper = styled.footer`
  background: url(${FooterBg}) center bottom / contain no-repeat scroll;
  background-color: ${lighten(0.6, transparentize(0.7, theme.primaryColor))};
  width: 100%;
  min-height: 60vh;
  height: 100%;

  h4 {
    font-weight: 800;
    margin-bottom: 20px;
  }

  .get-in-touch {
    margin-right: 40px;
  }

  .company,
  .helper,
  .socials {
    margin-left: 50px;
    @media ${device.laptop} {
      margin-left: 0;
    }

    ul {
      padding-left: 0;
      display: grid;
      grid-gap: 10px;
    }
  }

  .moving-items {
    position: absolute;
    height: fit-content;
    width: 100%;
    height: 335px;
    display: flex;
    align-items: flex-end;

    @media ${device.laptopL} {
      height: 320px;
    }

    

    @media ${device.tablet} {
      height: 30px;
    }
    
    .runner {
      background: url(${Runner}) no-repeat center center;
      animation: ${Running} 30s linear infinite;
      width: 80px;
      height: 150px;
      background-size: 100%;
      position: absolute;
      overflow-y: hidden;
    }

    .cycler {
      background: url(${Cycler}) no-repeat center center;
      animation: ${Running} 20s linear infinite;
      width: 193px;
      height: 130px;
      background-size: 100%;
      position: absolute;
      overflow-y: hidden;

    }
    .walker {
      background: url(${Walker}) no-repeat center center;
      animation: ${Running} 50s linear infinite;
      width: 120px;
      height: 173px;
      background-size: 100%;
      position: absolute;
      overflow-y: hidden;

    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container fluid className="py-5 px-5">
        <Row>
          <Col xs={12} md={6} lg={3} className="px-2 py-4">
            <div className="get-in-touch">
              <h4>Get In Touch</h4>
              <p>Subscribe to our newsletter and get latest information</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Form>
              <Button solid link="/" label="Subscribe" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="px-2 py-4">
            <div className="company">
              <h4>Company</h4>
              <ul>
                <li>About </li>
                <li>Meal Planning</li>
                <li>Coummunity</li>
                <li>Analysis</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="px-2 py-4">
            <div className="helper">
              <h4>Support</h4>
              <ul>
                <li>Service Terms </li>
                <li>Customers</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="px-2 py-4">
            <div className="socials">
              <h4>Connect</h4>
              <ul>
                <li>Service Terms </li>
                <li>Meal Planning</li>
                <li>Coummunity</li>
                <li>Analysis</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="moving-items">
        <div className="runner"></div>
        <div className="cycler"></div>
        <div className="walker"></div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
