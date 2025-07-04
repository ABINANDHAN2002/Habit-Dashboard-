import React, { useState } from 'react';

function HabitForm({ onAdd }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = habitName.trim();
    if (!trimmed) return;

    onAdd({ name: trimmed });
    setHabitName('');
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter new habit"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default HabitForm;
