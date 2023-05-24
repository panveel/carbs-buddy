import { darken, transparentize } from "polished";
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, device } from "../../components/Theme";

const MealplanWrapper = styled.div`
  background: ${transparentize(0.84, darken(0.5, theme.BackgroundColor))};
  padding: 0 20px;

  @media ${device.tablet} {
    height: fit-content;
    padding-bottom: 10rem;
  }

  .page-title {
    padding: 66px 0 0;
    h1 {
      font-weight: ${theme.medium};
    }
    @media ${device.tablet} {
      padding: 20px 0 0;
      h1 {
        margin: 0;
      }
    }
  }


  .first-row, .second-row, .third-row {
    margin-top: 3rem;
    .meal-title {
      h3{
        font-size: 1.5rem;
      font-weight: bold;
      }
    }
    .recommended {
      padding: 0;
      overflow-x: hidden;
      overflow-y: hidden;
      margin-right: -1rem;
      margin-left: -0.5rem;
      display: grid;
  
      .meal-plan-list {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 400px);
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        transition: all 0.2s;
        transform: scale(0.98);
        will-change: transform;
        grid-gap: 2rem;
        user-select: none;
        cursor: pointer;
        margin-left: -0.5rem;
        -ms-overflow-style: none
        scrollbar-width: none;

        
        .meal-card-atkin,
        .meal-card-med,
        .meal-card-low, 
        .meal-card-pal,
        .meal-card-atk2 {
          height: 300px;
          width: 100%;
          min-width: 400px;
          border-radius: ${theme.primaryRadius};
          margin-right: 2rem;
      
          .meal-content {
            color: #fff;
            padding: 1.7rem;
      
            h4 {
              font-size: 1.8rem;
              font-weight: ${theme.bold};
            }
          }
        }

        .meal-card-atkin {
          background: linear-gradient(
              0deg,
              ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
              ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
            ),
            url("https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          background-size: cover;
          background-position: center;
        }
        .meal-card-med {
          background: linear-gradient(
              0deg,
              ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
              ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
            ),
            url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          background-size: cover;
          background-position: center;
        }
      
        .meal-card-low {
          background: linear-gradient(
              0deg,
              ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
              ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
            ),
            url("https://images.pexels.com/photos/5638268/pexels-photo-5638268.jpeg?auto=compress&cs=tinysrgb&w=1600");
          background-size: cover;
          background-position: center;
        }

      }

      .meal-plan-list::-webkit-scrollbar {
        display: none;
      }
  
      .meal-plan-list.active {
        cursor: grabbing;
        cursor: -webkit-grabbing;
        transform: scale(1);
      }
    }

  }

  .second-row {
    .recommended {
      .meal-plan-list {
        grid-template-columns: repeat(5, 400px);

        .meal-card-atkin,
        .meal-card-med,
        .meal-card-low,
        .meal-card-pal,
        .meal-card-atk2 {
          height: 200px;
        }

        .meal-card-atkin {
          background: linear-gradient(
              0deg,
              ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
              ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
            ),
            url("https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          background-size: cover;
          background-position: center;
        }
        .meal-card-med {
          background: linear-gradient(
              0deg,
              ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
              ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
            ),
            url("https://images.pexels.com/photos/1305063/pexels-photo-1305063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          background-size: cover;
          background-position: center;
        }
      
        .meal-card-low {
          background: linear-gradient(
              0deg,
              ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
              ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
            ),
            url("https://images.pexels.com/photos/4397919/pexels-photo-4397919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          background-size: cover;
          background-position: center;
        }

        .meal-card-pal {
          background: linear-gradient(
            0deg,
            ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
            ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
          ),
          url("https://images.pexels.com/photos/6740535/pexels-photo-6740535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        background-size: cover;
        background-position: center;
        }

        .meal-card-atk2 {
          background: linear-gradient(
            0deg,
            ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
            ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
          ),
          url("https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        background-size: cover;
        background-position: center;
        }

      }
    }
  }

  .third-row {
    .recommended {
      .meal-plan-list {
        grid-template-columns: repeat(2, 400px);

        .meal-card-atkin,
        .meal-card-med,
        .meal-card-low {
          height: 200px;
        }

        .meal-card-atkin {
          background: linear-gradient(
              0deg,
              ${transparentize(0.8, darken(0.2, theme.primaryColor))} 0%,
              ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
            ),
            url("https://images.pexels.com/photos/4846164/pexels-photo-4846164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          background-size: cover;
          background-position: center;
        }
        .meal-card-med {
          background: linear-gradient(
              0deg,
              ${transparentize(0.9, darken(0.2, theme.primaryColor))} 0%,
              ${transparentize(0.05, darken(0.18, theme.primaryColor))} 100%
            ),
            url("https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          background-size: cover;
          background-position: center;
        }
      
        
      }
    }
  }
`;

