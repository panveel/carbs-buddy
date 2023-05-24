import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { theme, device } from "./Theme";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col } from "react-bootstrap";

import homeScreen from "../assets/Images/1-screen-home.png";
import analyticsScreen from "../assets/Images/2-screen-analytics.png";
import commsScreen from "../assets/Images/3-screen-community.png";
import mealScreen from "../assets/Images/4-screen-mealplan.png";
import reportScreen from "../assets/Images/5-screen-report.png";
import { lighten, transparentize } from "polished";

gsap.registerPlugin(ScrollTrigger);

const AppInforWrapper = styled.div`
  background-color: ${lighten(0.6, transparentize(0.7, theme.primaryColor))};
  height: 100%;
  overflow: hidden;
  h3.head {
    margin-top: 5rem;
    font-size: 14rem;
    font-weight: 900;
    line-height: 13rem;
    color: ${theme.primaryColor}
  }

  .section {
    margin-top: 20rem;
    display: flex;
    height: 30px;

    .box-1, .box-2, .box-3, .box-4, .box-5{
      width: 20%;
      height: 350px;
      margin: 0 1rem;
      background-color: #ffffff00;
    }
  }

  @media ${device.laptopL}{
    h3.head {
      font-size: 10rem;
      line-height: 10rem;
      margin-top: 10rem;
    }

    .section {
      .box-1, .box-2, .box-4, .box-5{
        width: 25%;
      }

      .box-3{
        display: none;
      }
    }
  }

  @media ${device.laptop} {
    h3.head {
      font-size: 8rem;
      line-height: 8rem;
    }

    .section {
      .box-1, .box-2, .box-4, {
        width: 33.3%;
      }

      .box-3, .box-5{
        display: none;
      }
    }
  }
  @media ${device.tablet} {

    h3.head {
      font-size: 7rem;
      line-height: 7rem;
    }
    .section {
      .box-1, .box-2 {
        width: 50%;
      }

      .box-3, .box-5, .box-4{
        display: none;
      }
    }
  }

  @media ${device.mobileL} {

    h3.head {
      font-size: 4rem;
      line-height: 4rem;
    }
    .section {
      margin-top: 9rem;
      .box-1  {
        width: 100%;
      }

      .box-3, .box-5, .box-4, .box-2 {
        display: none;
      }
    }
  }
  


`;

const AppInfo = () => {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context((self) => {
      // const boxes = self.selector(".box-1");

      gsap.to(".box-1", {
        y: -400,
        scrollTrigger: {
          trigger: ".box-1",
          start: '+=1000',
          end: '+=900',
          scrub: 1,
        },
      });

      gsap.to(".box-2", {
        y: -400,
        scrollTrigger: {
          trigger: ".box-2",
          start: '+=1300',
          end: '+=900',
          scrub: 1,
        },
      });

      gsap.to(".box-3", {
        y: -400,
        scrollTrigger: {
          trigger: ".box-3",
          start: '+=1600',
          end: '+=900',
          scrub: 1,
        },
      });
      gsap.to(".box-4", {
        y: -400,
        scrollTrigger: {
          trigger: ".box-4",
          start: '+=1900',
          end: '+=900',
          scrub: 1,
        },
      });

      gsap.to(".box-5", {
        y: -400,
        scrollTrigger: {
          trigger: ".box-5",
          start: '+=2200',
          end: '+=900',
          scrub: 1,
        },
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <AppInforWrapper >
      <Container fluid>
        <Row>
          <Col xs="12">
            <h3 className="head">Health Management</h3>
          </Col>
          <Col xs="12">
          <div className="section flex-center column" ref={main}>
              <div className="box-1">
                <img src={homeScreen} alt="" />
              </div>
              <div className="box-2">
                <img src={analyticsScreen} alt="" />
              </div>
              <div className="box-3">
                <img src={commsScreen} alt="" />
              </div>
              <div className="box-4">
                <img src={mealScreen} alt="" />
              </div>
              <div className="box-5">
                <img src={reportScreen} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
          
    </AppInforWrapper>
  );
};

export default AppInfo;
