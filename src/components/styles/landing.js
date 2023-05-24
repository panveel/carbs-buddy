import styled from "styled-components";
import { theme } from '../Theme';
import { darken,lighten } from "polished";

export const LandingPageArea = styled.div`
  overflow-x: hidden;
  height: 100%;
  top: 0;

  .naving {
    top: 0px;
    width: 100%;
    position: fixed;
    z-index: 100;
  }


    .img {
      width: 10%;
      height: 10rem;
    }
  }

  nav {
    background-color: ${darken(0.15, theme.primaryColor)} !important;

    .navbar-toggler {
      background: none;
      &:hover {
        background: ${lighten(0.13, theme.primaryColor)};
        
      }
    }

    .navbar-nav {
      a {
        transition: transform 350ms ease;
        &:hover {
          transform: scale(1.2);
          transition: transform 350ms ease;
          font-weight: ${theme.medium}
        }
      }
    }
  }


  // .testing-scroll-style {

  // }
  


`