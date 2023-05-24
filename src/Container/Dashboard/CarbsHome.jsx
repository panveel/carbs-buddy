import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, device } from "../../components/Theme";
import Icon from "../../components/Icons";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { BGLChart, DailyChart, Nutrients } from "../../components/Charts";
import { darken, transparentize } from "polished";
import { Container, Row, Col } from "react-bootstrap";

//Getting today's date in local
const todayDate = () => {
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date();
  const date = d.getDate();
  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];
  const dayName = days[d.getDay()];
  const formatted = `${dayName}, ${date} ${monthName}`;
  return <span>{formatted.toString()}</span>;
};

const dayNums = new Date().getDay();

const dailyDoughnuts = [
  { percent: 0.2, day: "S", id: 1 },
  { percent: 0.8, day: "M", id: 3 },
  { percent: 0.9, day: "T", id: 4 },
  { percent: 1.0, day: "W", id: 5 },
  { percent: 0.7, day: "T", id: 6 },
  { percent: 0.6, day: "F", id: 7 },
  { percent: 0.6, day: "S", id: 8 },
];

const HomeStyles = styled.section`
  background: ${transparentize(0.84, darken(0.5, theme.BackgroundColor))};
  padding: 0 20px;

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

  .date-tracker {
    .date-icon-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;

      h4 {
        font-weight: ${(props) => props.theme.bold};
      }

      .top-icons {
        margin-left: auto;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 30px 30px;
        align-items: center;
        color: ${(props) => props.theme.primaryColor};
      }
    }

    .daily-charts {
      grid-template-columns: repeat(7, 80px);
      grid-template-rows: 60px;
      margin-top: 1rem;
      display: grid;
      grid-gap: 8px;

      @media ${device.tablet} {
        grid-template-columns: repeat(7, 1fr);
      }

      .top-chart {
        height: 50px;
        text-align: center;

        &:nth-child(${dayNums + 1}) {
          span {
            background-color: ${(props) => props.theme.primaryColor};
            border-radius: 4px;
            padding: 2px 6px;
            color: #fff;
          }
        }
      }
    }
  }

  .todays-data {
    margin-top: 60px;
    .bgl-number {
      background: #ffffff;
      box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
      border-radius: ${theme.primaryRadius};

      text-align: center;
      position: relative;
      overflow: hidden;
      padding: 40px 25px 20px;
      height: 100%;
      min-width: 150px;
      transition: all 300ms ease-in-out; 

      &:hover {
        transform: scale(1.06);
      }

      &:after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        content: "";
      }

      h5 {
        font-size: 1.1rem;
        font-weight: ${theme.medium};
      }

      p {
        font-weight: ${theme.bold};
        font-size: 2.5em;
        line-height: 64px;
        color: ${theme.textColor};

        span:nth-child(2) {
          font-size: 0.5em;
        }
      }
    }
  }

  .col-sm-6:nth-child(1) {
    .bgl-number {
      &:after {
        background: linear-gradient(82.59deg, #00c48c 0%, #00a173 100%);
      }
    }
  }

  .col-sm-6:nth-child(2) {
    .bgl-number {
      &:after {
        background: linear-gradient(81.67deg, #0084f4 0%, #1a4da2 100%);
      }
    }
  }

  .col-sm-6:nth-child(3) {
    .bgl-number {
      &:after {
        background: linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%);
      }
    }
  }

  .col-sm-6:nth-child(4) {
    .bgl-number {
      
      &:after {
        background: linear-gradient(81.67deg, ${theme.fibreColor} 0%, ${darken(0.3,theme.fibreColor)} 100%);
      }

    }
  }

  .analysis {
    margin-top: 3rem;

    h4 {
      font-weight: 800;
      margin-bottom: 0.8rem;
    }
    .bgl-chart {
      background: #fff;
      border-radius: ${theme.primaryRadius};
      padding: 2rem;
    }
  }
`;

const Home = () => {
  const chartList = dailyDoughnuts.map((eachChart) => (
    <div className="top-chart">
      <span key={eachChart}>{eachChart.day}</span>
      
      <DailyChart
        cFormatter={() => null}
        percent={eachChart.percent}
        key={eachChart}
      />
    </div>
  ));


  return (
    <ThemeProvider theme={theme}>
      <HomeStyles>
        <div className="page-title">
          <h1> Home</h1>
        </div>
        <div className="date-tracker">
          <div className="date-icon-header">
            <h4>Today, {todayDate()} </h4>
            <div className="top-icons">
              <Icon
                icon={<AiOutlineCalendar />}
                color={(props) => props.theme.primaryColor}
                fontSize="30px"
              />
              <Icon
                icon={<FaRegUserCircle />}
                color={(props) => props.theme.primaryColor}
                fontSize="25px"
              />
            </div>
          </div>
          <div className="daily-charts">{chartList}</div>
        </div>
        <div className="todays-data">
          <Container fluid>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6} xl={2} className="py-3">
                <div className="bgl-number">
                  <h5>Carbohydrate</h5>
                  <p>
                    <span>340</span>
                    <span>kcal</span>
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={2} className="py-3">
                <div className="bgl-number">
                  <h5>Protein</h5>
                  <p>
                    <span>220</span>
                    <span>g</span>
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={2} className="py-3">
                <div className="bgl-number">
                  <h5>Fat</h5>
                  <p>
                    <span>40</span>
                    <span>g</span>
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={2} className="py-3">
                <div className="bgl-number">
                  <h5>Fibre</h5>
                  <p>
                    <span>120</span>
                    <span>g</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="analysis">
          <Container fluid>
            <Row>
              <Col md={12} lg={6} className="py-3">
                <h4> Blood Gluclose Level</h4>
                <div className="bgl-chart">
                  <BGLChart />
                </div>
              </Col>
              <Col md={12} lg={6} className="py-3">
                <h4>Nutrient Calories</h4>
                <div className="bgl-chart">
                  <Nutrients />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </HomeStyles>
    </ThemeProvider>
  );
};

export default Home;
