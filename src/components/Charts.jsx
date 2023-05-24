import React from "react";
import { Gauge } from "@ant-design/plots";
import { theme } from "./Theme";
import styled from "styled-components";
import { Bar, Line } from 'react-chartjs-2';
import faker from 'faker';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const DailyChart = (props) => {
  const config = {
    percent: props.percent,
    innerRadius: 0.4,
    range: {
      width: 10,
      color: theme.primaryColor,
    },
    // startAngle: Math.PI,
    // endAngle: 2.2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: props.tOffsetY,
        style: props.tStyle,
        formatter: props.tFormatter
      },
      content: {
        offsetY: props.cOffsetY,
        style: props.cStyle,
        formatter: props.cFormatter,
      },
    },
  };
  return <Gauge  {...config} />;
};



//Blood Sugar Charts Styling
const BGLChartWrapper = styled.div`  
`

const labels = ['Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday', 'Sunday'];

const barData = {
  labels,
  datasets: [
    {
      label: 'Last Week',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: theme.secondaryColor,
    },
    {
      label: 'This Week',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: theme.primaryColor,
    },
  ],
};

export const BGLChart = () => {
  return (
    <BGLChartWrapper >
      <Bar data={barData} />
    </BGLChartWrapper>
  )
}

const line0ptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const carbsData = {
  labels,
  datasets: [
    {
      label: "Calories",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      borderColor: theme.carbsColor,
      backgroundColor: theme.carbsColor,
      tension: 0.3,
    },
    {
      label: "Protein",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      borderColor: theme.proteinColor,
      backgroundColor: theme.proteinColor,
      tension: 0.3,
    },
    {
      label: "Fat",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      borderColor: theme.fatColor,
      backgroundColor: theme.fatColor,
      tension: 0.3,
    },
    {
      label: "Fibre",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      borderColor: theme.fibreColor,
      backgroundColor: theme.fibreColor,
      tension: 0.3,
    },
  ],
};




const NutrientsWrapper = styled.div`

.nav-link{
  color: ${theme.primaryColor};
  font-weight: bold;
  padding: 1rem 0;
}

`

export const Nutrients = () => {
  return (
    <NutrientsWrapper>
      <Line data={carbsData} options={line0ptions}/>
    </NutrientsWrapper>
  )
}
