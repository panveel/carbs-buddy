import React, { useState } from "react";
import styled from "styled-components";
import { device, theme } from "./Theme";
import { Container, Row, Col } from "react-bootstrap";
import { lighten, transparentize } from "polished";

const AboutWrapper = styled.div`
  background-color: ${lighten(0.6, transparentize(0.7, theme.primaryColor))};
  display: flex;
  align-content: end;
  align-items: flex-end;
  flex-wrap: wrap;
  height: inherit;

  .about-header {
    position: absolute;
    top: 28rem;
    text-align: center;
    left: 0;
    right: 0;

    @media ${device.laptopL} {
      top: 14rem;
    }

    @media ${device.laptop} {
      top: 8rem;
    }

    @media ${device.tablet} {
      top: 12rem;
    }

    @media ${device.mobileM} {
      top: 20rem;
    }

    h2 {
      font-weight: 900;
      font-size: 1.875rem;
    }

    hr {
      margin: auto;
      height: 2px;
    }
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    justify-content: center;

    .about-card:nth-child(4) .content {
      padding-left: 0;
      margin-left: -12px;
      height: 12rem;
    }

    .about-card {
      height: 50vh;
      width: 5rem;
      overflow: hidden;
      border-radius: 1rem;
      position: relative;
      z-index: 1;
      transition: all 600ms ease-in-out;
      cursor: pointer;

      .image-content {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        filter: brightness(0.6) saturate(70%);
        transition: filter 300ms ease-in-out;
      }

      .main-text {
        display: none;
        transition: all 300ms ease-in-out;
      }

      &:hover {
        .image-content {
          filter: brightness(0.4) saturate(50%);
        }
      }

      .content {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        height: 10rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.125rem;
        width: 100%;
        padding: 0.25rem 1rem;

        h4 {
          margin: 0;
          color: #fff;
          transform: rotate(-90deg) translate(1rem, -2.25rem);
          transition: all 600ms ease-in-out;
          font-size: 1.5rem;
          font-weight: 800;
        }

        .desc {
          margin: 0 0 40px;
          color: #fff;
          transform: translateY(0.65rem);
          opacity: 0;
          transition: opacity 300ms ease-in-out, transform 600ms ease-in-out;
        }
      }
    }

    .active:nth-child(4) .content {
      padding-left: 20px;
      margin-left: 0;
      height: 6rem;
    }

    .active {
      width: 50vw;

      .content {
        transition: all 600ms ease-in-out;
        background: none;
        height: 6rem;
        h4 {
          transform: none !important;
          transition: all 600ms ease-in-out;
        }

        .desc {
          transform: translateY(0);
          opacity: 1 !important;
          margin: 0;

          &:hover {
            opacity: 0.75;
          }
        }

        .main-text {
          display: none;
          transition: all 600ms ease-in-out;
        }
      }

      &:hover {
        .content {
          height: max-content;
          padding: 20px;
          background-color: ${theme.primaryColor};
          .main-text {
            display: block;
            color: #fff;
          }
        }
      }
    }

    @media ${device.laptopL} {
      bottom: 14rem;
    }

    @media ${device.laptop} {
      flex-direction: column;
      padding: 2.5rem;

      .about-card:nth-child(4) .content {
        padding-left: 20px;
        margin-left: 0;
        height: 4rem;
      }

      .about-card {
        width: 100%;
        height: 20rem;
        flex: 0 0 4rem;

        .content {
          height: 4rem;
          h4 {
            transition: all 600ms ease-in-out;
            transform: rotate(0) translate(0);
          }
        }
      }

      .active:nth-child(4) .content {
        height: 6rem;
      }

      .active {
        width: 100%;
        height: 20rem;
        flex: 0 0 calc(640px - 19rem);

        .content {
          height: 6rem;
        }

        &:hover {
          .content {
            height: fit-content;
          }
        }
      }
    }

    @media ${device.tablet} {
      bottom: 10rem;
    }

    @media ${device.mobilel} {
      bottom: 1rem;
    }
  }
`;

const contentList = [
  {
    title: "Mealplan",
    mainText:
      "We specialize in creating meal plans that are tailored to individuals with diabetes. Our meal plans are designed to help you reduce your blood sugar levels and manage your diabetes effectively.",
    ImgUrl:
      "https://images.pexels.com/photos/8844383/pexels-photo-8844383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Community",
    mainText:
      "Our community is made up of individuals who are living with diabetes, as well as their families, caregivers, and healthcare providers. We provide a safe and welcoming space where people can come together to share their experiences, ask questions, and provide support to one another.",
    ImgUrl:
      "https://images.pexels.com/photos/3184310/pexels-photo-3184310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Analytics",
    mainText:
      "We provide insightful analysis that helps individuals with diabetes to better understand their nutritional needs and make informed decisions about their diet.",
    ImgUrl:
      "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Recomendation",
    mainText:
      "We use this knowledge to provide personalized recommendations that are tailored to each individual's unique needs and goals. Whether you're trying to manage your blood sugar levels, lose weight, or simply improve your overall health, we can help you achieve your goals.",
    ImgUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "BGL Monitoring",
    mainText:
      "Our platform allows you to easily log your blood glucose readings, so you can see how your levels are trending over time. You can access this information from your smartphone, tablet, or computer, making it easy to stay on top of your diabetes no matter where you are.",
    ImgUrl:
      "https://images.pexels.com/photos/6942256/pexels-photo-6942256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const About = () => {
  const [isActive, setIsActive] = useState(1);

  const handleActive = (index) => {
    if (isActive === null) {
      setIsActive(index);
    } else if (index !== isActive) {
      setIsActive(index);
    }
  };

  return (
    <AboutWrapper>
      <Container className="about-header">
        <Row>
          <Col className="text-center">
            <h2> Core Target Areas </h2>
            <p>We deliver a solution to manage your health</p>
            <hr width="200px" height="2px" />
          </Col>
        </Row>
      </Container>
      <div className="card-wrapper">
        {contentList.map((content, index) => (
          <div
            key={index}
            onClick={() => handleActive(index)}
            className={index === isActive ? "active about-card" : " about-card"}
          >
            <img src={content.ImgUrl} alt="" className="image-content" />
            <div className="content">
              <h4> {content.title}</h4>
              <p className="main-text"> {content.mainText}</p>
            </div>
          </div>
        ))}
      </div>
    </AboutWrapper>
  );
};

export default About;
