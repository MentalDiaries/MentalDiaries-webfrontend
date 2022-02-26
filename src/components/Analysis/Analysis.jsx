import { Chart } from 'chart.js';
import React, { useRef, useEffect, useContext, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { AuthContext } from '../../AuthProvider';
import './Analysis.css';
ChartJS.defaults.font.size = 20;
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
  datasets: [
    {
      label: 'Percentage of health',
      data: [65, 78, 21, 87, 35],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'All diaries emotion chart',
    },
  },
};

const props = {
  height: '80rem',
};
const Analysis = () => {
  const { allDiaries } = useContext(AuthContext);
  const [data, setData] = useState();

  if (!allDiaries) return;
  const lineGraph = useRef();

  useEffect(() => {
    if (!allDiaries) return;
    const value = [];
    const labels = allDiaries.map((diary) => {
      value.push(Math.random() * 100);
      return `Entry ${diary.entry_id}`;
    });
    setData({
      labels: labels,
      datasets: [
        {
          label: 'Percentage of health [0 - 100]',
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          data: value,
        },
      ],
    });
  }, [allDiaries]);
  return (
    <div className="analysis">
      <div className="analysis__line">
        {data && <Line options={options} data={data} {...props} />}
      </div>
    </div>
  );
};

export default Analysis;
