import React, { useEffect } from 'react';
import HabitForm from './HabitForm';
import { getLast7Days } from '../data/sampleHabits';

function HabitTable({ habits, setHabits }) {
  const dates = getLast7Days();

  // Save to localStorage whenever habits update
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // ✅ Toggle checkbox state
  const toggleHabit = (index, date) => {
    const updated = [...habits];
    // Ensure habit.data is always initialized
    if (!updated[index].data) {
      updated[index].data = {};
    }
    updated[index].data[date] = !updated[index].data[date];
    setHabits(updated);
  };

  // ✅ Add new habit
  const addHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, data: {} }]);
  };

  // ✅ Delete habit
  const deleteHabit = (index) => {
    const updated = habits.filter((_, i) => i !== index);
    setHabits(updated);
  };

  return (
    <div className="habit-table">
      <h3>Your Weekly Habit Tracker</h3>
      <HabitForm onAdd={addHabit} />
      <table>
        <thead>
          <tr>
            <th>Habit</th>
            {dates.map(date => (
              <th key={date}>{date.slice(5)}</th>
            ))}
            <th>❌</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, index) => (
            <tr key={index}>
              <td>{habit.name}</td>
              {dates.map(date => (
                <td key={date}>
                  <input
                    type="checkbox"
                    checked={habit.data ? !!habit.data[date] : false}
                    onChange={() => toggleHabit(index, date)}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => deleteHabit(index)} className="delete-btn">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HabitTable;
