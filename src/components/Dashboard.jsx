import React, { useState } from 'react';
import PerformanceChart from '../components/PerformanceChart';
import HabitTable from '../components/HabitTable';

function Dashboard() {
  const [habits, setHabits] = useState([]); // lifted state here

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* Pass habits to chart */}
      <PerformanceChart habits={habits} />

      {/* Pass habits and setHabits to table */}
      <HabitTable habits={habits} setHabits={setHabits} />
    </div>
  );
}

export default Dashboard;
