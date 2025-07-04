import React, { useState } from 'react';
import '../styles/sidebar.css';

function Sidebar() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim() !== '' && age.trim() !== '') {
      setSubmitted(true);
    }
  };

  return (
    <div className="sidebar">
      <h2>👤 Profile</h2>

      {!submitted ? (
        <>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br /><br />

          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          /><br /><br />

          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
        </>
      )}
    </div>
  );
}

export default Sidebar;
