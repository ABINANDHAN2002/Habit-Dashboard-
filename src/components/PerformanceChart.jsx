import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { getLast7Days } from '../data/sampleHabits';

Chart.register(BarElement, CategoryScale, LinearScale);

const PerformanceChart = ({ habits = [] }) => {
  const dates = getLast7Days();

  const completionData = dates.map(date => {
    if (!habits || habits.length === 0) return 0;

    const completed = habits.reduce((count, habit) => {
      return habit.data?.[date] ? count + 1 : count;
    }, 0);

    return Math.round((completed / habits.length) * 100);
  });

  const data = {
    labels: dates.map(date => date.slice(5)),
    datasets: [
      {
        label: 'Completion %',
        data: completionData,
        backgroundColor: '#4caf50',
        borderRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true, max: 100 }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="chart-card">
      <h3>Weekly Performance</h3>
      <div style={{ height: '200px', maxWidth: '700px', width: '100%', margin: 'auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceChart;
