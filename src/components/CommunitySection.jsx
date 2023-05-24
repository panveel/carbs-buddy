import { lighten, transparentize } from "polished";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { theme, device } from "./Theme";
import Marquee from "react-fast-marquee";

const CommunityWrapper = styled.div`
  display: flex;
  align-content: end;
  align-items: flex-end;
  flex-wrap: wrap;
  height: inherit;
  background-color: ${lighten(0.6, transparentize(0.7, theme.primaryColor))};

  .container-fluid {
    height: 84%;
    gap: 5rem;
    display: flex;
    flex-direction: column;
  }

  .comms-header {
    overflow: hidden;
    width: 100%;
    position: relative;

    .moving-section {
      h3 {
        font-size: 8rem;
        font-weight: 800;
        overflow-y: hidden;
        width: 100%;
        color: ${theme.primaryColor};
      }
    }
  }

  .card {
    height: 20rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    color: white;
    background-color: ${lighten(0.6, transparentize(0.7, theme.primaryColor))};
    cursor: pointer;
    border-radius: 50px 0 50px 50px;

    @media ${device.tablet} {
      margin-top: 0;
    }

    .card-presentation {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: all 1000ms;
      padding: 0 2.2rem;
      gap: 1.5rem;

      .card-title {
        color: ${theme.primaryColor};
        font-weight: 900;
      }

      p {
        color: ${theme.textColor};
        font-size: 1.2rem;
      }

      .card-separate {
        border-top: 2px solid ${theme.textColor};
        width: 100px;
        height: 1px;
        display: block;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 1000ms;
      opacity: 0;
      transform: scale(0.5);
      filter: brightness(0.3);
      border-radius: 50px 0 50px 50px;
    }

    &:hover {
      .card-presentation {
        transition: all 600ms;
        opacity: 0.2;
        transform: scale(0) .card-separate {
          width: 0;
        }
      }

      img {
        transition: all 600ms;
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  .second-card,
  .last-card {
    margin-top: 10rem;
  }

  @media ${device.laptopL} {
    .container-fluid {
      gap: 1rem;
    }

    .comms-header {
      .moving-section {
        h3 {
          font-size: 5rem;
        }
      }
    }

    .second-card,
    .last-card {
      margin-top: 0;
      margin-right: 1rem;
    }
  }

  @media ${device.laptop} {
    .container-fluid {
      gap: 2.3rem;
      height: 90%;
    }

    .comms-header {
      .moving-section {
        h3 {
          font-size: 3.6rem;
        }
      }
    }

    .second-card,
    .last-card {
      margin-top: 0;
      margin-right: 1rem;
    }
  }

  @media ${device.tablet} {
    .container-fluid {
      height: 90%;
      gap: 1rem;
    }

    .comms-header {
      .moving-section {
        h3 {
          font-size: 2rem;
        }
      }
    }

    .card {
      height: 12rem;

      .card-presentation {
        gap: 0.5rem;
      }
    }

    .second-card,
    .last-card {
      margin-top: 0;
      margin-right: 0;
    }
  }

  @media ${device.mobileL} {
    .comms-header {
      .moving-section {
        h3 {
          font-size: 1.5rem;
          font-weight: 900;
        }
      }
    }

    .card {
      height: 12rem;
      margin: 0 1rem 2rem;
      .card-presentation {
        padding: 0px 1.2rem;
        h2 {
          font-size: 1.4rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }

    .second-card,
    .last-card {
      margin-top: 0;
      margin-right: 1rem;
    }
  }
`;

const CommunitySection = () => {
  return (
    <CommunityWrapper>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="comms-header">
              <div className="moving-section">
                <Marquee speed={200} pauseOnHover>
                  <h3>All You Need to Know</h3>
                </Marquee>
                <Marquee direction="right" speed={200} pauseOnHover>
                  <h3>A Comprehensive Guide</h3>
                </Marquee>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6} xxl={3}>
            <div className="card">
              <div className="card-presentation">
                <h2 className="card-title">Support</h2>
                <span className="card-separate"></span>
                <p>
                  A safe and welcoming space where individuals can connect with
                  others who are going through similar experiences.
                </p>
              </div>
              <img
                alt=""
                src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg"
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6} xxl={3}>
            <div className="card second-card">
              <div className="card-presentation">
                <h2 className="card-title">Education</h2>
                <span className="card-separate"></span>
                <p>
                  Workshops and webinars that provide valuable information and
                  insights into managing the condition.
                </p>
              </div>
              <img
                alt=""
                src="https://images.pexels.com/photos/4308164/pexels-photo-4308164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6} xxl={3}>
            <div className="card ">
              <div className="card-presentation">
                <h2 className="card-title">Accountability</h2>
                <span className="card-separate"></span>
                <p>
                  Connect with others to share goals and progress, and receive
                  support and encouragement along the way
                </p>
              </div>
              <img
                alt=""
                src="https://images.pexels.com/photos/6694919/pexels-photo-6694919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6} xxl={3}>
            <div className="card last-card">
              <div className="card-presentation">
                <h2 className="card-title">Empowerment</h2>
                <span className="card-separate"></span>
                <p>
                  Feel more confident and capable of managing their condition,
                  allowing them to live active, healthy, and fulfilling lives.
                </p>
              </div>
              <img
                alt=""
                src="https://images.pexels.com/photos/8279025/pexels-photo-8279025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </CommunityWrapper>
  );
};

export default CommunitySection;
