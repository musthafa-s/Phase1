import React, { useState } from 'react';

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '20px auto',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const listItemStyle = {
  marginBottom: '20px',
  padding: '15px',
  backgroundColor: 'grey',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '10px',
  width: '100%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  color: 'blue',
  marginBottom: '10px',
};

const Task4 = () => {
  const [teams, setTeams] = useState([
    {
      team: 'Mumbai Indians',
      captain: 'Hardik Pandya',
      jerseyColor: 'Blue',
    },
    {
      team: 'Chennai Super Kings',
      captain: 'Ruturaj',
      jerseyColor: 'Yellow',
    },
    {
      team: 'Royal Challengers Bengaluru',
      captain: 'Rajat Patidar',
      jerseyColor: 'Red',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedTeams = teams.map((team, i) =>
      i === index ? { ...team, [field]: value } : team
    );
    setTeams(updatedTeams);
  };

  return (
    <div style={containerStyle}>
      <ul style={listStyle}>
        {teams.map((team, index) => (
          <li key={index} style={listItemStyle}>
            <p style={paragraphStyle}>My Favorite Team: {team.team}</p>
            <input
              type="text"
              value={team.team}
              onChange={(e) => handleChange(index, 'team', e.target.value)}
              style={inputStyle}
            />
            <input
              type="text"
              value={team.captain}
              onChange={(e) => handleChange(index, 'captain', e.target.value)}
              style={inputStyle}
            />
            <input
              type="text"
              value={team.jerseyColor}
              onChange={(e) => handleChange(index, 'jerseyColor', e.target.value)}
              style={inputStyle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task4;