import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { darken, lighten, transparentize } from "polished";
import { theme, device } from "../../components/Theme";

const srcImg =
  "https://images.pexels.com/photos/16496267/pexels-photo-16496267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const LoginWrapper = styled.div`
  height: 100vh;
  .secondary-wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    .left-section {
      width: 100%;
      background-image: linear-gradient(
          ${transparentize(0.2, darken(0.15, theme.primaryColor))},
          ${transparentize(0.5, darken(0.5, theme.primaryColor))}
        ),
        url(${srcImg});
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: cover;
    }

    @media ${device.tablet} {
      grid-template-columns: 1fr;
      .left-section {
        display: none;
      }
    }

    .right-section {
      align-content: center;
      display: grid;
      padding: 0 1rem;

      .login-card {
        width: 100%;
        max-width: 60vh;
        margin: auto;

        .login-container,
        .register-container {
          height: fit-content;
          background-color: ${lighten(
            0.15,
            transparentize(0.7, theme.primaryColor)
          )};

          margin: 2rem 0;

          .login-activator,
          .register-activator {
            text-align: center;
            align-content: center;
            height: 80px;
            background: ${transparentize(0.2, theme.primaryColor)};
            cursor: pointer;
            transition: all 600ms ease-in-out;

            h4 {
              font-weight: 700;
              font-size: 1.4rem;
              line-height: 80px;
              color: #fff;
            }
          }
          .login-content,
          .register-content {
            padding: 3rem 3rem 2rem;
            height: 450px;
            overflow-y: hidden;
            transition: all 600ms ease-in-out;
          }
        }

        .register-container {
          .register-content {
            height: 550px;
          }
        }

        .login-active,
        .register-active {
          .login-activator,
          .register-activator {
            background: ${darken(0.06, theme.primaryColor)};
            &:hover {
              background: ${darken(0.12, theme.primaryColor)};
            }

            h4 {
              color: #fff;
            }
          }
          .login-content,
          .register-content {
            height: 0;
            padding: 0 3rem;
          }
        }
      }
    }
  }
`;

const Login = () => {
  const [loginActive, setLoginActive] = useState("");
  const [registerActive, setRegisterActive] = useState("register-active");

  const handleLogin = () => {
    if (registerActive === "register-active") {
      setLoginActive("");
    } else {
      setLoginActive("");
      setRegisterActive("register-active");
    }
  };

  const handleRegister = () => {
    if (loginActive === "login-active") {
      setRegisterActive("");
    } else {
      setRegisterActive("");
      setLoginActive("login-active");
    }
  };

  return (
    <LoginWrapper>
      <div className="secondary-wrapper">
        <div className="left-section" />
        <div className="right-section">
          <div className="login-card">
            <div
              className={
                loginActive ? "login-active login-container" : "login-container"
              }
            >
              <div className="login-activator" onClick={handleLogin}>
                <h4>Log into your account</h4>
              </div>
              <div className="login-content">
                <Form>
                  <Form.Group className="mb-3" controlId="basicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="py-3"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="basicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="py-3"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="basicCheckbox">
                    <Form.Check type="checkbox" label="Keep me signed in" />
                  </Form.Group>
                  <Button
                    solid
                    link="/dashboard/home"
                    label="Login"
                    type="submit"
                  />
                </Form>
              </div>
            </div>
            <div
              className={
                registerActive
                  ? "register-active register-container"
                  : "register-container"
              }
            >
              <div className="register-content">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="py-3"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="py-3"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasic2Password">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      className="py-3"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me signed in" />
                  </Form.Group>
                  <Button
                    link="/dashboard/home"
                    solid
                    label="Create accountt"
                    type="submit"
                  />
                </Form>
              </div>
              <div className="register-activator" onClick={handleRegister}>
                <h4>Create a new your account</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
