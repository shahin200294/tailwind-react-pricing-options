import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultsData = [
  {
    id: 1,
    name: "Rahim",
    physics: 85,
    chemistry: 78,
    math: 90
  },
  {
    id: 2,
    name: "Karim",
    physics: 75,
    chemistry: 82,
    math: 88
  },
  {
    id: 3,
    name: "Amina",
    physics: 92,
    chemistry: 89,
    math: 95
  },
  {
    id: 4,
    name: "Sohan",
    physics: 68,
    chemistry: 72,
    math: 70
  },
  {
    id: 5,
    name: "Nusrat",
    physics: 88,
    chemistry: 91,
    math: 93
  },
  {
    id: 6,
    name: "Jahid",
    physics: 80,
    chemistry: 77,
    math: 85
  },
  {
    id: 7,
    name: "Mim",
    physics: 90,
    chemistry: 86,
    math: 92
  },
  {
    id: 8,
    name: "Rafi",
    physics: 70,
    chemistry: 65,
    math: 75
  },
  {
    id: 9,
    name: "Tania",
    physics: 95,
    chemistry: 94,
    math: 96
  },
  {
    id: 10,
    name: "Imran",
    physics: 78,
    chemistry: 80,
    math: 82
  }
];

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultsData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='black'></Line>
                

            </LineChart>
        </div>
    );
};

export default ResultsChart;