const MealPlan = () => {
  const sliderRefs = useRef([]);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  function handleMouseDown(e, index) {
    setIsDown(true);
    sliderRefs.current[index].classList.add("active");
    setStartX(e.pageX - sliderRefs.current[index].offsetLeft);
    setScrollLeft(sliderRefs.current[index].scrollLeft);
  }

  function handleMouseLeave(index) {
    setIsDown(false);
    sliderRefs.current[index].classList.remove("active");
  }

  function handleMouseUp(index) {
    setIsDown(false);
    sliderRefs.current[index].classList.remove("active");
  }

  function handleMouseMove(e, index) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRefs.current[index].offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    sliderRefs.current[index].scrollLeft = scrollLeft - walk;
    console.log(walk);
  }

  return (
    <ThemeProvider theme={theme}>
      <MealplanWrapper>
        <div className="page-title">
          <h1> Meal Plan</h1>
        </div>
        <div className="first-row">
          <div className="meal-title">
            <h3>Recommended</h3>
          </div>
          <div className="recommended">
            <div
              ref={(el) => (sliderRefs.current[0] = el)}
              onMouseDown={(e) => handleMouseDown(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
              onMouseUp={() => handleMouseUp(0)}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              className="meal-plan-list"
            >
              <div className="meal-card-atkin">
                <div className="meal-content">
                  <h4>Atkins Diet</h4>
                  <p>3 Weeks</p>
                </div>
              </div>
              <div className="meal-card-med">
                <div className="meal-content">
                  <h4>Mediterranean Diet</h4>
                  <p>7 Days</p>
                </div>
              </div>
              <div className="meal-card-low">
                <div className="meal-content">
                  <h4>Low-Carb</h4>
                  <p>2 Weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="meal-title">
            <h3>Low Fat</h3>
          </div>
          <div className="recommended">
            <div
              ref={(el) => (sliderRefs.current[1] = el)}
              onMouseDown={(e) => handleMouseDown(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              onMouseUp={() => handleMouseUp(1)}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              className="meal-plan-list"
            >
              <div className="meal-card-atkin">
                <div className="meal-content">
                  <h4>Kitogenic Diet</h4>
                  <p>8 Weeks</p>
                </div>
              </div>
              <div className="meal-card-med">
                <div className="meal-content">
                  <h4>Ornish Diet</h4>
                  <p>2 Months</p>
                </div>
              </div>
              <div className="meal-card-low">
                <div className="meal-content">
                  <h4>Dash Diet</h4>
                  <p>2 Weeks</p>
                </div>
              </div>
              <div className="meal-card-pal">
                <div className="meal-content">
                  <h4>Paleo Diet</h4>
                  <p>2 Weeks</p>
                </div>
              </div>
              <div className="meal-card-atk2">
                <div className="meal-content">
                  <h4>Atkins Diet</h4>
                  <p>3 Weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="third-row">
          <div className="meal-title">
            <h3>Low Protein</h3>
          </div>
          <div className="recommended">
            <div
              ref={(el) => (sliderRefs.current[2] = el)}
              onMouseDown={(e) => handleMouseDown(e, 2)}
              onMouseLeave={() => handleMouseLeave(2)}
              onMouseUp={() => handleMouseUp(1)}
              onMouseMove={(e) => handleMouseMove(e, 2)}
              className="meal-plan-list"
            >
              <div className="meal-card-atkin">
                <div className="meal-content">
                  <h4>Grain-based Diet</h4>
                  <p>5 Days</p>
                </div>
              </div>
              <div className="meal-card-med">
                <div className="meal-content">
                  <h4>Plant-based Diet</h4>
                  <p>25 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MealplanWrapper>
    </ThemeProvider>
  );
};

export default MealPlan;
