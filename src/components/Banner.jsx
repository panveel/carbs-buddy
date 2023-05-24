import { lighten, transparentize } from "polished";
import React, { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { theme, device } from "./Theme";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "../components/Button";
import Typewriter from "typewriter-effect";

import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

const MainBanner = styled.section`
  background-color: ${lighten(0.6, transparentize(0.7, theme.primaryColor))};
  height: 85vh;
  
  .banner-content {
    text-align: center;
    padding-top: 150px;

    .badge-area {
      border 1px dashed ${theme.primaryColor};
      width: fit-content;
      border-radius: 12px;
      padding: 5px 10px;
      display: flex;
      gap: 10px;
      align-items: center;
      margin: 0 auto 20px;
      opacity:0.7;
    }

    .header-content {
      h1 {
        font-size: 3.125;
        font-weight: 990;
      } 
      p {
        width: 45%;
        margin: 20px auto 0px;
      }

      @media ${device.tablet} {
        p {
          width: 80%;
        }
      }
    }

    .banner-buttons {
      display: grid;
      gap: 20px;
      margin: 50px auto;
      grid-template-columns: min-content min-content;
      place-items: center;
      width: fit-content;
      z-index: 3;
      position: relative;

      @media ${device.mobileM} {
        grid-template-columns: 1fr;
      }
    }
  }

  .mobile-device {
    width: 100%;
    position: absolute;
    margin: -150px auto 0;
    z-index: 1;

  
    #phoneLottie {
      width: 80%;
      margin: 0 auto;
    }

  }

  @media ${device.laptopL} {
    .mobile-device {
      margin: -100px auto 0;
    }

  }

  @media ${device.laptop} {
    .mobile-device {
      margin: -50px auto 0;
    }
  }

  @media ${device.tablet} {
    height: 70vh;

    .mobile-device {
      #phoneLottie {
        width: 100%;
        margin: 0 auto;
      }
    }
  }

  @media ${device.mobileL} {
    height: 90vh;
  }


  ${Array.from(
    { length: 40 },
    (_, i) => css`
      .particle:nth-child(${i + 1}) {
        position: absolute;
        border-radius: 25%;
        animation: ${keyframes`
        100% {
          transform: translate3d(
            ${Math.floor(Math.random() * 90) * 1}vw,
            ${Math.floor(Math.random() * 50) * 1}vh,
            ${Math.floor(Math.random() * 100) * 1}px
          );
        }
      `} 20s infinite;
        opacity: ${Math.floor(Math.random() * 100) / 100};
        height: ${Math.floor(Math.random() * 5) + 8}px;
        width: ${Math.floor(Math.random() * 5) + 5}px;
        animation-delay: -${i * 0.2}s;
        transform: translate3d(
          ${Math.floor(Math.random() * 90) * 1}vw,
          ${Math.floor(Math.random() * 40) * 1}vh,
          ${Math.floor(Math.random() * 100) * 1}px
        );
        background: hsl(${Math.floor(Math.random() * 360)}, 70%, 50%);
      }
    `
  )}
`;

const Banner = () => {
  const allParticles = Array.from({ length: 40 }, (_, index) => (
    <div className="particle" key={index}></div>
  ));

  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.addEventListener("load", function (e) {
        create({
          mode: "scroll",
          player: "#phoneLottie",
          actions: [
            {
              visibility: [0, 1],
              type: "seek",
              frames: [0, 100],
            },
          ],
        });
      });
    }
  }, []);
  return (
    <MainBanner>
      <div className="banner-content">
        <div className="all-particles">{allParticles}</div>
        <div className="badge-area">
          <Spinner size="sm" animation="grow" variant="success" />
          <span>Health Technology Solution</span>
        </div>
        <div className="header-content">
          <h1>
            <Typewriter
              loop="true"
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Create a Personalised Mealplan")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Monitor Blood Glucose Level")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString("Join a Supportive Community")
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }}
            />
            and live a healthy lifestyle.
          </h1>
          <p>
            Maintaining healthy eating habits is essential for a healthy
            lifestyle. It can help you maintain a healthy weight, reduce the
            risk of chronic diseases, and improve overall well-being.
          </p>
        </div>
        <div className="banner-buttons">
          <Button link="/login" label="Login" />
          <Button solid link="/dashboard/home" label="Dashboard" />
        </div>
        <div className="mobile-device">
          <lottie-player
            ref={lottieRef}
            id="phoneLottie"
            mode="scroll"
            src="https://assets8.lottiefiles.com/packages/lf20_unnPnE7FV6.json"
          ></lottie-player>
        </div>
      </div>
    </MainBanner>
  );
};

export default Banner;
