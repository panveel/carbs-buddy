import React, { useLayoutEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import styled from "styled-components";

import { Button } from "../../components/Button";
import MouseMonitor from "../../components/MouseMonitor";
import { LandingPageArea } from "../../components/styles/landing";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import About from "../../components/About";

import AppInfo from "../../components/AppInfo";
import CommunitySection from "../../components/CommunitySection";

gsap.registerPlugin(ScrollTrigger);

const MainBody = styled.div`
  .horizontal-scroll {
    width: 400vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;

    .panel {
      width: 100vw;
      height: 100vh;
      padding: 0;
    }
  }
`;

const LandingPage = () => {
  const component = useRef(null);
  const toolbar = useRef(null);
  const slider = useRef();

  const sectionCasesRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  // useEffect(() => {
  //   const showAnim = gsap.from(toolbar.current, {
  //     yPercent: -100,
  //     paused: true,
  //     duration: 0.2,
  //   }).progress(1);

  //   ScrollTrigger.create({
  //     start: "100",
  //     end: 99999,
  //     onUpdate: (self) => {
  //       self.direction === -1 ? showAnim.play() : showAnim.reverse();
  //     },
  //   });
  // }, []);

  const handleScrollButtonClick = () => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
      duration: 3,
      scrollTo: sectionCasesRef.current,
    });
  };

  return (
    <LandingPageArea>
      <div className="naving" ref={toolbar}>
        <Navbar
          bg="dark"
          expand="xl"
          sticky="top"
          variant="dark"
          className="py-4 px-4 sticky-top"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <h3>
                Carbs <b>Buddy</b>
              </h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 gap-5 align-items-center"
                  style={{ fontSize: "18px" }}
                >
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link onClick={handleScrollButtonClick}>About</Nav.Link>
                  <Nav.Link href="#mealplan">Mealplan</Nav.Link>
                  <Nav.Link href="#community">Community</Nav.Link>
                  <NavDropdown
                    title="Web App"
                    id={`offcanvasNavbarDropdown-expand-xl`}
                  >
                    <NavDropdown.Item href="/dashboard/home">
                      Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/login">
                      Create Account
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Button link="/login" label="Login" />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <MouseMonitor />
      <MainBody ref={component}>
        <Banner id="home" />

        <section ref={slider} className="horizontal-scroll">
          <div id="about" className="panel" ref={sectionCasesRef}>
            <About />
          </div>
          <div className="panel">
            <AppInfo />
          </div>
          <div id="community" className="panel">
            <CommunitySection />
          </div>
        </section>
        <Footer id="footer" />
      </MainBody>
    </LandingPageArea>
  );
};

export default LandingPage;
