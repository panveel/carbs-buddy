import React from "react";
import { NavLink } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme, device } from "./Theme";
import { transparentize } from "polished";
import Icon from "./Icons";
import { AiOutlineHome } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiLogOutCircle, BiWindowAlt } from "react-icons/bi";
import Logo from "../assets/Images/Logo.png";

const NavStyle = styled.nav`
  .nav-brand {
    padding: 25px 0 0 30px;

    img {
      width: 85%;
    }
  }
  ul {
    padding: 10px 15px 20px 15px;
    display: grid;
    grid-template-rows: repeat(5, 50px);
    align-items: center;

    li {
      a {
        color: ${(props) => props.theme.textColor};
        display: flex;
        width: 100%;
        justify-content: flex-start;
        padding: 14px 20px;
        transition: 300ms;

        &:visited {
          color: none;
        }

        display: grid;
        grid-template-columns: 14px 1fr;
        grid-gap: 20px;
        align-items: center;

        span {
          display: block;
        }
      }

      .active {
        border-radius: ${(props) => props.theme.primaryRadius};
        font-weight: ${(props) => props.theme.bold};
        color: ${(props) => props.theme.primaryColor};
        background-color: ${(props) =>
          transparentize(0.92, props.theme.primaryColor)};
      }
    }
  }

  @media ${device.tablet} {
    .nav-brand {
      display: none;
    }

    ul {
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;

      li {
        a {
          display: grid;
          color: ${(props) => props.theme.textColor};
          text-align: center;
          grid-template-rows: 1fr 1fr;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 0;
          padding: 14px 4px;

          div {
            svg {
              font-size: 30px !important;
            }
          }
        }
        span {
          font-size: 12px;
        }
      }

      .active {
        border-radius: ${(props) => props.theme.primaryRadius}
          ${(props) => props.theme.primaryRadius} 0 0 !important;
      }
    }
  }

  @media ${device.mobileM} {
    ul {
      li {
        a {
          div {
            svg {
              font-size: 20px !important;
            }
          }

          span {
            font-size: 10px;
          }
        }
      }
    }
  }
`;



const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavStyle>
        <div className="nav-brand">
          <img src={Logo} alt="" />
        </div>
        <ul>
          <li>
            <NavLink ativeclassname="active" to="/dashboard/home">
              <Icon
                icon={<AiOutlineHome />}
                color={(props) => props.theme.primaryColor}
              />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink ativeclassname="active" to="/dashboard/meal-plan">
              <Icon
                icon={<IoFastFoodOutline />}
                color={(props) => props.theme.primaryColor}
              />
              <span>MealPlan</span>
            </NavLink>
          </li>
          <li>
            <NavLink ativeclassname="active" to="/login">
              <Icon
                icon={<BiLogOutCircle />}
                color={(props) => props.theme.primaryColor}
              />
              <span>Log Out</span>
            </NavLink>
          </li>
          <li>
            <NavLink ativeclassname="active" to="/">
              <Icon
                icon={ <BiWindowAlt />}
                color={(props) => props.theme.primaryColor}
              />
              <span>Website</span>
            </NavLink>
          </li>
        </ul>
      </NavStyle>
    </ThemeProvider>
  );
};

export default Sidebar;
