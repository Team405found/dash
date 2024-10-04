import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GlobalTemperature = () => {
  const data = {
    labels: [
      "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
    ],
    datasets: [
      {
        label: "Global Temperature",
        data: [
          14.42, 14.55, 14.62, 14.61, 14.54, 14.68, 14.63, 14.66, 14.54, 14.64, 14.71, 14.58, 14.63, 14.65, 14.74, 14.87, 14.99, 14.91, 14.82, 14.95, 15.02, 14.84, 14.89, 14.94
        ],
        borderColor: "#fca61f",
        backgroundColor: "rgba(252, 166, 31, 0.5)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
    },
  };

  return (
    <div className="GlobalTemperature">
      <Line data={data} options={options} />
    </div>
  );
};

export default GlobalTemperature;