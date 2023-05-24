import styled,  { css } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./Theme";
import { lighten } from "polished";
import PropTypes from 'prop-types';

const CarbsButton = styled.button`
  z-index: 1;
  text-align: center;
  box-shadow: none;

  display: block;
  position: relative;
  background: transparent;
  padding: 14px;
  border: 2px solid ${lighten(0.05, theme.primaryColor)};
  font-size: 16px;
  font-weight: bold;
  width: 160px;
  overflow: hidden;
  border-radius: 16px;

  ${(props) => props.solid && css`
    background: ${lighten(0.05, theme.primaryColor)};
    a {
      color: white;
    }
  `}

  &:hover{
    background: none;
  }

  a {
    z-index: 5;
    position: relative;
    transition: color 350ms ease;
    color: ${lighten(0.05, theme.primaryColor)};
  }

  &:before,
  &:after {
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: ${lighten(0.05, theme.primaryColor)};
    z-index: -1;
  }

  &:before {
    transform: translateX(-100%);
    z-index: 1;
  }

  &:after {
    z-index: 0;
    transform: translateX(100%);
    transition: none;
    transition: transform 350ms ease;
  }

  &:hover {
    a {
      color: white;
    }

    &:before {
      transform: translateX(0);
      transition: transform 350ms ease;
    }

    &:after {
      opacity: 1;
      transform: translateX(0);
      transition: transform 350ms 360ms ease;
    }
  }

  ${(props) => props.solid && css`
    background: ${lighten(0.05, theme.primaryColor)};
    a {
      color: white;
    }
  `}
  
`;

export const Button = (props) => {
  return (
    <CarbsButton {...props} type={props.type}>
      <Link to={props.link}>
        {props.label}
      </Link>
    </CarbsButton>
  );
};

Button.propTypes = {
  solid: PropTypes.bool,
  type: PropTypes.string,
};
